'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  ThemeFamily,
  THEME_FAMILIES,
  getAssetsForCategory,
  getAssetsForTheme,
} from '@/data/taxonomy';
import { MOCK_HISTORICAL_ASSETS, VIRTUAL_TOUR_MUSEUM_URL } from '@/lib/constants';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Compass,
  Layers,
  Plus,
  Sparkles,
} from 'lucide-react';
import MuseumWayfinding from '@/components/common/MuseumWayfinding';

interface ThemeViewClientProps {
  theme: ThemeFamily;
}

export default function ThemeViewClient({ theme }: ThemeViewClientProps) {
  const [activeCatIdx, setActiveCatIdx] = useState(0);

  useEffect(() => {
    setActiveCatIdx(0);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [theme.slug]);

  const activeCategory = theme.categories[activeCatIdx] ?? theme.categories[0];
  const activeCatAssets = getAssetsForCategory(activeCategory, MOCK_HISTORICAL_ASSETS);

  const themeAssets = getAssetsForTheme(theme, MOCK_HISTORICAL_ASSETS);
  const featuredAssets = themeAssets.slice(0, 6);

  const currentIdx = THEME_FAMILIES.findIndex((t) => t.slug === theme.slug);
  const prevTheme = currentIdx > 0 ? THEME_FAMILIES[currentIdx - 1] : null;
  const nextTheme =
    currentIdx >= 0 && currentIdx < THEME_FAMILIES.length - 1
      ? THEME_FAMILIES[currentIdx + 1]
      : null;

  return (
    <div className="flex flex-col w-full min-h-screen bg-surface dark:bg-[#050505] selection:bg-primary/30">
      {/* =======================================================================
          1. THEME HERO SECTION
         ======================================================================= */}
      <section
        id="overview"
        className="relative w-full pt-10 pb-14 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:px-8 scroll-mt-20 overflow-hidden border-b border-outline-variant/20 dark:border-white/[0.06]"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface-container-low to-surface dark:from-[#0a0b10] dark:to-[#050505]" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[620px] h-[420px] rounded-full bg-amber-500/10 blur-[120px]" />

        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <Link
              href="/#themes"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-low dark:bg-white/[0.04] border border-outline-variant/40 dark:border-white/10 hover:border-amber-500/50 text-xs font-mono text-on-surface-variant dark:text-neutral-300 hover:text-amber-700 dark:hover:text-amber-300 transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Themes</span>
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 text-[10px] sm:text-[11px] font-mono tracking-[0.18em] uppercase mb-4">
                <Layers className="w-3.5 h-3.5" />
                <span>Theme Family • 5 Curated Categories</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-on-surface dark:text-white leading-[1.1]">
                {theme.title}
              </h1>

              <p className="mt-4 text-sm sm:text-base lg:text-lg text-on-surface-variant dark:text-neutral-300 leading-relaxed max-w-2xl">
                {theme.description}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button
                  onClick={() =>
                    document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-neutral-950 font-bold text-xs tracking-wide shadow-[0_4px_14px_-4px_rgba(251,191,36,0.6)] hover:shadow-[0_6px_22px_-4px_rgba(251,191,36,0.8)] hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <span>Browse 5 Categories</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
                <button
                  onClick={() =>
                    document.getElementById('highlights')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-outline-variant/50 dark:border-white/15 hover:border-amber-500/50 text-on-surface dark:text-white text-xs font-mono tracking-wide hover:bg-amber-500/5 transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Featured Artifacts</span>
                </button>
              </div>
            </div>

            {/* Right: Emblem + Quick Metrics */}
            <div className="shrink-0 flex flex-col items-center lg:items-end gap-4">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-br from-amber-500/20 via-amber-500/10 to-transparent border border-amber-500/35 flex items-center justify-center shadow-[0_0_50px_-15px_rgba(251,191,36,0.45)]">
                <span className="text-5xl sm:text-6xl" aria-hidden="true">
                  {theme.emoji}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2.5 w-full max-w-[260px]">
                <div className="p-3 rounded-xl bg-surface-container-low dark:bg-[#0e0f14] border border-outline-variant/35 dark:border-white/10 text-center">
                  <div className="font-mono text-lg font-bold text-on-surface dark:text-white">
                    {theme.categories.length}
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-on-surface-variant dark:text-neutral-400">
                    Categories
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-surface-container-low dark:bg-[#0e0f14] border border-outline-variant/35 dark:border-white/10 text-center">
                  <div className="font-mono text-lg font-bold text-amber-600 dark:text-amber-400">
                    {themeAssets.length}
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-on-surface-variant dark:text-neutral-400">
                    Assets
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =======================================================================
          2. 5 CATEGORIES SECTION (tZERO-Inspired Interactive Pillar Showcase)
         ======================================================================= */}
      <section
        id="categories"
        className="w-full py-14 sm:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-10">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
              {theme.title}
            </span>
            <h2 className="mt-1.5 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface dark:text-white">
              Select a Specialized Category
            </h2>
            <p className="mt-2 text-sm text-on-surface-variant dark:text-neutral-400 max-w-2xl">
              Each category opens its own curated archive of patent models, stories, digital books, 3D twins, and documentary reels.
            </p>
          </div>

          <MuseumWayfinding step={2} themeSlug={theme.slug} themeTitle={theme.title} />

          {/* tZERO-Exact Horizontal Accordion (Desktop) / Vertical Accordion (Mobile & Tablet) */}
          <div className="flex flex-col lg:flex-row gap-4 lg:h-[540px] w-full">
            {theme.categories.map((cat, idx) => {
              const isActive = idx === activeCatIdx;
              const catAssets = getAssetsForCategory(cat, MOCK_HISTORICAL_ASSETS);
              const coverImage = catAssets[0]?.image;

              return (
                <div
                  key={cat.slug}
                  onMouseEnter={() => setActiveCatIdx(idx)}
                  onClick={() => setActiveCatIdx(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveCatIdx(idx);
                    }
                  }}
                  className={`relative rounded-xl overflow-hidden transition-all duration-500 ease-out cursor-pointer select-none ${
                    isActive
                      ? 'h-auto lg:h-full lg:flex-[3.4] lg:max-w-[590px] bg-white dark:bg-[#faf9f6] text-neutral-900 border border-amber-500/30 shadow-[0_24px_38px_-8px_rgba(245,158,11,0.22),0_10px_24px_-6px_rgba(16,185,129,0.12)]'
                      : 'h-16 md:h-20 lg:h-full lg:flex-[0.9] lg:max-w-[165px] bg-gradient-to-b from-amber-500/[0.12] to-stone-500/[0.08] dark:from-slate-300/[0.16] dark:to-neutral-400/[0.10] border border-outline-variant/50 dark:border-white/25 hover:border-amber-500/60'
                  }`}
                >
                  {/* COLLAPSED STATE */}
                  {!isActive && (
                    <div className="w-full h-full flex flex-row lg:flex-col items-center justify-between px-5 lg:py-7 lg:px-3">
                      {/* Title (left on mobile, bottom rotated -90deg on desktop) */}
                      <span className="lg:order-2 font-serif font-semibold text-sm sm:text-base lg:text-lg text-on-surface dark:text-white truncate lg:overflow-visible lg:whitespace-nowrap lg:-rotate-90 lg:mb-16 lg:w-8 lg:flex lg:items-center lg:justify-start">
                        {cat.title}
                      </span>

                      {/* Plus Icon (right on mobile, top center on desktop) */}
                      <span className="lg:order-1 w-7 h-7 flex items-center justify-center text-on-surface dark:text-white shrink-0">
                        <Plus className="w-6 h-6 stroke-[1.75]" />
                      </span>
                    </div>
                  )}

                  {/* EXPANDED STATE */}
                  {isActive && (
                    <div className="w-full h-full flex flex-col justify-between p-5 sm:p-6 lg:p-7 animate-in fade-in duration-300">
                      {/* Top Image + Emoji Badge */}
                      <div className="relative w-full h-40 sm:h-48 lg:h-52 rounded-lg overflow-hidden bg-neutral-100 shrink-0">
                        {coverImage && (
                          <img
                            src={coverImage}
                            alt={cat.title}
                            className="w-full h-full object-cover object-center"
                          />
                        )}
                        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-amber-300 text-[11px] font-mono">
                          <span>{cat.emoji}</span>
                          <span>{catAssets.length} Assets</span>
                        </div>
                      </div>

                      {/* Middle Title + Divider + Description */}
                      <div className="mt-4 lg:mt-5 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900 leading-snug">
                            {cat.title}
                          </h3>
                          <div className="my-3 h-px w-full bg-neutral-200" />
                          <p className="font-serif italic text-sm text-amber-700">
                            “{cat.quote}”
                          </p>
                          <p className="mt-1.5 text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-3">
                            {cat.tagline}
                          </p>
                        </div>

                        <div className="mt-5 pt-2 flex items-center justify-between">
                          <Link
                            href={`/categories/${cat.slug}`}
                            onClick={(e) => e.stopPropagation()}
                            className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-950 text-white hover:bg-amber-500 hover:text-neutral-950 font-semibold text-xs tracking-wide transition-all duration-300"
                          >
                            <span>View Artifacts</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =======================================================================
          3. FEATURED THEME ARTIFACTS
         ======================================================================= */}
      <section
        id="highlights"
        className="w-full py-14 sm:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16 border-t border-outline-variant/20 dark:border-white/[0.06] bg-surface-container-lowest dark:bg-[#08090d]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
                Theme Highlights
              </span>
              <h2 className="mt-1.5 font-serif text-2xl sm:text-3xl font-bold text-on-surface dark:text-white">
                Standout Artifacts in {theme.title}
              </h2>
            </div>
            <a
              href={VIRTUAL_TOUR_MUSEUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start sm:self-auto px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/35 text-amber-700 dark:text-amber-300 text-xs font-mono hover:bg-amber-500 hover:text-neutral-950 transition-all"
            >
              <Boxes className="w-3.5 h-3.5" />
              <span>Enter 3D Virtual Walkthrough</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {featuredAssets.map((asset) => (
              <Link
                key={asset.id}
                href={`/inventions/${asset.id}`}
                className="group flex flex-col rounded-2xl overflow-hidden bg-surface dark:bg-[#0c0d12] border border-outline-variant/40 dark:border-white/[0.08] hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="relative h-44 w-full overflow-hidden bg-surface-container dark:bg-neutral-900">
                  <img
                    src={asset.image}
                    alt={asset.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono text-amber-300 border border-amber-400/30">
                    {asset.patent}
                  </div>
                </div>
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-mono text-amber-600 dark:text-amber-400">
                      {asset.inventor} • {asset.patentDate}
                    </div>
                    <h3 className="mt-1 font-serif text-base sm:text-lg font-bold text-on-surface dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                      {asset.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-on-surface-variant dark:text-neutral-400 line-clamp-2">
                      {asset.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-outline-variant/30 dark:border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-amber-700 dark:text-amber-400">
                    <span>Inspect Story, 3D &amp; Video</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =======================================================================
          4. RETURN TO THEMES FOOTER
         ======================================================================= */}
      <section className="w-full py-10 px-4 sm:px-6 lg:px-8 border-t border-outline-variant/20 dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto flex items-center justify-start">
          <Link
            href="/#themes"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface-container-low dark:bg-[#0c0d12] border border-outline-variant/40 dark:border-white/10 hover:border-amber-500/50 text-xs font-mono text-on-surface dark:text-white transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-amber-500" />
            <span>Back to All Themes</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
