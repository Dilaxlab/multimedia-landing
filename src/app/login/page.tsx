'use client';

import React, { Suspense, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, KeyRound, Lock, ShieldCheck } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { ApiError, getApiBaseUrl } from '@/services/api';
import { loginSchema } from '@/services/authService';

const LOCAL_TEST_PROFILES = [
  { role: 'Super Admin', email: 'admin@heritagearchive.org', pass: 'Admin@123', scope: 'Full RBAC & CMS' },
  { role: 'Content Curator', email: 'curator@heritagearchive.org', pass: 'Curator@123', scope: 'Assets, 3D & Media' },
  { role: 'Viewer', email: 'viewer@heritagearchive.org', pass: 'Viewer@123', scope: 'Public Portal + 900s Media' },
];

function LoginFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login, isAuthenticated, canAccessAdmin } = useAuth();

  const nextUrl = searchParams.get('next') || '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const parsed = loginSchema.safeParse({ email, password });
    if (!parsed.success) {
      setErrorMessage(parsed.error.issues[0]?.message || 'Check your credentials.');
      return;
    }

    setSubmitting(true);
    try {
      const signedInUser = await login(email, password, remember);
      const roleNames = (signedInUser.roles || []).map((r) =>
        typeof r === 'string' ? r : r.name
      );
      const isStaff =
        signedInUser.clearance_level === 'admin' ||
        signedInUser.clearance_level === 'restricted_curator' ||
        roleNames.some((r) =>
          ['Content Curator', 'Admin', 'Super Admin'].includes(r)
        );

      if (nextUrl.startsWith('/admin') && !isStaff) {
        router.replace('/');
      } else {
        router.replace(nextUrl);
      }
    } catch (err) {
      if (err instanceof ApiError) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage('Authentication failed. Verify API connectivity and credentials.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-surface dark:bg-[#09090b] text-on-surface flex flex-col justify-between p-4 sm:p-8">
      <div className="max-w-md w-full mx-auto pt-4 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-on-surface-variant dark:text-neutral-400 hover:text-on-surface dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Archive</span>
        </Link>
        <span className="font-mono text-[11px] uppercase tracking-wider text-[#8c5d12] dark:text-[#d4af37]">
          Member &amp; Curator Access
        </span>
      </div>

      <div className="max-w-md w-full mx-auto my-auto py-8">
        <div className="border border-outline-variant/45 dark:border-white/15 bg-surface-container-lowest dark:bg-[#111114] p-6 sm:p-8">
          <div className="w-10 h-10 border border-[#8c5d12]/40 dark:border-[#d4af37]/40 bg-[#8c5d12]/10 dark:bg-[#d4af37]/10 flex items-center justify-center text-[#8c5d12] dark:text-[#d4af37] mb-5">
            <Lock className="w-5 h-5" />
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-on-surface dark:text-white">
            Sign in to Heritage Archive
          </h1>
          <p className="mt-2 text-sm text-on-surface-variant dark:text-neutral-300 leading-relaxed">
            Access full 10×5 thematic dossiers, interactive 3D patent models, illustrated books, and licensed museum media assigned to your account.
          </p>

          {isAuthenticated && (
            <div className="mt-4 p-3 border border-[#8c5d12]/35 dark:border-[#d4af37]/35 bg-[#8c5d12]/10 dark:bg-[#d4af37]/10 text-xs flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1.5 font-medium text-on-surface dark:text-white">
                <ShieldCheck className="w-4 h-4 text-[#8c5d12] dark:text-[#d4af37]" />
                Active session detected
              </span>
              <Link
                href={canAccessAdmin ? '/admin' : '/'}
                className="underline font-mono text-[#8c5d12] dark:text-[#d4af37]"
              >
                Continue →
              </Link>
            </div>
          )}

          {errorMessage && (
            <div
              role="alert"
              className="mt-5 p-3.5 border border-red-500/40 bg-red-500/10 text-xs sm:text-sm text-red-700 dark:text-red-300"
            >
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="login-email"
                className="block text-xs font-mono uppercase tracking-wider text-on-surface-variant dark:text-neutral-400 mb-1.5"
              >
                Institutional Email
              </label>
              <input
                id="login-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="curator@heritagearchive.org"
                className="w-full min-h-[44px] px-3.5 py-2 bg-surface dark:bg-[#09090b] border border-outline-variant/50 dark:border-white/15 focus:border-[#8c5d12] dark:focus:border-[#d4af37] text-sm text-on-surface dark:text-white focus:outline-none"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="login-password"
                  className="block text-xs font-mono uppercase tracking-wider text-on-surface-variant dark:text-neutral-400"
                >
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs text-[#8c5d12] dark:text-[#d4af37] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                id="login-password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full min-h-[44px] px-3.5 py-2 bg-surface dark:bg-[#09090b] border border-outline-variant/50 dark:border-white/15 focus:border-[#8c5d12] dark:focus:border-[#d4af37] text-sm text-on-surface dark:text-white focus:outline-none"
              />
            </div>

            <label className="flex items-center gap-2 text-xs text-on-surface-variant dark:text-neutral-300 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 accent-[#8c5d12]"
              />
              <span>Keep Sanctum session active on this device</span>
            </label>

            <button
              type="submit"
              disabled={submitting}
              className="w-full min-h-[44px] px-5 py-2.5 bg-on-surface text-surface dark:bg-[#f5f3ee] dark:text-[#111114] text-sm font-medium inline-flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-50 transition-opacity cursor-pointer"
            >
              <KeyRound className="w-4 h-4" />
              <span>{submitting ? 'Verifying Sanctum Token...' : 'Sign In & Unlock Archive'}</span>
            </button>
          </form>

         
        </div>
      </div>

      <footer className="max-w-md w-full mx-auto text-center text-[11px] font-mono text-on-surface-variant dark:text-neutral-500 pb-2">
        Master v5 RBAC · Viewer · Content Curator · Admin · Super Admin
      </footer>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-surface dark:bg-[#09090b] font-mono text-xs text-on-surface-variant">
          Loading authentication gate...
        </div>
      }
    >
      <LoginFormContent />
    </Suspense>
  );
}
