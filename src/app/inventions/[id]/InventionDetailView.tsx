'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Calendar,
  User,
  MapPin,
  Landmark,
  ShieldCheck,
  BookOpen,
  Boxes,
  Film,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Share2,
  FileText,
  RotateCcw,
  Sun,
  Maximize2,
  Play,
  Pause,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { HistoricalAsset } from '@/types/asset';

// Dynamically import Three.js viewer with SSR disabled
const ModelViewer3D = dynamic(() => import('@/components/viewers/ModelViewer3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[450px] sm:h-[550px] flex flex-col items-center justify-center bg-[#0e0e13]/80 text-amber-400 font-mono text-xs gap-3 rounded-2xl border border-outline-variant/30">
      <div className="w-8 h-8 rounded-full border-2 border-amber-500/30 border-t-amber-400 animate-spin" />
      <span>INITIALIZING THREE.JS SPATIAL GEOMETRY...</span>
    </div>
  ),
});

interface InventionDetailViewProps {
  asset: HistoricalAsset;
}

export default function InventionDetailView({ asset }: InventionDetailViewProps) {
  const router = useRouter();
  // 3D Controls
  const [isWireframe, setIsWireframe] = useState<boolean>(false);
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(true);
  const [lightingMode, setLightingMode] = useState<'spotlight' | 'ambient'>('spotlight');
  const [zoomLevel, setZoomLevel] = useState<number>(4.6);
  const [dismantleAmount, setDismantleAmount] = useState<number>(0.5);

  // Video Controls
  const [isPlayingVideo, setIsPlayingVideo] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  // Guarantee that loading the asset detail view starts at the very top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [asset.id]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-surface selection:bg-primary/30 transition-colors">
      {/* =========================================================================
          TOP STICKY BREADCRUMB & NAVIGATION BAR
         ========================================================================= */}
     

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-24">
        <div className="mb-6">
          <button
            type="button"
            onClick={() => {
              if (typeof window !== 'undefined' && window.history.length > 1) {
                router.back();
              } else {
                router.push('/#themes');
              }
            }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-low dark:bg-white/[0.04] border border-outline-variant/40 dark:border-white/10 hover:border-amber-500/50 text-xs font-mono text-on-surface-variant dark:text-neutral-300 hover:text-amber-700 dark:hover:text-amber-300 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Previous Page</span>
          </button>
        </div>

        {/* =========================================================================
            HEADER: ASSET OVERVIEW & HERO CARD
           ========================================================================= */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-16">
          {/* Left Column: Image with Museum Framing */}
          <div className="w-full lg:w-5/12">
            <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container-low border border-outline-variant/30 shadow-2xl group">
              <img
                src={asset.image}
                alt={asset.title}
                className="w-full h-full object-cover object-center transition-transform duration-[1.5s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80" />

              {/* Floating Badges */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-md bg-black/80 backdrop-blur-xl border border-amber-500/30 text-[11px] font-mono text-amber-300 flex items-center gap-2 shadow-lg">
                  <Calendar className="w-3.5 h-3.5" /> {asset.patentDate}
                </span>
                <span className="px-3 py-1.5 rounded-md bg-black/80 backdrop-blur-xl border border-white/15 text-[11px] font-mono text-neutral-200 flex items-center gap-2 shadow-lg">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" /> {asset.location}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Curatorial Details & Specs */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-mono text-[11px] uppercase tracking-widest font-semibold flex items-center gap-2">
                <Landmark className="w-3.5 h-3.5" />
                {asset.categoryLabel}
              </span>
              <span className="text-xs font-mono text-on-surface-variant uppercase tracking-wider">
                {asset.era}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-on-surface leading-[1.1] mb-4">
              {asset.officialTitle || asset.title}
            </h1>

            <div className="flex items-center gap-2 text-base sm:text-lg text-on-surface-variant mb-6 border-l-2 border-primary pl-3">
              <User className="w-5 h-5 text-primary shrink-0" />
              <span>
                Invented by <strong className="text-on-surface font-semibold">{asset.inventor}</strong>
              </span>
            </div>

            <blockquote className="p-4 sm:p-5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-sm sm:text-base font-serif italic text-on-surface-variant mb-6">
              &ldquo;{asset.curatorQuote || asset.desc}&rdquo;
              <footer className="mt-2 text-xs font-mono font-normal not-italic text-primary">
                — {asset.curatorAuthor || 'National Museum Chief Curator'}
              </footer>
            </blockquote>

            {/* Key Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/30">
                <div className="text-[10px] font-mono uppercase text-on-surface-variant mb-1">Patent Number</div>
                <div className="text-xs sm:text-sm font-mono font-bold text-on-surface truncate">
                  {asset.patentNumber || asset.patent.split('•')[0].trim()}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/30">
                <div className="text-[10px] font-mono uppercase text-on-surface-variant mb-1">Archival Badge</div>
                <div className="text-xs sm:text-sm font-mono font-bold text-primary truncate">
                  {asset.badge}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/30">
                <div className="text-[10px] font-mono uppercase text-on-surface-variant mb-1">Polygon Mesh</div>
                <div className="text-xs sm:text-sm font-mono font-bold text-on-surface truncate">
                  {asset.polyCount}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/30">
                <div className="text-[10px] font-mono uppercase text-on-surface-variant mb-1">Resonance</div>
                <div className="text-xs sm:text-sm font-mono font-bold text-on-surface truncate">
                  {asset.resonance}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SECTION 1: STORY SECTION
           ========================================================================= */}
        <section id="story" className="scroll-mt-24 pt-12 border-t border-outline-variant/20 mb-20">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs font-bold text-primary tracking-widest uppercase">
              ACT I • HISTORICAL CHRONOLOGY
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-on-surface font-normal mb-8">
            The Historical Story & Genesis
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phase 1: Genesis Story */}
            <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between">
              <div>
                <span className="font-serif italic text-4xl text-primary mb-3 block">01</span>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-mono text-[11px] mb-3">
                  Genesis & The Problem
                </span>
                <h3 className="font-serif text-xl text-on-surface mb-2 font-normal">
                  The Industrial Impasse
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {asset.story || asset.desc}
                </p>
              </div>
            </div>

            {/* Phase 2: Kinematic Mechanics */}
            <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between">
              <div>
                <span className="font-serif italic text-4xl text-primary mb-3 block">02</span>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-mono text-[11px] mb-3">
                  Kinematic Principles
                </span>
                <h3 className="font-serif text-xl text-on-surface mb-2 font-normal">
                  The Workshop Breakthrough
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {asset.mechanics || "Engineered with precision tolerances and authentic metallurgical composition that resolved friction and wear limitations of contemporary instruments."}
                </p>
              </div>
            </div>

            {/* Phase 3: Legacy */}
            <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between">
              <div>
                <span className="font-serif italic text-4xl text-primary mb-3 block">03</span>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-mono text-[11px] mb-3">
                  Modern Impact
                </span>
                <h3 className="font-serif text-xl text-on-surface mb-2 font-normal">
                  Global Industrial Legacy
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {asset.legacy || "Became the universal benchmark for subsequent engineering advancements, serving as foundational architecture across international technological development."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: BOOK SECTION (Archival Dossier & Documentation)
           ========================================================================= */}
        <section id="book" className="scroll-mt-24 pt-12 border-t border-outline-variant/20 mb-20">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs font-bold text-primary tracking-widest uppercase">
              ACT II • ARCHIVAL BOOK & PATENT DOSSIER
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-on-surface font-normal mb-8">
            Authenticated Patent Documentation
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Patent Schematics Plate */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 shadow-md">
              <div className="flex items-center justify-between text-xs font-mono text-on-surface-variant mb-4">
                <span className="text-primary font-semibold">PATENT SPECIFICATION SHEET</span>
                <span>{asset.patentNumber}</span>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-950 border border-outline-variant/20 mb-4">
                <img
                  src={asset.schematicImage || asset.image}
                  alt="Patent Schematic"
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <div className="text-[11px] font-mono text-on-surface-variant leading-relaxed">
                Archival Blueprint Plate registered with the United States Patent and Trademark Office. Certified under Smithsonian digital curation guidelines.
              </div>
            </div>

            {/* Calibrated Blueprint Ledger & Legal Claims */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30">
                <h3 className="font-serif text-xl text-on-surface font-normal mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  <span>Calibrated Specification Ledger</span>
                </h3>
                <div className="divide-y divide-outline-variant/20 font-mono text-xs">
                  {asset.blueprintLedger && asset.blueprintLedger.length > 0 ? (
                    asset.blueprintLedger.map((row, idx) => (
                      <div key={idx} className="py-2.5 flex items-center justify-between gap-4">
                        <span className="text-on-surface-variant">{row.item}</span>
                        <span className="font-semibold text-primary text-right">{row.spec}</span>
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="py-2.5 flex items-center justify-between">
                        <span className="text-on-surface-variant">Kinematic Tolerance</span>
                        <span className="font-semibold text-primary">±0.005 in. calibrated</span>
                      </div>
                      <div className="py-2.5 flex items-center justify-between">
                        <span className="text-on-surface-variant">Chassis Metallurgy</span>
                        <span className="font-semibold text-primary">{asset.medium}</span>
                      </div>
                      <div className="py-2.5 flex items-center justify-between">
                        <span className="text-on-surface-variant">Patent Registration</span>
                        <span className="font-semibold text-primary">{asset.patent}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30">
                <h3 className="font-serif text-xl text-on-surface font-normal mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span>Curatorial Certification Notice</span>
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  This archival record was verified against original historical documents, physical patent models, and contemporaneous journals. Reconstructions follow strict mechanical reversibility and forensic accuracy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: 3D SECTION (Interactive Spatial Model Viewer)
           ========================================================================= */}
        <section id="3d" className="scroll-mt-24 pt-12 border-t border-outline-variant/20 mb-20">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs font-bold text-primary tracking-widest uppercase">
              ACT III • 360° SPATIAL GEOMETRY
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl text-on-surface font-normal">
                Interactive 3D Spatial Twin
              </h2>
              <p className="text-xs sm:text-sm text-on-surface-variant font-sans mt-1">
                Drag to rotate 360°, scroll to zoom, inspect mechanical tolerances and wireframe polygon topology.
              </p>
            </div>

            {/* 3D Action Toolbar */}
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => setIsWireframe(!isWireframe)}
                className={`px-3 py-1.5 rounded-xl border text-xs font-mono transition-all cursor-pointer ${
                  isWireframe
                    ? 'bg-primary text-neutral-950 border-primary font-bold shadow-md'
                    : 'bg-surface-container border-outline-variant/30 text-on-surface hover:text-primary'
                }`}
              >
                Wireframe: {isWireframe ? 'ON' : 'OFF'}
              </button>
              <button
                onClick={() => setIsAutoRotating(!isAutoRotating)}
                className={`px-3 py-1.5 rounded-xl border text-xs font-mono transition-all cursor-pointer ${
                  isAutoRotating
                    ? 'bg-primary text-neutral-950 border-primary font-bold shadow-md'
                    : 'bg-surface-container border-outline-variant/30 text-on-surface hover:text-primary'
                }`}
              >
                Rotate: {isAutoRotating ? 'AUTO' : 'PAUSED'}
              </button>
              <button
                onClick={() => setLightingMode(lightingMode === 'spotlight' ? 'ambient' : 'spotlight')}
                className="px-3 py-1.5 rounded-xl bg-surface-container border border-outline-variant/30 text-xs font-mono text-on-surface hover:text-primary transition-all cursor-pointer"
              >
                Light: {lightingMode.toUpperCase()}
              </button>
            </div>
          </div>

          {/* 3D Canvas Container */}
          <div className="relative w-full h-[500px] sm:h-[620px] rounded-3xl overflow-hidden bg-neutral-950 border border-outline-variant/30 shadow-2xl">
            <ModelViewer3D
              modelType={asset.modelType || 'antigravity'}
              isWireframe={isWireframe}
              isAutoRotating={isAutoRotating}
              lightingMode={lightingMode}
              zoomLevel={zoomLevel}
              dismantleFactor={dismantleAmount}
            />

            {/* Floating Spatial Info Overlay */}
            <div className="absolute top-4 left-4 pointer-events-none p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-xs font-mono text-white/90">
              <div className="text-amber-400 font-bold mb-0.5">{asset.title}</div>
              <div className="text-[10px] text-neutral-400">Mesh: {asset.polyCount}</div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: VIDEO SECTION (30-Sec Documentary Reel)
           ========================================================================= */}
        <section id="video" className="scroll-mt-24 pt-12 border-t border-outline-variant/20">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs font-bold text-primary tracking-widest uppercase">
              ACT IV • 3-SCENE CINEMATIC DOCUMENTARY
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-on-surface font-normal mb-8">
            30-Second Curated Archival Reel
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Video Player Box */}
            <div className="lg:col-span-8 relative aspect-video rounded-3xl overflow-hidden bg-neutral-950 border border-outline-variant/30 shadow-2xl group">
              <img
                src={asset.image}
                alt={asset.title}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <button
                  onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 text-neutral-950 flex items-center justify-center shadow-glow-gold hover:scale-110 active:scale-95 transition-all cursor-pointer mb-4"
                  aria-label="Play Reel"
                >
                  {isPlayingVideo ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
                </button>
                <div className="font-serif text-2xl text-white font-normal mb-1">
                  {asset.title}: {asset.officialTitle || 'Archival Vignette'}
                </div>
                <div className="text-xs font-mono text-amber-300">
                  30s Tripartite Narration Reel • 4K Archival Photogrammetry
                </div>
              </div>

              {/* Bottom Controls Bar */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/80 p-3 rounded-xl bg-black/60 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <Film className="w-4 h-4 text-amber-400" />
                  <span>30s Archival Reconstruction Reel</span>
                </div>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Right: 3-Scene Narrative Breakdown */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30">
                <div className="text-[10px] font-mono text-amber-400 font-bold mb-1">SCENE 1 (0:00 - 0:10)</div>
                <div className="font-serif text-base text-on-surface mb-1">The Industrial Challenge</div>
                <div className="text-xs text-on-surface-variant leading-relaxed">
                  Archival workshop reenactment of the mechanical constraints that plagued early prototypes.
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30">
                <div className="text-[10px] font-mono text-amber-400 font-bold mb-1">SCENE 2 (0:10 - 0:20)</div>
                <div className="font-serif text-base text-on-surface mb-1">The Patented Mechanism</div>
                <div className="text-xs text-on-surface-variant leading-relaxed">
                  3D exploded disassembly highlighting the patent claims granted by the patent office.
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30">
                <div className="text-[10px] font-mono text-amber-400 font-bold mb-1">SCENE 3 (0:20 - 0:30)</div>
                <div className="font-serif text-base text-on-surface mb-1">The Modern Epoch</div>
                <div className="text-xs text-on-surface-variant leading-relaxed">
                  Transition from historic black-and-white blueprint into modern engineering infrastructure.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
