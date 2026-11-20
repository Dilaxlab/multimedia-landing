import crypto from 'crypto';
import type { NextRequest } from 'next/server';
import { AuthUser } from '@/types/auth';

const SERVER_SECRET =
  process.env.ARCHIVE_AUTH_SECRET ||
  'heritage-archive-master-v5-dev-secret-change-in-prod';

export function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(password, salt, 32).toString('hex');
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, stored: string): boolean {
  const [salt, keyHex] = stored.split(':');
  if (!salt || !keyHex) return false;
  try {
    const derived = crypto.scryptSync(password, salt, 32);
    const keyBuf = Buffer.from(keyHex, 'hex');
    if (derived.length !== keyBuf.length) return false;
    return crypto.timingSafeEqual(derived, keyBuf);
  } catch {
    return false;
  }
}

function toBase64Url(input: string): string {
  return Buffer.from(input, 'utf8').toString('base64url');
}

function fromBase64Url(input: string): string {
  return Buffer.from(input, 'base64url').toString('utf8');
}

function signHmac(data: string): string {
  return crypto.createHmac('sha256', SERVER_SECRET).update(data).digest('base64url');
}

export interface AuthTokenClaims {
  userId: number;
  email: string;
  exp: number;
  jti: string;
}

export function createSanctumToken(user: Pick<AuthUser, 'id' | 'email'>, ttlSeconds = 60 * 60 * 24 * 7): string {
  const claims: AuthTokenClaims = {
    userId: user.id,
    email: user.email,
    exp: Math.floor(Date.now() / 1000) + ttlSeconds,
    jti: crypto.randomUUID(),
  };
  const encoded = toBase64Url(JSON.stringify(claims));
  const sig = signHmac(encoded);
  return `${encoded}.${sig}`;
}

export function verifySanctumToken(token: string | null | undefined): AuthTokenClaims | null {
  if (!token || !token.includes('.')) return null;
  const [encoded, sig] = token.split('.');
  if (!encoded || !sig) return null;

  const expected = signHmac(encoded);
  try {
    const sigBuf = Buffer.from(sig, 'utf8');
    const expBuf = Buffer.from(expected, 'utf8');
    if (sigBuf.length !== expBuf.length || !crypto.timingSafeEqual(sigBuf, expBuf)) {
      return null;
    }
    const claims = JSON.parse(fromBase64Url(encoded)) as AuthTokenClaims;
    if (!claims?.userId || !claims.exp || claims.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }
    return claims;
  } catch {
    return null;
  }
}

export function extractBearerFromRequest(request: Request | NextRequest): string | null {
  const auth = request.headers.get('authorization');
  if (auth && auth.toLowerCase().startsWith('bearer ')) {
    return auth.slice(7).trim();
  }
  const cookieHeader = request.headers.get('cookie') || '';
  const match = cookieHeader
    .split(';')
    .map((c) => c.trim())
    .find((c) => c.startsWith('ha_sanctum_token='));
  if (match) {
    try {
      return decodeURIComponent(match.split('=')[1] || '');
    } catch {
      return null;
    }
  }
  return null;
}

export interface SignedMediaClaims {
  mediaId: string;
  userId: number;
  targetPath: string;
  exp: number;
}

export function createSignedMediaToken(
  claims: Omit<SignedMediaClaims, 'exp'>,
  ttlSeconds = 900
): string {
  const full: SignedMediaClaims = {
    ...claims,
    exp: Math.floor(Date.now() / 1000) + ttlSeconds,
  };
  const encoded = toBase64Url(JSON.stringify(full));
  return `${encoded}.${signHmac(encoded)}`;
}

export function verifySignedMediaToken(token: string | null): SignedMediaClaims | null {
  if (!token || !token.includes('.')) return null;
  const [encoded, sig] = token.split('.');
  if (!encoded || !sig) return null;
  const expected = signHmac(encoded);
  try {
    const a = Buffer.from(sig, 'utf8');
    const b = Buffer.from(expected, 'utf8');
    if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
    const claims = JSON.parse(fromBase64Url(encoded)) as SignedMediaClaims;
    if (!claims?.mediaId || !claims.exp || claims.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }
    return claims;
  } catch {
    return null;
  }
}
