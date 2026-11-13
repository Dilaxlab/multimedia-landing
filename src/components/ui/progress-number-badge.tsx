'use client';

import React from 'react';

interface ProgressNumberBadgeProps {
  number: string;
  isActive: boolean;
  progress: number; // 0 to 100
  size?: number; // size in pixels, default 38
  className?: string;
}

export function ProgressNumberBadge({
  number,
  isActive,
  progress,
  size = 38,
  className = '',
}: ProgressNumberBadgeProps) {
  const strokeWidth = 2.5;
  const radius = (size - strokeWidth * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const clampedProgress = Math.min(100, Math.max(0, progress));
  const strokeDashoffset = circumference - (clampedProgress / 100) * circumference;

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 rounded-full ${className}`}
      style={{ width: size, height: size }}
    >
      {/* SVG Circular Track & Progress Stroke */}
      <svg
        className="w-full h-full -rotate-90 transform"
        viewBox={`0 0 ${size} ${size}`}
      >
        {/* Background track circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          className="stroke-neutral-300/80 dark:stroke-white/15"
          strokeWidth={strokeWidth}
          fill="transparent"
        />

        {/* Animated active progress stroke (Ondo Finance style) */}
        {isActive && (
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            className="stroke-amber-500 dark:stroke-amber-400 transition-[stroke-dashoffset] duration-75 ease-linear"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
          />
        )}
      </svg>

      {/* Centered Number */}
      <span
        className={`absolute font-mono text-[11px] sm:text-xs tracking-tight transition-all duration-300 ${
          isActive
            ? 'font-bold text-amber-600 dark:text-amber-400 scale-105'
            : 'font-semibold text-neutral-500 dark:text-neutral-400'
        }`}
      >
        {number}
      </span>
    </div>
  );
}

export default ProgressNumberBadge;
