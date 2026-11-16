'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
  RotateCw,
  Sun,
  Moon,
  Maximize2,
  X,
  ArrowRight,
  Layers,
  RotateCcw,
  Search,
  Grid2x2,
} from 'lucide-react';
import { MOCK_HISTORICAL_ASSETS } from '@/lib/constants';
import { HistoricalAsset, CategoryFilterType } from '@/types/asset';

const ModelViewer3D = dynamic(() => import('@/components/viewers/ModelViewer3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-950 text-neutral-300 text-xs font-mono gap-3">
      <div className="w-7 h-7 rounded-full border-2 border-white/20 border-t-[#d4af37] animate-spin" />
      <span>Loading interactive 3D model...</span>
    </div>
  ),
});

interface SpatialGalleryProps {
  onSelectAssetForDossier?: (asset: HistoricalAsset) => void;
  selectedAssetId?: string;
  onSelectAssetId?: (id: string) => void;
  category?: CategoryFilterType;
}

export default function SpatialGallery({
  selectedAssetId: externalAssetId,
  onSelectAssetId,
  category,
}: SpatialGalleryProps) {
  const [internalAssetId, setInternalAssetId] = useState<string>('HA-107');
  const selectedAssetId = externalAssetId || internalAssetId;

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isBrowserModalOpen, setIsBrowserModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (category) {
      const catAsset = MOCK_HISTORICAL_ASSETS.find((a) => a.category === category);
      if (catAsset) {
        setInternalAssetId(catAsset.id);
        if (onSelectAssetId) onSelectAssetId(catAsset.id);
      }
    }
  }, [category, onSelectAssetId]);

  const handleSelectAssetId = (id: string) => {
    setInternalAssetId(id);
    if (onSelectAssetId) onSelectAssetId(id);
  };

  const featuredAssets = useMemo(() => {
    return category
      ? MOCK_HISTORICAL_ASSETS.filter((a) => a.category === category)
      : MOCK_HISTORICAL_ASSETS;
  }, [category]);

  const filteredAssets = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return featuredAssets;
    return featuredAssets.filter(
      (asset) =>
        asset.title.toLowerCase().includes(q) ||
        asset.inventor.toLowerCase().includes(q) ||
        asset.patent.toLowerCase().includes(q) ||
        asset.id.toLowerCase().includes(q)
    );
  }, [featuredAssets, searchQuery]);

  const [isWireframe, setIsWireframe] = useState(false);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [lightingMode, setLightingMode] = useState<'spotlight' | 'ambient'>('spotlight');
  const [zoomLevel, setZoomLevel] = useState(4.8);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const viewerContainerRef = useRef<HTMLDivElement>(null);

  const currentAsset =
    filteredAssets.find((a) => a.id === selectedAssetId) ||
    featuredAssets.find((a) => a.id === selectedAssetId) ||
    filteredAssets[0] ||
    featuredAssets[0];

  const handleReset = () => {
    setZoomLevel(4.8);
    setIsAutoRotating(true);
    setIsWireframe(false);
    setActiveHotspot(null);
  };

  const handleToggleFullscreen = () => {
    if (!viewerContainerRef.current) return;
    if (!document.fullscreenElement) {
      viewerContainerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  if (!currentAsset) return null;

  return (
    <section
      id="gallery3d"
      className="scroll-mt-24 w-full py-12 sm:py-20 bg-surface-container-low/50 dark:bg-[#08080a] text-on-surface border-t border-outline-variant/40 dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Clean Header + Model Selector */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 pb-6 sm:pb-8 border-b border-outline-variant/40 dark:border-white/10 mb-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-[clamp(24px,3vw,38px)] font-semibold tracking-[-0.02em] leading-[1.15] text-on-surface dark:text-white">
              Interactive 3D Models
            </h2>
            <p className="mt-2 text-sm sm:text-base text-on-surface-variant dark:text-neutral-300 leading-relaxed">
              Rotate, zoom, and inspect reconstructed machines from any angle directly in your browser.
            </p>
          </div>

          <div className="flex items-center gap-2.5 w-full lg:w-auto">
            <div className="relative flex-1 lg:w-64">
              <Search className="w-4 h-4 text-on-surface-variant dark:text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 3D model..."
                aria-label="Search 3D models in this category"
                className="w-full min-h-[44px] pl-9 pr-9 py-2 bg-surface dark:bg-[#111114] border border-outline-variant/50 dark:border-white/15 focus:border-[#8c5d12] dark:focus:border-[#d4af37] text-sm text-on-surface dark:text-white focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear 3D model search"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 inline-flex items-center justify-center text-on-surface-variant hover:text-on-surface dark:text-neutral-400 dark:hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={() => setIsBrowserModalOpen(true)}
              className="min-h-[44px] px-4 py-2 bg-on-surface text-surface dark:bg-[#f5f3ee] dark:text-[#111114] text-xs sm:text-sm font-medium inline-flex items-center gap-2 shrink-0 hover:opacity-90 transition-opacity cursor-pointer"
            >
              <Grid2x2 className="w-4 h-4" />
              <span>All {featuredAssets.length} Models</span>
            </button>
          </div>
        </div>

        {/* Interactive 3D Workbench */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* 3D Canvas Column */}
          <div
            ref={viewerContainerRef}
            className="lg:col-span-8 flex flex-col border border-outline-variant/40 dark:border-white/15 bg-neutral-950 overflow-hidden"
          >
            {/* Controls Bar */}
            <div className="px-4 py-3 border-b border-white/10 bg-[#111114] flex flex-wrap items-center justify-between gap-2 text-white">
              <div className="min-w-0">
                <span className="text-sm font-serif font-medium block truncate">
                  {currentAsset.title}
                </span>
                <span className="text-xs font-mono text-neutral-400 block truncate">
                  {currentAsset.patent}
                </span>
              </div>

              <div className="flex items-center gap-1.5 flex-wrap">
                <button
                  type="button"
                  onClick={() => setIsWireframe(!isWireframe)}
                  aria-pressed={isWireframe}
                  className={`min-h-[36px] px-2.5 text-xs font-mono border inline-flex items-center gap-1.5 cursor-pointer transition-colors ${
                    isWireframe
                      ? 'border-[#d4af37] bg-[#d4af37]/15 text-[#d4af37]'
                      : 'border-white/15 text-neutral-300 hover:border-white/35'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>{isWireframe ? 'Wireframe' : 'Shaded'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsAutoRotating(!isAutoRotating)}
                  aria-pressed={isAutoRotating}
                  className={`min-h-[36px] px-2.5 text-xs font-mono border inline-flex items-center gap-1.5 cursor-pointer transition-colors ${
                    isAutoRotating
                      ? 'border-[#d4af37] bg-[#d4af37]/15 text-[#d4af37]'
                      : 'border-white/15 text-neutral-300 hover:border-white/35'
                  }`}
                >
                  <RotateCw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{isAutoRotating ? 'Rotating' : 'Paused'}</span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setLightingMode(lightingMode === 'spotlight' ? 'ambient' : 'spotlight')
                  }
                  aria-label="Toggle 3D lighting"
                  className="min-w-[36px] min-h-[36px] px-2.5 border border-white/15 text-neutral-300 hover:border-white/35 inline-flex items-center justify-center cursor-pointer"
                >
                  {lightingMode === 'spotlight' ? (
                    <Sun className="w-3.5 h-3.5" />
                  ) : (
                    <Moon className="w-3.5 h-3.5" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleToggleFullscreen}
                  aria-label="Toggle fullscreen"
                  className="min-w-[36px] min-h-[36px] px-2.5 border border-white/15 text-neutral-300 hover:border-white/35 inline-flex items-center justify-center cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Canvas Viewport */}
            <div className="relative h-[340px] sm:h-[460px] lg:h-[520px] w-full cursor-grab active:cursor-grabbing">
              <ModelViewer3D
                modelType={currentAsset.modelType}
                isWireframe={isWireframe}
                isAutoRotating={isAutoRotating}
                lightingMode={lightingMode}
                zoomLevel={zoomLevel}
                onHotspotClick={(id) =>
                  setActiveHotspot(`Component #${id}: Primary mechanical assembly`)
                }
              />

              {activeHotspot && (
                <div className="absolute left-3 right-3 bottom-3 sm:left-4 sm:right-auto sm:max-w-sm bg-black/85 border border-white/20 p-3 flex items-start justify-between gap-2 text-xs text-white">
                  <span>{activeHotspot}</span>
                  <button
                    type="button"
                    onClick={() => setActiveHotspot(null)}
                    aria-label="Dismiss note"
                    className="text-neutral-400 hover:text-white shrink-0 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Bottom Zoom & Reset Bar */}
            <div className="px-4 py-2.5 border-t border-white/10 bg-[#111114] flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-400">
              <span>Drag to rotate 360° · Scroll or use buttons to zoom</span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setZoomLevel((z) => Math.max(2.5, z - 0.5))}
                  aria-label="Zoom in 3D model"
                  className="min-w-[36px] min-h-[32px] border border-white/15 text-white hover:border-white/35 cursor-pointer font-mono"
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={() => setZoomLevel((z) => Math.min(8.0, z + 0.5))}
                  aria-label="Zoom out 3D model"
                  className="min-w-[36px] min-h-[32px] border border-white/15 text-white hover:border-white/35 cursor-pointer font-mono"
                >
                  -
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="min-h-[32px] px-2.5 border border-white/15 text-neutral-200 hover:border-white/35 inline-flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Metadata Summary */}
          <div className="lg:col-span-4 border border-outline-variant/40 dark:border-white/10 bg-surface dark:bg-[#111114] p-5 sm:p-6 flex flex-col justify-between gap-6">
            <div>
              <p className="text-xs font-mono text-[#8c5d12] dark:text-[#d4af37] mb-1">
                {currentAsset.categoryLabel} · {currentAsset.year || currentAsset.patentDate}
              </p>
              <h3 className="font-serif text-2xl font-semibold text-on-surface dark:text-white leading-snug">
                {currentAsset.title}
              </h3>
              <p className="mt-1 text-xs font-medium text-on-surface-variant dark:text-neutral-400">
                {currentAsset.inventor}
              </p>

              <dl className="mt-5 pt-4 border-t border-outline-variant/30 dark:border-white/10 space-y-2.5 text-xs">
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-on-surface-variant dark:text-neutral-400">Patent</dt>
                  <dd className="font-mono text-on-surface dark:text-white text-right">
                    {currentAsset.patentNumber || currentAsset.patent}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-on-surface-variant dark:text-neutral-400">Origin</dt>
                  <dd className="text-on-surface dark:text-white text-right">
                    {currentAsset.location}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <dt className="text-on-surface-variant dark:text-neutral-400 shrink-0">Materials</dt>
                  <dd className="text-on-surface dark:text-white text-right">
                    {currentAsset.medium}
                  </dd>
                </div>
              </dl>

              <p className="mt-5 pt-4 border-t border-outline-variant/30 dark:border-white/10 text-sm text-on-surface-variant dark:text-neutral-300 leading-relaxed line-clamp-4">
                {currentAsset.mechanics || currentAsset.desc}
              </p>
            </div>

            <Link
              href={`/inventions/${currentAsset.id}`}
              onClick={() => {
                if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'instant' });
              }}
              className="w-full min-h-[44px] py-3 px-5 bg-on-surface text-surface dark:bg-[#f5f3ee] dark:text-[#111114] text-sm font-medium inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <span>Open Full 5-Format Record</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Model Switcher Modal */}
      {isBrowserModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Choose 3D model"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsBrowserModalOpen(false);
          }}
        >
          <div className="w-full max-w-2xl bg-surface dark:bg-[#111114] border border-outline-variant/50 dark:border-white/15 p-5 sm:p-6 shadow-2xl flex flex-col gap-4 max-h-[85vh] overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30 dark:border-white/10">
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-on-surface dark:text-white">
                  Choose a 3D Model ({featuredAssets.length})
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsBrowserModalOpen(false)}
                aria-label="Close modal"
                className="w-9 h-9 inline-flex items-center justify-center text-on-surface-variant hover:text-on-surface dark:text-neutral-400 dark:hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 overflow-y-auto">
              {featuredAssets.map((asset) => {
                const isCurrent = currentAsset.id === asset.id;
                return (
                  <button
                    key={asset.id}
                    type="button"
                    onClick={() => {
                      handleSelectAssetId(asset.id);
                      setIsBrowserModalOpen(false);
                    }}
                    className={`p-3.5 text-left border transition-colors cursor-pointer ${
                      isCurrent
                        ? 'border-[#8c5d12] dark:border-[#d4af37] bg-surface-container-low dark:bg-white/[0.06]'
                        : 'border-outline-variant/30 dark:border-white/10 hover:border-outline-variant dark:hover:border-white/25'
                    }`}
                  >
                    <div className="text-xs font-mono text-[#8c5d12] dark:text-[#d4af37]">
                      {asset.year || asset.patentDate} · {asset.patentNumber || asset.patent}
                    </div>
                    <div className="mt-1 font-serif text-base font-medium text-on-surface dark:text-white truncate">
                      {asset.title}
                    </div>
                    <div className="text-xs text-on-surface-variant dark:text-neutral-400 truncate">
                      {asset.inventor}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
