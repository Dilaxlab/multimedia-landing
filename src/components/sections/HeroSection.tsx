'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import {
  Layers,
  PlayCircle,
  Sparkles,
  Cog,
  ShieldCheck,
  Film,
  BookOpen,
  Boxes,
  Compass,
  ArrowRight,
} from 'lucide-react';

interface HeroSectionProps {
  onExploreCollection?: () => void;
  onWatchStories?: () => void;
  onExploreAsset?: (id: string) => void;
}

export interface HistoricalAssetItem {
  id: string;
  name: string;
  inventor: string;
  year: string;
  image: string;
  tag: string;
  desc: string;
}

const HERO_ASSETS: HistoricalAssetItem[] = [
  {
    id: 'HA-109',
    name: 'Character A',
    inventor: 'Test Role A (1876)',
    year: '1876',
    image: '/images/character_bell_stage.png',
    tag: 'Animated Character • A',
    desc: 'Test description for Character A.',
  },
  {
    id: 'HA-102',
    name: 'Character B',
    inventor: 'Test Role B (1880)',
    year: '1884',
    image: '/images/character_fleming_stage.png',
    tag: 'Animated Character • B',
    desc: 'Test description for Character B.',
  },
  {
    id: 'HA-103',
    name: 'Character C',
    inventor: 'Test Role C (1882)',
    year: '1887',
    image: '/images/character_beville_stage.png',
    tag: 'Animated Character • C',
    desc: 'Test description for Character C.',
  },
  {
    id: 'HA-107',
    name: 'Character D',
    inventor: 'Test Role D (1888)',
    year: '1888',
    image: '/images/character_tesla_stage.png',
    tag: 'Animated Character • D',
    desc: 'Test description for Character D.',
  },
  {
    id: 'HA-105',
    name: 'Character E',
    inventor: 'Test Role E (1880)',
    year: '1880',
    image: '/images/character_edison_stage.png',
    tag: 'Animated Character • E',
    desc: 'Test description for Character E.',
  },
];

