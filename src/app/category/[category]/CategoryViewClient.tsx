'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { CategoryMeta } from '@/lib/constants';
import { HistoricalAsset } from '@/types/asset';
import { useCategory } from '@/context/CategoryContext';
import AssetCollection from '@/components/sections/AssetCollection';
import SpatialGallery from '@/components/sections/SpatialGallery';
import VideoGallery from '@/components/sections/VideoGallery';

interface CategoryViewClientProps {
  catMeta: CategoryMeta;
  categoryAssets: HistoricalAsset[];
}

export default function CategoryViewClient({ catMeta, categoryAssets }: CategoryViewClientProps) {
  const router = useRouter();
  const { selectCategory } = useCategory();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    selectCategory(catMeta.key, false);
  }, [catMeta.key, selectCategory]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [catMeta.key]);

  const handleSelectAsset = (asset: HistoricalAsset) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    router.push(`/inventions/${asset.id}`);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-surface dark:bg-[#050505] selection:bg-primary/30">
      {/* =====================================================================
          1. CLEAN ARCHIVE CATEGORY OVERVIEW
         ===================================================================== */}
      <section
        id="overview"
        className="scroll-mt-24 w-full border-b border-outline-variant/40 dark:border-white/10 bg-surface dark:bg-[#09090b] py-12 sm:py-16 px-4 sm:px-8"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-8">
            <p className="text-xs sm:text-sm font-medium text-[#8c5d12] dark:text-[#d4af37] mb-3">
              Archive Wing · {catMeta.era} · {categoryAssets.length} Inventions
            </p>
            <h1 className="font-serif text-[clamp(28px,4vw,48px)] font-semibold tracking-[-0.02em] leading-[1.1] text-on-surface dark:text-white [text-wrap:balance]">
              {catMeta.label}
            </h1>
            <p className="mt-4 text-base text-on-surface-variant dark:text-neutral-300 leading-[1.6] max-w-[60ch]">
              {catMeta.desc}
            </p>

            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#assets"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 bg-on-surface text-surface dark:bg-[#f5f3ee] dark:text-[#111114] text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <span>Browse {categoryAssets.length} Inventions</span>
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#3d"
                className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 border border-outline-variant/60 dark:border-white/20 hover:border-on-surface/50 dark:hover:border-white/40 text-sm font-medium text-on-surface dark:text-neutral-200 transition-colors"
              >
                <span>Interactive 3D Models</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 border border-outline-variant/40 dark:border-white/10 bg-surface-container-lowest dark:bg-[#0b0b0e] p-5 space-y-3 text-sm">
            <div className="flex items-center justify-between border-b border-outline-variant/30 dark:border-white/10 pb-2.5">
              <span className="text-on-surface-variant dark:text-neutral-400">Historical Span</span>
              <span className="font-mono font-medium text-on-surface dark:text-white">{catMeta.era}</span>
            </div>
            <div className="flex items-center justify-between border-b border-outline-variant/30 dark:border-white/10 pb-2.5">
              <span className="text-on-surface-variant dark:text-neutral-400">Records Included</span>
              <span className="font-mono font-medium text-on-surface dark:text-white">{categoryAssets.length}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface-variant dark:text-neutral-400">Formats per Entry</span>
              <span className="font-mono font-medium text-[#8c5d12] dark:text-[#d4af37]">2D · Story · Book · 3D · Video</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. ASSETS GRID
         ===================================================================== */}
      <section id="assets" className="scroll-mt-28 w-full">
        <AssetCollection
          assets={categoryAssets}
          onSelectAsset={handleSelectAsset}
          onExplore3D={handleSelectAsset}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeCategory={catMeta.key}
          onCategoryChange={() => {}}
        />
      </section>

      {/* =====================================================================
          3. HISTORICAL PROGRESSION
         ===================================================================== */}
      <section
        id="story"
        className="scroll-mt-24 w-full py-12 sm:py-20 px-4 sm:px-8 border-t border-outline-variant/40 dark:border-white/10 bg-surface-container-low/50 dark:bg-[#0b0b0e]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl pb-6 sm:pb-8 border-b border-outline-variant/40 dark:border-white/10 mb-8 sm:mb-10">
            <h2 className="font-serif text-[clamp(24px,3vw,36px)] font-semibold tracking-[-0.02em] leading-[1.15] text-on-surface dark:text-white">
              How {catMeta.shortName} Evolved
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-on-surface-variant dark:text-neutral-300 leading-relaxed">
              Key stages covering {catMeta.label.toLowerCase()} across {catMeta.era}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                step: 'Stage 01',
                title: 'Early Workshop Constraints',
                desc: `Before ${catMeta.era.split('—')[0]?.trim() || catMeta.era}, craftsmen worked around manual limits in speed, materials, and accuracy.`,
              },
              {
                step: 'Stage 02',
                title: 'Patented Mechanical Designs',
                desc: 'New filing prototypes paired precision parts and reliable principles to solve persistent everyday bottlenecks.',
              },
              {
                step: 'Stage 03',
                title: 'Long-Term Legacy',
                desc: 'Tested workshop designs gradually formed standards used across homes, factories, and civic networks.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="p-6 border border-outline-variant/40 dark:border-white/10 bg-surface dark:bg-[#111114]"
              >
                <span className="font-mono text-xs font-semibold text-[#8c5d12] dark:text-[#d4af37]">
                  {item.step}
                </span>
                <h3 className="mt-2 font-serif text-xl font-semibold text-on-surface dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-on-surface-variant dark:text-neutral-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. PATENT MONOGRAPH READING LIST (#book)
         ===================================================================== */}
      <section
        id="book"
        className="scroll-mt-24 w-full py-12 sm:py-20 px-4 sm:px-8 border-t border-outline-variant/40 dark:border-white/10 bg-surface dark:bg-[#050505]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl pb-6 sm:pb-8 border-b border-outline-variant/40 dark:border-white/10 mb-8 sm:mb-10">
            <h2 className="font-serif text-[clamp(24px,3vw,36px)] font-semibold tracking-[-0.02em] leading-[1.15] text-on-surface dark:text-white">
              Patent Dossiers &amp; Reference Notes
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-on-surface-variant dark:text-neutral-300 leading-relaxed">
              Open any featured patent record below to read its specifications and historical monograph.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {categoryAssets.slice(0, 3).map((asset) => (
              <Link
                key={asset.id}
                href={`/inventions/${asset.id}#book`}
                className="group p-6 border border-outline-variant/40 dark:border-white/10 bg-surface-container-lowest dark:bg-[#0b0b0e] hover:border-[#8c5d12]/60 dark:hover:border-[#d4af37]/60 flex flex-col justify-between gap-4 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs font-mono text-on-surface-variant dark:text-neutral-400">
                    <span>{asset.patentDate}</span>
                    <span>{asset.patentNumber || asset.patent}</span>
                  </div>
                  <h3 className="mt-2.5 font-serif text-lg sm:text-xl font-semibold text-on-surface dark:text-white group-hover:text-[#8c5d12] dark:group-hover:text-[#d4af37] transition-colors">
                    {asset.officialTitle || asset.title}
                  </h3>
                  <p className="mt-2 text-sm text-on-surface-variant dark:text-neutral-300 leading-relaxed line-clamp-3">
                    {asset.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-outline-variant/30 dark:border-white/10 flex items-center justify-between text-xs font-medium text-on-surface dark:text-neutral-200 group-hover:text-[#8c5d12] dark:group-hover:text-[#d4af37]">
                  <span>Read patent book &amp; specs</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. 3D MODELS & VIDEO GALLERY
         ===================================================================== */}
      <section id="3d" className="scroll-mt-24 w-full border-t border-outline-variant/40 dark:border-white/10">
        <SpatialGallery category={catMeta.key} onSelectAssetForDossier={handleSelectAsset} />
      </section>

      <section id="videos" className="scroll-mt-24 w-full border-t border-outline-variant/40 dark:border-white/10">
        <VideoGallery category={catMeta.key} />
      </section>
    </div>
  );
}
