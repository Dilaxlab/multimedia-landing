'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight, Plus } from 'lucide-react';
import {
  ThemeFamily,
  THEME_FAMILIES,
  getAssetsForCategory,
  getAssetsForTheme,
} from '@/data/taxonomy';
import { MOCK_HISTORICAL_ASSETS, VIRTUAL_TOUR_MUSEUM_URL } from '@/lib/constants';
import MuseumWayfinding from '@/components/common/MuseumWayfinding';
import { MuseumPlinthHero } from '@/components/sections/MuseumPlinthHero';

interface ThemeViewClientProps {
  theme: ThemeFamily;
}

export default function ThemeViewClient({ theme }: ThemeViewClientProps) {
  const [activeCatIdx, setActiveCatIdx] = useState(0);

  useEffect(() => {
    setActiveCatIdx(0);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [theme.slug]);

  const themeAssets = getAssetsForTheme(theme, MOCK_HISTORICAL_ASSETS);
  const sampleRecords = themeAssets.slice(0, 6);

  const currentIdx = THEME_FAMILIES.findIndex((t) => t.slug === theme.slug);
  const prevTheme = currentIdx > 0 ? THEME_FAMILIES[currentIdx - 1] : null;
  const nextTheme =
    currentIdx >= 0 && currentIdx < THEME_FAMILIES.length - 1
      ? THEME_FAMILIES[currentIdx + 1]
      : null;

  return (
    <div className="flex flex-col w-full min-h-screen bg-surface dark:bg-[#050505] selection:bg-primary/30">
      {/* =====================================================================
          1. CLEAN THEME OVERVIEW HERO
         ===================================================================== */}
      <MuseumPlinthHero
        themeSlug={theme.slug}
        classificationTag={`Theme ${theme.number} of 10 · ${theme.categories.length} Categories · ${themeAssets.length} Inventions`}
        title={theme.title}
        description={theme.description}
        primaryCta={{
          label: `Browse ${theme.categories.length} Categories`,
          href: '#categories',
        }}
        secondaryCta={{
          label: 'Sample Inventions',
          href: '#highlights',
        }}
        badgeText={`${theme.categoryRange} · All Formats Included`}
      />

      {/* =====================================================================
          2. THE 5 CATEGORIES IN THIS THEME (Clear Exhibition Catalog Index)
         ===================================================================== */}
      <section
        id="categories"
        className="scroll-mt-28 w-full py-12 sm:py-20 px-4 sm:px-8 bg-surface dark:bg-[#050505]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 sm:pb-8 border-b border-outline-variant/40 dark:border-white/10 mb-6">
            <div className="max-w-2xl">
              <h2 className="font-serif text-[clamp(24px,3vw,38px)] font-semibold tracking-[-0.02em] leading-[1.15] text-on-surface dark:text-white [text-wrap:balance]">
                {theme.categories.length} Categories in This Theme
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-on-surface-variant dark:text-neutral-300 leading-relaxed">
                Pick a category below to see every invention grouped under it. Each invention record opens with Video, 3D Model, Book, 2D Plate, and Story study tabs.
              </p>
            </div>
            <p className="text-xs sm:text-sm font-mono text-on-surface-variant dark:text-neutral-400 shrink-0">
              {theme.categoryRange}
            </p>
          </div>

          <MuseumWayfinding
            step={2}
            themeSlug={theme.slug}
            themeTitle={theme.title}
          />

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
                      {/* Top Image + Badge */}
                      <div className="relative w-full h-40 sm:h-48 lg:h-52 rounded-lg overflow-hidden bg-neutral-100 shrink-0">
                        {coverImage && (
                          <img
                            src={coverImage}
                            alt={cat.title}
                            className="w-full h-full object-cover object-center"
                          />
                        )}
                        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-amber-300 text-xs font-mono">
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
                            &ldquo;{cat.quote}&rdquo;
                          </p>
                          <p className="mt-1.5 text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-3">
                            {cat.tagline}
                          </p>
                        </div>

                        <div className="mt-5 pt-2 flex items-center justify-between">
                          <Link
                            href={`/categories/${cat.slug}`}
                            onClick={(e) => e.stopPropagation()}
                            className="group/btn inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-full bg-neutral-950 text-white hover:bg-amber-500 hover:text-neutral-950 font-semibold text-xs tracking-wide transition-all duration-300"
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

      {/* =====================================================================
          3. SAMPLE INVENTIONS IN THIS THEME (Typographic Specimen Cards)
         ===================================================================== */}
      <section
        id="highlights"
        className="scroll-mt-28 w-full py-12 sm:py-20 px-4 sm:px-8 border-t border-outline-variant/40 dark:border-white/10 bg-surface-container-low/50 dark:bg-[#0b0b0e]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 sm:pb-8 border-b border-outline-variant/40 dark:border-white/10 mb-8 sm:mb-10">
            <div className="max-w-2xl">
              <h2 className="font-serif text-[clamp(24px,3vw,36px)] font-semibold tracking-[-0.02em] leading-[1.15] text-on-surface dark:text-white">
                Sample Inventions from This Theme
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-on-surface-variant dark:text-neutral-300 leading-relaxed">
                Open any record directly below to inspect its 2D patent plate, historical story, archival book, 3D model, and video walkthrough.
              </p>
            </div>

            <a
              href={VIRTUAL_TOUR_MUSEUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] inline-flex items-center gap-1.5 text-sm font-medium text-[#8c5d12] dark:text-[#d4af37] hover:underline shrink-0"
            >
              <span>Walk through 3D museum</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {sampleRecords.map((asset) => (
              <Link
                key={asset.id}
                href={`/inventions/${asset.id}`}
                className="group flex flex-col justify-between p-5 sm:p-6 border border-outline-variant/40 dark:border-white/10 bg-surface dark:bg-[#111114] hover:border-[#8c5d12]/60 dark:hover:border-[#d4af37]/60 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs font-mono text-on-surface-variant dark:text-neutral-400">
                    <span>{asset.year || asset.patentDate}</span>
                    <span>{asset.patentNumber || asset.patent}</span>
                  </div>

                  <h3 className="mt-3 font-serif text-lg sm:text-xl font-semibold leading-snug text-on-surface dark:text-white group-hover:text-[#8c5d12] dark:group-hover:text-[#d4af37] transition-colors">
                    {asset.title}
                  </h3>

                  <p className="mt-1 text-xs font-medium text-on-surface-variant dark:text-neutral-400">
                    {asset.inventor}
                    {asset.location ? ` · ${asset.location}` : ''}
                  </p>

                  <p className="mt-3 text-sm text-on-surface-variant dark:text-neutral-300 leading-relaxed line-clamp-3">
                    {asset.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-outline-variant/30 dark:border-white/10 flex items-center justify-between text-xs font-medium text-on-surface dark:text-neutral-200 group-hover:text-[#8c5d12] dark:group-hover:text-[#d4af37] transition-colors">
                  <span>Open 5-format record</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. NEIGHBORING THEMES & RETURN TO DIRECTORY
         ===================================================================== */}
      <section className="w-full py-8 sm:py-10 px-4 sm:px-8 border-t border-outline-variant/40 dark:border-white/10 bg-surface dark:bg-[#050505]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {prevTheme ? (
            <Link
              href={`/themes/${prevTheme.slug}`}
              className="group flex items-center gap-3 min-h-[44px] py-2 text-sm text-on-surface-variant dark:text-neutral-300 hover:text-on-surface dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />
              <div className="min-w-0">
                <span className="block text-xs text-on-surface-variant dark:text-neutral-500">
                  Previous Theme
                </span>
                <span className="font-serif font-medium text-on-surface dark:text-white truncate block">
                  {prevTheme.number}. {prevTheme.title}
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          <Link
            href="/#themes"
            className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 border border-outline-variant/50 dark:border-white/15 hover:border-on-surface/50 dark:hover:border-white/35 text-xs sm:text-sm font-medium text-on-surface dark:text-neutral-200 transition-colors shrink-0"
          >
            All 10 Themes
          </Link>

          {nextTheme ? (
            <Link
              href={`/themes/${nextTheme.slug}`}
              className="group flex items-center justify-between sm:justify-end gap-3 min-h-[44px] py-2 text-sm text-on-surface-variant dark:text-neutral-300 hover:text-on-surface dark:hover:text-white transition-colors sm:text-right"
            >
              <div className="min-w-0">
                <span className="block text-xs text-on-surface-variant dark:text-neutral-500">
                  Next Theme
                </span>
                <span className="font-serif font-medium text-on-surface dark:text-white truncate block">
                  {nextTheme.number}. {nextTheme.title}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>
    </div>
  );
}