export default function HeroSection({
  onExploreCollection,
  onWatchStories,
  onExploreAsset,
}: HeroSectionProps) {
  const [currentAssetIndex, setCurrentAssetIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const currentAsset = HERO_ASSETS[currentAssetIndex];

  const handleSelectAsset = useCallback((newIndex: number) => {
    if (newIndex === currentAssetIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentAssetIndex(newIndex);
      setIsTransitioning(false);
    }, 280);
  }, [currentAssetIndex]);

  // Optional 5s auto-interval
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentAssetIndex((prev) => (prev + 1) % HERO_ASSETS.length);
        setIsTransitioning(false);
      }, 280);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewAsset = (id: string) => {
    if (onExploreAsset) {
      onExploreAsset(id);
    } else {
      window.location.href = `/inventions/${id}`;
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full dark:bg-[#0a0a0c] bg-surface dark:text-[#e2e8f0] text-on-surface overflow-hidden pt-16 pb-10 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-24 transition-colors duration-300"
    >
      {/* Warm Ambient Bronze & Amber Spotlight Glow Radiating from Center Stage */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Center-Right Warm Golden Spotlight */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[650px] h-[650px] bg-[radial-gradient(circle,_rgba(212,175,55,0.14)_0%,_rgba(200,125,85,0.06)_45%,_transparent_70%)] blur-3xl" />
        {/* Top Center Soft Amber Radiance */}
        <div className="absolute -top-32 left-1/3 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(212,175,55,0.08)_0%,_transparent_65%)] blur-3xl" />
        {/* Subtle Archival Grain / Grid */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#d4af37_1px,_transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================================= */}
        {/* 2-COLUMN HERO SPLIT                                                       */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-10 lg:mb-16">
          {/* ==================== LEFT COLUMN: STORY HEADLINE & CTAS ================= */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-6 z-10">
            {/* Sub-badge: letter-spaced, bronze/gold text */}
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-[0.16em] sm:tracking-[0.22em] text-[#d4af37] uppercase">
                DIGITAL MUSEUM • HISTORICAL INVENTIONS • 3D RECONSTRUCTIONS
              </span>
            </div>

            {/* Main Headline: Large Serif Display Typography */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight dark:text-white text-on-surface leading-[1.15]">
              Explore History <br />
              <span className="text-primary font-serif italic">Beyond the Museum</span>
            </h1>

            {/* Subtitle: Muted Text */}
            <p className="font-sans text-on-surface-variant text-xs sm:text-base leading-relaxed max-w-xl">
              Discover historical inventions through immersive 3D models, cinematic stories, and
              interactive digital experiences.
            </p>

            {/* Action Buttons - Mobile Full-Width Touch Friendly */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 sm:pt-2">
              {/* Button 1: Solid Gold Button with Black Text and Icon */}
              <button
                onClick={onExploreCollection || (() => handleScrollTo('collection'))}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#d4af37] hover:bg-[#e2bd44] text-[#0a0a0c] font-bold text-sm tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:shadow-[0_0_30px_rgba(212,175,55,0.55)] active:scale-[0.98] sm:hover:scale-[1.02] cursor-pointer"
              >
                <Layers className="w-4 h-4 stroke-[2.3]" />
                <span>Explore the Collection</span>
                <span className="text-base font-bold leading-none">→</span>
              </button>

              {/* Button 2: Outlined Button with Play Icon and Gold Border */}
              <button
                onClick={onWatchStories || (() => handleScrollTo('videos'))}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-surface-container hover:bg-surface-container-high dark:bg-black/40 dark:hover:bg-white/[0.06] border border-[#d4af37]/40 hover:border-[#d4af37] text-on-surface hover:text-primary dark:text-white dark:hover:text-[#d4af37] font-medium text-sm tracking-wide transition-all duration-300 cursor-pointer backdrop-blur-md active:scale-[0.98]"
              >
                <PlayCircle className="w-4 h-4 text-primary stroke-[2]" />
                <span>Watch Historical Stories</span>
              </button>
            </div>
          </div>

          {/* ==================== RIGHT COLUMN: INTERACTIVE SHOWCASE STAGE ============ */}
          <div className="lg:col-span-6 relative w-full flex items-center justify-center perspective-1000">
            {/* Spotlight Showcase Stage Box - Unique Museum Style */}
            <div
              className="relative w-full h-[360px] sm:h-[480px] lg:h-[540px] rounded-3xl sm:rounded-[2.5rem] bg-[#050505] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.9)] group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Premium Ambient Backlight */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.15)_0%,_transparent_60%)] z-0 pointer-events-none" />

              {/* Image Stage */}
              <div
                className={`relative w-full h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  isTransitioning
                    ? 'opacity-0 scale-[0.98] translate-y-4'
                    : 'opacity-100 scale-100 translate-y-0'
                }`}
              >
                <Image
                  src={currentAsset.image}
                  alt={currentAsset.name}
                  fill
                  className="object-cover object-center transition-transform duration-[2s] group-hover:scale-110"
                  priority
                />

                {/* Cinematic Vignette & Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-transparent opacity-60" />

                {/* Glass Reflection Overlay (Top Edge) */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/10 to-transparent opacity-30 pointer-events-none" />
              </div>

              {/* Floating Info Panel - Glassmorphism */}
              <div
                className={`absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8 z-20 transition-all duration-700 delay-100 ${
                  isTransitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
                }`}
              >
                <div className="flex flex-row items-end justify-between gap-3 sm:gap-6">
                  {/* Left Side: Text Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <span className="h-[1px] w-6 sm:w-8 bg-[#d4af37]" />
                      <span className="font-mono text-[9px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#d4af37] truncate">
                        {currentAsset.tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-3xl lg:text-5xl font-bold text-white leading-tight mb-1 sm:mb-2 drop-shadow-lg truncate">
                      {currentAsset.name}
                    </h3>

                    <p className="font-sans text-xs sm:text-base text-neutral-300 flex items-center gap-1.5 sm:gap-2 truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shrink-0" />
                      <span className="truncate">{currentAsset.inventor}</span>
                    </p>
                  </div>

                  {/* Right Side: Action Button (Unique Hover Effect) */}
                  <button
                    onClick={() => handleViewAsset(currentAsset.id)}
                    className="group/btn relative overflow-hidden flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/5 backdrop-blur-md border border-white/20 hover:border-[#d4af37] transition-all duration-500 cursor-pointer shrink-0"
                  >
                    {/* Animated Gold Fill */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37] to-[#f3e5ab] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out" />

                    {/* Arrow Icon - Perfectly Aligned */}
                    <span className="relative z-10 flex items-center justify-center text-white group-hover/btn:text-black transition-colors duration-300 group-hover/btn:-rotate-45">
                      <ArrowRight className="w-5 h-5 sm:w-7 sm:h-7 stroke-[2.5]" />
                    </span>
                  </button>
                </div>
              </div>

              {/* Unique Carousel Navigation - Vertical Layout on the Right */}
              <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-6 z-20 flex flex-col items-center gap-3">
                {HERO_ASSETS.map((asset, idx) => (
                  <button
                    key={asset.id}
                    onClick={() => handleSelectAsset(idx)}
                    className="group/dot relative flex items-center justify-center p-2"
                    title={`Switch to ${asset.name}`}
                    aria-label={`Slide ${idx + 1}`}
                  >
                    {/* Dot line indicator */}
                    <div
                      className={`transition-all duration-500 rounded-full ${
                        currentAssetIndex === idx
                          ? 'w-1.5 h-8 bg-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.8)]'
                          : 'w-1.5 h-1.5 bg-white/30 group-hover/dot:bg-white/80'
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Decorative Corner Accents (Museum Frame) */}
              <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-[#d4af37]/40 rounded-tl-xl pointer-events-none" />
              <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-[#d4af37]/40 rounded-br-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM HERO STATISTICS BAR                                                */}
        {/* ========================================================================= */}
        <div className="w-full rounded-2xl dark:bg-[#0c0d12]/85 bg-surface-container-low border border-primary/20 px-6 sm:px-8 py-5 backdrop-blur-md shadow-2xl mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 items-center">
            {/* Metric 1: 500+ Historical Inventions */}
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary shrink-0">
                <Cog className="w-6 h-6 stroke-[1.8]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold dark:text-white text-on-surface leading-tight">500+</span>
                <span className="font-sans text-xs text-on-surface-variant mt-0.5">
                  Historical Inventions
                </span>
              </div>
            </div>

            {/* Metric 2: 64 Invention Disciplines */}
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary shrink-0">
                <Layers className="w-6 h-6 stroke-[1.8]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold dark:text-white text-on-surface leading-tight">64</span>
                <span className="font-sans text-xs text-on-surface-variant mt-0.5">
                  Invention Disciplines
                </span>
              </div>
            </div>

            {/* Metric 3: 30s 3-Scene Documentaries */}
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary shrink-0">
                <Film className="w-6 h-6 stroke-[1.8]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold dark:text-white text-on-surface leading-tight">30s</span>
                <span className="font-sans text-xs text-on-surface-variant mt-0.5">
                  3-Scene Documentaries
                </span>
              </div>
            </div>

            {/* Metric 4: 100% Verified Patent Archives */}
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary shrink-0">
                <ShieldCheck className="w-6 h-6 stroke-[1.8]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold dark:text-white text-on-surface leading-tight">100%</span>
                <span className="font-sans text-xs text-on-surface-variant mt-0.5">
                  Verified Patent Archives
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
