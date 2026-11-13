'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CategoryClassification, ThemeFamily } from '@/data/taxonomy';
import { HistoricalAsset } from '@/types/asset';
import AssetCollection from '@/components/sections/AssetCollection';
import SpatialGallery from '@/components/sections/SpatialGallery';
import VideoGallery from '@/components/sections/VideoGallery';
import CuratorialDispatchSection from '@/components/sections/CuratorialDispatchSection';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Boxes,
  Layers,
  Quote,
  Sparkles,
} from 'lucide-react';
import MuseumWayfinding from '@/components/common/MuseumWayfinding';

interface CategorySlugViewClientProps {
  theme: ThemeFamily;
  category: CategoryClassification;
  categoryAssets: HistoricalAsset[];
}

export default function CategorySlugViewClient({
  theme,
  category,
  categoryAssets,
}: CategorySlugViewClientProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [category.slug]);

  const handleSelectAsset = (asset: HistoricalAsset) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    router.push(`/inventions/${asset.id}`);
  };

  const catIndex = theme.categories.findIndex((c) => c.slug === category.slug);
  const prevCat = catIndex > 0 ? theme.categories[catIndex - 1] : null;
  const nextCat =
    catIndex >= 0 && catIndex < theme.categories.length - 1
      ? theme.categories[catIndex + 1]
      : null;

  return (
    <div className="flex flex-col w-full min-h-screen bg-surface dark:bg-[#050505] selection:bg-primary/30">
      {/* =======================================================================
          1. CATEGORY HERO — CLASSIFICATION ENTRANCE
         ======================================================================= */}
      <section
        id="overview"
        className="relative w-full pt-10 pb-14 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:px-8 scroll-mt-20 overflow-hidden border-b border-outline-variant/20 dark:border-white/[0.06]"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface-container-low to-surface dark:from-[#0a0b10] dark:to-[#050505]" />
        <div
          className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            color: '#fbbf24',
          }}
        />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[560px] h-[560px] rounded-full bg-amber-500/10 blur-[120px]" />

        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <Link
              href={`/themes/${theme.slug}`}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-low dark:bg-white/[0.04] border border-outline-variant/40 dark:border-white/10 hover:border-amber-500/50 text-xs font-mono text-on-surface-variant dark:text-neutral-300 hover:text-amber-700 dark:hover:text-amber-300 transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to {theme.title}</span>
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            {/* LEFT: Copy */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 text-[10px] sm:text-[11px] font-mono tracking-[0.18em] uppercase mb-4">
                <Layers className="w-3.5 h-3.5" />
                <span>{theme.title}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-on-surface dark:text-white leading-[1.1]">
                {category.title}
              </h1>

              <p className="mt-3 font-serif italic text-lg sm:text-2xl text-amber-700 dark:text-amber-300">
                “{category.quote}”
              </p>

              <p className="mt-3 text-sm sm:text-base lg:text-lg text-on-surface-variant dark:text-neutral-300 leading-relaxed max-w-2xl">
                {category.tagline}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button
                  onClick={() =>
                    document.getElementById('assets')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-neutral-950 font-bold text-xs tracking-wide shadow-[0_4px_14px_-4px_rgba(251,191,36,0.6)] hover:shadow-[0_6px_22px_-4px_rgba(251,191,36,0.8)] hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <span>Explore the Collection</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
                <button
                  onClick={() =>
                    document.getElementById('3d')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-outline-variant/50 dark:border-white/15 hover:border-amber-500/50 text-on-surface dark:text-white text-xs font-mono tracking-wide hover:bg-amber-500/5 transition-all"
                >
                  <Boxes className="w-3.5 h-3.5 text-amber-500" />
                  <span>Enter 3D Vault</span>
                </button>
              </div>
            </div>

            {/* RIGHT: Orbital Emblem + Stats */}
            <div className="relative shrink-0">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto lg:mx-0">
                <div className="absolute inset-0 rounded-full border border-amber-500/20 animate-spin-slow" />
                <div
                  className="absolute inset-4 rounded-full border border-dashed border-amber-500/30"
                  style={{ animation: 'spin 30s linear infinite reverse' }}
                />
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-amber-500/20 via-amber-600/10 to-transparent border border-amber-500/40 flex items-center justify-center shadow-[inset_0_0_40px_-10px_rgba(251,191,36,0.5),0_0_60px_-15px_rgba(251,191,36,0.35)]">
                  <span className="text-5xl sm:text-7xl" aria-hidden="true">
                    {category.emoji}
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-2 max-w-[260px] mx-auto lg:mx-0">
                <div className="p-2.5 rounded-xl bg-surface-container-low dark:bg-[#0e0f14] border border-outline-variant/35 dark:border-white/10 text-center">
                  <div className="font-mono text-base font-bold text-on-surface dark:text-white">
                    {categoryAssets.length}
                  </div>
                  <div className="text-[10px] font-mono uppercase text-on-surface-variant dark:text-neutral-400">
                    Assets
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-surface-container-low dark:bg-[#0e0f14] border border-outline-variant/35 dark:border-white/10 text-center">
                  <div className="font-mono text-base font-bold text-amber-600 dark:text-amber-400">
                    100%
                  </div>
                  <div className="text-[10px] font-mono uppercase text-on-surface-variant dark:text-neutral-400">
                    USPTO
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =======================================================================
          2. ASSETS SECTION
         ======================================================================= */}
      <section id="assets" className="scroll-mt-16 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12">
          <MuseumWayfinding step={3} themeSlug={theme.slug} themeTitle={theme.title} />
        </div>
        <AssetCollection
          assets={categoryAssets}
          onSelectAsset={handleSelectAsset}
          onExplore3D={handleSelectAsset}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeCategory={category.legacyCategoryKeys[0]}
          onCategoryChange={() => {}}
        />
      </section>

      {/* =======================================================================
          3. STORY SECTION — EVOLUTION TIMELINE
         ======================================================================= */}
      <section
        id="story"
        className="scroll-mt-16 w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-outline-variant/20 dark:border-white/[0.06] bg-surface-container-lowest dark:bg-[#08090d]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
              Curatorial Narrative
            </span>
            <h2 className="mt-2 font-serif text-2xl sm:text-4xl font-bold text-on-surface dark:text-white">
              The Evolution of {category.title}
            </h2>
            <p className="mt-2.5 text-sm text-on-surface-variant dark:text-neutral-400">
              {category.tagline}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                epoch: 'Epoch I • Early Patents',
                title: 'Workshop & Patent Models',
                desc: `Foundational mechanical prototypes filed with the U.S. Patent Office that established the principles of ${category.title.toLowerCase()}.`,
              },
              {
                epoch: 'Epoch II • Industrial Scale',
                title: 'Standardization & Production',
                desc: `Precision manufacturing and metallurgy transformed early breakthroughs into reliable instruments that reshaped society.`,
              },
              {
                epoch: 'Epoch III • Modern Legacy',
                title: 'Digital & 3D Preservation',
                desc: `Every model in this collection is preserved with high-resolution USPTO plates, audio narration, and interactive 3D twins.`,
              },
            ].map((item) => (
              <div
                key={item.epoch}
                className="p-6 rounded-2xl bg-surface dark:bg-[#0c0d12] border border-outline-variant/40 dark:border-white/[0.08]"
              >
                <div className="text-[11px] font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  {item.epoch}
                </div>
                <h3 className="mt-2 font-serif text-lg font-bold text-on-surface dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-on-surface-variant dark:text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-amber-500/[0.06] border border-amber-500/25 flex items-start gap-4">
            <Quote className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-serif italic text-base sm:text-lg text-on-surface dark:text-white">
                “{category.quote}”
              </p>
              <p className="mt-1 text-xs font-mono text-on-surface-variant dark:text-neutral-400">
                Classification {category.number} • {theme.title}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =======================================================================
          4. BOOKS & BLUEPRINTS QUICK ACCESS
         ======================================================================= */}
      <section
        id="book"
        className="scroll-mt-16 w-full py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-outline-variant/20 dark:border-white/[0.06]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
                Storybooks &amp; Patent Plates
              </span>
              <h2 className="mt-1.5 font-serif text-2xl sm:text-3xl font-bold text-on-surface dark:text-white">
                Read the Illustrated Monographs
              </h2>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-on-surface-variant dark:text-neutral-400">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Ages 3–7 &amp; 8–14 Editions</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryAssets.slice(0, 3).map((asset) => (
              <Link
                key={asset.id}
                href={`/inventions/${asset.id}#book`}
                className="group p-5 rounded-2xl bg-surface-container-low dark:bg-[#0c0d12] border border-outline-variant/40 dark:border-white/[0.08] hover:border-amber-500/50 transition-all flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono uppercase text-amber-600 dark:text-amber-400">
                    {asset.patent}
                  </div>
                  <h3 className="mt-0.5 font-serif text-base font-bold text-on-surface dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 truncate">
                    {asset.title}
                  </h3>
                  <p className="mt-1 text-xs text-on-surface-variant dark:text-neutral-400">
                    Open interactive storybook &amp; blueprint ledger →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =======================================================================
          5. 3D VAULT & VIDEO GALLERY
         ======================================================================= */}
      <section id="3d" className="scroll-mt-16 w-full">
        <SpatialGallery
          category={category.legacyCategoryKeys[0]}
          onSelectAssetForDossier={handleSelectAsset}
        />
      </section>

      <section id="videos" className="scroll-mt-16 w-full">
        <VideoGallery category={category.legacyCategoryKeys[0]} />
      </section>

      <CuratorialDispatchSection />

      {/* =======================================================================
          6. RETURN TO THEME FOOTER
         ======================================================================= */}
      <section className="w-full py-10 px-4 sm:px-6 lg:px-8 border-t border-outline-variant/20 dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto flex items-center justify-start">
          <Link
            href={`/themes/${theme.slug}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface-container-low dark:bg-[#0c0d12] border border-outline-variant/40 dark:border-white/10 hover:border-amber-500/50 text-xs font-mono text-on-surface dark:text-white transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-amber-500" />
            <span>Back to {theme.title}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
