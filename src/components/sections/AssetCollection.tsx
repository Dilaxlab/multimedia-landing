'use client';

import React, { useState } from 'react';
import { Network, Search, X, SearchX, ShieldCheck } from 'lucide-react';
import { HistoricalAsset, CategoryFilterType } from '@/types/asset';
import AssetCard from '@/components/cards/AssetCard';
import TaxonomyModal from '@/components/common/TaxonomyModal';

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

  return (
    <section id="collection" className="relative py-24 bg-surface text-on-surface border-t border-outline-variant/20 scroll-mt-20">
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
            <p className="mt-3 text-sm md:text-base text-on-surface-variant max-w-2xl font-sans leading-relaxed">
              Curated physical-grade digital reconstructions of landmark industrial patents.
              Every specimen is verified against 19th-century patent office records and modeled to microscopic tolerance.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsTaxonomyOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-primary/30 bg-surface-container-high/60 hover:bg-surface-container-highest hover:border-primary text-xs font-mono text-primary transition-all shadow-sm"
            >
              <Network className="w-4 h-4 text-primary" />
              <span>View 64 Disciplines</span>
            </button>
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-full bg-surface-container-low border border-outline-variant/30 text-[11px] font-mono text-on-surface-variant">
              <span>500+ ASSETS INDEXED</span>
            </div>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="mb-10 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-3 rounded-2xl bg-surface-container-low border border-outline-variant/30">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none -mx-1 px-1 scroll-smooth">
            {CATEGORY_TABS.map((tab) => {
              const isActive = activeCategory === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveCategory(tab.key)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
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

          {/* Search Input */}
          <div className="relative min-w-[280px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4 pointer-events-none" />
            <input
              type="text"
              placeholder="Search inventor, patent, or keyword..."
              value={effectiveSearch}
              onChange={(e) => {
                if (onSearchChange) onSearchChange(e.target.value);
                setInternalSearch(e.target.value);
              }}
              className="w-full bg-surface-container-high border border-outline-variant/20 rounded-xl pl-9 pr-8 py-2 text-xs font-mono text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary transition-colors"
            />
            {effectiveSearch && (
              <button
                onClick={() => {
                  if (onSearchChange) onSearchChange('');
                  setInternalSearch('');
                }}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Asset Cards Grid */}
        {filteredAssets.length === 0 ? (
          <div className="py-20 text-center rounded-2xl border border-dashed border-outline-variant/40 bg-surface-container-low">
            <SearchX className="w-10 h-10 text-on-surface-variant/50 mb-3 mx-auto" />
            <h4 className="font-serif text-lg text-on-surface mb-1">No Historical Assets Found</h4>
            <p className="text-xs text-on-surface-variant font-mono">
              No specimens match the criteria &ldquo;{effectiveSearch}&rdquo; in category &ldquo;{activeCategory}&rdquo;.
            </p>
            <button
              onClick={() => {
                setActiveCategory('ALL');
                if (onSearchChange) onSearchChange('');
                setInternalSearch('');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-surface-container text-xs font-mono text-primary hover:text-on-surface border border-primary/30"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredAssets.map((asset) => (
              <AssetCard
                key={asset.id}
                asset={asset}
                onSelect={onSelectAsset}
                onExplore3D={onExplore3D}
              />
            ))}
          </div>
        )}

        {/* Footnote on Reconstructed Assets */}
        <div className="mt-12 p-4 rounded-xl bg-surface-container-low/50 border border-outline-variant/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] font-mono text-on-surface-variant">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
            <span>All renderings use historically reconstructed 3D cad visuals rather than degraded archival photographs.</span>
          </div>
          <span className="text-outline">IAMS STANDARD REF #882-C</span>
        </div>
      </div>

      {/* 64 Disciplines Taxonomy Modal */}
      <TaxonomyModal
        isOpen={isTaxonomyOpen}
        onClose={() => setIsTaxonomyOpen(false)}
        onSelectCategory={(cat) => {
          // search filter with selected category
          if (onSearchChange) onSearchChange(cat.split(' ')[0]);
          else setInternalSearch(cat.split(' ')[0]);
        }}
      />
    </section>
  );
}
