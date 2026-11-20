'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { AssetCategoryRecord, ThemeRecord } from '@/types/taxonomy';
import { HistoricalAsset } from '@/types/asset';
import { taxonomyService } from '@/services/taxonomyService';
import { assetService } from '@/services/assetService';
import { useAuth } from '@/context/AuthContext';
import AssetCollection from '@/components/sections/AssetCollection';
import SpatialGallery from '@/components/sections/SpatialGallery';
import VideoGallery from '@/components/sections/VideoGallery';
import MuseumWayfinding from '@/components/common/MuseumWayfinding';
import { MuseumPlinthHero } from '@/components/sections/MuseumPlinthHero';
import AuthUnlockGate from '@/components/common/AuthUnlockGate';

interface CategorySlugViewClientProps {
  categorySlug: string;
}

export default function CategorySlugViewClient({
  categorySlug,
}: CategorySlugViewClientProps) {
  const router = useRouter();
  const { isAuthenticated, isLoading: authLoading } = useAuth();

  const [category, setCategory] = useState<AssetCategoryRecord | null>(null);
  const [theme, setTheme] = useState<ThemeRecord | null>(null);
  const [categoryAssets, setCategoryAssets] = useState<HistoricalAsset[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    try {
      sessionStorage.setItem('ha_last_category_slug', categorySlug);
    } catch {
      // ignore storage unavailable
    }
  }, [categorySlug]);

  useEffect(() => {
    if (authLoading) return;
    if (!isAuthenticated) {
      setCategory(null);
      setCategoryAssets([]);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    Promise.all([
      taxonomyService.getCategoryBySlug(categorySlug),
      assetService
        .getAssets({ category_slug: categorySlug })
        .catch(() => [] as HistoricalAsset[]),
    ])
      .then(async ([loadedCat, assets]) => {
        if (cancelled) return;
        setCategory(loadedCat);
        setCategoryAssets(assets);
        if (loadedCat.theme) {
          setTheme(loadedCat.theme);
        } else {
          const allThemes = await taxonomyService.getThemes().catch(() => []);
          const parentTheme = allThemes.find((t) => t.id === loadedCat.theme_id) || null;
          if (!cancelled) setTheme(parentTheme);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err);
          setCategory(null);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [authLoading, isAuthenticated, categorySlug]);

  const handleSelectAsset = (asset: HistoricalAsset) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    router.push(`/inventions/${asset.id}`);
  };

  if (!authLoading && !isAuthenticated) {
    return (
      <div className="min-h-screen w-full bg-surface dark:bg-[#050505] px-4 sm:px-8 py-12">
        <AuthUnlockGate nextPath={`/categories/${categorySlug}`} />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-surface dark:bg-[#050505] px-4 sm:px-8 py-16">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="h-56 bg-surface-container-low dark:bg-[#0e0e12] animate-pulse border border-outline-variant/30 dark:border-white/10" />
          <div className="h-96 bg-surface-container-low dark:bg-[#0e0e12] animate-pulse border border-outline-variant/30 dark:border-white/10" />
        </div>
      </div>
    );
  }

  if (error || !category) {
    return (
      <div className="min-h-screen w-full bg-surface dark:bg-[#050505] px-4 sm:px-8 py-12">
        <AuthUnlockGate nextPath={`/categories/${categorySlug}`} error={error} />
      </div>
    );
  }

  const siblings = [...(theme?.categories || [])].sort(
    (a, b) => a.category_slot - b.category_slot
  );
  const catIndex = siblings.findIndex((c) => c.slug === category.slug);
  const prevCat = catIndex > 0 ? siblings[catIndex - 1] : null;
  const nextCat =
    catIndex >= 0 && catIndex < siblings.length - 1
      ? siblings[catIndex + 1]
      : null;

  const epochs =
    Array.isArray(category.epoch_timeline_json) &&
    category.epoch_timeline_json.length > 0
      ? category.epoch_timeline_json
      : [
          {
            year: 'Phase 01',
            title: 'Early Working Patents',
            detail: `Initial workshop prototypes behind ${category.name.toLowerCase()}.`,
          },
          {
            year: 'Phase 02',
            title: 'Shared Standards & Scale',
            detail: 'Precision metallurgy and interchangeable parts standardized mechanisms.',
          },
          {
            year: 'Phase 03',
            title: 'Preserved in Five Reusable Formats',
            detail: 'Each patent model is documented with 2D plates, narrated stories, illustrated books, 3D reconstructions, and short motion films.',
          },
        ];

  const publicAttrs = (category.attributes || []).filter((a) => a.is_public);

  return (
    <div className="flex flex-col w-full min-h-screen bg-surface dark:bg-[#050505] selection:bg-primary/30">
      <MuseumPlinthHero
        themeSlug={theme?.slug || 'industrial-innovation-manufacturing'}
        heroImage={category.image}
        classificationTag={`Category ${String(category.global_number).padStart(2, '0')} of 50 · ${theme?.title || 'Theme'} · ${categoryAssets.length} Inventions`}
        title={category.name}
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


      {publicAttrs.length > 0 && (
        <div className="w-full border-b border-outline-variant/35 dark:border-white/10 bg-surface-container-low/50 dark:bg-[#0b0b0e] px-4 sm:px-8 py-3">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-3">
            {publicAttrs.map((attr) => (
              <span
                key={attr.id}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-outline-variant/40 dark:border-white/15 bg-surface dark:bg-[#111114] text-xs font-mono"
              >
                <span className="text-on-surface-variant dark:text-neutral-400">
                  {attr.attr_label}:
                </span>
                <span className="text-on-surface dark:text-white font-medium">
                  {attr.attr_value}
                </span>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* INVENTIONS IN THIS CATEGORY */}
      <section id="assets" className="scroll-mt-28 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 sm:pt-12">
          <MuseumWayfinding
            step={3}
            themeSlug={theme?.slug}
            themeTitle={theme?.title}
          />
        </div>
        <AssetCollection
          assets={categoryAssets}
          onSelectAsset={handleSelectAsset}
          onExplore3D={(asset) => router.push(`/inventions/${asset.id}#3d`)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeCategory={category.code || undefined}
        />
      </section>

      {/* HISTORICAL TIMELINE STAGES (`epoch_timeline_json`) */}
      <section
        id="story"
        className="scroll-mt-24 w-full py-12 sm:py-20 px-4 sm:px-8 border-t border-outline-variant/40 dark:border-white/10 bg-surface-container-low/50 dark:bg-[#0b0b0e]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl pb-6 sm:pb-8 border-b border-outline-variant/40 dark:border-white/10 mb-8 sm:mb-10">
            <h2 className="font-serif text-[clamp(24px,3vw,36px)] font-semibold tracking-[-0.02em] leading-[1.15] text-on-surface dark:text-white">
              How {category.name} Developed
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-on-surface-variant dark:text-neutral-300 leading-relaxed">
              {category.tagline}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {epochs.map((item, idx) => (
              <div
                key={idx}
                className="p-6 border border-outline-variant/40 dark:border-white/10 bg-surface dark:bg-[#111114]"
              >
                <span className="font-mono text-xs font-semibold text-[#8c5d12] dark:text-[#d4af37]">
                  {item.year}
                </span>
                <h3 className="mt-2 font-serif text-xl font-semibold text-on-surface dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-on-surface-variant dark:text-neutral-300 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <blockquote className="mt-8 border-l-2 border-[#8c5d12] dark:border-[#d4af37] pl-5 py-1">
            <p className="font-serif italic text-base sm:text-lg text-on-surface dark:text-white">
              &ldquo;{category.quote}&rdquo;
            </p>
            <footer className="mt-1.5 text-xs font-mono text-on-surface-variant dark:text-neutral-400">
              Category {String(category.global_number).padStart(2, '0')} ·{' '}
              {theme?.title || 'Heritage Archive'}
            </footer>
          </blockquote>

          {categoryAssets.length > 0 && (
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {categoryAssets.slice(0, 4).map((asset) => (
                <Link
                  key={`strip-${asset.id}`}
                  href={`/inventions/${asset.id}`}
                  className="group border border-outline-variant/40 dark:border-white/10 bg-surface dark:bg-[#111114] overflow-hidden hover:border-[#8c5d12]/60 dark:hover:border-[#d4af37]/60 transition-colors"
                >
                  <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-200 dark:bg-neutral-900">
                    <img
                      src={asset.thumbnail || asset.image}
                      alt={asset.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-3">
                    <span className="font-mono text-[11px] text-[#8c5d12] dark:text-[#d4af37]">
                      {asset.year || asset.patentDate}
                    </span>
                    <div className="mt-0.5 font-serif text-sm font-medium text-on-surface dark:text-white truncate group-hover:underline">
                      {asset.title}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="3d" className="scroll-mt-24 w-full">
        <SpatialGallery
          assets={categoryAssets}
          category={category.code || undefined}
          onSelectAssetForDossier={handleSelectAsset}
        />
      </section>

      <section id="videos" className="scroll-mt-24 w-full">
        <VideoGallery category={category.code || undefined} />
      </section>

      {/* NEIGHBORING CATEGORIES */}
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
                  {String(prevCat.global_number).padStart(2, '0')}. {prevCat.name}
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          <Link
            href={theme ? `/themes/${theme.slug}` : '/#themes'}
            className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 border border-outline-variant/50 dark:border-white/15 hover:border-on-surface/50 dark:hover:border-white/35 text-xs sm:text-sm font-medium text-on-surface dark:text-neutral-200 transition-colors shrink-0"
          >
            {theme ? `All Categories in ${theme.title}` : 'All Themes'}
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
                  {String(nextCat.global_number).padStart(2, '0')}. {nextCat.name}
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
