'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Lock } from 'lucide-react';

export interface FeaturedSpecimen {
  id: string;
  title: string;
  inventor: string;
  year: string;
  patentNumber: string;
  summary: string;
  image: string;
  imageAlt: string;
}

interface TrendingInventionsSectionProps {
  title?: string;
  subtitle?: string;
  specimens?: FeaturedSpecimen[];
  lockedTeaser?: boolean;
  teaserCount?: number;
}

export default function TrendingInventionsSection({
  title = 'Milestone Patent Models',
  subtitle = 'Study landmark inventions that activate multiple thematic collections. Open any specimen to inspect its 2D plate, 3D model, narrated story, illustrated book, and video.',
  specimens = [],
  lockedTeaser = false,
  teaserCount = 4,
}: TrendingInventionsSectionProps) {
  return (
    <section
      id="trending"
      className="scroll-mt-24 w-full bg-surface-container-low/50 dark:bg-[#0b0b0e] border-t border-outline-variant/40 dark:border-white/10 py-12 sm:py-20 px-4 sm:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 sm:pb-8 border-b border-outline-variant/40 dark:border-white/10 mb-8 sm:mb-10">
          <div className="max-w-2xl">
            <h2 className="font-serif text-[clamp(26px,3.2vw,40px)] font-semibold tracking-[-0.02em] leading-[1.15] text-on-surface dark:text-white">
              {title}
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-on-surface-variant dark:text-neutral-300 leading-relaxed">
              {subtitle}
            </p>
          </div>
          <Link
            href={lockedTeaser ? '/login?next=/' : '/#themes'}
            className="min-h-[44px] inline-flex items-center gap-1.5 text-sm font-medium text-[#8c5d12] dark:text-[#d4af37] hover:underline shrink-0"
          >
            <span>
              {lockedTeaser ? 'Sign in to unlock archive' : 'View all by theme'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {lockedTeaser ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {Array.from({ length: Math.max(1, Math.min(8, teaserCount)) }).map((_, idx) => (
              <Link
                key={`teaser-spec-${idx}`}
                href="/login?next=/#trending"
                className="group flex flex-col border border-outline-variant/40 dark:border-white/10 bg-surface dark:bg-[#111114] overflow-hidden hover:border-[#8c5d12]/60 dark:hover:border-[#d4af37]/60 transition-colors"
              >
                <div className="aspect-[16/10] sm:aspect-[4/3] w-full bg-neutral-900 flex flex-col items-center justify-center gap-2 text-neutral-400 border-b border-outline-variant/30 dark:border-white/10">
                  <Lock className="w-5 h-5 text-[#d4af37]" />
                  <span className="text-[11px] font-mono uppercase tracking-wider">
                    Protected Specimen 0{idx + 1}
                  </span>
                </div>
                <div className="p-5 space-y-2.5">
                  <div className="h-3 w-20 bg-outline-variant/30 dark:bg-white/10" />
                  <div className="h-5 w-3/4 bg-outline-variant/40 dark:bg-white/15 blur-[1px]" />
                  <p className="text-xs text-on-surface-variant dark:text-neutral-400 pt-2">
                    Sign in with a Verified Member or Curator account to unlock patent notes and 3D preview.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : specimens.length === 0 ? (
          <div className="p-8 border border-dashed border-outline-variant/45 dark:border-white/15 text-center text-sm text-on-surface-variant dark:text-neutral-400">
            No featured specimens assigned in Landing CMS (`landing_section_items`). Curators can pin specimens from Admin Studio.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {specimens.map((item) => (
              <Link
                key={item.id}
                href={`/inventions/${item.id}`}
                className="group flex flex-col border border-outline-variant/40 dark:border-white/10 bg-surface dark:bg-[#111114] hover:border-[#8c5d12]/60 dark:hover:border-[#d4af37]/60 transition-colors overflow-hidden"
              >
                <div className="aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-neutral-200 dark:bg-neutral-900 border-b border-outline-variant/30 dark:border-white/10">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs font-mono text-on-surface-variant dark:text-neutral-400">
                      <span>{item.year}</span>
                      <span>{item.patentNumber}</span>
                    </div>

                    <h3 className="mt-2 font-serif text-lg font-semibold leading-snug text-on-surface dark:text-white group-hover:text-[#8c5d12] dark:group-hover:text-[#d4af37] transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs font-medium text-on-surface-variant dark:text-neutral-400">
                      {item.inventor}
                    </p>

                    <p className="mt-2.5 text-sm text-on-surface-variant dark:text-neutral-300 leading-relaxed line-clamp-3">
                      {item.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-outline-variant/30 dark:border-white/10 flex items-center justify-between text-xs font-medium text-on-surface dark:text-neutral-200 group-hover:text-[#8c5d12] dark:group-hover:text-[#d4af37] transition-colors">
                    <span>Open 5-format record</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
