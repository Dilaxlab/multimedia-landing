'use client';

import React from 'react';
import { Shield } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

interface WatermarkedMediaFrameProps {
  watermarkEnabled?: boolean;
  watermarkText?: string | null;
  signedExpiresAt?: string | null;
  children: React.ReactNode;
  className?: string;
}

/**
 * Renders authenticated session watermark attribution when `asset_media.watermark_enabled`
 * is active, preserving museum legibility while identifying authorized viewer streams.
 */
export default function WatermarkedMediaFrame({
  watermarkEnabled = true,
  watermarkText,
  signedExpiresAt,
  children,
  className = '',
}: WatermarkedMediaFrameProps) {
  const { user } = useAuth();

  const label =
    watermarkText ||
    (user
      ? `${user.email} · Clear: ${user.clearance_level}`
      : 'Heritage Archive Protected');

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {children}

      {watermarkEnabled && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none select-none absolute bottom-2.5 right-2.5 z-20 inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/65 backdrop-blur-sm border border-white/15 text-[11px] font-mono text-white/85"
          >
            <Shield className="w-3 h-3 text-[#d4af37] shrink-0" />
            <span className="truncate max-w-[220px]">{label}</span>
          </div>

          {signedExpiresAt && (
            <div
              aria-hidden="true"
              className="pointer-events-none select-none absolute top-2.5 left-2.5 z-20 px-2 py-0.5 bg-black/55 border border-white/15 text-[10px] font-mono text-neutral-300"
            >
              900s Signed Stream
            </div>
          )}
        </>
      )}
    </div>
  );
}
