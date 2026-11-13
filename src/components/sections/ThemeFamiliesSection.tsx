'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { THEME_FAMILIES, getAssetsForTheme } from '@/data/taxonomy';
import { MOCK_HISTORICAL_ASSETS } from '@/lib/constants';
import { ArrowRight, ChevronDown } from 'lucide-react';
import MuseumWayfinding from '@/components/common/MuseumWayfinding';

export default function ThemeFamiliesSection() {
  const router = useRouter();
  const [activeIdx, setActiveIdx] = useState(0);
  const [mobileOpenIdx, setMobileOpenIdx] = useState<number | null>(0);

  const activeTheme = THEME_FAMILIES[activeIdx] ?? THEME_FAMILIES[0];
  const activeAssets = getAssetsForTheme(activeTheme, MOCK_HISTORICAL_ASSETS);
  const activeCover = activeAssets[0]?.image;

  return (
    <section
      id="themes"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-16 bg-surface dark:bg-[#050505] border-t border-outline-variant/30 dark:border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 sm:pb-10 border-b border-outline-variant/40 dark:border-white/10">
          <div className="max-w-2xl">
            <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-amber-700 dark:text-amber-400">
              Exhibition Directory • 10 Theme Families
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-on-surface dark:text-white leading-[1.12]">
              Explore the Curatorial Wings
            </h2>
            <p className="mt-3 text-sm sm:text-base text-on-surface-variant dark:text-neutral-400 leading-relaxed">
              Select any Theme Family from the directory to inspect its archival specimen plate, or jump directly into one of its fifty specialized categories.
            </p>
          </div>

          <div className="text-xs font-mono text-on-surface-variant dark:text-neutral-400 shrink-0">
            50 Official Classifications
          </div>
        </div>

        <div className="pt-6 sm:pt-8">
          <MuseumWayfinding step={1} />
        </div>

        {/* ===================================================================
            DESKTOP: SWISS EDITORIAL INDEX + LIVE ARCHIVAL BLUEPRINT DESK
           =================================================================== */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-10 xl:gap-12 items-start">
          {/* LEFT: 10-Row Typographic Directory */}
          <div className="lg:col-span-6 border-t border-b divide-y divide-outline-variant/35 dark:divide-white/[0.08] border-outline-variant/35 dark:border-white/[0.08]">
            {THEME_FAMILIES.map((theme, idx) => {
              const isActive = idx === activeIdx;
              return (
                <div
                  key={theme.slug}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onFocus={() => setActiveIdx(idx)}
                  onClick={() => router.push(`/themes/${theme.slug}`)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      router.push(`/themes/${theme.slug}`);
                    }
                  }}
                  className={`group relative flex items-center justify-between gap-4 min-h-[64px] py-3.5 px-4 cursor-pointer transition-colors duration-200 ${
                    isActive
                      ? 'bg-surface-container-low dark:bg-white/[0.04]'
                      : 'hover:bg-surface-container-lowest dark:hover:bg-white/[0.02]'
                  }`}
                >
                  {/* Hairline left indicator */}
                  <span
                    className={`absolute left-0 top-0 bottom-0 w-[2px] transition-opacity duration-200 ${
                      isActive ? 'bg-amber-600 dark:bg-amber-400 opacity-100' : 'opacity-0'
                    }`}
                  />

                  <div className="min-w-0 flex-1 pr-2">
                    <h3
                      className={`font-serif text-[17px] xl:text-[18px] leading-snug transition-colors ${
                        isActive
                          ? 'font-bold text-on-surface dark:text-white'
                          : 'font-medium text-on-surface-variant dark:text-neutral-300 group-hover:text-on-surface dark:group-hover:text-white'
                      }`}
                    >
                      {theme.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2.5 shrink-0 whitespace-nowrap">
                    <span className="text-[11px] font-mono text-on-surface-variant dark:text-neutral-500 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                      View 5 Categories
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 transition-all duration-200 ${
                        isActive
                          ? 'text-amber-600 dark:text-amber-400 translate-x-0 opacity-100'
                          : 'text-on-surface-variant dark:text-neutral-500 -translate-x-1 opacity-40 group-hover:opacity-100 group-hover:translate-x-0'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Sticky Archival Specimen Plate */}
          <div className="lg:col-span-6 lg:sticky lg:top-24">
            <div className="relative border border-outline-variant/50 dark:border-white/15 bg-surface-container-lowest dark:bg-[#0a0b0f] p-6 xl:p-7">
              {/* Subtle Blueprint Grid Background */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.05]"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }}
              />

              <div className="relative z-10">
                {/* Plate Header */}
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-outline-variant/35 dark:border-white/10 text-[11px] font-mono uppercase tracking-[0.16em] text-on-surface-variant dark:text-neutral-400">
                  <span>Curatorial Specimen Plate</span>
                  <span>{activeAssets.length} Archival Artifacts</span>
                </div>

                {/* Framed Specimen Photograph */}
                <div className="mt-5 relative aspect-[16/9] w-full overflow-hidden border border-outline-variant/40 dark:border-white/10 bg-neutral-900">
                  {activeCover && (
                    <img
                      key={activeTheme.slug}
                      src={activeCover}
                      alt={activeTheme.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white/90">
                    <span className="truncate">{activeAssets[0]?.title}</span>
                    <span className="shrink-0 text-amber-300">{activeAssets[0]?.patentDate}</span>
                  </div>
                </div>

                {/* Theme Title & Editorial Summary */}
                <div className="mt-5">
                  <h3 className="font-serif text-2xl font-bold text-on-surface dark:text-white leading-snug">
                    {activeTheme.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-on-surface-variant dark:text-neutral-300 leading-relaxed">
                    {activeTheme.description}
                  </p>
                </div>

                {/* Primary Wing CTA */}
                <div className="mt-6 pt-5 border-t border-outline-variant/35 dark:border-white/10 flex items-center justify-between gap-4">
                  <Link
                    href={`/themes/${activeTheme.slug}`}
                    className="group inline-flex items-center gap-2.5 px-5 py-2.5 bg-on-surface dark:bg-white text-surface dark:text-neutral-950 hover:bg-amber-600 dark:hover:bg-amber-400 hover:text-white dark:hover:text-neutral-950 text-xs font-mono uppercase tracking-wider font-semibold transition-colors"
                  >
                    <span>View 5 Categories</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  <span className="text-[11px] font-mono text-on-surface-variant dark:text-neutral-500">
                    Click any row to open
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================================
            MOBILE & TABLET: EXPANDABLE EXHIBITION GUIDE
           =================================================================== */}
        <div className="lg:hidden border-t border-b divide-y divide-outline-variant/35 dark:divide-white/[0.08] border-outline-variant/35 dark:border-white/[0.08]">
          {THEME_FAMILIES.map((theme, idx) => {
            const isOpen = mobileOpenIdx === idx;
            const themeAssets = getAssetsForTheme(theme, MOCK_HISTORICAL_ASSETS);
            const cover = themeAssets[0]?.image;

            return (
              <div key={theme.slug} className="py-1">
                <button
                  type="button"
                  onClick={() => setMobileOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-3 py-4 px-1 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-serif text-base sm:text-lg leading-snug ${
                      isOpen
                        ? 'font-bold text-amber-700 dark:text-amber-300'
                        : 'font-medium text-on-surface dark:text-white'
                    }`}
                  >
                    {theme.title}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 text-on-surface-variant dark:text-neutral-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-600 dark:text-amber-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pb-5 pt-1 space-y-4">
                    {cover && (
                      <div className="relative aspect-[16/9] w-full overflow-hidden border border-outline-variant/40 dark:border-white/10 bg-neutral-900">
                        <img
                          src={cover}
                          alt={theme.title}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    )}

                    <p className="text-xs sm:text-sm text-on-surface-variant dark:text-neutral-300 leading-relaxed">
                      {theme.description}
                    </p>

                    <Link
                      href={`/themes/${theme.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-on-surface dark:bg-white text-surface dark:text-neutral-950 text-xs font-mono uppercase tracking-wider font-semibold"
                    >
                      <span>View 5 Categories</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
