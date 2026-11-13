'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { MOCK_HISTORICAL_ASSETS } from '@/lib/constants';
import { ArrowRight, TrendingUp, Eye, Flame, Star, Award } from 'lucide-react';
import { ProgressNumberBadge } from '@/components/ui/progress-number-badge';

export default function TrendingInventionsSection() {
  const router = useRouter();

  // Curated 4 top explored inventions with ranking data
  const TRENDING_CONFIGS = [
    {
      id: 'HA-101',
      rank: '01',
      badge: 'Telephony',
      views: '24.8K',
      growth: '+12%',
      tagline: 'Acoustic Breakthrough',
      icon: Flame,
      color: 'text-orange-400',
      bg: 'bg-orange-500/10',
      border: 'border-orange-500/20',
    },
    {
      id: 'HA-103',
      rank: '02',
      badge: 'Domestic Mechanics',
      views: '18.2K',
      growth: '+8%',
      tagline: 'Kinematics & Mechanics',
      icon: Star,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/20',
    },
    {
      id: 'HA-107',
      rank: '03',
      badge: 'Energy Grid',
      views: '15.6K',
      growth: '+21%',
      tagline: 'Polyphase AC Induction',
      icon: TrendingUp,
      color: 'text-yellow-400',
      bg: 'bg-yellow-500/10',
      border: 'border-yellow-500/20',
    },
    {
      id: 'HA-104',
      rank: '04',
      badge: 'Wind Power',
      views: '12.4K',
      growth: '+5%',
      tagline: 'Centrifugal Wind Mill',
      icon: Award,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
    },
  ];

  const trendingAssets = TRENDING_CONFIGS.map((cfg) => {
    const asset = MOCK_HISTORICAL_ASSETS.find((a) => a.id === cfg.id) || MOCK_HISTORICAL_ASSETS[0];
    return {
      ...asset,
      ...cfg,
    };
  });

  const [activeTrendingIndex, setActiveTrendingIndex] = useState<number>(0);
  const [trendingProgress, setTrendingProgress] = useState<number>(0);
  const [isTrendingPaused, setIsTrendingPaused] = useState<boolean>(false);
  const trendingContainerRef = useRef<HTMLDivElement>(null);

  const DURATION = 4500; // 4.5 seconds per card
  const INTERVAL = 40; // 40ms update tick

  // Ondo Finance style auto-advancing circular timer
  useEffect(() => {
    if (isTrendingPaused) return;

    const timer = setInterval(() => {
      setTrendingProgress((prev) => {
        if (prev >= 100) {
          setActiveTrendingIndex((curr) => (curr + 1) % trendingAssets.length);
          return 0;
        }
        return prev + (INTERVAL / DURATION) * 100;
      });
    }, INTERVAL);

    return () => clearInterval(timer);
  }, [isTrendingPaused, trendingAssets.length]);

  // Smooth scroll active card into view on mobile
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 640 && trendingContainerRef.current) {
      const container = trendingContainerRef.current;
      const cardEl = container.children[activeTrendingIndex] as HTMLElement;
      if (cardEl) {
        const offsetLeft = cardEl.offsetLeft - (container.clientWidth - cardEl.clientWidth) / 2;
        container.scrollTo({ left: Math.max(0, offsetLeft), behavior: 'smooth' });
      }
    }
  }, [activeTrendingIndex]);

  const handleNavigateAsset = (id: string) => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    router.push(`/inventions/${id}`);
  };

  return (
    <section
      id="trending"
      className="relative w-full py-10 sm:py-16 md:py-20 dark:bg-[#050505] bg-surface-container-low border-t dark:border-white/5 border-outline-variant/30 overflow-hidden transition-colors duration-300"
    >
      {/* Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[260px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-6 sm:mb-10">
          <div className="max-w-2xl">
            {/* LIVE Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full dark:bg-white/5 bg-primary/10 dark:border-white/10 border-primary/20 text-[10px] font-mono tracking-widest uppercase mb-2 sm:mb-3 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              <span className="dark:text-neutral-300 text-on-surface">Live Trends</span>
              <span className="w-px h-3 dark:bg-white/20 bg-outline-variant/40 mx-1" />
              <span className="text-primary dark:text-amber-400 font-semibold">Auto-Focusing (4.5s)</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl dark:text-white text-on-surface font-normal tracking-tight mb-2 sm:mb-3">
              Most Explored <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500">
                Masterpieces
              </span>
            </h2>

            <p className="text-xs sm:text-base dark:text-neutral-400 text-on-surface-variant leading-relaxed max-w-xl">
              The world&apos;s most referenced technological milestones. Discover the inventions that are
              currently capturing the attention of global historians and engineers.
            </p>
          </div>

          {/* Action Button */}
          <button
            onClick={() => {
              const el = document.getElementById('themes');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full dark:bg-white/5 bg-surface-container hover:bg-surface-container-high dark:hover:bg-white/10 border dark:border-white/10 border-outline-variant/30 dark:text-white text-on-surface text-xs sm:text-sm font-medium transition-all duration-300 shrink-0 w-fit cursor-pointer active:scale-95"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary dark:text-amber-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4 Trending Cards with Ondo Finance Auto-Cycling Timer Effect */}
        <div
          ref={trendingContainerRef}
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory gap-3 sm:gap-5 pb-3 sm:pb-0 scrollbar-none px-1"
        >
          {trendingAssets.map((asset, idx) => {
            const Icon = asset.icon;
            const isActive = idx === activeTrendingIndex;

            return (
              <div
                key={asset.id}
                onClick={() => handleNavigateAsset(asset.id)}
                onMouseEnter={() => {
                  setActiveTrendingIndex(idx);
                  setTrendingProgress(0);
                  setIsTrendingPaused(true);
                }}
                onMouseLeave={() => setIsTrendingPaused(false)}
                className={`group relative flex flex-col rounded-2xl sm:rounded-3xl cursor-pointer overflow-hidden transition-all duration-500 w-[76vw] max-w-[280px] shrink-0 snap-center sm:w-auto sm:max-w-none select-none ${
                  isActive
                    ? 'dark:bg-[#0e0e14] bg-surface border-2 border-amber-400 dark:border-amber-400/90 ring-4 ring-amber-400/15 shadow-[0_15px_45px_-8px_rgba(245,158,11,0.35)] -translate-y-1.5 z-10'
                    : 'dark:bg-[#0A0A0C] bg-surface dark:border-white/5 border-outline-variant/30 hover:border-amber-500/40 opacity-85 hover:opacity-100 shadow-sm dark:shadow-none hover:shadow-[0_10px_25px_-5px_rgba(245,158,11,0.15)]'
                }`}
              >
                {/* Image Area with Ondo Progress Badge in Top-Left */}
                <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden dark:bg-neutral-900 bg-surface-container">
                  <img
                    src={asset.image}
                    alt={asset.title}
                    className={`w-full h-full object-cover object-top transition-all duration-700 ease-out ${
                      isActive ? 'opacity-100 scale-108' : 'opacity-75 group-hover:opacity-100 group-hover:scale-105'
                    }`}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t dark:from-[#0A0A0C] from-surface via-black/20 to-transparent" />

                  {/* Ondo Finance Circular Timer Badge (Top Left) */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                    <div className="rounded-full dark:bg-black/75 bg-white/95 backdrop-blur-md p-0.5 border dark:border-white/20 border-neutral-300 shadow-lg transition-transform duration-300 group-hover:scale-105">
                      <ProgressNumberBadge
                        number={asset.rank}
                        isActive={isActive}
                        progress={isActive ? trendingProgress : 0}
                        size={36}
                      />
                    </div>
                  </div>

                  {/* Category Badge (Top Right) */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                    <span
                      className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[9px] sm:text-[10px] font-mono font-medium ${asset.color} tracking-wider uppercase flex items-center gap-1.5 shadow-sm`}
                    >
                      <Icon className="w-3 h-3" />
                      {asset.badge}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex flex-col flex-1 p-3.5 sm:p-5">
                  {/* Tagline */}
                  <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest dark:text-neutral-500 text-on-surface-variant mb-1 sm:mb-1.5 line-clamp-1">
                    {asset.tagline}
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-serif text-base sm:text-lg font-medium leading-snug mb-3 transition-colors duration-300 line-clamp-2 ${
                      isActive
                        ? 'text-amber-500 dark:text-amber-300 font-bold'
                        : 'dark:text-white text-on-surface group-hover:text-primary dark:group-hover:text-amber-100'
                    }`}
                  >
                    {asset.title}
                  </h3>

                  {/* Trending Stats Row */}
                  <div className="mt-auto pt-3 border-t dark:border-white/5 border-outline-variant/20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full ${asset.bg} ${asset.border} border flex items-center justify-center shrink-0 transition-transform ${
                          isActive ? 'scale-110 shadow-[0_0_10px_rgba(245,158,11,0.3)]' : ''
                        }`}
                      >
                        <Eye className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${asset.color}`} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold dark:text-white text-on-surface">{asset.views}</span>
                        <span className="text-[9px] dark:text-neutral-500 text-on-surface-variant uppercase tracking-wider">
                          Explorations
                        </span>
                      </div>
                    </div>

                    {/* Growth Indicator */}
                    <div className="flex items-center gap-1 text-emerald-500 dark:text-emerald-400 text-[11px] sm:text-xs font-medium bg-emerald-500/10 px-2 py-0.5 sm:py-1 rounded-md border border-emerald-500/20">
                      <TrendingUp className="w-3 h-3" />
                      {asset.growth}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Swipe Guidance Note */}
        <div className="sm:hidden flex items-center justify-center gap-1.5 text-[11px] font-mono text-on-surface-variant mt-2.5 opacity-80">
          <ArrowRight className="w-3.5 h-3.5 text-primary animate-pulse" />
          <span>Swipe or tap to explore trending historical assets</span>
        </div>
      </div>
    </section>
  );
}
