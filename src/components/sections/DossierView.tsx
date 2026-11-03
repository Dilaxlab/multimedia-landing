'use client';

import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
  ArrowLeft,
  Share2,
  Download,
  ShieldCheck,
  Check,
  RotateCw,
  Layers,
  Sun,
  Maximize2,
  RotateCcw,
  Play,
  Pause,
  Volume2,
  VolumeX,
  FileText,
  Sparkles,
  Info,
  Clock,
  Compass,
  Headphones,
  CheckCircle2,
  ExternalLink,
  Boxes,
  Film,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { HistoricalAsset } from '@/types/asset';
import { MOCK_VIDEO_VIGNETTES, MOCK_HISTORICAL_ASSETS } from '@/lib/constants';
import LightboxModal from '@/components/common/LightboxModal';
import { BlueprintMedia } from '@/types/media';

// Dynamically import Three.js viewer with SSR disabled
const ModelViewer3D = dynamic(() => import('@/components/viewers/ModelViewer3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#0e0e13]/80 text-amber-400 font-mono text-xs gap-3">
      <div className="w-8 h-8 rounded-full border-2 border-amber-500/30 border-t-amber-400 animate-spin" />
      <span>INITIALIZING THREE.JS SPATIAL GEOMETRY...</span>
    </div>
  ),
});

interface DossierViewProps {
  asset: HistoricalAsset;
  onClose?: () => void;
  isStandalonePage?: boolean;
  hideHeroBanner?: boolean;
}

type TabType = '3D_MODEL' | 'WATCH_STORY' | 'BLUEPRINTS' | 'AUDIO_GUIDE';

