import crypto from 'crypto';
import { NextResponse } from 'next/server';
import {
  createSanctumToken,
  hashPassword,
  verifyPassword,
} from '@/server/cryptoAuth';
import {
  appendAuditLog,
  getDb,
  hydratePublicUser,
  persistDb,
  requireAuth,
} from '@/server/localArchiveStore';
import {
  forgotPasswordSchema,
  loginSchema,
  resetPasswordSchema,
} from '@/services/authService';

interface RouteContext {
  params: Promise<{ action: string }>;
}

export async function GET(_request: Request, context: RouteContext) {
  const { action } = await context.params;
  if (action === 'me') {
    const auth = requireAuth(_request);
    if (auth instanceof NextResponse) return auth;
    return NextResponse.json(auth.user);
  }
  return NextResponse.json({ message: 'Not found' }, { status: 404 });
}

export async function POST(request: Request, context: RouteContext) {
  const { action } = await context.params;
  const db = getDb();

  if (action === 'login') {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ message: 'Invalid JSON body' }, { status: 400 });
    }

    const parsed = loginSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          message: parsed.error.issues[0]?.message || 'Validation error',
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 422 }
      );
    }

    const emailLower = parsed.data.email.toLowerCase();
    const userRecord = db.users.find(
      (u) => u.email.toLowerCase() === emailLower
    );

    if (
      !userRecord ||
      !userRecord.is_active ||
      !verifyPassword(parsed.data.password, userRecord.password_hash)
    ) {
      return NextResponse.json(
        { message: 'Invalid institutional email or password.' },
        { status: 401 }
      );
    }

    userRecord.last_login_at = new Date().toISOString();
    const publicUser = hydratePublicUser(db, userRecord);
    const token = createSanctumToken(publicUser);

    appendAuditLog(db, {
      log_name: 'auth',
      description: `${publicUser.email} signed in (${publicUser.clearance_level}).`,
      subject_type: 'User',
      subject_id: String(publicUser.id),
      event: 'LOGIN',
      causer: publicUser,
    });
    persistDb(db);

    return NextResponse.json({
      token,
      token_type: 'Bearer',
      user: publicUser,
    });
  }

  if (action === 'logout') {
    const auth = requireAuth(request);
    if (auth instanceof NextResponse) {
      return NextResponse.json({ ok: true });
    }
    db.revoked_token_jtis.push(auth.jti);
    appendAuditLog(db, {
      log_name: 'auth',
      description: `${auth.user.email} signed out.`,
      subject_type: 'User',
      subject_id: String(auth.user.id),
      event: 'LOGOUT',
      causer: auth.user,
    });
    persistDb(db);
    return NextResponse.json({ ok: true });
  }

  if (action === 'forgot-password') {
    const body = await request.json().catch(() => null);
    const parsed = forgotPasswordSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { message: parsed.error.issues[0]?.message || 'Invalid email' },
        { status: 422 }
      );
    }
    const emailLower = parsed.data.email.toLowerCase();
    const userRecord = db.users.find((u) => u.email.toLowerCase() === emailLower);
    let devTokenHint = '';
    if (userRecord) {
      const resetToken = crypto.randomBytes(4).toString('hex').toUpperCase();
      db.reset_tokens[emailLower] = {
        token: resetToken,
        expires_at: Date.now() + 15 * 60 * 1000,
      };
      persistDb(db);
      devTokenHint = ` (Local dev reset token: ${resetToken})`;
    }
    return NextResponse.json({
      message: `If an account exists for ${emailLower}, a password reset token has been generated.${devTokenHint}`,
    });
  }

  if (action === 'reset-password') {
    const body = await request.json().catch(() => null);
    const parsed = resetPasswordSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { message: parsed.error.issues[0]?.message || 'Invalid reset request' },
        { status: 422 }
      );
    }
    const emailLower = parsed.data.email.toLowerCase();
    const stored = db.reset_tokens[emailLower];
    if (!stored || stored.expires_at < Date.now() || stored.token !== parsed.data.token.trim()) {
      return NextResponse.json(
        { message: 'Invalid or expired reset token.' },
        { status: 422 }
      );
    }
    const userRecord = db.users.find((u) => u.email.toLowerCase() === emailLower);
    if (!userRecord) {
      return NextResponse.json({ message: 'User not found.' }, { status: 404 });
    }
    userRecord.password_hash = hashPassword(parsed.data.password);
    delete db.reset_tokens[emailLower];
    persistDb(db);
    return NextResponse.json({
      message: 'Password updated cleanly. You may now sign in.',
    });
  }

  return NextResponse.json({ message: 'Unknown auth action' }, { status: 404 });
}
