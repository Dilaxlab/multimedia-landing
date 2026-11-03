'use client';

import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Box, RotateCw, Sun, Moon, Maximize2, MousePointer, ZoomIn, Info, X, ArrowRight } from 'lucide-react';
import { MOCK_HISTORICAL_ASSETS } from '@/lib/constants';
import { HistoricalAsset } from '@/types/asset';

// Dynamically import Three.js viewer with SSR disabled
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

export default function SpatialGallery({
  onSelectAssetForDossier,
  selectedAssetId: externalAssetId,
  onSelectAssetId,
}: SpatialGalleryProps) {
  const [internalAssetId, setInternalAssetId] = useState<string>('HA-101');
  const selectedAssetId = externalAssetId || internalAssetId;

  const handleSelectAssetId = (id: string) => {
    setInternalAssetId(id);
    if (onSelectAssetId) onSelectAssetId(id);
  };

  const featuredAssets = MOCK_HISTORICAL_ASSETS;
  const [isWireframe, setIsWireframe] = useState<boolean>(false);
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(true);
  const [lightingMode, setLightingMode] = useState<'spotlight' | 'ambient'>('spotlight');
  const [zoomLevel, setZoomLevel] = useState<number>(4.8);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
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
      viewerContainerRef.current.requestFullscreen().catch((err) => {
        console.error('Error attempting to enable fullscreen:', err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <section id="gallery3d" className="relative py-24 bg-surface-container-lowest text-on-surface border-t border-outline-variant/20 scroll-mt-20">
      {/* Decorative Museum Floor Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Box className="w-4 h-4 text-primary" />
              <span className="text-xs font-mono tracking-widest text-primary uppercase">
                Section 03 // Spatial Exploration Workbench
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl tracking-tight text-on-surface font-normal">
              Interactive 3D Model Gallery
            </h2>
            <p className="mt-3 text-sm md:text-base text-on-surface-variant max-w-2xl font-sans leading-relaxed">
              Examine historical patents via real-time WebGL rendering. Rotate, zoom, and inspect wireframe topologies reconstructed from original 19th-century mechanical blueprints.
            </p>
          </div>

          {/* Model Switcher Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-surface-container border border-outline-variant/30 rounded-xl overflow-x-auto max-w-full">
            {featuredAssets.map((asset) => (
              <button
                key={asset.id}
                onClick={() => handleSelectAssetId(asset.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-mono transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  selectedAssetId === asset.id
                    ? 'bg-primary text-surface-container-lowest font-semibold shadow-md'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                }`}
              >
                <span>{asset.title.split(' ')[0]}</span>
                <span className="text-[10px] opacity-70">({asset.id})</span>
              </button>
            ))}
          </div>
        </div>

        {/* 3D Workbench Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main 3D Viewer Canvas */}
          <div 
            ref={viewerContainerRef}
            className="lg:col-span-8 relative bg-surface-container-low rounded-2xl border border-outline-variant/30 overflow-hidden shadow-2xl flex flex-col min-h-[380px] sm:min-h-[480px] lg:min-h-[620px]"
          >
            {/* Top Viewer Toolbar */}
            <div className="p-3 sm:p-4 border-b border-outline-variant/20 bg-surface-container/60 backdrop-blur-md flex flex-wrap items-center justify-between gap-2 text-xs font-mono z-10">
              <div className="flex items-center gap-2 sm:gap-3 truncate">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="text-on-surface font-medium truncate">{currentAsset.title}</span>
                <span className="text-on-surface-variant hidden sm:inline">•</span>
                <span className="text-on-surface-variant hidden sm:inline">{currentAsset.polyCount}</span>
              </div>

              {/* Quick Controls */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                {/* Wireframe toggle */}
                <button
                  onClick={() => setIsWireframe(!isWireframe)}
                  className={`px-2 py-1 rounded text-[10px] sm:text-[11px] font-mono border transition-all ${
                    isWireframe
                      ? 'border-primary bg-primary/20 text-primary'
                      : 'border-outline-variant/40 text-on-surface-variant hover:text-on-surface'
                  }`}
                  title="Toggle wireframe topology view"
                >
                  {isWireframe ? 'WIREFRAME' : 'SHADED'}
                </button>

                {/* Auto-rotation toggle */}
                <button
                  onClick={() => setIsAutoRotating(!isAutoRotating)}
                  className={`p-1.5 rounded border border-outline-variant/40 transition-colors ${
                    isAutoRotating ? 'text-primary border-primary/50' : 'text-on-surface-variant'
                  }`}
                  title="Toggle 360° turntable rotation"
                >
                  <RotateCw className={`w-3.5 h-3.5 ${isAutoRotating ? 'animate-spin' : ''}`} />
                </button>

                {/* Lighting toggle */}
                <button
                  onClick={() => setLightingMode(lightingMode === 'spotlight' ? 'ambient' : 'spotlight')}
                  className="p-1.5 rounded border border-outline-variant/40 text-on-surface-variant hover:text-on-surface transition-colors"
                  title="Toggle bronze chiaroscuro vs ambient lighting"
                >
                  {lightingMode === 'spotlight' ? (
                    <Sun className="w-3.5 h-3.5" />
                  ) : (
                    <Moon className="w-3.5 h-3.5" />
                  )}
                </button>

                {/* Fullscreen */}
                <button
                  onClick={handleToggleFullscreen}
                  className="p-1.5 rounded border border-outline-variant/40 text-on-surface-variant hover:text-on-surface transition-colors"
                  title="Full-screen view"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Three.js Interactive Canvas Container */}
            <div className="relative flex-1 w-full h-full cursor-grab active:cursor-grabbing">
              <ModelViewer3D
                modelType={currentAsset.modelType}
                isWireframe={isWireframe}
                isAutoRotating={isAutoRotating}
                lightingMode={lightingMode}
                zoomLevel={zoomLevel}
                onHotspotClick={(id) => {
                  setActiveHotspot(`Component #${id}: Primary mechanical assembly interface`);
                }}
              />

              {/* Floating Camera Instructions (Hidden on very small screens to avoid overlap) */}
              <div className="hidden sm:flex absolute bottom-4 left-4 pointer-events-none items-center gap-3 text-[11px] font-mono text-on-surface-variant/70 bg-surface-container-lowest/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-outline-variant/20">
                <span className="flex items-center gap-1.5">
                  <MousePointer className="w-3.5 h-3.5 text-primary" /> Left-click + drag to orbit
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <ZoomIn className="w-3.5 h-3.5 text-primary" /> Scroll / pinch to zoom
                </span>
              </div>

              {/* Floating Zoom +/- & Reset Controls */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex items-center gap-1.5 bg-surface-container-lowest/80 backdrop-blur-md p-1.5 rounded-lg border border-outline-variant/20 z-10">
                <button
                  onClick={() => setZoomLevel((z) => Math.max(2.5, z - 0.5))}
                  className="w-7 h-7 rounded flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors text-base font-mono active:scale-95"
                  title="Zoom In"
                >
                  +
                </button>
                <button
                  onClick={() => setZoomLevel((z) => Math.min(8.0, z + 0.5))}
                  className="w-7 h-7 rounded flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors text-base font-mono active:scale-95"
                  title="Zoom Out"
                >
                  −
                </button>
                <div className="w-[1px] h-4 bg-outline-variant/30 my-auto" />
                <button
                  onClick={handleReset}
                  className="px-2 py-1 text-[10px] font-mono text-primary hover:underline active:scale-95"
                  title="Reset view orientation"
                >
                  RESET
                </button>
              </div>

              {/* Hotspot banner if clicked */}
              {activeHotspot && (
                <div className="absolute top-4 left-4 right-4 p-3 rounded-lg bg-surface-container/95 border border-primary/40 text-xs font-mono text-on-surface flex items-center justify-between z-10 shadow-lg">
                  <div className="flex items-center gap-2 truncate">
                    <Info className="w-4 h-4 text-primary shrink-0" />
                    <span className="truncate">{activeHotspot}</span>
                  </div>
                  <button onClick={() => setActiveHotspot(null)} className="text-on-surface-variant hover:text-on-surface ml-2">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Bottom Status Ticker */}
            <div className="px-3 sm:px-4 py-2 border-t border-outline-variant/20 bg-surface-container/40 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-on-surface-variant gap-2 truncate">
              <span className="shrink-0">{currentAsset.id}</span>
              <span className="truncate">{currentAsset.patent}</span>
              <span className="text-primary hidden md:inline shrink-0">Three.js</span>
            </div>
          </div>

          {/* Model Information Sidebar */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-surface-container-low rounded-2xl border border-outline-variant/30 p-4 sm:p-6 shadow-xl">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded bg-primary/10 text-primary border border-primary/20 text-[10px] font-mono uppercase tracking-wider">
                  {currentAsset.categoryLabel}
                </span>
                <span className="text-xs font-mono text-on-surface-variant">{currentAsset.era}</span>
              </div>

              {/* Title & Inventor */}
              <h3 className="font-serif text-2xl text-on-surface font-normal mb-1">
                {currentAsset.title}
              </h3>
              <p className="text-xs font-mono text-primary mb-4">
                Inventor: {currentAsset.inventor}
              </p>

              {/* Patent metadata card */}
              <div className="p-3.5 rounded-xl bg-surface-container border border-outline-variant/20 mb-6 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-on-surface-variant">Patent Registry:</span>
                  <span className="text-on-surface font-medium">{currentAsset.patent}</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-on-surface-variant">Grant Date:</span>
                  <span className="text-on-surface">{currentAsset.patentDate}</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-on-surface-variant">Workshop Origin:</span>
                  <span className="text-on-surface">{currentAsset.location}</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-on-surface-variant">Material Spec:</span>
                  <span className="text-on-surface">{currentAsset.medium}</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-[11px] font-mono text-on-surface-variant uppercase tracking-wider mb-2">
                  Historical Mechanics
                </h4>
                <p className="text-xs font-sans text-on-surface/90 leading-relaxed line-clamp-4">
                  {currentAsset.mechanics || currentAsset.desc}
                </p>
              </div>

              {/* Quick Model Stats */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-surface-container border border-outline-variant/20">
                  <span className="text-[10px] font-mono text-on-surface-variant block">GEOMETRY</span>
                  <span className="text-xs font-mono text-on-surface font-medium">{currentAsset.polyCount}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-surface-container border border-outline-variant/20">
                  <span className="text-[10px] font-mono text-on-surface-variant block">RESONANCE</span>
                  <span className="text-xs font-mono text-on-surface font-medium">{currentAsset.resonance}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-outline-variant/20 space-y-2">
              <Link
                href={`/inventions/${currentAsset.id}`}
                className="w-full py-3 rounded-xl bg-primary text-surface-container-lowest font-medium font-mono text-xs flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-md group"
              >
                <span>OPEN FULL MONOGRAPH</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {onSelectAssetForDossier && (
                <button
                  onClick={() => onSelectAssetForDossier(currentAsset)}
                  className="w-full py-2.5 rounded-xl border border-outline-variant/40 hover:bg-surface-container text-xs font-mono text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  Quick Monograph Preview
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
