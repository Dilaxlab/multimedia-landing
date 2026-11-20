'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Plus } from 'lucide-react';
import { taxonomyService } from '@/services/taxonomyService';
import { assetService } from '@/services/assetService';
import { useAuth } from '@/context/AuthContext';
import { ThemeRecord } from '@/types/taxonomy';
import { HistoricalAsset } from '@/types/asset';
import MuseumWayfinding from '@/components/common/MuseumWayfinding';
import { MuseumPlinthHero } from '@/components/sections/MuseumPlinthHero';
import AuthUnlockGate from '@/components/common/AuthUnlockGate';

interface ThemeViewClientProps {
  themeSlug: string;
}

export default function ThemeViewClient({ themeSlug }: ThemeViewClientProps) {
  const { isAuthenticated, isLoading: authLoading } = useAuth();

  const [theme, setTheme] = useState<ThemeRecord | null>(null);
  const [allThemes, setAllThemes] = useState<ThemeRecord[]>([]);
  const [themeAssets, setThemeAssets] = useState<HistoricalAsset[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);
  const [activeCatIdx, setActiveCatIdx] = useState(0);

  useEffect(() => {
    setActiveCatIdx(0);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [themeSlug]);

  useEffect(() => {
    if (authLoading) return;
    if (!isAuthenticated) {
      setTheme(null);
      setThemeAssets([]);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    Promise.all([
      taxonomyService.getThemeBySlug(themeSlug),
      taxonomyService.getThemes().catch(() => [] as ThemeRecord[]),
      assetService.getAssets({ theme_slug: themeSlug }).catch(() => [] as HistoricalAsset[]),
    ])
      .then(([loadedTheme, themesList, assetsList]) => {
        if (cancelled) return;
        setTheme(loadedTheme);
        setAllThemes(
          [...themesList].sort((a, b) => a.theme_slot - b.theme_slot)
        );
        setThemeAssets(assetsList);
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err);
          setTheme(null);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [authLoading, isAuthenticated, themeSlug]);

  if (!authLoading && !isAuthenticated) {
    return (
      <div className="min-h-screen w-full bg-surface dark:bg-[#050505] px-4 sm:px-8 py-12">
        <AuthUnlockGate nextPath={`/themes/${themeSlug}`} />
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

  if (error || !theme) {
    return (
      <div className="min-h-screen w-full bg-surface dark:bg-[#050505] px-4 sm:px-8 py-12">
        <AuthUnlockGate nextPath={`/themes/${themeSlug}`} error={error} />
      </div>
    );
  }

  const categories = [...(theme.categories || [])].sort(
    (a, b) => a.category_slot - b.category_slot
  );
  const sampleRecords = themeAssets.slice(0, 6);
  const currentIdx = allThemes.findIndex((t) => t.slug === theme.slug);
  const prevTheme = currentIdx > 0 ? allThemes[currentIdx - 1] : null;
  const nextTheme =
    currentIdx >= 0 && currentIdx < allThemes.length - 1
      ? allThemes[currentIdx + 1]
      : null;

  const publicAttrs = (theme.attributes || []).filter((a) => a.is_public);

  return (
    <div className="flex flex-col w-full min-h-screen bg-surface dark:bg-[#050505] selection:bg-primary/30">
      <MuseumPlinthHero
        themeSlug={theme.slug}
        classificationTag={`Theme ${String(theme.theme_slot).padStart(2, '0')} of 10 · ${categories.length} Categories · ${themeAssets.length} Inventions`}
        title={theme.title}
        description={theme.description}
        primaryCta={{
          label: `Browse ${categories.length} Categories`,
          href: '#categories',
        }}
        secondaryCta={{
          label: 'Sample Inventions',
          href: '#highlights',
        }}
        badgeText={`${theme.category_range} · All Formats Included`}
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

      {/* THE 5 CATEGORIES IN THIS THEME */}
      <section
        id="categories"
        className="scroll-mt-28 w-full py-12 sm:py-20 px-4 sm:px-8 bg-surface dark:bg-[#050505]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 sm:pb-8 border-b border-outline-variant/40 dark:border-white/10 mb-6">
            <div className="max-w-2xl">
              <h2 className="font-serif text-[clamp(24px,3vw,38px)] font-semibold tracking-[-0.02em] leading-[1.15] text-on-surface dark:text-white [text-wrap:balance]">
                {categories.length} Thematic Categories
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-on-surface-variant dark:text-neutral-300 leading-relaxed">
                Select any category below to explore its curated taglines, historical patent models, interactive 3D reconstructions, archival plates, and illustrated stories.
              </p>
            </div>
            <p className="text-xs sm:text-sm font-mono text-on-surface-variant dark:text-neutral-400 shrink-0">
              {theme.category_range}
            </p>
          </div>

          <MuseumWayfinding
            step={2}
            themeSlug={theme.slug}
            themeTitle={theme.title}
          />

          <div className="flex flex-col lg:flex-row gap-4 lg:h-[540px] w-full">
            {categories.map((cat, idx) => {
              const isActive = idx === activeCatIdx;
              const coverImage = cat.image || theme.diorama_image_url;

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
                  {!isActive && (
                    <div className="w-full h-full flex flex-row lg:flex-col items-center justify-between px-5 lg:py-7 lg:px-3">
                      <span className="lg:order-2 font-serif font-semibold text-sm sm:text-base lg:text-lg text-on-surface dark:text-white truncate lg:overflow-visible lg:whitespace-nowrap lg:-rotate-90 lg:mb-16 lg:w-8 lg:flex lg:items-center lg:justify-start">
                        {cat.name}
                      </span>
                      <span className="lg:order-1 w-7 h-7 flex items-center justify-center text-on-surface dark:text-white shrink-0">
                        <Plus className="w-6 h-6 stroke-[1.75]" />
                      </span>
                    </div>
                  )}

                  {isActive && (
                    <div className="w-full h-full flex flex-col justify-between p-5 sm:p-6 lg:p-7 animate-in fade-in duration-300">
                      <div className="relative w-full h-40 sm:h-48 lg:h-52 rounded-lg overflow-hidden bg-neutral-100 shrink-0">
                        {coverImage && (
                          <img
                            src={coverImage}
                            alt={cat.cover_alt_text || cat.name}
                            className="w-full h-full object-cover object-center"
                          />
                        )}
                        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-amber-300 text-xs font-mono">
                          <span>#{String(cat.global_number).padStart(2, '0')}</span>
                          {typeof cat.assets_count === 'number' && (
                            <span>· {cat.assets_count} Assets</span>
                          )}
                        </div>
                      </div>

                      <div className="mt-4 lg:mt-5 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900 leading-snug">
                            {cat.name}
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

      {/* SAMPLE INVENTIONS */}
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
                Open any record directly below to inspect its 2D patent plate, historical story, archival book, 3D model, and signed video walkthrough.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {sampleRecords.map((asset) => (
              <Link
                key={asset.id}
                href={`/inventions/${asset.id}`}
                className="group flex flex-col border border-outline-variant/40 dark:border-white/10 bg-surface dark:bg-[#111114] hover:border-[#8c5d12]/60 dark:hover:border-[#d4af37]/60 transition-colors overflow-hidden"
              >
                <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-200 dark:bg-neutral-900 border-b border-outline-variant/30 dark:border-white/10">
                  <img
                    src={asset.thumbnail || asset.image}
                    alt={asset.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs font-mono text-on-surface-variant dark:text-neutral-400">
                      <span>{asset.year || asset.patentDate}</span>
                      <span>{asset.patentNumber || asset.patent}</span>
                    </div>

                    <h3 className="mt-2.5 font-serif text-lg sm:text-xl font-semibold leading-snug text-on-surface dark:text-white group-hover:text-[#8c5d12] dark:group-hover:text-[#d4af37] transition-colors">
                      {asset.title}
                    </h3>

                    <p className="mt-1 text-xs font-medium text-on-surface-variant dark:text-neutral-400">
                      {asset.inventor}
                      {asset.location ? ` · ${asset.location}` : ''}
                    </p>

                    <p className="mt-2.5 text-sm text-on-surface-variant dark:text-neutral-300 leading-relaxed line-clamp-2">
                      {asset.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-outline-variant/30 dark:border-white/10 flex items-center justify-between text-xs font-medium text-on-surface dark:text-neutral-200 group-hover:text-[#8c5d12] dark:group-hover:text-[#d4af37] transition-colors">
                    <span>Open 5-format record</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEIGHBORING THEMES */}
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
                  {String(prevTheme.theme_slot).padStart(2, '0')}. {prevTheme.title}
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
                  {String(nextTheme.theme_slot).padStart(2, '0')}. {nextTheme.title}
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
