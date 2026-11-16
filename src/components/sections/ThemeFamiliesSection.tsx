'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { THEME_FAMILIES } from '@/data/taxonomy';
import MuseumWayfinding from '@/components/common/MuseumWayfinding';

export default function ThemeFamiliesSection() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [mobileOpenIdx, setMobileOpenIdx] = useState<number | null>(0);

  const activeTheme = THEME_FAMILIES[activeIdx] || THEME_FAMILIES[0];
  const activeCover = `/images/themes/${activeTheme.slug}.jpg`;

  return (
    <section
      id="themes"
      className="scroll-mt-24 w-full bg-surface dark:bg-[#050505] border-t border-outline-variant/40 dark:border-white/10 py-12 sm:py-20 px-4 sm:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Clean Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-outline-variant/40 dark:border-white/10 mb-6">
          <div className="max-w-2xl">
            <h2 className="font-serif text-[clamp(26px,3.2vw,40px)] font-semibold tracking-[-0.02em] leading-[1.15] text-on-surface dark:text-white">
              Browse by Subject
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-on-surface-variant dark:text-neutral-300 leading-relaxed">
              The collection is organized like a museum: start with one of 10 broad themes, open any of its 50 categories, and read individual invention records.
            </p>
          </div>
          <p className="text-xs sm:text-sm font-mono text-on-surface-variant dark:text-neutral-400 shrink-0">
            10 Themes · 50 Categories · 90 Inventions
          </p>
        </div>

        {/* Step Indicator */}
        <MuseumWayfinding step={1} />

        {/* Desktop Split: Left 10-Row Directory + Right Sticky Specimen Plate */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-10 items-start">
          {/* Left: 10 Theme Rows */}
          <div className="lg:col-span-6 border border-outline-variant/40 dark:border-white/10 divide-y divide-outline-variant/30 dark:divide-white/10 bg-surface-container-lowest dark:bg-[#0b0b0e]">
            {THEME_FAMILIES.map((theme, idx) => {
              const isSelected = idx === activeIdx;

              return (
                <div
                  key={theme.slug}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onFocus={() => setActiveIdx(idx)}
                  className={`transition-colors border-l-2 ${
                    isSelected
                      ? 'border-l-[#8c5d12] dark:border-l-[#d4af37] bg-surface-container-low dark:bg-white/[0.04]'
                      : 'border-l-transparent hover:bg-surface-container-low/60 dark:hover:bg-white/[0.02]'
                  }`}
                >
                  <Link
                    href={`/themes/${theme.slug}`}
                    className="flex items-center justify-between gap-4 px-5 py-4"
                  >
                    <div className="flex items-baseline gap-3.5 min-w-0">
                      <span
                        className={`font-mono text-xs font-semibold shrink-0 tabular-nums ${
                          isSelected
                            ? 'text-[#8c5d12] dark:text-[#d4af37]'
                            : 'text-on-surface-variant dark:text-neutral-500'
                        }`}
                      >
                        {theme.number}
                      </span>
                      <span
                        className={`font-serif text-lg font-medium truncate ${
                          isSelected
                            ? 'text-on-surface dark:text-white'
                            : 'text-on-surface/90 dark:text-neutral-200'
                        }`}
                      >
                        {theme.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs font-mono text-on-surface-variant dark:text-neutral-400">
                        {theme.categories.length} Categories
                      </span>
                      <ArrowRight
                        className={`w-4 h-4 transition-transform ${
                          isSelected
                            ? 'text-[#8c5d12] dark:text-[#d4af37] translate-x-0.5'
                            : 'text-on-surface-variant/40 dark:text-neutral-600'
                        }`}
                      />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Right: Sticky Specimen Plate with Clean Image & 5 Sub-Category Links */}
          <div className="lg:col-span-6 lg:sticky lg:top-24 border border-outline-variant/40 dark:border-white/10 bg-surface-container-lowest dark:bg-[#0b0b0e] overflow-hidden">
            <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-200 dark:bg-neutral-900 border-b border-outline-variant/30 dark:border-white/10">
              <img
                src={activeCover}
                alt={activeTheme.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="p-6 sm:p-8">
             

              <h3 className="font-serif text-2xl font-semibold text-on-surface dark:text-white tracking-tight">
                {activeTheme.title}
              </h3>

              <p className="mt-2 text-sm text-on-surface-variant dark:text-neutral-300 leading-relaxed">
                {activeTheme.description}
              </p>



              <div className="mt-6 pt-5 border-t border-outline-variant/30 dark:border-white/10">
                <Link
                  href={`/themes/${activeTheme.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-on-surface text-surface dark:bg-[#f5f3ee] dark:text-[#111114] text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <span>Explore {activeTheme.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Clean Accordion */}
        <div className="lg:hidden border border-outline-variant/40 dark:border-white/10 divide-y divide-outline-variant/30 dark:divide-white/10 bg-surface-container-lowest dark:bg-[#0b0b0e]">
          {THEME_FAMILIES.map((theme, idx) => {
            const isOpen = mobileOpenIdx === idx;
            const cover = `/images/themes/${theme.slug}.jpg`;

            return (
              <div key={theme.slug}>
                <button
                  type="button"
                  onClick={() => setMobileOpenIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full min-h-[56px] text-left px-4 py-3.5 flex items-center justify-between gap-3 cursor-pointer"
                >
                  <div className="flex items-baseline gap-3 min-w-0">
                    <span className="font-mono text-xs font-semibold text-[#8c5d12] dark:text-[#d4af37] tabular-nums shrink-0">
                      {theme.number}
                    </span>
                    <span className="font-serif text-base sm:text-lg font-medium leading-snug text-on-surface dark:text-white">
                      {theme.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="hidden xs:inline text-xs text-on-surface-variant dark:text-neutral-400">
                      {theme.categories.length}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-on-surface-variant dark:text-neutral-400 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 pt-1 space-y-4">
                    <div className="aspect-[16/9] w-full overflow-hidden bg-neutral-200 dark:bg-neutral-900 border border-outline-variant/30 dark:border-white/10">
                      <img
                        src={cover}
                        alt={theme.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <p className="text-sm text-on-surface-variant dark:text-neutral-300 leading-relaxed">
                      {theme.description}
                    </p>

                    <ul className="divide-y divide-outline-variant/20 dark:divide-white/5 border-t border-outline-variant/30 dark:border-white/10 pt-2">
                      {theme.categories.map((cat) => (
                        <li key={cat.slug}>
                          <Link
                            href={`/categories/${cat.slug}`}
                            className="flex items-center justify-between gap-2 min-h-[44px] py-2.5 text-sm text-on-surface dark:text-neutral-200 hover:text-[#8c5d12] dark:hover:text-[#d4af37]"
                          >
                            <span className="leading-snug">
                              <span className="font-mono text-xs text-on-surface-variant dark:text-neutral-500 mr-2">
                                {cat.number}
                              </span>
                              {cat.title}
                            </span>
                            <ArrowRight className="w-4 h-4 shrink-0 opacity-60" />
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/themes/${theme.slug}`}
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 bg-on-surface text-surface dark:bg-[#f5f3ee] dark:text-[#111114] text-sm font-medium"
                    >
                      <span>Open Theme Page</span>
                      <ArrowRight className="w-4 h-4" />
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
