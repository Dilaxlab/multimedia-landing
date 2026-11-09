'use client';

import React, { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
  Box,
  RotateCw,
  Sun,
  Moon,
  Maximize2,
  MousePointer,
  ZoomIn,
  Info,
  X,
  ArrowRight,
  Layers,
  Sparkles,
  Compass,
  Award,
  Search,
  Grid2x2,
  Check,
} from 'lucide-react';
import { MOCK_HISTORICAL_ASSETS } from '@/lib/constants';
import { HistoricalAsset } from '@/types/asset';

const ModelViewer3D = dynamic(() => import('@/components/viewers/ModelViewer3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center bg-surface-container-lowest/80 text-on-surface-variant font-mono text-xs gap-3">
      <div className="w-10 h-10 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
      <span>INITIALIZING THREE.JS WEBGL RENDERER...</span>
    </div>
  ),
});

interface SpatialGalleryProps {
  onSelectAssetForDossier?: (asset: HistoricalAsset) => void;
  selectedAssetId?: string;
  onSelectAssetId?: (id: string) => void;
}

const SPATIAL_CATEGORIES: { key: string; label: string }[] = [
  { key: 'ALL', label: 'All 3D Models' },
  { key: 'TELECOM', label: 'Telephony & Acoustic' },
  { key: 'AERO', label: 'Aeronautics' },
  { key: 'DOMESTIC', label: 'Domestic Mechanics' },
  { key: 'WIND', label: 'Wind & Rotary' },
  { key: 'COMPUTING', label: 'Computing Engines' },
  { key: 'TIME', label: 'Horology & Clocks' },
];

