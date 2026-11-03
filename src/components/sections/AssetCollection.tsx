'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Network,
  Search,
  X,
  SearchX,
  ShieldCheck,
  Loader2,
  ChevronDown,
  CheckCheck,
  Grid2x2,
  RectangleVertical,
} from 'lucide-react';
import { HistoricalAsset, CategoryFilterType } from '@/types/asset';
import AssetCard from '@/components/cards/AssetCard';
import TaxonomyModal from '@/components/common/TaxonomyModal';
import { LayoutGrid, Rows3 } from 'lucide-react';


interface AssetCollectionProps {
  assets: HistoricalAsset[];
  onSelectAsset?: (asset: HistoricalAsset) => void;
  onExplore3D?: (asset: HistoricalAsset) => void;
  searchQuery?: string;
  onSearchChange?: (q: string) => void;
}

const CATEGORY_TABS: { key: CategoryFilterType; label: string; count: number }[] = [
  { key: 'ALL', label: 'All Cataloged', count: 8 },
  { key: 'TELECOM', label: 'Telephony & Acoustic', count: 2 },
  { key: 'DOMESTIC', label: 'Domestic Mechanics', count: 1 },
  { key: 'WIND', label: 'Wind & Rotary Forces', count: 1 },
  { key: 'AERO', label: 'Aeronautics', count: 1 },
  { key: 'COMPUTING', label: 'Computing Engines', count: 1 },
  { key: 'TIME', label: 'Horology & Precision', count: 1 },
];

const BATCH_SIZE = 6;