export default function DossierView({
  asset,
  onClose,
  isStandalonePage = false,
  hideHeroBanner = false,
}: DossierViewProps) {
  const [activeTab, setActiveTab] = useState<TabType>('3D_MODEL');
  const [isWireframe, setIsWireframe] = useState<boolean>(false);
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(true);
  const [lightingMode, setLightingMode] = useState<'spotlight' | 'ambient'>('spotlight');
  const [zoomLevel, setZoomLevel] = useState<number>(4.6);
  const [dismantleAmount, setDismantleAmount] = useState<number>(0.5);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  // Video State
  const [isPlayingVideo, setIsPlayingVideo] = useState<boolean>(false);
  const [videoSeconds, setVideoSeconds] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [showTranscript, setShowTranscript] = useState<boolean>(true);

  // Audio Guide State
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [audioSpeed, setAudioSpeed] = useState<number>(1);
  const [audioSeconds, setAudioSeconds] = useState<number>(0);

  // Actions
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [blueprintLightbox, setBlueprintLightbox] = useState<BlueprintMedia | null>(null);

  const viewerContainerRef = useRef<HTMLDivElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Match corresponding documentary vignette
  const matchingVideo =
    MOCK_VIDEO_VIGNETTES.find((v) => v.assetId === asset.id) || MOCK_VIDEO_VIGNETTES[0];

  // Video playback timer (0 - 30 seconds)
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isPlayingVideo) {
      timer = setInterval(() => {
        setVideoSeconds((prev) => (prev >= 30 ? 0 : prev + 1));
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlayingVideo]);

  // Audio Guide timer (0 - 45 seconds)
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isPlayingAudio) {
      timer = setInterval(() => {
        setAudioSeconds((prev) => (prev >= 45 ? 0 : prev + 1));
      }, 1000 / audioSpeed);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlayingAudio, audioSpeed]);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleDownloadPlate = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const toggleFullscreen = () => {
    if (!viewerContainerRef.current) return;
    if (!document.fullscreenElement) {
      viewerContainerRef.current.requestFullscreen().catch((err) => {
        console.error('Fullscreen request failed:', err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  // Related assets in collection
  const relatedAssets = MOCK_HISTORICAL_ASSETS.filter((a) => a.id !== asset.id).slice(0, 3);

  // Video scene index: 0-10s = Scene 1, 10-20s = Scene 2, 20-30s = Scene 3
  const currentSceneIdx = videoSeconds < 10 ? 0 : videoSeconds < 20 ? 1 : 2;

  return (
    <section
      id="explore"
      className={`relative w-full text-neutral-200 ${
        isStandalonePage
          ? 'bg-[#07090E] min-h-screen pt-4 pb-24'
          : 'bg-[#07090E] py-20 border-t border-amber-500/20 scroll-mt-20'
      }`}
    >
      {/* Background Museum Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[700px] h-[500px] bg-[radial-gradient(circle,_rgba(212,175,55,0.08)_0%,_transparent_70%)] blur-3xl" />
        <div className="absolute bottom-1/3 left-10 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(200,125,85,0.06)_0%,_transparent_70%)] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ==================== 2. HEADER & BREADCRUMB NAVIGATION ==================== */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">


        </div>

      

        {/* ==================== 4. PRIMARY INTERACTIVE MEDIA WORKSPACE ==================== */}
        <div className="mb-14">

          {/* Tab Navigation Pill Header - Icon-Forward Navbar Style */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#0e0e13]/90 rounded-2xl border border-white/10 backdrop-blur-xl mb-6 overflow-x-auto max-w-full scrollbar-none -mx-1 px-1 scroll-smooth">
            <button
              onClick={() => setActiveTab('3D_MODEL')}
              title="Interactive 3D Spatial Model"
              aria-label="Interactive 3D Model"
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl font-mono text-xs whitespace-nowrap transition-all cursor-pointer ${
                activeTab === '3D_MODEL'
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-neutral-950 font-bold shadow-glow-pill scale-[1.02]'
                  : 'text-neutral-400 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              <Boxes className={`w-4 h-4 shrink-0 ${activeTab === '3D_MODEL' ? 'text-neutral-950 stroke-[2.2]' : 'text-amber-400/90'}`} />
              <span className="font-semibold">3D Model</span>
            </button>

            <button
              onClick={() => setActiveTab('WATCH_STORY')}
              title="3-Scene Narration Video (30s)"
              aria-label="3-Scene Narration Video"
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl font-mono text-xs whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'WATCH_STORY'
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-neutral-950 font-bold shadow-glow-pill scale-[1.02]'
                  : 'text-neutral-400 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              <Film className={`w-4 h-4 shrink-0 ${activeTab === 'WATCH_STORY' ? 'text-neutral-950 stroke-[2.2]' : 'text-amber-400/90'}`} />
              <span className="font-semibold">Story Reel</span>
            </button>

            <button
              onClick={() => setActiveTab('BLUEPRINTS')}
              title="Patent Blueprints & Schematics"
              aria-label="Patent Blueprints & Schematics"
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl font-mono text-xs whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'BLUEPRINTS'
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-neutral-950 font-bold shadow-glow-pill scale-[1.02]'
                  : 'text-neutral-400 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              <FileText className={`w-4 h-4 shrink-0 ${activeTab === 'BLUEPRINTS' ? 'text-neutral-950 stroke-[2.2]' : 'text-amber-400/90'}`} />
              <span className="font-semibold">Blueprints</span>
            </button>

            <button
              onClick={() => setActiveTab('AUDIO_GUIDE')}
              title="Binaural Curatorial Audio Guide"
              aria-label="Binaural Curatorial Audio Guide"
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl font-mono text-xs whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'AUDIO_GUIDE'
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-neutral-950 font-bold shadow-glow-pill scale-[1.02]'
                  : 'text-neutral-400 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              <Headphones className={`w-4 h-4 shrink-0 ${activeTab === 'AUDIO_GUIDE' ? 'text-neutral-950 stroke-[2.2]' : 'text-amber-400/90'}`} />
              <span className="font-semibold">Audio Guide</span>
            </button>
          </div>

          {/* TAB 1: INTERACTIVE 3D SPATIAL MODEL */}
          {activeTab === '3D_MODEL' && (
            <div
              ref={viewerContainerRef}
              className="relative w-full rounded-2xl sm:rounded-3xl bg-[#0e0e13]/90 border border-amber-500/30 overflow-hidden shadow-2xl flex flex-col min-h-[380px] sm:min-h-[500px] lg:min-h-[640px]"
            >
              {/* Top Controls Toolbar */}
              <div className="p-3 sm:p-4 border-b border-white/10 bg-black/40 backdrop-blur-md flex flex-wrap items-center justify-between gap-2 sm:gap-3 text-xs font-mono z-20">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="text-white font-medium truncate max-w-[130px] sm:max-w-none">{asset.title}</span>
                  <span className="text-neutral-500 hidden sm:inline">•</span>
                  <span className="text-amber-400 hidden sm:inline">{asset.polyCount}</span>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {/* Antigravity Dismantle Toggle (if applicable) */}
                  {asset.modelType === 'antigravity' ? (
                    <button
                      onClick={() => setDismantleAmount((d) => (d > 0.1 ? 0 : 0.55))}
                      className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] sm:text-[11px] font-mono cursor-pointer flex items-center gap-1.5 active:scale-95"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{dismantleAmount > 0.1 ? 'LEVITATE' : 'ASSEMBLE'}</span>
                    </button>
                  ) : null}

                  {/* Wireframe Mode */}
                  <button
                    onClick={() => setIsWireframe(!isWireframe)}
                    className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-[10px] sm:text-[11px] font-mono border transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 ${
                      isWireframe
                        ? 'bg-amber-500/25 text-amber-300 border-amber-400'
                        : 'bg-white/[0.04] text-neutral-300 border-white/10 hover:border-amber-400/40'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>{isWireframe ? 'WIREFRAME' : 'MESH'}</span>
                  </button>

                  {/* 360 Turntable Auto-Rotation */}
                  <button
                    onClick={() => setIsAutoRotating(!isAutoRotating)}
                    className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-[10px] sm:text-[11px] font-mono border transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 ${
                      isAutoRotating
                        ? 'bg-amber-500/20 text-amber-300 border-amber-400/50'
                        : 'bg-white/[0.04] text-neutral-400 border-white/10'
                    }`}
                  >
                    <RotateCw className="w-3.5 h-3.5" />
                    <span>{isAutoRotating ? 'ORBIT' : 'PAUSED'}</span>
                  </button>

                  {/* Lighting Switch (Warm Bronze vs Neutral) */}
                  <button
                    onClick={() => setLightingMode(lightingMode === 'spotlight' ? 'ambient' : 'spotlight')}
                    className="p-1.5 rounded-lg bg-white/[0.04] text-neutral-300 border border-white/10 hover:border-amber-400/50 transition cursor-pointer active:scale-95"
                    title="Toggle Warm Bronze vs Archival Neutral Lighting"
                  >
                    <Sun className="w-4 h-4 text-amber-400" />
                  </button>

                  {/* Reset Camera */}
                  <button
                    onClick={() => {
                      setZoomLevel(4.6);
                      setIsAutoRotating(true);
                      setIsWireframe(false);
                      setActiveHotspot(null);
                    }}
                    className="p-1.5 rounded-lg bg-white/[0.04] text-neutral-300 border border-white/10 hover:border-amber-400/50 transition cursor-pointer active:scale-95"
                    title="Reset Camera Position"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  {/* Fullscreen */}
                  <button
                    onClick={toggleFullscreen}
                    className="p-1.5 rounded-lg bg-white/[0.04] text-neutral-300 border border-white/10 hover:border-amber-400/50 transition cursor-pointer active:scale-95"
                    title="Fullscreen Mode"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Three.js Interactive Canvas */}
              <div className="relative flex-1 w-full h-full cursor-grab active:cursor-grabbing">
                <ModelViewer3D
                  modelType={asset.modelType}
                  isWireframe={isWireframe}
                  isAutoRotating={isAutoRotating}
                  lightingMode={lightingMode}
                  zoomLevel={zoomLevel}
                  dismantleFactor={dismantleAmount}
                />

                {/* Interactive Technical Callout Pins */}
                {asset.hotspots && asset.hotspots.length > 0
                  ? asset.hotspots.map((hs) => (
                      <div
                        key={hs.id}
                        style={{ top: `${hs.pos[0]}%`, left: `${hs.pos[1]}%` }}
                        className="absolute z-20 group cursor-pointer"
                        onClick={() => setActiveHotspot(`${hs.title}: ${hs.desc}`)}
                      >
                        <div className="relative flex items-center justify-center">
                          <span className="w-6 h-6 rounded-full bg-amber-400/30 animate-ping absolute" />
                          <div className="w-5 h-5 rounded-full bg-amber-400 text-neutral-950 font-bold text-[10px] flex items-center justify-center shadow-glow-pill">
                            {hs.id}
                          </div>
                        </div>
                        <div className="absolute left-6 -top-2 w-56 p-3 rounded-xl bg-[#14141c]/95 border border-amber-500/40 text-xs font-mono shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                          <span className="text-amber-400 font-bold block">{hs.title}</span>
                          <span className="text-neutral-300 text-[11px] leading-snug mt-1 block font-sans">
                            {hs.desc}
                          </span>
                        </div>
                      </div>
                    ))
                  : null}

                {/* Floating Hotspot Alert if Clicked */}
                {activeHotspot && (
                  <div className="absolute top-4 left-4 right-4 p-3.5 rounded-xl bg-[#14141c]/95 border border-amber-500/50 text-xs font-mono text-neutral-200 flex items-center justify-between z-30 shadow-2xl">
                    <div className="flex items-center gap-2">
                      <Info className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{activeHotspot}</span>
                    </div>
                    <button onClick={() => setActiveHotspot(null)} className="text-neutral-400 hover:text-white">
                      ✕
                    </button>
                  </div>
                )}

                {/* Floating Zoom & Scale HUD */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-[#0e0e13]/85 backdrop-blur-md p-1.5 rounded-xl border border-white/10 z-20 font-mono text-xs">
                  <button
                    onClick={() => setZoomLevel((z) => Math.max(2.4, z - 0.4))}
                    className="w-7 h-7 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] flex items-center justify-center text-neutral-200"
                  >
                    +
                  </button>
                  <button
                    onClick={() => setZoomLevel((z) => Math.min(7.5, z + 0.4))}
                    className="w-7 h-7 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] flex items-center justify-center text-neutral-200"
                  >
                    −
                  </button>
                  <span className="px-2 text-neutral-400 text-[10px]">
                    {Math.round((4.6 / zoomLevel) * 100)}% SCALE
                  </span>
                </div>

                {/* Camera Navigation Tip */}
                <div className="hidden sm:flex absolute bottom-4 left-4 pointer-events-none items-center gap-2 text-[11px] font-mono text-neutral-400 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                  <span>Left-click + drag to orbit</span>
                  <span>•</span>
                  <span>Pinch / wheel to zoom</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: 3-SCENE HISTORICAL NARRATION VIDEO (30s) */}
          {activeTab === 'WATCH_STORY' && (
            <div className="rounded-3xl bg-[#0e0e13]/90 border border-amber-500/30 p-4 sm:p-8 backdrop-blur-xl shadow-2xl flex flex-col gap-6">

              {/* Cinematic Video Player Stage */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black flex items-center justify-center shadow-2xl border border-amber-500/25">
                <img
                  src={matchingVideo.thumbnailUrl}
                  alt={matchingVideo.title}
                  className={`w-full h-full object-cover transition-opacity duration-700 ${
                    isPlayingVideo ? 'opacity-85' : 'opacity-40'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/50" />

                {/* Center Play/Pause Overlay */}
                <button
                  onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                  className="relative z-10 w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-neutral-950 flex items-center justify-center shadow-glow-pill hover:scale-110 active:scale-95 transition-transform cursor-pointer"
                >
                  {isPlayingVideo ? (
                    <Pause className="w-6 h-6 sm:w-8 sm:h-8 fill-current" />
                  ) : (
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current ml-0.5 sm:ml-1" />
                  )}
                </button>

                {/* Top Overlay Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center gap-2">
                  <span className="px-2.5 sm:px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-amber-500/30 text-amber-300 font-mono text-[9px] sm:text-[10px] uppercase font-bold">
                    AI NARRATION DOC
                  </span>
                  <span className="hidden sm:inline text-xs font-mono text-neutral-300">
                    Narrated by {matchingVideo.narrator}
                  </span>
                </div>

                {/* Bottom Video Progress & Scene Scrub Bar */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent z-10 flex flex-col gap-2">
                  {/* Tripartite 3-Scene Progress Bar */}
                  <div className="grid grid-cols-3 gap-1.5 h-2 w-full">
                    {[0, 1, 2].map((idx) => {
                      const isPast = currentSceneIdx > idx;
                      const isCurrent = currentSceneIdx === idx;
                      const sceneProgress = isCurrent
                        ? ((videoSeconds % 10) / 10) * 100
                        : isPast
                        ? 100
                        : 0;
                      return (
                        <div
                          key={idx}
                          onClick={() => setVideoSeconds(idx * 10)}
                          className="relative h-full bg-white/20 rounded-full overflow-hidden cursor-pointer"
                        >
                          <div
                            className="h-full bg-gradient-to-r from-amber-400 to-yellow-500 transition-all duration-300"
                            style={{ width: `${sceneProgress}%` }}
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* Playback Controls Row */}
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-300 pt-1">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                        className="text-amber-400 hover:text-white"
                      >
                        {isPlayingVideo ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>
                      <span>
                        0:{videoSeconds < 10 ? '0' : ''}{videoSeconds} / 0:30
                      </span>
                      <span className="text-amber-300 font-medium hidden sm:inline">
                        Current: {matchingVideo.scenes[currentSceneIdx].title}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="text-neutral-400 hover:text-white"
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => setVideoSeconds(0)}
                        className="text-[11px] text-amber-400 hover:underline"
                      >
                        REPLAY
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3-Scene Tripartite Breakdown Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {matchingVideo.scenes.map((scene, idx) => (
                  <div
                    key={idx}
                    onClick={() => setVideoSeconds(idx * 10)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      idx === currentSceneIdx
                        ? 'bg-[#14141c] border-amber-400 shadow-glow-gold'
                        : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5 font-mono">
                      <span className="text-xs text-amber-400 font-bold">
                        Scene 0{idx + 1}
                      </span>
                      <span className="text-[10px] text-neutral-400 px-2 py-0.5 rounded bg-white/[0.04]">
                        {scene.timeRange}
                      </span>
                    </div>
                    <h4 className="font-serif text-sm font-semibold text-white mb-1">
                      {scene.title}
                    </h4>
                    <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                      {scene.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Collapsible Narrator Voice-Over Transcript */}
              <div className="rounded-2xl bg-[#121217] border border-white/10 overflow-hidden">
                <button
                  onClick={() => setShowTranscript(!showTranscript)}
                  className="w-full p-4 flex items-center justify-between text-left text-xs font-mono text-neutral-300 hover:bg-white/[0.02] cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-amber-400" />
                    <span className="font-bold text-white uppercase tracking-wider">
                      Curatorial Voice-Over Transcript
                    </span>
                  </span>
                  {showTranscript ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {showTranscript ? (
                  <div className="px-5 pb-5 text-xs font-sans text-neutral-300 leading-relaxed border-t border-white/10 pt-4 space-y-3">
                    <p className="italic text-amber-300/90 font-serif text-sm">
                      &ldquo;{matchingVideo.shortDesc}&rdquo;
                    </p>
                    <p>
                      <strong>Scene 1 [00:00]:</strong> {matchingVideo.scenes[0].description} In accordance with
                      archival records from the {matchingVideo.narratorInstitution}, early experimenters encountered
                      seemingly insurmountable thermodynamic and acoustic boundaries.
                    </p>
                    <p>
                      <strong>Scene 2 [00:10]:</strong> {matchingVideo.scenes[1].description} Through disciplined
                      laboratory trials, the inventor deployed physical principles that confounded contemporary consensus.
                    </p>
                    <p>
                      <strong>Scene 3 [00:20]:</strong> {matchingVideo.scenes[2].description} The apparatus laid the
                      groundwork for the modern electrical and telecommunications infrastructure across continents.
                    </p>
                  </div>
                ) : null}
              </div>

            </div>
          )}

          {/* TAB 3: PATENT BLUEPRINTS & TECHNICAL SCHEMATICS */}
          {activeTab === 'BLUEPRINTS' && (
            <div className="rounded-3xl bg-[#0e0e13]/90 border border-amber-500/30 p-6 sm:p-8 backdrop-blur-xl shadow-2xl flex flex-col gap-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* Blueprint Drawing Viewport */}
                <div className="lg:col-span-8 rounded-2xl bg-black border border-white/15 overflow-hidden relative group">
                  <img
                    src={asset.schematicImage || asset.image}
                    alt={`${asset.title} Patent Blueprint`}
                    className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                  {/* Floating Action Badge */}
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/80 border border-amber-500/30 text-amber-300 font-mono text-[10px] uppercase font-bold">
                    CYANOTYPE ARCHIVAL PLATE • USPTO GAZETTE
                  </div>

                  {/* Lightbox Trigger Button */}
                  <div className="absolute bottom-4 right-4 z-10">
                    <button
                      onClick={() =>
                        setBlueprintLightbox({
                          id: 'BP-INSPECT',
                          title: `${asset.title} Patent Schematic`,
                          type: 'BLUEPRINT',
                          typeLabel: 'Archival Cyanotype Plate',
                          format: `${asset.patent} • High Resolution Scan`,
                          imageUrl: asset.schematicImage || asset.image,
                          accessionRef: `USPTO #${asset.id}`,
                          date: asset.patentDate,
                        })
                      }
                      className="px-3 py-2 sm:px-4 sm:py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-neutral-950 font-bold font-mono text-xs shadow-glow-pill hover:shadow-glow-gold active:scale-95 transition flex items-center gap-1.5 cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                      <span className="hidden sm:inline">Inspect High-Resolution Plate</span>
                      <span className="sm:hidden">Inspect Plate</span>
                    </button>
                  </div>
                </div>

                {/* Draughtsmanship & Numbered Parts Ledger */}
                <div className="lg:col-span-4 flex flex-col gap-4">
                  <h3 className="font-serif text-lg font-bold text-white">
                    Numbered Parts & Assembly Ledger
                  </h3>
                  <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                    Verified technical draughtsmanship details transcribed from original patent office drawings:
                  </p>

                  <div className="space-y-2.5 font-mono text-xs">
                    {(asset.blueprintLedger && asset.blueprintLedger.length > 0
                      ? asset.blueprintLedger
                      : [
                          { item: 'Primary Actuation Mechanism', spec: 'Forged bronze tolerance ±0.02mm' },
                          { item: 'Structural Chassis Assembly', spec: 'Milled cast iron framework' },
                          { item: 'Kinematic Linkage Pivot', spec: 'Dual counterbalanced escapement' },
                          { item: 'Electrolytic / Magnetic Junction', spec: 'Sealed hermetic reservoir' },
                        ]
                    ).map((entry, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-[#14141c] border border-white/10 flex flex-col gap-1"
                      >
                        <span className="text-amber-400 font-bold">
                          Fig. {idx + 1} // {entry.item}
                        </span>
                        <span className="text-neutral-400 text-[11px]">{entry.spec}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-[11px] font-mono text-amber-300">
                    Draughtsman Certification: Verified by International Archive for Mechanical Standards (IAMS).
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 4: BINAURAL CURATORIAL AUDIO GUIDE */}
          {activeTab === 'AUDIO_GUIDE' && (
            <div className="rounded-3xl bg-[#0e0e13]/90 border border-amber-500/30 p-6 sm:p-8 backdrop-blur-xl shadow-2xl flex flex-col gap-6">
              <div className="max-w-2xl mx-auto w-full flex flex-col items-center text-center gap-5">

                {/* Audio Crest Icon */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500/25 to-amber-600/10 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-glow-gold">
                  <Headphones className="w-9 h-9" />
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-semibold block mb-1">
                    Binaural Curatorial Commentary
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {asset.title}: Engineering Genesis
                  </h3>
                  <p className="font-mono text-xs text-neutral-400 mt-1">
                    Curated by {asset.curatorAuthor || 'Senior Fellow of Industrial Antiquities'}
                  </p>
                </div>

                {/* Animated Frequency Soundwave Simulation */}
                <div className="flex items-center justify-center gap-1.5 h-12 w-full max-w-sm px-4 py-2 rounded-2xl bg-black/60 border border-white/10">
                  {[20, 35, 12, 45, 25, 40, 18, 50, 30, 42, 16, 38, 22, 48, 28, 14].map((h, i) => (
                    <span
                      key={i}
                      className={`w-1 rounded-full bg-amber-400 transition-all duration-300 ${
                        isPlayingAudio ? 'animate-pulse' : 'opacity-40'
                      }`}
                      style={{ height: isPlayingAudio ? `${h}px` : '6px' }}
                    />
                  ))}
                </div>

                {/* Audio Progress Bar */}
                <div className="w-full flex flex-col gap-1.5 font-mono text-xs text-neutral-400">
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden cursor-pointer">
                    <div
                      className="h-full bg-gradient-to-r from-amber-400 to-yellow-500 transition-all duration-300"
                      style={{ width: `${(audioSeconds / 45) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span>0:{audioSeconds < 10 ? '0' : ''}{audioSeconds}</span>
                    <span>0:45</span>
                  </div>
                </div>

                {/* Audio Controls */}
                <div className="flex items-center gap-4">
                  {/* Speed toggle */}
                  <button
                    onClick={() => setAudioSpeed((s) => (s === 1 ? 1.25 : 1))}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-neutral-300 hover:text-white"
                  >
                    {audioSpeed}x SPEED
                  </button>

                  {/* Play / Pause */}
                  <button
                    onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                    className="w-14 h-14 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-neutral-950 flex items-center justify-center shadow-glow-pill hover:scale-105 transition cursor-pointer"
                  >
                    {isPlayingAudio ? (
                      <Pause className="w-6 h-6 fill-current" />
                    ) : (
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    )}
                  </button>

                  <button
                    onClick={() => setAudioSeconds(0)}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-neutral-300 hover:text-white"
                  >
                    REPLAY
                  </button>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* ==================== 5. CURATORIAL IN-DEPTH DOSSIER SECTIONS ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">

          {/* Main 3 Narrative Blocks */}
          <div className="lg:col-span-8 flex flex-col gap-8">

            {/* 1. Historical Context & Background */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0e0e13]/85 border border-white/10 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-widest">
                <Clock className="w-4 h-4" />
                <span>01 // Historical Context & Genesis</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-white">
                The Societal Conditions & Necessity
              </h2>
              <p className="font-sans text-neutral-300 text-sm leading-relaxed">
                {asset.story || asset.desc}
              </p>
            </div>

            {/* 2. How the Invention Works (Mechanical Breakdown) */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0e0e13]/85 border border-white/10 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-widest">
                <Compass className="w-4 h-4" />
                <span>02 // How the Invention Works</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-white">
                Mechanical Breakdown & Kinematic Principles
              </h2>
              <p className="font-sans text-neutral-300 text-sm leading-relaxed">
                {asset.mechanics || asset.desc}
              </p>
            </div>

            {/* 3. Societal Impact & Modern Legacy */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0e0e13]/85 border border-white/10 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-widest">
                <Sparkles className="w-4 h-4" />
                <span>03 // Societal Impact & Modern Legacy</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-white">
                Global Impact & Modern Industrial Descendants
              </h2>
              <p className="font-sans text-neutral-300 text-sm leading-relaxed">
                {asset.legacy || asset.desc}
              </p>
            </div>

          </div>

          {/* Right Column: Curator's Reflection & Archival Seals */}
          <div className="lg:col-span-4 flex flex-col gap-6">

            {/* 4. Curator's Reflection Highlight Quote */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-500/10 via-[#0e0e13] to-black border border-amber-500/40 shadow-glow-gold flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
                  <Sparkles className="w-4 h-4" />
                  <span>Curator&apos;s Reflection</span>
                </div>
                <blockquote className="font-serif text-base sm:text-lg italic text-amber-200/95 leading-relaxed">
                  &ldquo;{asset.curatorQuote || asset.desc}&rdquo;
                </blockquote>
              </div>
              <div className="pt-4 mt-4 border-t border-amber-500/20 font-mono text-xs">
                <span className="text-white font-medium block">
                  {asset.curatorAuthor || 'Chief Archivist, IAIMS Museum'}
                </span>
                <span className="text-amber-400/80 text-[11px] block mt-0.5">
                  Department of Historical Kinematics
                </span>
              </div>
            </div>

            {/* Archival Standards Verification Card */}
            <div className="p-6 rounded-3xl bg-[#0e0e13]/85 border border-white/10 flex flex-col gap-3 font-mono text-xs">
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-bold">
                Archival Certification
              </span>
              <div className="space-y-2 text-neutral-300">
                <div className="flex items-center justify-between">
                  <span>IAMS Classification:</span>
                  <span className="text-amber-400">CLASS 4-ENG</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Digitization Standard:</span>
                  <span>ISO-IAMS-2024</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Photogrammetry Mesh:</span>
                  <span className="text-white">{asset.polyCount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Resonance Profile:</span>
                  <span className="text-white">{asset.resonance}</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* ==================== 6. RELATED HOLDINGS & RECOMMENDED INVENTIONS ==================== */}
        <div className="border-t border-white/10 pt-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">
                Comparative Historical Holdings
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Related Inventions from This Era
              </h3>
            </div>
            <Link
              href="/#collection"
              className="text-xs font-mono text-amber-400 hover:underline flex items-center gap-1.5"
            >
              <span>View Full Registry (500+ Assets)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedAssets.map((rel) => (
              <Link
                key={rel.id}
                href={`/inventions/${rel.id}`}
                className="group p-4 rounded-2xl bg-[#0e0e13]/80 hover:bg-[#14141c] border border-white/10 hover:border-amber-400 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="relative h-44 rounded-xl overflow-hidden bg-black mb-3">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-black/80 font-mono text-[10px] text-amber-400">
                      {rel.categoryLabel}
                    </span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {rel.title}
                  </h4>
                  <p className="font-mono text-xs text-amber-400/90 mt-0.5">
                    {rel.inventor} • {rel.patent}
                  </p>
                  <p className="font-sans text-xs text-neutral-400 mt-2 line-clamp-2">
                    {rel.desc}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-amber-400">
                  <span>INSPECT DOSSIER</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox for Blueprints */}
      <LightboxModal
        isOpen={!!blueprintLightbox}
        item={blueprintLightbox}
        onClose={() => setBlueprintLightbox(null)}
      />
    </section>
  );
}
