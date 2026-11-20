'use client';

import React, { Suspense, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, CheckCircle2, Mail } from 'lucide-react';
import { ApiError } from '@/services/api';
import {
  authService,
  forgotPasswordSchema,
  resetPasswordSchema,
} from '@/services/authService';

function ForgotPasswordContent() {
  const searchParams = useSearchParams();
  const initialToken = searchParams.get('token') || '';
  const initialEmail = searchParams.get('email') || '';

  const [mode, setMode] = useState<'request' | 'reset'>(
    initialToken ? 'reset' : 'request'
  );
  const [email, setEmail] = useState(initialEmail);
  const [token, setToken] = useState(initialToken);
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleRequestSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    const parsed = forgotPasswordSchema.safeParse({ email });
    if (!parsed.success) {
      setErrorMessage(parsed.error.issues[0]?.message || 'Enter a valid email.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await authService.forgotPassword({ email });
      setSuccessMessage(
        res?.message ||
          'If an account matches this email, password reset instructions have been sent.'
      );
      setMode('reset');
    } catch (err) {
      setErrorMessage(
        err instanceof ApiError
          ? err.message
          : 'Unable to send reset request right now.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleResetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    const parsed = resetPasswordSchema.safeParse({
      email,
      token,
      password,
      password_confirmation: passwordConfirm,
    });
    if (!parsed.success) {
      setErrorMessage(parsed.error.issues[0]?.message || 'Check your inputs.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await authService.resetPassword(parsed.data);
      setSuccessMessage(
        res?.message || 'Password updated cleanly. You may now sign in.'
      );
    } catch (err) {
      setErrorMessage(
        err instanceof ApiError
          ? err.message
          : 'Failed to reset password. Verify token validity.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-surface dark:bg-[#09090b] text-on-surface flex flex-col justify-between p-4 sm:p-8">
      <div className="max-w-md w-full mx-auto pt-4 flex items-center justify-between">
        <Link
          href="/login"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-on-surface-variant dark:text-neutral-400 hover:text-on-surface dark:hover:text-white"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Sign In</span>
        </Link>
        <span className="font-mono text-[11px] uppercase tracking-wider text-[#8c5d12] dark:text-[#d4af37]">
          Credential Recovery
        </span>
      </div>

      <div className="max-w-md w-full mx-auto my-auto py-8">
        <div className="border border-outline-variant/45 dark:border-white/15 bg-surface-container-lowest dark:bg-[#111114] p-6 sm:p-8">
          <div className="w-10 h-10 border border-[#8c5d12]/40 dark:border-[#d4af37]/40 bg-[#8c5d12]/10 dark:bg-[#d4af37]/10 flex items-center justify-center text-[#8c5d12] dark:text-[#d4af37] mb-5">
            <Mail className="w-5 h-5" />
          </div>

          <h1 className="font-serif text-2xl font-semibold text-on-surface dark:text-white">
            {mode === 'request' ? 'Reset Archive Password' : 'Enter New Password'}
          </h1>
          <p className="mt-2 text-sm text-on-surface-variant dark:text-neutral-300 leading-relaxed">
            {mode === 'request'
              ? 'We will dispatch a short-lived token (`password_reset_tokens`) to your institutional email.'
              : 'Provide your reset token and set a strong replacement password.'}
          </p>

          {successMessage && (
            <div className="mt-5 p-3.5 border border-emerald-500/40 bg-emerald-500/10 text-xs sm:text-sm text-emerald-700 dark:text-emerald-300 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{successMessage}</span>
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

          {mode === 'request' ? (
            <form onSubmit={handleRequestSubmit} className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="fp-email"
                  className="block text-xs font-mono uppercase tracking-wider text-on-surface-variant dark:text-neutral-400 mb-1.5"
                >
                  Account Email
                </label>
                <input
                  id="fp-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full min-h-[44px] px-3.5 py-2 bg-surface dark:bg-[#09090b] border border-outline-variant/50 dark:border-white/15 focus:border-[#8c5d12] dark:focus:border-[#d4af37] text-sm text-on-surface dark:text-white focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full min-h-[44px] px-5 py-2.5 bg-on-surface text-surface dark:bg-[#f5f3ee] dark:text-[#111114] text-sm font-medium hover:opacity-90 disabled:opacity-50 cursor-pointer"
              >
                {submitting ? 'Sending Reset Link...' : 'Send Reset Token'}
              </button>

              <button
                type="button"
                onClick={() => setMode('reset')}
                className="w-full text-xs font-mono text-on-surface-variant dark:text-neutral-400 hover:underline pt-1 cursor-pointer"
              >
                Already have a reset token? Enter it here
              </button>
            </form>
          ) : (
            <form onSubmit={handleResetSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-on-surface-variant dark:text-neutral-400 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full min-h-[44px] px-3.5 py-2 bg-surface dark:bg-[#09090b] border border-outline-variant/50 dark:border-white/15 text-sm text-on-surface dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-on-surface-variant dark:text-neutral-400 mb-1.5">
                  Reset Token
                </label>
                <input
                  type="text"
                  required
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  className="w-full min-h-[44px] px-3.5 py-2 bg-surface dark:bg-[#09090b] border border-outline-variant/50 dark:border-white/15 text-sm font-mono text-on-surface dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-on-surface-variant dark:text-neutral-400 mb-1.5">
                  New Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full min-h-[44px] px-3.5 py-2 bg-surface dark:bg-[#09090b] border border-outline-variant/50 dark:border-white/15 text-sm text-on-surface dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-on-surface-variant dark:text-neutral-400 mb-1.5">
                  Confirm Password
                </label>
                <input
                  type="password"
                  required
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  className="w-full min-h-[44px] px-3.5 py-2 bg-surface dark:bg-[#09090b] border border-outline-variant/50 dark:border-white/15 text-sm text-on-surface dark:text-white"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full min-h-[44px] px-5 py-2.5 bg-on-surface text-surface dark:bg-[#f5f3ee] dark:text-[#111114] text-sm font-medium hover:opacity-90 disabled:opacity-50 cursor-pointer"
              >
                {submitting ? 'Updating Password...' : 'Save New Password'}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="h-4" />
    </div>
  );
}

export default function ForgotPasswordPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-surface dark:bg-[#09090b]" />}>
      <ForgotPasswordContent />
    </Suspense>
  );
}
