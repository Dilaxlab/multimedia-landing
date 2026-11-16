'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CategoryClassification, ThemeFamily } from '@/data/taxonomy';
import { HistoricalAsset } from '@/types/asset';
import AssetCollection from '@/components/sections/AssetCollection';
import SpatialGallery from '@/components/sections/SpatialGallery';
import VideoGallery from '@/components/sections/VideoGallery';
import MuseumWayfinding from '@/components/common/MuseumWayfinding';
import { MuseumPlinthHero } from '@/components/sections/MuseumPlinthHero';

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
    try {
      sessionStorage.setItem('ha_last_category_slug', category.slug);
    } catch {
      // ignore storage unavailable
    }
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
      {/* =====================================================================
          1. CLEAN CATEGORY OVERVIEW HERO
         ===================================================================== */}
      <MuseumPlinthHero
        themeSlug={theme.slug}
        classificationTag={`Category ${category.number} of 50 · ${theme.title} · ${categoryAssets.length} Inventions`}
        title={category.title}
        description={category.tagline}
        quote={category.quote}
        primaryCta={{
          label: `Browse ${categoryAssets.length} Inventions`,
          href: '#assets',
        }}
        secondaryCta={{
          label: 'Interactive 3D Models',
          href: '#3d',
        }}
        featuredAsset={
          categoryAssets[0]
            ? {
                id: categoryAssets[0].id,
                title: categoryAssets[0].title,
                year: categoryAssets[0].year,
                image: categoryAssets[0].thumbnail || categoryAssets[0].image,
              }
            : undefined
        }
      />

      {/* =====================================================================
          2. INVENTIONS IN THIS CATEGORY
         ===================================================================== */}
      <section id="assets" className="scroll-mt-28 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 sm:pt-12">
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

      {/* =====================================================================
          3. HISTORICAL CONTEXT (3 Clear Stages)
         ===================================================================== */}
      <section
        id="story"
        className="scroll-mt-24 w-full py-12 sm:py-20 px-4 sm:px-8 border-t border-outline-variant/40 dark:border-white/10 bg-surface-container-low/50 dark:bg-[#0b0b0e]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl pb-6 sm:pb-8 border-b border-outline-variant/40 dark:border-white/10 mb-8 sm:mb-10">
            <h2 className="font-serif text-[clamp(24px,3vw,36px)] font-semibold tracking-[-0.02em] leading-[1.15] text-on-surface dark:text-white">
              How {category.title} Developed
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-on-surface-variant dark:text-neutral-300 leading-relaxed">
              {category.tagline}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                step: '01',
                title: 'Early Working Patents',
                desc: `Initial prototypes built in small workshops tested the mechanical ideas behind ${category.title.toLowerCase()}.`,
              },
              {
                step: '02',
                title: 'Shared Standards & Scale',
                desc: 'Precision metallurgy and interchangeable parts turned one-off inventions into everyday equipment.',
              },
              {
                step: '03',
                title: 'Preserved in Five Formats',
                desc: 'Each invention in this section is documented with a 2D patent plate, story, book dossier, 3D model, and video.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="p-6 border border-outline-variant/40 dark:border-white/10 bg-surface dark:bg-[#111114]"
              >
                <span className="font-mono text-xs font-semibold text-[#8c5d12] dark:text-[#d4af37]">
                  Stage {item.step}
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

          <blockquote className="mt-8 border-l-2 border-[#8c5d12] dark:border-[#d4af37] pl-5 py-1">
            <p className="font-serif italic text-base sm:text-lg text-on-surface dark:text-white">
              &ldquo;{category.quote}&rdquo;
            </p>
            <footer className="mt-1.5 text-xs font-mono text-on-surface-variant dark:text-neutral-400">
              Category {category.number} · {theme.title}
            </footer>
          </blockquote>
        </div>
      </section>

      {/* =====================================================================
          4. INTERACTIVE 3D MODELS & DOCUMENTARY VIDEOS
         ===================================================================== */}
      <section id="3d" className="scroll-mt-24 w-full">
        <SpatialGallery
          category={category.legacyCategoryKeys[0]}
          onSelectAssetForDossier={handleSelectAsset}
        />
      </section>

      <section id="videos" className="scroll-mt-24 w-full">
        <VideoGallery category={category.legacyCategoryKeys[0]} />
      </section>

      {/* =====================================================================
          5. NEIGHBORING CATEGORIES & RETURN TO THEME
         ===================================================================== */}
      <section className="w-full py-8 sm:py-10 px-4 sm:px-8 border-t border-outline-variant/40 dark:border-white/10 bg-surface dark:bg-[#050505]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {prevCat ? (
            <Link
              href={`/categories/${prevCat.slug}`}
              className="group flex items-center gap-3 min-h-[44px] py-2 text-sm text-on-surface-variant dark:text-neutral-300 hover:text-on-surface dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />
              <div className="min-w-0">
                <span className="block text-xs text-on-surface-variant dark:text-neutral-500">
                  Previous Category
                </span>
                <span className="font-serif font-medium text-on-surface dark:text-white truncate block">
                  {prevCat.number}. {prevCat.title}
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          <Link
            href={`/themes/${theme.slug}`}
            className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 border border-outline-variant/50 dark:border-white/15 hover:border-on-surface/50 dark:hover:border-white/35 text-xs sm:text-sm font-medium text-on-surface dark:text-neutral-200 transition-colors shrink-0"
          >
            All Categories in {theme.title}
          </Link>

          {nextCat ? (
            <Link
              href={`/categories/${nextCat.slug}`}
              className="group flex items-center justify-between sm:justify-end gap-3 min-h-[44px] py-2 text-sm text-on-surface-variant dark:text-neutral-300 hover:text-on-surface dark:hover:text-white transition-colors sm:text-right"
            >
              <div className="min-w-0">
                <span className="block text-xs text-on-surface-variant dark:text-neutral-500">
                  Next Category
                </span>
                <span className="font-serif font-medium text-on-surface dark:text-white truncate block">
                  {nextCat.number}. {nextCat.title}
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
