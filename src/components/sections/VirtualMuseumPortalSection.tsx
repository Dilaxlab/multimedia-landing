'use client';

import React from 'react';
import { Glasses, ArrowRight, Play, Compass, Boxes, MousePointer2 } from 'lucide-react';
import { VIRTUAL_TOUR_MUSEUM_URL } from '@/lib/constants';

export default function VirtualMuseumPortalSection() {
  return (
    <section
      id="virtual-portal"
      className="relative w-full py-10 sm:py-16 md:py-20 dark:bg-[#050505] bg-surface-container-low overflow-hidden border-t dark:border-white/5 border-outline-variant/30 transition-colors duration-300"
    >
      {/* Cinematic Background Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-amber-500/5 blur-[80px] rounded-full pointer-events-none" />

      {/* Subtle Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Premium Card */}
        <div className="relative rounded-2xl sm:rounded-[2.5rem] p-1 sm:p-1.5 overflow-hidden group">
          {/* Animated Gradient Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 via-primary/20 to-amber-500/30 opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative rounded-2xl sm:rounded-[2.3rem] dark:bg-[#0A0A0A] bg-surface p-5 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-14 overflow-hidden border dark:border-white/5 border-outline-variant/30 shadow-md dark:shadow-2xl">
            {/* Inner Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 blur-[70px] pointer-events-none" />

            {/* Left Content Area */}
            <div className="flex-1 relative z-10 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full dark:bg-white/5 bg-primary/10 dark:border-white/10 border-primary/20 text-primary dark:text-amber-300 text-[10px] sm:text-xs font-medium tracking-wide mb-3 sm:mb-4 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
                </span>
                LIVE 3D EXPERIENCE
              </div>

              {/* Headline */}
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl dark:text-white text-on-surface font-normal tracking-tight leading-[1.15] mb-2 sm:mb-3">
                Step Inside the <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500">
                  Virtual Museum
                </span>
              </h2>

              <p className="dark:text-neutral-400 text-on-surface-variant text-xs sm:text-base leading-relaxed mb-4 sm:mb-6 max-w-xl mx-auto lg:mx-0">
                Skip the index. Immerse yourself in a fully navigable 3D space. Inspect historical
                CAD models, trigger spatial audio guides, and explore 18 curated halls—all from your
                browser.
              </p>

              {/* Feature Pills (Minimalist) */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5 mb-5 sm:mb-8">
                {[
                  { icon: Compass, text: '360° Free-Roam' },
                  { icon: Boxes, text: 'Interactive CAD' },
                  { icon: MousePointer2, text: 'Spatial Audio' },
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg dark:bg-white/[0.04] bg-surface-container dark:border-white/5 border-outline-variant/30 dark:text-neutral-300 text-on-surface text-[11px] sm:text-xs font-medium"
                  >
                    <feature.icon className="w-3.5 h-3.5 text-primary dark:text-amber-400" />
                    {feature.text}
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5">
                <a
                  href={VIRTUAL_TOUR_MUSEUM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-neutral-950 font-bold text-xs sm:text-sm transition-all duration-300 hover:scale-102 active:scale-95 shadow-[0_0_25px_rgba(245,158,11,0.35)] hover:shadow-[0_0_35px_rgba(245,158,11,0.55)] overflow-hidden cursor-pointer"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
                  <Play className="w-4 h-4 fill-current relative z-10" />
                  <span className="relative z-10">Launch Virtual Tour</span>
                </a>

                <button
                  onClick={() =>
                    document.getElementById('themes')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl dark:bg-transparent bg-surface-container hover:bg-surface-container-high dark:hover:bg-white/5 border dark:border-white/10 border-outline-variant/30 dark:text-neutral-300 text-on-surface text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer active:scale-95"
                >
                  <span>Browse Categories</span>
                  <ArrowRight className="w-4 h-4 text-primary dark:text-amber-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Visual Area (The "Portal" Teaser) */}
            <div className="flex-1 w-full max-w-sm sm:max-w-md relative z-10 perspective-1000">
              <a
                href={VIRTUAL_TOUR_MUSEUM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded-2xl overflow-hidden border dark:border-white/10 border-outline-variant/40 group-hover:border-amber-500/50 transition-colors duration-500 shadow-xl aspect-[16/10] sm:aspect-[4/3] cursor-pointer"
              >
                {/* Simulated 3D Environment Background */}
                <div className="absolute inset-0 bg-[#0F0F13] overflow-hidden">
                  {/* Perspective Floor Grid */}
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        'linear-gradient(to right, rgba(245, 158, 11, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(245, 158, 11, 0.2) 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                      transform: 'rotateX(60deg) scale(2.2) translateY(-10%)',
                      transformOrigin: 'bottom center',
                    }}
                  />
                  {/* Ceiling Glow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-24 bg-gradient-to-b from-amber-500/20 to-transparent blur-xl" />
                </div>

                {/* Center Holographic Icon */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-amber-400 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/60 border border-amber-500/40 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Glasses className="w-6 h-6 sm:w-7 sm:h-7 text-amber-300" />
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-4 text-center">
                    <h3 className="text-white font-serif text-sm sm:text-base tracking-wide">
                      Immersive Pavilion
                    </h3>
                    <p className="text-amber-400/90 text-[10px] sm:text-xs font-mono mt-0.5">Click to enter</p>
                  </div>
                </div>

                {/* Top HUD Details */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-center text-[9px] sm:text-[10px] font-mono text-neutral-300 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    CONNECTED
                  </span>
                  <span>18 HALLS • 90 ARTIFACTS</span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/10 transition-colors duration-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