export default function SpatialGallery({
  onSelectAssetForDossier,
  selectedAssetId: externalAssetId,
  onSelectAssetId,
}: SpatialGalleryProps) {
  const [internalAssetId, setInternalAssetId] = useState<string>('HA-101');
  const selectedAssetId = externalAssetId || internalAssetId;

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [isBrowserModalOpen, setIsBrowserModalOpen] = useState<boolean>(false);

  const handleSelectAssetId = (id: string) => {
    setInternalAssetId(id);
    if (onSelectAssetId) onSelectAssetId(id);
  };

  const featuredAssets = MOCK_HISTORICAL_ASSETS;

  // Filter 3D Models based on active category and search query
  const filteredAssets = featuredAssets.filter((asset) => {
    const matchesCategory =
      activeCategory === 'ALL' || asset.category === activeCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      asset.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.inventor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.patent.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const [isWireframe, setIsWireframe] = useState(false);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [lightingMode, setLightingMode] = useState<'spotlight' | 'ambient'>('spotlight');
  const [zoomLevel, setZoomLevel] = useState(4.8);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const viewerContainerRef = useRef<HTMLDivElement>(null);

  const currentAsset =
    featuredAssets.find((a) => a.id === selectedAssetId) || featuredAssets[0];

  const handleReset = () => {
    setZoomLevel(4.8);
    setIsAutoRotating(true);
    setIsWireframe(false);
    setActiveHotspot(null);
  };

  const handleToggleFullscreen = () => {
    if (!viewerContainerRef.current) return;
    if (!document.fullscreenElement) {
      viewerContainerRef.current
        .requestFullscreen()
        .catch((err) => console.error('Fullscreen error:', err));
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  return (
    <section
      id="gallery3d"
      className="relative py-16 sm:py-24 bg-surface-container-lowest text-on-surface border-t border-outline-variant/20 scroll-mt-20 overflow-hidden"
    >
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Radial museum glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col gap-5 mb-8 sm:mb-10">
          {/* --- Row 1: Title + Search (desktop) --- */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6">
            {/* Left: Title block */}
            <div className="min-w-0 shrink-0">
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
                  <Sparkles className="w-3 h-3 text-primary" />
                  <span className="text-[10px] font-mono tracking-widest text-primary uppercase">
                    Spatial Workbench
                  </span>
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-on-surface font-normal leading-tight">
                Interactive <span className="italic text-primary/90">3D</span> Model Gallery
              </h2>
            </div>

            {/* Right: Search bar (desktop/tablet only — mobile drops below) */}
            <div className="hidden lg:flex items-center gap-2 w-full max-w-md">
              {/* Search Input */}
              <div className="relative flex-1 group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4 pointer-events-none transition-colors group-focus-within:text-primary" />
                <input
                  type="text"
                  placeholder="Search model, inventor, patent ID…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-surface-container border border-outline-variant/40 rounded-xl pl-9 pr-16 py-2.5 text-xs font-mono text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                />
                {searchQuery ? (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high cursor-pointer transition-colors"
                    aria-label="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded border border-outline-variant/40 bg-surface-container-high text-[9px] font-mono text-on-surface-variant/70 pointer-events-none select-none">
                    ⌘K
                  </kbd>
                )}
              </div>

              {/* Browse All button — icon-only pill on desktop compactness */}
              <button
                onClick={() => setIsBrowserModalOpen(true)}
                className="inline-flex items-center justify-center gap-1.5 h-[38px] px-3 rounded-xl bg-primary text-surface-container-lowest border border-primary hover:bg-primary/90 text-xs font-mono font-medium transition-all shrink-0 cursor-pointer shadow-md shadow-primary/20 active:scale-95"
                title={`Browse all ${featuredAssets.length} models`}
              >
                <Grid2x2 className="w-4 h-4" />
                <span className="hidden xl:inline">{featuredAssets.length}</span>
              </button>
            </div>
          </div>

          {/* --- Row 2 (Mobile only): Search drops below title, full-width --- */}
          <div className="flex lg:hidden items-center gap-2">
            <div className="relative flex-1 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4 pointer-events-none transition-colors group-focus-within:text-primary" />
              <input
                type="text"
                placeholder="Search model, inventor, patent…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-surface-container border border-outline-variant/40 rounded-xl pl-9 pr-9 py-2.5 text-xs font-mono text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <button
              onClick={() => setIsBrowserModalOpen(true)}
              className="inline-flex items-center justify-center w-[42px] h-[42px] rounded-xl bg-primary text-surface-container-lowest border border-primary hover:bg-primary/90 transition-all shrink-0 cursor-pointer shadow-md shadow-primary/20 active:scale-95"
              title={`Browse all ${featuredAssets.length} models`}
              aria-label="Browse all models"
            >
              <Grid2x2 className="w-4 h-4" />
            </button>
          </div>

          {/* --- Row 3: Category tabs strip --- */}

        </div>

        {/* ================= WORKBENCH ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* ---- Main Canvas ---- */}
          <div
            ref={viewerContainerRef}
            className={`lg:col-span-8 relative bg-gradient-to-br from-surface-container-low via-surface-container to-surface-container-lowest rounded-3xl border border-outline-variant/40 overflow-hidden shadow-2xl flex flex-col min-h-[420px] sm:min-h-[520px] lg:min-h-[640px] ${
              isFullscreen ? 'rounded-none border-0' : ''
            }`}
          >
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl pointer-events-none z-10" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/30 rounded-tr-3xl pointer-events-none z-10" />

            {/* ---- Top Toolbar ---- */}
            <div className="relative z-10 p-2.5 sm:p-4 border-b border-outline-variant/20 bg-surface-container/70 backdrop-blur-xl">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="relative flex w-2 h-2 shrink-0">
                    <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-60" />
                    <span className="relative w-2 h-2 rounded-full bg-emerald-500" />
                  </span>
                  <div className="flex flex-col min-w-0 leading-tight">
                    <span className="text-[11px] sm:text-xs text-on-surface font-medium truncate">
                      {currentAsset.title}
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-on-surface-variant font-mono truncate">
                      {currentAsset.id} • {currentAsset.polyCount}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
                  <button
                    onClick={() => setIsWireframe(!isWireframe)}
                    className={`h-8 px-2 sm:px-2.5 rounded-lg text-[10px] sm:text-[11px] font-mono border transition-all flex items-center gap-1 ${
                      isWireframe
                        ? 'border-primary bg-primary/15 text-primary'
                        : 'border-outline-variant/40 text-on-surface-variant hover:text-on-surface hover:border-primary/30'
                    }`}
                    title="Toggle wireframe"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{isWireframe ? 'WIRE' : 'SHADED'}</span>
                  </button>

                  <button
                    onClick={() => setIsAutoRotating(!isAutoRotating)}
                    className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all ${
                      isAutoRotating
                        ? 'border-primary/50 text-primary bg-primary/10'
                        : 'border-outline-variant/40 text-on-surface-variant hover:text-on-surface'
                    }`}
                    title="Auto rotate"
                  >
                    <RotateCw className={`w-3.5 h-3.5 ${isAutoRotating ? 'animate-spin' : ''}`} />
                  </button>

                  <button
                    onClick={() =>
                      setLightingMode(lightingMode === 'spotlight' ? 'ambient' : 'spotlight')
                    }
                    className="w-8 h-8 rounded-lg border border-outline-variant/40 text-on-surface-variant hover:text-on-surface hover:border-primary/30 flex items-center justify-center transition-all"
                    title="Lighting"
                  >
                    {lightingMode === 'spotlight' ? (
                      <Sun className="w-3.5 h-3.5" />
                    ) : (
                      <Moon className="w-3.5 h-3.5" />
                    )}
                  </button>

                  <button
                    onClick={handleToggleFullscreen}
                    className="w-8 h-8 rounded-lg border border-outline-variant/40 text-on-surface-variant hover:text-on-surface hover:border-primary/30 flex items-center justify-center transition-all"
                    title="Fullscreen"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* ---- Canvas ---- */}
            <div className="relative flex-1 w-full h-full cursor-grab active:cursor-grabbing">
              <ModelViewer3D
                modelType={currentAsset.modelType}
                isWireframe={isWireframe}
                isAutoRotating={isAutoRotating}
                lightingMode={lightingMode}
                zoomLevel={zoomLevel}
                onHotspotClick={(id) =>
                  setActiveHotspot(`Component #${id}: Primary mechanical assembly interface`)
                }
              />

              <div className="hidden sm:flex absolute bottom-4 left-4 pointer-events-none items-center gap-3 text-[10px] font-mono text-on-surface-variant/70 bg-surface-container-lowest/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-outline-variant/20">
                <span className="flex items-center gap-1.5">
                  <MousePointer className="w-3 h-3 text-primary" /> Drag to orbit
                </span>
                <span className="opacity-40">·</span>
                <span className="flex items-center gap-1.5">
                  <ZoomIn className="w-3 h-3 text-primary" /> Scroll to zoom
                </span>
              </div>

              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1 bg-surface-container-lowest/85 backdrop-blur-xl p-1.5 rounded-2xl border border-outline-variant/30 shadow-xl z-10">
                <button
                  onClick={() => setZoomLevel((z) => Math.min(8.0, z + 0.5))}
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-colors text-lg font-mono active:scale-90"
                  title="Zoom in"
                >
                  +
                </button>
                <div className="w-5 h-[1px] bg-outline-variant/40" />
                <button
                  onClick={() => setZoomLevel((z) => Math.max(2.5, z - 0.5))}
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-colors text-lg font-mono active:scale-90"
                  title="Zoom out"
                >
                  −
                </button>
                <div className="w-5 h-[1px] bg-outline-variant/40" />
                <button
                  onClick={handleReset}
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-primary hover:bg-primary/10 transition-colors active:scale-90"
                  title="Reset view"
                >
                  <Compass className="w-3.5 h-3.5" />
                </button>
              </div>

              {activeHotspot && (
                <div className="absolute left-3 right-3 sm:left-auto sm:right-3 sm:top-3 sm:max-w-sm bottom-3 sm:bottom-auto z-20 animate-[slideUp_0.3s_ease-out]">
                  <div className="p-3 rounded-xl bg-surface-container/95 backdrop-blur-xl border border-primary/40 shadow-2xl flex items-start gap-2">
                    <div className="w-7 h-7 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                      <Info className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[9px] font-mono text-primary uppercase tracking-widest block mb-0.5">
                        Hotspot Selected
                      </span>
                      <span className="text-[11px] font-mono text-on-surface block leading-snug">
                        {activeHotspot}
                      </span>
                    </div>
                    <button
                      onClick={() => setActiveHotspot(null)}
                      className="text-on-surface-variant hover:text-on-surface shrink-0"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="relative z-10 px-3 sm:px-4 py-2 border-t border-outline-variant/20 bg-surface-container/50 backdrop-blur-md flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-on-surface-variant gap-2">
              <div className="flex items-center gap-1.5 shrink-0">
                <Award className="w-3 h-3 text-primary" />
                <span className="truncate max-w-[120px] sm:max-w-none">{currentAsset.patent}</span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-primary hidden sm:inline">Three.js</span>
                <span className="w-1 h-1 rounded-full bg-emerald-500" />
                <span>LIVE</span>
              </div>
            </div>
          </div>

          {/* ---- Info Sidebar (Museum Plaque) ---- */}
          <div className="lg:col-span-4 flex flex-col bg-gradient-to-b from-surface-container-low to-surface-container rounded-3xl border border-outline-variant/40 p-5 sm:p-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20 text-[10px] font-mono uppercase tracking-widest">
                  {currentAsset.categoryLabel}
                </span>
                <span className="text-[10px] font-mono text-on-surface-variant">
                  {currentAsset.era}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-on-surface font-normal mb-1 leading-tight">
                {currentAsset.title}
              </h3>
              <p className="text-[11px] font-mono text-primary mb-5">by {currentAsset.inventor}</p>

              <div className="relative rounded-2xl bg-surface-container-lowest/60 border border-outline-variant/30 p-4 mb-5 space-y-2.5">
                <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t border-l border-primary/40" />
                <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b border-r border-primary/40" />

                {[
                  ['Patent', currentAsset.patent],
                  ['Patented Date', currentAsset.patentDate],
                  ['Origin', currentAsset.location],
                  ['Material', currentAsset.medium],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between text-[11px] font-mono gap-2"
                  >
                    <span className="text-on-surface-variant uppercase tracking-wider">
                      {label}
                    </span>
                    <span className="text-on-surface font-medium truncate text-right">{value}</span>
                  </div>
                ))}
              </div>

              <div className="mb-5">
                <h4 className="text-[10px] font-mono text-on-surface-variant uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <Box className="w-3 h-3 text-primary" /> Historical Mechanics
                </h4>
                <p className="text-[12px] font-sans text-on-surface/85 leading-relaxed line-clamp-4">
                  {currentAsset.mechanics || currentAsset.desc}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2.5 mb-5">
                <div className="rounded-xl bg-surface-container-lowest/60 border border-outline-variant/30 p-3">
                  <span className="text-[9px] font-mono text-on-surface-variant uppercase tracking-widest block mb-1">
                    Geometry
                  </span>
                  <span className="text-xs font-mono text-on-surface font-semibold">
                    {currentAsset.polyCount}
                  </span>
                </div>
                <div className="rounded-xl bg-surface-container-lowest/60 border border-outline-variant/30 p-3">
                  <span className="text-[9px] font-mono text-on-surface-variant uppercase tracking-widest block mb-1">
                    Resonance
                  </span>
                  <span className="text-xs font-mono text-on-surface font-semibold">
                    {currentAsset.resonance}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-outline-variant/30 space-y-2">
              <Link
                href={`/inventions/${currentAsset.id}`}
                className="w-full py-3 rounded-xl bg-primary text-surface-container-lowest font-medium font-mono text-xs flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 group"
              >
                <span>OPEN FULL MONOGRAPH</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {onSelectAssetForDossier && (
                <button
                  onClick={() => onSelectAssetForDossier(currentAsset)}
                  className="w-full py-2.5 rounded-xl border border-outline-variant/40 hover:bg-surface-container hover:border-primary/40 text-[11px] font-mono text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                >
                  Quick Monograph Preview
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ================= 3D MODEL BROWSER MODAL ================= */}
      {isBrowserModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsBrowserModalOpen(false);
          }}
        >
          <div className="w-full max-w-3xl bg-surface-container-low dark:bg-[#121217] border border-outline-variant/40 dark:border-amber-500/40 rounded-3xl p-5 sm:p-6 shadow-2xl flex flex-col gap-4 max-h-[88vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20 dark:border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                  <Grid2x2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-on-surface dark:text-white leading-tight">
                    Select 3D Spatial Model
                  </h3>
                  <span className="text-[10px] font-mono text-primary">
                    {featuredAssets.length} Photogrammetry & CAD Assets Available
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsBrowserModalOpen(false)}
                className="w-8 h-8 rounded-xl bg-surface-container hover:bg-surface-container-high dark:bg-white/5 dark:hover:bg-white/10 text-on-surface-variant hover:text-on-surface dark:text-neutral-400 dark:hover:text-white flex items-center justify-center transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Grid of all 3D models */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 overflow-y-auto pr-1">
              {featuredAssets.map((asset) => {
                const isCurrent = currentAsset.id === asset.id;
                return (
                  <div
                    key={asset.id}
                    onClick={() => {
                      handleSelectAssetId(asset.id);
                      setIsBrowserModalOpen(false);
                    }}
                    className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 active:scale-98 ${
                      isCurrent
                        ? 'bg-primary/15 border-primary shadow-lg shadow-primary/20'
                        : 'bg-surface-container dark:bg-white/[0.03] border-outline-variant/30 dark:border-white/10 hover:border-primary/50'
                    }`}
                  >
                    <img
                      src={asset.image}
                      alt={asset.title}
                      className="w-14 h-14 rounded-xl object-cover shrink-0 border border-outline-variant/30 dark:border-white/10"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-[10px] font-mono text-primary font-semibold truncate">
                          {asset.id} • {asset.categoryLabel.split(' ')[0]}
                        </span>
                        {isCurrent && (
                          <span className="px-1.5 py-0.5 rounded bg-primary text-neutral-950 text-[9px] font-mono font-bold">
                            ACTIVE
                          </span>
                        )}
                      </div>
                      <h4 className="font-serif text-sm font-bold text-on-surface dark:text-white truncate">
                        {asset.title}
                      </h4>
                      <p className="text-[11px] font-sans text-on-surface-variant dark:text-neutral-400 truncate">
                        by {asset.inventor}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* keyframe for slide-in */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
