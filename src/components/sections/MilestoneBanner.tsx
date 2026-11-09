'use client';

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface MilestoneBannerProps {
  onExplore?: () => void;
}

export default function MilestoneBanner({ onExplore }: MilestoneBannerProps) {
  const handleScrollToCollection = () => {
    if (onExplore) {
      onExplore();
      return;
    }
    const el = document.getElementById('collection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#1a0c15] via-[#2e1024] to-[#160912] text-white py-14 sm:py-20 px-4 sm:px-6 md:px-12 border-t border-b border-primary/20">
      {/* Background Watermark (250 Milestone as seen in archival design) */}
      <div 
        className="pointer-events-none absolute right-4 sm:right-12 lg:right-24 top-1/2 -translate-y-1/2 select-none font-serif text-[130px] sm:text-[200px] md:text-[260px] font-bold text-white/[0.04] leading-none tracking-tighter"
        aria-hidden="true"
      >
        250
      </div>

      {/* Subtle Ambient Radial Lighting in Primary Gold */}
      <div 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,202,80,0.08)_0%,transparent_70%)]" 
        aria-hidden="true"
      ></div>

      <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Pre-header tag */}
        <div className="inline-flex items-center gap-2 mb-3.5 px-3.5 py-1 rounded-full bg-black/50 border border-amber-500/30 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-amber-300 uppercase">
            1776 — 2026 • A HISTORIC MILESTONE
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal tracking-tight leading-[1.15] mb-4 drop-shadow-sm">
          America 250: A Legacy of Ingenuity
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-neutral-200/90 font-sans max-w-2xl mx-auto font-light leading-relaxed mb-8">
          Celebrate the creative spirit and historic achievements of American inventors with a
          commemorative collection of heritage-inspired patent archives, physical reconstructions,
          and educational discoveries.
        </p>

        {/* Action Button */}
        <button
          onClick={handleScrollToCollection}
          className="group inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-neutral-950 font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-[0_4px_20px_rgba(242,202,80,0.3)] hover:shadow-[0_6px_25px_rgba(242,202,80,0.5)] active:scale-95 cursor-pointer"
        >
          <span>Explore Commemorative Patents</span>
          <ArrowRight className="w-4 h-4 text-neutral-950 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
