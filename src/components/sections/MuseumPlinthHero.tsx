'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowDown, ArrowRight } from 'lucide-react';

export interface PlinthFeaturedAsset {
  id: string;
  title: string;
  year?: string;
  image?: string;
}

export interface MuseumPlinthHeroProps {
  /** Theme slug used to load /images/themes/<themeSlug>.jpg */
  themeSlug: string;
  /** Retained for caller compatibility */
  backLabel?: string;
  backFallbackHref?: string;
  eyebrow?: string;
  /** Concise meta summary line above title (e.g. Theme 03 · 5 Categories · 18 Inventions) */
  classificationTag?: string;
  /** Main serif display title */
  title: string;
  /** Concise plain-language description */
  description: string;
  /** Optional archival quote (used on Category pages) */
  quote?: string;
  /** Primary action link */
  primaryCta: {
    label: string;
    href: string;
  };
  /** Secondary outlined action link */
  secondaryCta: {
    label: string;
    href: string;
  };
  /** Optional featured specimen for Category pages */
  featuredAsset?: PlinthFeaturedAsset;
  /** Optional caption summary shown beneath the gallery image */
  badgeText?: string;
}

export function MuseumPlinthHero({
  themeSlug,
  classificationTag,
  title,
  description,
  quote,
  primaryCta,
  secondaryCta,
  featuredAsset,
  badgeText,
}: MuseumPlinthHeroProps) {
  const dioramaSrc = `/images/themes/${themeSlug}.jpg`;

  return (
    <section
      id="overview"
      className="scroll-mt-24 w-full border-b border-outline-variant/40 dark:border-white/10 bg-surface dark:bg-[#09090b] text-on-surface dark:text-[#f5f3ee] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Clear Hierarchy & Immediate Purpose */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {classificationTag && (
              <p className="text-xs sm:text-sm font-medium text-[#8c5d12] dark:text-[#d4af37] mb-3">
                {classificationTag}
              </p>
            )}

            <h1 className="font-serif text-[clamp(28px,4vw,48px)] font-semibold tracking-[-0.02em] leading-[1.1] text-on-surface dark:text-white [text-wrap:balance]">
              {title}
            </h1>

            <p className="mt-4 text-base leading-[1.6] text-on-surface-variant dark:text-neutral-300 max-w-[60ch]">
              {description}
            </p>

            {quote && (
              <blockquote className="mt-4 border-l-2 border-[#8c5d12]/60 dark:border-[#d4af37]/60 pl-4 py-0.5 text-sm italic text-on-surface-variant dark:text-neutral-400 max-w-[56ch]">
                &ldquo;{quote}&rdquo;
              </blockquote>
            )}

            <div className="mt-7 w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 bg-on-surface text-surface dark:bg-[#f5f3ee] dark:text-[#111114] text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <span>{primaryCta.label}</span>
                <ArrowDown className="w-4 h-4 shrink-0" />
              </Link>

              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 border border-outline-variant/60 dark:border-white/20 hover:border-on-surface/50 dark:hover:border-white/40 text-sm font-medium text-on-surface dark:text-neutral-200 transition-colors"
              >
                <span>{secondaryCta.label}</span>
              </Link>
            </div>
          </div>

          {/* Right Column (Image First on Mobile): Unobscured Theme Gallery Plate */}
          <div className="order-first lg:order-last lg:col-span-6 border border-outline-variant/40 dark:border-white/10 bg-surface-container-lowest dark:bg-[#0b0b0e] overflow-hidden">
            <div className="aspect-[16/9] sm:aspect-[16/10] w-full overflow-hidden bg-neutral-200 dark:bg-neutral-900">
              <img
                src={dioramaSrc}
                alt={`${title} exhibition wing`}
                className="w-full h-full object-cover"
              />
            </div>

            {featuredAsset ? (
              <Link
                href={`/inventions/${featuredAsset.id}`}
                className="group flex items-center justify-between gap-3 px-4 sm:px-5 py-3 border-t border-outline-variant/30 dark:border-white/10 hover:bg-surface-container-low dark:hover:bg-white/[0.03] transition-colors"
              >
                <div className="min-w-0 text-xs sm:text-sm">
                  <span className="font-mono text-xs text-[#8c5d12] dark:text-[#d4af37] mr-2">
                    Featured Specimen{featuredAsset.year ? ` (${featuredAsset.year})` : ''}:
                  </span>
                  <span className="font-serif font-medium text-on-surface dark:text-white group-hover:underline">
                    {featuredAsset.title}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-on-surface-variant dark:text-neutral-400 shrink-0 transition-transform group-hover:translate-x-0.5" />
              </Link>
            ) : badgeText ? (
              <div className="px-4 sm:px-5 py-3 border-t border-outline-variant/30 dark:border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-on-surface-variant dark:text-neutral-400">
                <span>{badgeText}</span>
                <span>Video · 3D · Book · 2D · Story</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
