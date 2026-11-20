'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Lock, ShieldAlert } from 'lucide-react';
import { ApiError } from '@/services/api';

interface AuthUnlockGateProps {
  title?: string;
  description?: string;
  nextPath?: string;
  error?: unknown;
  compact?: boolean;
}

export default function AuthUnlockGate({
  title = 'Authenticated Portal Access Required',
  description = 'Sign in with your Heritage Archive account to unlock archival inventions, 3D specimens, patent monographs, and 15-minute signed media streams.',
  nextPath,
  error,
  compact = false,
}: AuthUnlockGateProps) {
  const apiErr = error instanceof ApiError ? error : null;
  const isForbidden = apiErr?.code === 'FORBIDDEN';
  const isNetwork = apiErr?.code === 'NETWORK_ERROR' || apiErr?.code === 'CONFIG_ERROR';

  const loginHref = nextPath
    ? `/login?next=${encodeURIComponent(nextPath)}`
    : '/login';

  return (
    <div
      className={`border border-outline-variant/45 dark:border-white/15 bg-surface-container-lowest dark:bg-[#0e0e12] ${
        compact ? 'p-5 sm:p-6' : 'p-8 sm:p-12 max-w-2xl mx-auto my-12'
      }`}
    >
      <div className="flex items-start gap-3.5">
        <div className="w-10 h-10 border border-[#8c5d12]/40 dark:border-[#d4af37]/40 bg-[#8c5d12]/10 dark:bg-[#d4af37]/10 flex items-center justify-center shrink-0 text-[#8c5d12] dark:text-[#d4af37]">
          {isForbidden ? (
            <ShieldAlert className="w-5 h-5" />
          ) : (
            <Lock className="w-5 h-5" />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="text-xs font-mono uppercase tracking-wider text-[#8c5d12] dark:text-[#d4af37]">
            {isForbidden
              ? 'Insufficient Clearance · 403'
              : isNetwork
                ? 'Archive Backend Unavailable'
                : 'Auth Unlock Gate · Sanctum RBAC'}
          </div>
          <h2 className="mt-1 font-serif text-xl sm:text-2xl font-semibold text-on-surface dark:text-white">
            {isForbidden ? 'Clearance Restricted' : title}
          </h2>
          <p className="mt-2 text-sm text-on-surface-variant dark:text-neutral-300 leading-relaxed">
            {isForbidden
              ? apiErr?.message ||
                'Your assigned role does not grant clearance to inspect this restricted artifact or section.'
              : isNetwork
                ? apiErr?.message ||
                  'Connect to your Heritage Archive Laravel backend API to verify credentials and unlock archival records.'
                : description}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            {!isForbidden && (
              <Link
                href={loginHref}
                className="inline-flex items-center gap-2 min-h-[42px] px-5 py-2.5 bg-on-surface text-surface dark:bg-[#f5f3ee] dark:text-[#111114] text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <span>Sign In to Unlock</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
            <Link
              href="/"
              className="inline-flex items-center min-h-[42px] px-4 py-2.5 border border-outline-variant/50 dark:border-white/20 text-xs sm:text-sm font-medium text-on-surface dark:text-neutral-200 hover:border-[#8c5d12] dark:hover:border-[#d4af37] transition-colors"
            >
              Return to Public Teaser
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
