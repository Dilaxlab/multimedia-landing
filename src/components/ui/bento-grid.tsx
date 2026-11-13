'use client';

import React, { type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface BentoGridProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  className?: string;
}

export interface BentoGridItemProps extends Omit<ComponentPropsWithoutRef<'div'>, 'title'> {
  className?: string;
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}

export interface BentoCardProps extends ComponentPropsWithoutRef<'div'> {
  name: string;
  className?: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
  href?: string;
  cta?: string;
  era?: string;
  emoji?: string;
  specimenCount?: number;
  isActive?: boolean;
  onSelect?: () => void;
}

export const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        'grid w-full grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-[22rem] sm:auto-rows-[24rem]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  subtitle,
  description,
  header,
  icon,
  ...props
}: BentoGridItemProps) => {
  return (
    <div
      className={cn(
        'row-span-1 rounded-2xl sm:rounded-3xl group/bento hover:shadow-xl transition-all duration-300 p-4 sm:p-5 dark:bg-[#0e0e12] bg-white border dark:border-white/10 border-neutral-200/80 shadow-sm flex flex-col justify-between relative overflow-hidden hover:border-amber-400/50 hover:shadow-[0_8px_30px_-5px_rgba(251,191,36,0.15)] h-full',
        className
      )}
      {...props}
    >
      {/* Header Container - exactly uniform height across all cards */}
      <div className="w-full h-44 sm:h-48 flex overflow-hidden rounded-2xl mb-3.5 shrink-0">
        {header}
      </div>

      {/* Bottom Text Area - rigidly aligned across all columns */}
      <div className="flex flex-col flex-1 justify-between group-hover/bento:translate-x-1 transition-transform duration-200">
        <div>
          {/* Icon & Subtitle Badge Row */}
          <div className="flex items-center gap-2 mb-1.5 min-h-[1.25rem]">
            {icon && <div className="shrink-0">{icon}</div>}
            {subtitle && (
              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-amber-500 dark:text-amber-400 truncate">
                {subtitle}
              </span>
            )}
          </div>

          {/* Title - exactly 1 line */}
          <h3
            className="font-serif font-bold text-neutral-900 dark:text-neutral-100 text-base sm:text-lg leading-snug line-clamp-1 mb-1"
            title={typeof title === 'string' ? title : undefined}
          >
            {title}
          </h3>

          {/* Description - clean 2 lines */}
          <p className="font-sans text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta = 'Select Category',
  era,
  emoji,
  specimenCount = 5,
  isActive = false,
  onSelect,
  ...props
}: BentoCardProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onSelect) {
      e.preventDefault();
      onSelect();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === 'Enter' || e.key === ' ') && onSelect) {
      e.preventDefault();
      onSelect();
    }
  };

  return (
    <div
      key={name}
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={cn(
        'group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl border transition-all duration-500 cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-primary',
        // Dark museum card base styles
        'bg-surface-container-low/90 hover:bg-surface-container-high/90 backdrop-blur-md',
        // Default border
        'border-outline-variant/30 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10',
        // Active discipline style
        isActive &&
          'border-primary bg-primary/10 ring-2 ring-primary shadow-2xl shadow-primary/20 scale-[1.01]',
        className
      )}
      {...props}
    >
      {/* Background Animated Visual Canvas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {background}
        {/* Archival Museum Vignette Overlay (Dark bottom gradient for text contrast) */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/75 to-transparent transition-opacity duration-500 group-hover:opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest/80 via-transparent to-transparent" />
      </div>

      {/* Top Bar: Icon, Era Badge, Active Ping */}
      <div className="relative z-10 flex items-center justify-between p-4 sm:p-5 pb-0">
        <div className="flex items-center gap-2">
          <div
            className={cn(
              'w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-300 border shadow-inner',
              isActive
                ? 'bg-primary text-neutral-950 border-primary shadow-primary/30'
                : 'bg-surface-container border-outline-variant/40 text-primary group-hover:bg-primary/20 group-hover:border-primary/40'
            )}
          >
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
          </div>

          {emoji && <span className="text-base sm:text-lg">{emoji}</span>}
        </div>

        <div className="flex items-center gap-2">
          {era && (
            <span className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-full bg-surface-container/80 border border-outline-variant/30 text-on-surface-variant font-medium">
              {era}
            </span>
          )}

          {isActive && (
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary text-neutral-950 text-[10px] font-mono font-bold tracking-wider shadow-md">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-950 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-neutral-950"></span>
              </span>
              ACTIVE
            </span>
          )}
        </div>
      </div>

      {/* Center Body: Title & Description (Magic UI slide up on hover) */}
      <div className="pointer-events-none relative z-10 flex transform-gpu flex-col gap-1 p-4 sm:p-5 pt-2 transition-all duration-300 group-hover:-translate-y-4">
        <h3
          className={cn(
            'font-serif text-base sm:text-lg font-bold leading-snug line-clamp-2 transition-colors duration-300',
            isActive ? 'text-primary font-bold' : 'text-on-surface group-hover:text-primary'
          )}
        >
          {name}
        </h3>

        <p className="text-[11px] sm:text-xs text-on-surface-variant line-clamp-2 font-sans font-light leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom Footer: Specimen Count & Action CTA (Magic UI slide in on hover) */}
      <div className="relative z-10 flex items-center justify-between p-4 sm:p-5 pt-0 border-t border-outline-variant/15 mt-auto">
        <span
          className={cn(
            'text-[10px] sm:text-[11px] font-mono transition-colors',
            isActive ? 'text-primary font-bold' : 'text-on-surface-variant'
          )}
        >
          {isActive ? 'Active Archival Wing' : `${specimenCount} Specimens Ready`}
        </span>

        {/* Hover CTA Indicator */}
        <div className="flex items-center gap-1 text-[11px] font-mono text-primary font-semibold">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:inline">
            {isActive ? 'Current Wing' : cta}
          </span>
          <ChevronRight
            className={cn(
              'w-3.5 h-3.5 transition-transform duration-300',
              isActive ? 'translate-x-1 text-primary' : 'text-on-surface-variant group-hover:text-primary group-hover:translate-x-1'
            )}
          />
        </div>
      </div>

      {/* Subtle hover shimmer border overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl transition-all duration-300 group-hover:bg-primary/[0.03]" />
    </div>
  );
};
