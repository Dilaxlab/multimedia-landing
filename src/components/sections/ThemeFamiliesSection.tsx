'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Lock } from 'lucide-react';
import { THEME_FAMILIES } from '@/data/taxonomy';
import { ThemeRecord } from '@/types/taxonomy';
import MuseumWayfinding from '@/components/common/MuseumWayfinding';

interface ThemeDirectoryItem {
  number: string;
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  categories: Array<{
    number: string;
    slug: string;
    title: string;
    quote?: string;
  }>;
}

interface ThemeFamiliesSectionProps {
  title?: string;
  subtitle?: string;
  liveThemes?: ThemeRecord[];
  lockedTeaser?: boolean;
}

export default function ThemeFamiliesSection({
  title = '10 Theme Families. 50 Thematic Categories.',
  subtitle = 'Built as a flexible many-to-many classification system. Start with any theme family, explore its five curated categories and promotional taglines, and inspect linked patent records.',
  liveThemes,
  lockedTeaser = false,
}: ThemeFamiliesSectionProps) {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [mobileOpenIdx, setMobileOpenIdx] = useState<number | null>(0);

  const items: ThemeDirectoryItem[] = useMemo(() => {
    if (liveThemes && liveThemes.length > 0) {
      return [...liveThemes]
        .sort((a, b) => a.theme_slot - b.theme_slot)
        .map((t) => ({
          number: String(t.theme_slot).padStart(2, '0'),
          slug: t.slug,
          title: t.title,
          description: t.description,
          coverImage: t.diorama_image_url || `/images/themes/${t.slug}.jpg`,
          categories: (t.categories || [])
            .slice()
            .sort((a, b) => a.category_slot - b.category_slot)
            .map((c) => ({
              number: String(c.global_number).padStart(2, '0'),
              slug: c.slug,
              title: c.name,
              quote: c.quote,
            })),
        }));
    }

    // Safe structural directory titles only when teaser mode renders index headers
    return THEME_FAMILIES.map((t) => ({
      number: t.number,
      slug: t.slug,
      title: t.title,
      description: t.description,
      coverImage: `/images/themes/${t.slug}.jpg`,
      categories: t.categories.map((c) => ({
        number: c.number,
        slug: c.slug,
        title: c.title,
        quote: c.quote,
      })),
    }));
  }, [liveThemes]);

  const activeTheme = items[activeIdx] || items[0];

  return (
    <section
      id="themes"
      className="scroll-mt-24 w-full bg-surface dark:bg-[#050505] border-t border-outline-variant/40 dark:border-white/10 py-12 sm:py-20 px-4 sm:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-outline-variant/40 dark:border-white/10 mb-6">
          <div className="max-w-2xl">
            <h2 className="font-serif text-[clamp(26px,3.2vw,40px)] font-semibold tracking-[-0.02em] leading-[1.15] text-on-surface dark:text-white">
              {title}
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-on-surface-variant dark:text-neutral-300 leading-relaxed">
              {subtitle}
            </p>
          </div>
          <p className="text-xs sm:text-sm font-mono text-on-surface-variant dark:text-neutral-400 shrink-0">
            10 Themes · 50 Categories · 150 Taglines
          </p>
        </div>

        <MuseumWayfinding step={1} />

        {/* Desktop Split: Left 10-Row Directory + Right Equal-Height Specimen Plate */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-6 border border-outline-variant/40 dark:border-white/10 divide-y divide-outline-variant/30 dark:divide-white/10 bg-surface-container-lowest dark:bg-[#0b0b0e] flex flex-col justify-between">
            {items.map((theme, idx) => {
              const isSelected = idx === activeIdx;
              const targetHref = lockedTeaser
                ? `/login?next=${encodeURIComponent(`/themes/${theme.slug}`)}`
                : `/themes/${theme.slug}`;

              return (
                <div
                  key={theme.slug}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onFocus={() => setActiveIdx(idx)}
                  className={`flex-1 flex items-center transition-colors border-l-2 ${
                    isSelected
                      ? 'border-l-[#8c5d12] dark:border-l-[#d4af37] bg-surface-container-low dark:bg-white/[0.04]'
                      : 'border-l-transparent hover:bg-surface-container-low/60 dark:hover:bg-white/[0.02]'
                  }`}
                >
                  <Link
                    href={targetHref}
                    className="w-full flex items-center justify-between gap-4 px-5 py-3.5"
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
                      {lockedTeaser ? (
                        <Lock className="w-3.5 h-3.5 text-[#8c5d12] dark:text-[#d4af37]" />
                      ) : (
                        <ArrowRight
                          className={`w-4 h-4 transition-transform ${
                            isSelected
                              ? 'text-[#8c5d12] dark:text-[#d4af37] translate-x-0.5'
                              : 'text-on-surface-variant/40 dark:text-neutral-600'
                          }`}
                        />
                      )}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

          {activeTheme && (
            <div className="lg:col-span-6 h-full flex flex-col border border-outline-variant/40 dark:border-white/10 bg-surface-container-lowest dark:bg-[#0b0b0e] overflow-hidden">
              <div className="relative flex-1 min-h-[280px] w-full overflow-hidden bg-neutral-200 dark:bg-neutral-900 border-b border-outline-variant/30 dark:border-white/10">
                <img
                  src={activeTheme.coverImage}
                  alt={activeTheme.title}
                  className={`w-full h-full object-cover ${
                    lockedTeaser ? 'blur-[6px] brightness-75' : ''
                  }`}
                  loading="lazy"
                />
                {lockedTeaser && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/35">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/75 border border-white/20 text-xs font-mono text-[#d4af37]">
                      <Lock className="w-3.5 h-3.5" />
                      Teaser Preview · Sign In to Unlock
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6 sm:p-7 shrink-0 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-semibold text-[#8c5d12] dark:text-[#d4af37]">
                    Theme {activeTheme.number} · {activeTheme.categories.length} Categories
                  </span>
                  <h3 className="mt-1.5 font-serif text-2xl font-semibold text-on-surface dark:text-white tracking-tight">
                    {activeTheme.title}
                  </h3>

                  <p className="mt-2 text-sm text-on-surface-variant dark:text-neutral-300 leading-relaxed line-clamp-3">
                    {activeTheme.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-outline-variant/30 dark:border-white/10">
                  <Link
                    href={
                      lockedTeaser
                        ? `/login?next=${encodeURIComponent(`/themes/${activeTheme.slug}`)}`
                        : `/themes/${activeTheme.slug}`
                    }
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-on-surface text-surface dark:bg-[#f5f3ee] dark:text-[#111114] text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    <span>
                      {lockedTeaser
                        ? `Sign In to Explore ${activeTheme.title}`
                        : `Explore ${activeTheme.title}`}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile / Tablet Clean Accordion */}
        <div className="lg:hidden border border-outline-variant/40 dark:border-white/10 divide-y divide-outline-variant/30 dark:divide-white/10 bg-surface-container-lowest dark:bg-[#0b0b0e]">
          {items.map((theme, idx) => {
            const isOpen = mobileOpenIdx === idx;
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
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-200 dark:bg-neutral-900 border border-outline-variant/30 dark:border-white/10">
                      <img
                        src={theme.coverImage}
                        alt={theme.title}
                        className={`w-full h-full object-cover ${
                          lockedTeaser ? 'blur-[6px] brightness-75' : ''
                        }`}
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
                            href={
                              lockedTeaser
                                ? `/login?next=${encodeURIComponent(`/categories/${cat.slug}`)}`
                                : `/categories/${cat.slug}`
                            }
                            className="flex items-center justify-between gap-2 min-h-[44px] py-2.5 text-sm text-on-surface dark:text-neutral-200 hover:text-[#8c5d12] dark:hover:text-[#d4af37]"
                          >
                            <span className="leading-snug">
                              <span className="font-mono text-xs text-on-surface-variant dark:text-neutral-500 mr-2">
                                {cat.number}
                              </span>
                              {cat.title}
                            </span>
                            {lockedTeaser ? (
                              <Lock className="w-3.5 h-3.5 shrink-0 opacity-70" />
                            ) : (
                              <ArrowRight className="w-4 h-4 shrink-0 opacity-60" />
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={
                        lockedTeaser
                          ? `/login?next=${encodeURIComponent(`/themes/${theme.slug}`)}`
                          : `/themes/${theme.slug}`
                      }
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 bg-on-surface text-surface dark:bg-[#f5f3ee] dark:text-[#111114] text-sm font-medium"
                    >
                      <span>{lockedTeaser ? 'Sign In to Open' : 'Open Theme Page'}</span>
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
