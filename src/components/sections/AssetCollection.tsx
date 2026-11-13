'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Search,
  SearchX,
  ChevronDown,
  Filter,
  X,
  Layers,
} from 'lucide-react';
import { HistoricalAsset, CategoryFilterType } from '@/types/asset';
import { OFFICIAL_18_CATEGORIES } from '@/lib/constants';
import AssetCard from '@/components/cards/AssetCard';
import TaxonomyModal from '@/components/common/TaxonomyModal';

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
  activeCategory: propActiveCategory,
  onCategoryChange,
}: AssetCollectionProps) {
  const [internalCategory, setInternalCategory] = useState<CategoryFilterType>('ENERGY');
  const activeCategory = propActiveCategory !== undefined ? propActiveCategory : internalCategory;

  const handleCategorySelect = (cat: CategoryFilterType) => {
    setInternalCategory(cat);
    if (onCategoryChange) {
      onCategoryChange(cat);
    }
  };

  // 18 official categories only (NO "All Cataloged" tab)
  const categoryTabs: { key: CategoryFilterType; label: string; shortName: string; emoji: string; count: number }[] =
    OFFICIAL_18_CATEGORIES.map((cat) => ({
      key: cat.key,
      label: cat.label,
      shortName: cat.shortName,
      emoji: cat.emoji,
      count: assets.filter((a) => a.category === cat.key).length,
    }));

  const [internalSearch, setInternalSearch] = useState('');
  const [isTaxonomyOpen, setIsTaxonomyOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState<number>(BATCH_SIZE);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const observerTargetRef = useRef<HTMLDivElement>(null);

  const effectiveSearch = searchQuery || internalSearch;

  // Filter strictly by the active category (NO 'ALL')
  const filteredAssets = assets.filter((asset) => {
    const matchesCategory = asset.category === activeCategory;
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

  // Auto-scroll the active category tab into view
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const activeBtn = document.getElementById(`cat-tab-${activeCategory}`);
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [activeCategory]);

  // Listen for category selection events dispatched from MobileBottomNav or Desktop Navbar
  useEffect(() => {
    const handleCategoryEvent = (e: Event) => {
      const ce = e as CustomEvent<string>;
      if (ce.detail !== undefined) {
        if (onSearchChange) onSearchChange(ce.detail);
        else setInternalSearch(ce.detail);
      }
    };
    window.addEventListener('heritage:filterCategory', handleCategoryEvent);
    return () => {
      window.removeEventListener('heritage:filterCategory', handleCategoryEvent);
    };
  }, [onSearchChange]);

  // Load next batch of cards
  const loadMoreCards = useCallback(() => {
    if (isLoadingMore || visibleCount >= filteredAssets.length) return;
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, filteredAssets.length));
      setIsLoadingMore(false);
    }, 180);
  }, [isLoadingMore, visibleCount, filteredAssets.length]);

  // IntersectionObserver for continuous infinite scroll
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
      if (target) observer.unobserve(target);
    };
  }, [loadMoreCards]);

  const displayedAssets = filteredAssets.slice(0, visibleCount);
  const hasMore = visibleCount < filteredAssets.length;

  return (
    <section
      id="collection"
      className="relative py-8 sm:py-16 md:py-20 bg-surface text-on-surface border-t border-outline-variant/20 scroll-mt-20"
    >
      {/* Background radial atmosphere */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-surface-container-high/40 via-surface to-surface" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-5 sm:mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-primary uppercase">
                Primary Registry
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl tracking-tight text-on-surface font-normal">
              Historical Asset Collection
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-on-surface-variant max-w-xl font-sans leading-relaxed">
              Curated physical-grade digital reconstructions of landmark industrial patents.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsTaxonomyOpen(true)}
              className="inline-flex items-center gap-2.5 px-4 py-2 sm:py-2.5 rounded-full border border-primary/40 bg-surface-container-high/70 hover:bg-surface-container-highest hover:border-primary text-xs font-mono text-primary transition-all active:scale-95 cursor-pointer"
              title="Search and filter patents by 18 engineering categories"
            >
              <Search className="w-3.5 h-3.5 text-primary" />
              <span className="font-medium tracking-wide">Filter &amp; Search</span>
            </button>
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-full bg-surface-container-low border border-outline-variant/30 text-[11px] font-mono text-on-surface-variant">
              <span>{filteredAssets.length} SPECIMENS IN CATEGORY</span>
            </div>
          </div>
        </div>

        {/* ============================================
            Filter Bar & Category Tabs (All 18 Categories)
           ============================================ */}
       

        {/* Active Filter / Search Pill Indicator */}
        {effectiveSearch && (
          <div className="mb-4 px-3.5 py-2 rounded-xl bg-surface-container-low border border-outline-variant/30 flex items-center justify-between gap-3 text-xs font-mono text-on-surface">
            <div className="flex items-center gap-2 min-w-0">
              <Filter className="w-3.5 h-3.5 text-primary shrink-0" />
              <span className="truncate text-on-surface-variant">
                Active Filter: <strong className="text-on-surface font-semibold">&ldquo;{effectiveSearch}&rdquo;</strong>
              </span>
              <span className="text-outline hidden sm:inline shrink-0">
                ({filteredAssets.length} {filteredAssets.length === 1 ? 'specimen' : 'specimens'} found)
              </span>
            </div>
            <button
              onClick={() => {
                if (onSearchChange) onSearchChange('');
                setInternalSearch('');
              }}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-primary border border-outline-variant/30 text-[11px] font-medium transition-colors cursor-pointer shrink-0"
            >
              <X className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>
        )}

        {/* Asset Cards Grid */}
        {filteredAssets.length === 0 ? (
          <div className="py-20 text-center rounded-2xl border border-dashed border-outline-variant/40 bg-surface-container-low">
            <SearchX className="w-10 h-10 text-on-surface-variant/50 mb-3 mx-auto" />
            <h4 className="font-serif text-lg text-on-surface mb-1">No Historical Assets Found</h4>
            <p className="text-xs text-on-surface-variant font-mono">
              No specimens match the criteria &ldquo;{effectiveSearch}&rdquo; in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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

        {/* Sentinel loader for infinite scroll */}
        {hasMore && (
          <div ref={observerTargetRef} className="py-12 flex items-center justify-center">
            <div className="flex items-center gap-2 text-xs font-mono text-on-surface-variant animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Cataloging additional artifacts...</span>
            </div>
          </div>
        )}
      </div>

      {/* 18 Categories Taxonomy Modal */}
      <TaxonomyModal
        isOpen={isTaxonomyOpen}
        onClose={() => setIsTaxonomyOpen(false)}
        onSelectCategory={(categoryName) => {
          setIsTaxonomyOpen(false);
          const found = OFFICIAL_18_CATEGORIES.find(
            (c) => categoryName && (
              c.label.toLowerCase().includes(categoryName.toLowerCase()) ||
              c.key.toLowerCase() === categoryName.toLowerCase() ||
              c.shortName.toLowerCase().includes(categoryName.toLowerCase())
            )
          );
          if (found) {
            handleCategorySelect(found.key);
          }
        }}
      />
    </section>
  );
}