export default function AssetCollection({
  assets,
  onSelectAsset,
  onExplore3D,
  searchQuery = '',
  onSearchChange,
}: AssetCollectionProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilterType>('ALL');
  const [internalSearch, setInternalSearch] = useState('');
  const [isTaxonomyOpen, setIsTaxonomyOpen] = useState(false);
  const [mobileColumns, setMobileColumns] = useState<'2' | '1'>('2');
  const [visibleCount, setVisibleCount] = useState<number>(BATCH_SIZE);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const observerTargetRef = useRef<HTMLDivElement>(null);

  const effectiveSearch = searchQuery || internalSearch;

  const filteredAssets = assets.filter((asset) => {
    const matchesCategory =
      activeCategory === 'ALL' || asset.category === activeCategory;
    const matchesSearch =
      effectiveSearch === '' ||
      asset.title.toLowerCase().includes(effectiveSearch.toLowerCase()) ||
      asset.inventor.toLowerCase().includes(effectiveSearch.toLowerCase()) ||
      asset.patent.toLowerCase().includes(effectiveSearch.toLowerCase()) ||
      asset.desc.toLowerCase().includes(effectiveSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Reset to initial batch whenever search query or category filter changes
  useEffect(() => {
    setVisibleCount(BATCH_SIZE);
  }, [activeCategory, effectiveSearch]);

  // Load next batch of cards
  const loadMoreCards = useCallback(() => {
    if (isLoadingMore || visibleCount >= filteredAssets.length) return;
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, filteredAssets.length));
      setIsLoadingMore(false);
    }, 350);
  }, [isLoadingMore, visibleCount, filteredAssets.length]);

  // Infinite Scroll: triggers loadMoreCards as user scrolls into the sentinel element
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreCards();
        }
      },
      { threshold: 0.1, rootMargin: '120px' }
    );

    const target = observerTargetRef.current;
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [loadMoreCards]);

  const displayedAssets = filteredAssets.slice(0, visibleCount);
  const hasMore = visibleCount < filteredAssets.length;

  return (
    <section
      id="collection"
      className="relative py-16 sm:py-24 bg-surface text-on-surface border-t border-outline-variant/20 scroll-mt-20"
    >
      {/* Background radial atmosphere */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-surface-container-high/40 via-surface to-surface" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-primary uppercase">
                Primary Registry
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl tracking-tight text-on-surface font-normal">
              Historical Asset Collection
            </h2>
            
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsTaxonomyOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-primary/30 bg-surface-container-high/60 hover:bg-surface-container-highest hover:border-primary text-xs font-mono text-primary transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <Network className="w-4 h-4 text-primary" />
              <span>View 64 Disciplines</span>
            </button>
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-full bg-surface-container-low border border-outline-variant/30 text-[11px] font-mono text-on-surface-variant">
              <span>500+ ASSETS INDEXED</span>
            </div>
          </div>
        </div>

        {/* ============================================
    Filter Bar (Category Tabs only) — mobile scrollable
   ============================================ */}
        <div className="mb-3 p-3 rounded-2xl bg-surface-container-low border border-outline-variant/30">
          <div className="relative min-w-0">
            <div
              className="flex flex-nowrap items-center gap-1.5 overflow-x-auto pb-1 -mx-1 px-1 scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {CATEGORY_TABS.map((tab) => {
                const isActive = activeCategory === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveCategory(tab.key)}
                    className={`shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? 'bg-primary text-surface-container-lowest font-medium shadow-md'
                        : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
            {/* Right fade hint so users know it scrolls */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-surface-container-low to-transparent" />
          </div>
        </div>

        {/* ============================================
    Mobile View Switcher — own row, right-aligned
   ============================================ */}
        <div className="mb-6 flex sm:hidden items-center justify-end">
          <div className="relative flex items-center p-1 bg-surface-container rounded-xl border border-outline-variant/30">
            {/* sliding highlight */}
            <span
              className={`absolute top-1 bottom-1 w-[calc(50%-0.25rem)] left-1 rounded-lg bg-primary shadow-sm transition-transform duration-300 ease-out ${
                mobileColumns === '2' ? 'translate-x-0' : 'translate-x-full'
              }`}
            />
            <button
              onClick={() => setMobileColumns('2')}
              className={`relative z-10 w-9 h-7 flex items-center justify-center rounded-lg transition-colors cursor-pointer ${
                mobileColumns === '2'
                  ? 'text-surface-container-lowest'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
              title="Grid View (2 per row)"
              aria-label="Grid view"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setMobileColumns('1')}
              className={`relative z-10 w-9 h-7 flex items-center justify-center rounded-lg transition-colors cursor-pointer ${
                mobileColumns === '1'
                  ? 'text-surface-container-lowest'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
              title="List View (1 per row)"
              aria-label="List view"
            >
              <Rows3 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Asset Cards Grid — Mobile: 2 Columns by default; Desktop: 3 Columns */}
        {filteredAssets.length === 0 ? (
          <div className="py-20 text-center rounded-2xl border border-dashed border-outline-variant/40 bg-surface-container-low">
            <SearchX className="w-10 h-10 text-on-surface-variant/50 mb-3 mx-auto" />
            <h4 className="font-serif text-lg text-on-surface mb-1">No Historical Assets Found</h4>
            <p className="text-xs text-on-surface-variant font-mono">
              No specimens match the criteria &ldquo;{effectiveSearch}&rdquo; in category &ldquo;
              {activeCategory}&rdquo;.
            </p>
            <button
              onClick={() => {
                setActiveCategory('ALL');
                if (onSearchChange) onSearchChange('');
                setInternalSearch('');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-surface-container text-xs font-mono text-primary hover:text-on-surface border border-primary/30 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="flex flex-col">
            <div
              className={`grid ${
                mobileColumns === '2' ? 'grid-cols-2' : 'grid-cols-1'
              } md:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6`}
            >
              {displayedAssets.map((asset) => (
                <AssetCard
                  key={asset.id}
                  asset={asset}
                  onSelect={onSelectAsset}
                  onExplore3D={onExplore3D}
                />
              ))}
            </div>

            {/* Infinite Scroll Sentinel */}
            <div ref={observerTargetRef} className="h-6 w-full" />

            {/* Infinite Scroll & Load More Controls */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3">
              {hasMore ? (
                <div className="flex flex-col items-center gap-3">
                  <button
                    onClick={loadMoreCards}
                    disabled={isLoadingMore}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface-container-high hover:bg-surface-container-highest border border-primary/40 hover:border-primary text-xs font-mono text-primary transition-all shadow-lg active:scale-95 cursor-pointer disabled:opacity-50"
                  >
                    {isLoadingMore ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-primary" />
                        <span>Unlocking Next Archival Batch...</span>
                      </>
                    ) : (
                      <>
                        <span>Load More Inventions</span>
                        <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <span className="text-[11px] font-mono text-on-surface-variant">
                    Showing {displayedAssets.length} of {filteredAssets.length} Inventions • Scroll
                    down to auto-load
                  </span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-low border border-outline-variant/30 text-[11px] font-mono text-on-surface-variant">
                  <CheckCheck className="w-4 h-4 text-emerald-400" />
                  <span>All {filteredAssets.length} verified archival specimens loaded</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Footnote on Reconstructed Assets */}
        <div className="mt-12 p-4 rounded-xl bg-surface-container-low/50 border border-outline-variant/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] font-mono text-on-surface-variant">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
            <span>
              All renderings use historically reconstructed 3D cad visuals rather than degraded
              archival photographs.
            </span>
          </div>
          <span className="text-outline">IAMS STANDARD REF #882-C</span>
        </div>
      </div>

      {/* 64 Disciplines Taxonomy Modal */}
      <TaxonomyModal
        isOpen={isTaxonomyOpen}
        onClose={() => setIsTaxonomyOpen(false)}
        onSelectCategory={(cat) => {
          if (onSearchChange) onSearchChange(cat.split(' ')[0]);
          else setInternalSearch(cat.split(' ')[0]);
        }}
      />
    </section>
  );
}
