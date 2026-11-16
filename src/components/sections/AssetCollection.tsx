'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Search, SearchX, X } from 'lucide-react';
import { HistoricalAsset, CategoryFilterType } from '@/types/asset';
import AssetCard from '@/components/cards/AssetCard';

interface AssetCollectionProps {
  assets: HistoricalAsset[];
  onSelectAsset?: (asset: HistoricalAsset) => void;
  onExplore3D?: (asset: HistoricalAsset) => void;
  searchQuery?: string;
  onSearchChange?: (q: string) => void;
  activeCategory?: CategoryFilterType;
  onCategoryChange?: (category: CategoryFilterType) => void;
}

const BATCH_SIZE = 6;

export default function AssetCollection({
  assets,
  onSelectAsset,
  onExplore3D,
  searchQuery = '',
  onSearchChange,
  activeCategory,
}: AssetCollectionProps) {
  const [internalSearch, setInternalSearch] = useState('');
  const [visibleCount, setVisibleCount] = useState<number>(BATCH_SIZE);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const observerTargetRef = useRef<HTMLDivElement>(null);

  const effectiveSearch = searchQuery || internalSearch;

  const setSearch = (val: string) => {
    setInternalSearch(val);
    if (onSearchChange) onSearchChange(val);
  };

  // Support both explicit pre-filtered categoryAssets (50-category routes) and full lists
  const baseAssets =
    activeCategory && activeCategory !== 'ALL' && assets.some((a) => a.category !== activeCategory)
      ? assets
      : assets;

  const filteredAssets = baseAssets.filter((asset) => {
    const q = effectiveSearch.trim().toLowerCase();
    if (!q) return true;
    return (
      asset.title.toLowerCase().includes(q) ||
      asset.inventor.toLowerCase().includes(q) ||
      asset.patent.toLowerCase().includes(q) ||
      asset.desc.toLowerCase().includes(q)
    );
  });

  useEffect(() => {
    setVisibleCount(BATCH_SIZE);
  }, [activeCategory, effectiveSearch]);

  const loadMoreCards = useCallback(() => {
    if (isLoadingMore || visibleCount >= filteredAssets.length) return;
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, filteredAssets.length));
      setIsLoadingMore(false);
    }, 150);
  }, [isLoadingMore, visibleCount, filteredAssets.length]);

  useEffect(() => {
    const target = observerTargetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreCards();
        }
      },
      { threshold: 0.1, rootMargin: '200px' }
    );

    observer.observe(target);
    return () => {
      observer.unobserve(target);
    };
  }, [loadMoreCards]);

  const displayedAssets = filteredAssets.slice(0, visibleCount);
  const hasMore = visibleCount < filteredAssets.length;

  return (
    <section
      id="collection"
      className="scroll-mt-24 w-full py-8 sm:py-14 bg-surface dark:bg-[#050505] text-on-surface"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Clean Editorial Header + Direct Inline Search */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 pb-6 sm:pb-8 border-b border-outline-variant/40 dark:border-white/10 mb-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-[clamp(24px,3vw,38px)] font-semibold tracking-[-0.02em] leading-[1.15] text-on-surface dark:text-white">
              Inventions in This Category
            </h2>
            <p className="mt-2 text-sm sm:text-base text-on-surface-variant dark:text-neutral-300 leading-relaxed">
              Showing {displayedAssets.length} of {filteredAssets.length}{' '}
              {filteredAssets.length === 1 ? 'record' : 'records'}. Select any invention to inspect its 2D plate, story, book, 3D model, and video.
            </p>
          </div>

          <div className="relative w-full lg:w-80 shrink-0">
            <Search className="w-4 h-4 text-on-surface-variant dark:text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={effectiveSearch}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Filter by title, inventor, or patent..."
              aria-label="Filter inventions in this category"
              className="w-full min-h-[44px] pl-10 pr-10 py-2 bg-surface-container-lowest dark:bg-[#111114] border border-outline-variant/50 dark:border-white/15 focus:border-[#8c5d12] dark:focus:border-[#d4af37] text-sm text-on-surface dark:text-white placeholder:text-on-surface-variant/65 dark:placeholder:text-neutral-500 focus:outline-none transition-colors"
            />
            {effectiveSearch && (
              <button
                type="button"
                onClick={() => setSearch('')}
                aria-label="Clear filter"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 inline-flex items-center justify-center text-on-surface-variant hover:text-on-surface dark:text-neutral-400 dark:hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Asset Cards Grid */}
        {filteredAssets.length === 0 ? (
          <div className="py-16 px-4 text-center border border-dashed border-outline-variant/50 dark:border-white/15 bg-surface-container-low/50 dark:bg-[#0b0b0e]">
            <SearchX className="w-9 h-9 text-on-surface-variant/60 dark:text-neutral-500 mb-3 mx-auto" />
            <h3 className="font-serif text-xl font-medium text-on-surface dark:text-white mb-1">
              No matching inventions
            </h3>
            <p className="text-sm text-on-surface-variant dark:text-neutral-400">
              No records match &ldquo;{effectiveSearch}&rdquo; in this category.
            </p>
            {effectiveSearch && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="mt-4 inline-flex items-center justify-center min-h-[44px] px-5 py-2 border border-outline-variant/50 dark:border-white/20 text-sm font-medium text-on-surface dark:text-white hover:border-[#8c5d12] dark:hover:border-[#d4af37] transition-colors cursor-pointer"
              >
                Show all {baseAssets.length} records
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {displayedAssets.map((asset) => (
              <AssetCard
                key={asset.id}
                asset={asset}
                onSelect={onSelectAsset}
                onExplore3D={onExplore3D}
              />
            ))}
          </div>
        )}

        {/* Load more control + automatic observer sentinel */}
        {hasMore && (
          <div ref={observerTargetRef} className="pt-10 flex items-center justify-center">
            <button
              type="button"
              onClick={loadMoreCards}
              className="min-h-[44px] px-6 py-2.5 border border-outline-variant/50 dark:border-white/15 text-sm font-medium text-on-surface dark:text-neutral-200 hover:border-[#8c5d12] dark:hover:border-[#d4af37] transition-colors cursor-pointer"
            >
              Load more records ({filteredAssets.length - displayedAssets.length} remaining)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
