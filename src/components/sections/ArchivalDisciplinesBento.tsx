'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { OFFICIAL_18_CATEGORIES, CategoryMeta } from '@/lib/constants';
import { CategoryFilterType } from '@/types/asset';
import {
  Sparkles, Zap, Radio, Wrench, Clock, Wind, Plane, Cpu, Flame,
  Printer, Eye, Building2, Wheat, Anchor, Lightbulb, Hammer,
  Train, Activity, Camera, ChevronLeft, ChevronRight, ArrowRight, Lock, Check
} from 'lucide-react';

// --- Ultra-Premium Gallery Card ---
const GalleryCard = ({
  cat,
  config,
  isActive,
  onSelect,
  isDragged,
}: {
  cat: CategoryMeta;
  config: any;
  isActive: boolean;
  onSelect: () => void;
  isDragged: React.MutableRefObject<boolean>;
}) => {
  const Icon = config.Icon;

  return (
    <div
      onClick={() => !isDragged.current && onSelect()}
      className={`relative h-full w-full rounded-3xl overflow-hidden cursor-pointer group flex flex-col justify-end p-4 sm:p-6 lg:p-7 transition-all duration-500 select-none
        ${isActive
          ? 'ring-2 ring-amber-500/80 shadow-[0_0_40px_-10px_rgba(245,158,11,0.4)] scale-[1.02]'
          : 'ring-1 ring-white/10 active:ring-amber-500/60 hover:ring-amber-500/40 hover:shadow-[0_0_30px_-10px_rgba(245,158,11,0.2)] hover:-translate-y-1'
        }
      `}
    >
      {/* Background Image with Slow Zoom */}
      <div className="absolute inset-0 z-0 bg-[#0A0A0C]">
        {config.image && (
          <img
            src={config.image}
            alt={cat.label}
            loading="lazy"
            className={`w-full h-full object-cover object-top transition-all duration-[1.5s] ease-out
              ${isActive ? 'opacity-50 scale-105' : 'opacity-30 group-hover:opacity-50 group-hover:scale-110'}
            `}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
        <div className={`absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/5 transition-colors duration-500`} />
      </div>

      {/* Top Section */}
      <div className="absolute top-3 sm:top-5 left-3 sm:left-5 right-3 sm:right-5 flex justify-between items-start z-10">
        <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
          <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
          <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-neutral-300 uppercase">
            {cat.era}
          </span>
        </div>

        <div className={`w-2 h-2 rounded-full transition-all duration-500 ${isActive ? 'bg-amber-400 shadow-[0_0_10px_#fbbf24] scale-125' : 'bg-white/20 scale-100'}`} />
      </div>

      {/* Bottom Content */}
      <div className="relative z-10 w-full">
        <div className="backdrop-blur-md bg-black/20 border border-white/5 rounded-2xl p-3 sm:p-4 lg:p-5 transform translate-y-0 sm:translate-y-2 sm:group-hover:translate-y-0 transition-transform duration-500">
          <h3 className={`font-serif tracking-wide mb-1 transition-colors duration-300
            ${isActive ? 'text-amber-300 text-xl sm:text-2xl' : 'text-white text-lg sm:text-xl sm:group-hover:text-amber-100'}
          `}>
            {cat.label}
          </h3>

          <p className="text-[10px] sm:text-xs text-neutral-400 leading-relaxed line-clamp-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-1.5 sm:mb-2">
            {cat.desc}
          </p>

          <div className={`flex items-center gap-1.5 text-[9px] sm:text-[10px] font-medium tracking-wide transition-all duration-300
            ${isActive ? 'text-amber-400 opacity-100 translate-y-0' : 'text-neutral-500 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:translate-y-2 sm:group-hover:translate-y-0'}
          `}>
            {isActive ? (
              <>
                <Check className="w-3 h-3" />
                <span className="text-amber-400 font-bold">SELECTED</span>
                <div className="w-1 h-1 rounded-full bg-amber-400" />
                <span className="text-neutral-400 hidden sm:inline">Proceeding...</span>
              </>
            ) : (
              <>
                <span>Tap to explore</span>
                <ArrowRight className="w-3 h-3" />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

interface ArchivalDisciplinesBentoProps {
  activeCategory: CategoryFilterType | null;
  onSelectCategory: (category: CategoryFilterType, autoScroll?: boolean) => void;
  specimenCountMap?: Record<string, number>;
}

const BENTO_CONFIG: Record<
  Exclude<CategoryFilterType, 'ALL'>,
  { Icon: React.ElementType; image: string | null }
> = {
  ENERGY: { Icon: Zap, image: '/images/character_tesla.jpg' },
  TELECOM: { Icon: Radio, image: '/images/bells_telephone_clean.png' },
  DOMESTIC: { Icon: Wrench, image: '/images/washing_machine_isolated.png' },
  TIME: { Icon: Clock, image: '/images/raw_card_4_astrolabe.jpg' },
  WIND: { Icon: Wind, image: '/images/windmill_isolated.png' },
  AERO: { Icon: Plane, image: '/images/character_wright.jpg' },
  COMPUTING: { Icon: Cpu, image: '/images/character_babbage.jpg' },
  STEAM: { Icon: Flame, image: '/images/thumb_steam_hq.jpg' },
  PRINTING: { Icon: Printer, image: '/images/character_fleming.jpg' },
  OPTICS: { Icon: Eye, image: '/images/thumb_3d_cube.jpg' },
  CIVIL: { Icon: Building2, image: '/images/character_beville_stage.png' },
  AGRICULTURE: { Icon: Wheat, image: '/images/character_edison_stage.png' },
  MARITIME: { Icon: Anchor, image: '/images/asset_windmill_stage.png' },
  LIGHTING: { Icon: Lightbulb, image: '/images/character_edison.jpg' },
  METALLURGY: { Icon: Hammer, image: '/images/bg_flare_left.png' },
  TRANSIT: { Icon: Train, image: '/images/thumb_steam_engine.jpg' },
  MEDICAL: { Icon: Activity, image: '/images/card1_test.png' },
  PHOTOGRAPHY: { Icon: Camera, image: '/images/card2_test.png' },
};

const getCat = (key: string): CategoryMeta =>
  OFFICIAL_18_CATEGORIES.find((c) => c.key === key)!;

export default function ArchivalDisciplinesBento({
  activeCategory,
  onSelectCategory,
}: ArchivalDisciplinesBentoProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const counterTextRef = useRef<HTMLElement>(null);
  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);

  const targetXRef = useRef(0);
  const currentXRef = useRef(0);
  const isTickingRef = useRef(false);

  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollYRef = useRef(0);
  const hasDraggedRef = useRef(false);

  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile (hydration safe)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // ---------- DESKTOP: Pinned scroll engine ----------
  useEffect(() => {
    if (isMobile) return;
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;
    let rafId: number;

    const render = () => {
      const diff = targetXRef.current - currentXRef.current;
      if (Math.abs(diff) > 0.1) {
        currentXRef.current += diff * 0.15;
        track.style.transform = `translate3d(-${currentXRef.current.toFixed(2)}px, 0, 0)`;
        rafId = requestAnimationFrame(render);
      } else {
        currentXRef.current = targetXRef.current;
        track.style.transform = `translate3d(-${currentXRef.current.toFixed(2)}px, 0, 0)`;
        isTickingRef.current = false;
      }
    };

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const totalDistance = section.offsetHeight - window.innerHeight;
      if (totalDistance <= 0) return;

      const scrolled = -rect.top;
      const p = Math.min(Math.max(scrolled / totalDistance, 0), 1);

      const parent = track.parentElement;
      const viewportWidth = parent ? parent.clientWidth : window.innerWidth;
      const maxTranslateX = Math.max(0, track.scrollWidth - viewportWidth);
      targetXRef.current = p * maxTranslateX;

      if (!isTickingRef.current) {
        isTickingRef.current = true;
        rafId = requestAnimationFrame(render);
      }

      if (progressBarRef.current) progressBarRef.current.style.width = `${Math.max(5, p * 100)}%`;
      if (counterTextRef.current) {
        const catNum = Math.min(18, Math.max(1, Math.round(p * 17) + 1));
        counterTextRef.current.textContent = catNum.toString().padStart(2, '0');
      }
      if (prevBtnRef.current) {
        prevBtnRef.current.disabled = p <= 0.02;
        prevBtnRef.current.style.opacity = p <= 0.02 ? '0.3' : '1';
      }
      if (nextBtnRef.current) {
        nextBtnRef.current.disabled = p >= 0.98;
        nextBtnRef.current.style.opacity = p >= 0.98 ? '0.3' : '1';
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isMobile]);

  // ---------- MOBILE: native horizontal scroll tracking ----------
  useEffect(() => {
    if (!isMobile) return;
    const track = trackRef.current;
    if (!track) return;

    const handleNativeScroll = () => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      const p = maxScroll > 0 ? track.scrollLeft / maxScroll : 0;
      if (progressBarRef.current) progressBarRef.current.style.width = `${Math.max(5, p * 100)}%`;
      if (counterTextRef.current) {
        const catNum = Math.min(18, Math.max(1, Math.round(p * 17) + 1));
        counterTextRef.current.textContent = catNum.toString().padStart(2, '0');
      }
    };

    track.addEventListener('scroll', handleNativeScroll, { passive: true });
    return () => track.removeEventListener('scroll', handleNativeScroll);
  }, [isMobile]);

  // ---------- MOBILE: jump buttons ----------
  const handleMobileJump = (dir: 'prev' | 'next') => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.firstElementChild?.clientWidth ?? 300;
    const gap = 16;
    track.scrollBy({
      left: (dir === 'next' ? 1 : -1) * (cardWidth + gap),
      behavior: 'smooth',
    });
  };

  // ---------- DESKTOP: jump ----------
  const handleDesktopJump = (direction: 'prev' | 'next') => {
    const section = sectionRef.current;
    if (!section) return;
    const totalDistance = section.offsetHeight - window.innerHeight;
    const step = totalDistance / 5;
    const sectionRect = section.getBoundingClientRect();
    const sectionTop = window.scrollY + sectionRect.top;
    const currentRelative = Math.max(0, window.scrollY - sectionTop);
    const targetRelative = direction === 'next' ? currentRelative + step : currentRelative - step;

    window.scrollTo({
      top: sectionTop + Math.min(Math.max(targetRelative, 0), totalDistance),
      behavior: 'smooth',
    });
  };

  const handleJump = (dir: 'prev' | 'next') =>
    isMobile ? handleMobileJump(dir) : handleDesktopJump(dir);

  // ---------- Desktop drag ----------
  const handlePointerDown = (e: React.PointerEvent) => {
    if (isMobile || e.button !== 0) return;
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartScrollYRef.current = window.scrollY;
    hasDraggedRef.current = false;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || isMobile) return;
    const deltaX = e.clientX - dragStartXRef.current;
    if (Math.abs(deltaX) > 10) hasDraggedRef.current = true;

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const totalDistance = section.offsetHeight - window.innerHeight;
    const parent = track.parentElement;
    const maxTranslateX = Math.max(1, track.scrollWidth - (parent ? parent.clientWidth : window.innerWidth));

    window.scrollTo({
      top: dragStartScrollYRef.current - (deltaX * (totalDistance / maxTranslateX)),
      behavior: 'auto',
    });
  };

  const handlePointerUp = useCallback(() => {
    isDraggingRef.current = false;
    setTimeout(() => { hasDraggedRef.current = false; }, 100);
  }, []);

  // ---------- Render helpers ----------
  const renderTallCard = (key: Exclude<CategoryFilterType, 'ALL'>, width: string) => {
    const cat = getCat(key);
    return (
      <div key={cat.key} className={`${width} shrink-0 h-full`}>
        <GalleryCard
          cat={cat}
          config={BENTO_CONFIG[key]}
          isActive={activeCategory === cat.key}
          onSelect={() => onSelectCategory(cat.key, true)}
          isDragged={hasDraggedRef}
        />
      </div>
    );
  };

  const renderStackedColumn = (
    topKey: Exclude<CategoryFilterType, 'ALL'>,
    bottomKey: Exclude<CategoryFilterType, 'ALL'>,
    width: string
  ) => (
    <div key={`${topKey}-${bottomKey}`} className={`${width} shrink-0 h-full flex flex-col gap-3 sm:gap-4`}>
      <div className="flex-1 min-h-0">
        <GalleryCard
          cat={getCat(topKey)}
          config={BENTO_CONFIG[topKey]}
          isActive={activeCategory === topKey}
          onSelect={() => onSelectCategory(topKey, true)}
          isDragged={hasDraggedRef}
        />
      </div>
      <div className="flex-1 min-h-0">
        <GalleryCard
          cat={getCat(bottomKey)}
          config={BENTO_CONFIG[bottomKey]}
          isActive={activeCategory === bottomKey}
          onSelect={() => onSelectCategory(bottomKey, true)}
          isDragged={hasDraggedRef}
        />
      </div>
    </div>
  );

  const cardWidth = isMobile
    ? 'w-[220px]'
    : 'w-[260px] sm:w-[320px] lg:w-[360px]';

  // ---------- Shared card track (used by both mobile & desktop) ----------
  const cardTrack = (
    <div
      ref={trackRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className={`
        flex items-stretch gap-3 sm:gap-4 lg:gap-6 w-max
        ${isMobile
          ? 'h-[400px] overflow-x-auto overflow-y-hidden snap-x snap-mandatory px-4 pb-2 scrollbar-hide touch-pan-x'
          : 'h-[400px] sm:h-[460px] cursor-grab active:cursor-grabbing px-2 sm:px-4'
        }
        select-none will-change-transform
      `}
      style={
        isMobile
          ? {
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }
          : { willChange: 'transform', transition: 'none' }
      }
    >
      <div className="snap-start">{renderTallCard('ENERGY', cardWidth)}</div>
      <div className="snap-start">{renderStackedColumn('TELECOM', 'TIME', cardWidth)}</div>
      <div className="snap-start">{renderStackedColumn('DOMESTIC', 'WIND', cardWidth)}</div>
      <div className="snap-start">{renderTallCard('AERO', cardWidth)}</div>
      <div className="snap-start">{renderStackedColumn('COMPUTING', 'PRINTING', cardWidth)}</div>
      <div className="snap-start">{renderStackedColumn('STEAM', 'OPTICS', cardWidth)}</div>
      <div className="snap-start">{renderTallCard('LIGHTING', cardWidth)}</div>
      <div className="snap-start">{renderStackedColumn('CIVIL', 'MARITIME', cardWidth)}</div>
      <div className="snap-start">{renderStackedColumn('AGRICULTURE', 'TRANSIT', cardWidth)}</div>
      <div className="snap-start">{renderTallCard('METALLURGY', cardWidth)}</div>
      <div className="snap-start">{renderStackedColumn('MEDICAL', 'PHOTOGRAPHY', cardWidth)}</div>
    </div>
  );

  // ---------- MOBILE LAYOUT (compact, no pinned scroll) ----------
  if (isMobile) {
    return (
      <section
        id="disciplines"
        ref={sectionRef}
        className="relative w-full bg-[#050505] py-14 scroll-mt-20 overflow-hidden"
      >
        {/* Glow orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-amber-600/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 px-4">
          {/* Header */}
          <div className="mb-5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-amber-300 text-[9px] font-medium tracking-widest uppercase mb-3 backdrop-blur-sm">
              <Sparkles className="w-2.5 h-2.5" />
              The Archival Index
            </div>

            <h2 className="font-serif text-2xl text-white font-normal tracking-tight leading-tight">
              Select a Category to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                Unlock the Archive
              </span>
            </h2>

            <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
              Swipe through 18 historical categories.{' '}
              <span className="text-amber-400/90 font-medium">Tap any card</span> to reveal its 3D specimens.
            </p>
          </div>

          {/* Control row */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-xl border border-white/10 px-3 py-1.5 rounded-xl">
              <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider">Idx</span>
              <div className="flex items-baseline gap-0.5 font-mono">
                <span ref={counterTextRef} className="text-sm text-white font-semibold">01</span>
                <span className="text-[9px] text-neutral-500">/18</span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => handleJump('prev')}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white bg-white/5 border border-white/10 active:bg-white/15 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleJump('next')}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white bg-white/5 border border-white/10 active:bg-white/15 transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full h-0.5 bg-white/10 rounded-full overflow-hidden mb-4">
            <div
              ref={progressBarRef}
              className="h-full bg-gradient-to-r from-amber-500 to-amber-300 w-[5%] rounded-full transition-all duration-100 ease-linear"
            />
          </div>

          {/* Card track */}
          {cardTrack}

          {/* Bottom hint */}
          <div className="mt-4 flex items-center justify-center gap-1.5 text-neutral-500 text-[9px] font-mono tracking-widest uppercase">
            <Lock className="w-2.5 h-2.5" />
            <span>Tap a category to continue</span>
          </div>
        </div>

        {/* Hide scrollbar utility */}
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
        `}</style>
      </section>
    );
  }

  // ---------- DESKTOP LAYOUT (original pinned scroll) ----------
  return (
    <section
      id="disciplines"
      ref={sectionRef}
      className="relative w-full bg-[#050505] scroll-mt-20"
      style={{ height: '400vh' }}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center pt-24 pb-10 z-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative w-full flex flex-col h-full z-10 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 shrink-0 mb-10 px-2 sm:px-4">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-300 text-[10px] font-medium tracking-widest uppercase mb-4 backdrop-blur-sm">
                <Sparkles className="w-3 h-3" />
                The Archival Index
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl text-white font-normal tracking-tight leading-tight">
                Select a Category to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                  Unlock the Archive
                </span>
              </h2>

              <p className="mt-3 text-sm text-neutral-400 max-w-lg">
                Scroll horizontally to browse 18 historical categories.{' '}
                <span className="text-amber-400/90 font-medium">Click any card</span> to reveal its 3D specimens.
              </p>
            </div>

            <div className="flex items-center gap-4 bg-black/40 backdrop-blur-xl border border-white/10 p-2 rounded-2xl">
              <div className="flex items-center gap-3 px-3">
                <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">Index</span>
                <div className="flex items-baseline gap-1 font-mono">
                  <span ref={counterTextRef} className="text-lg text-white font-semibold">01</span>
                  <span className="text-xs text-neutral-500">/ 18</span>
                </div>
              </div>

              <div className="w-[1px] h-6 bg-white/10" />

              <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden hidden sm:block">
                <div ref={progressBarRef} className="h-full bg-amber-500 w-[5%] rounded-full transition-all duration-75 ease-linear" />
              </div>

              <div className="w-[1px] h-6 bg-white/10 hidden sm:block" />

              <div className="flex items-center gap-1">
                <button
                  ref={prevBtnRef}
                  onClick={() => handleJump('prev')}
                  disabled
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  ref={nextBtnRef}
                  onClick={() => handleJump('next')}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white hover:bg-white/10 transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="relative flex-1 min-h-0 flex items-center w-full overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-r from-[#050505] to-transparent z-20" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-l from-[#050505] to-transparent z-20" />
            {cardTrack}
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-neutral-500 text-[10px] font-mono tracking-widest uppercase pointer-events-none">
            <Lock className="w-3 h-3" />
            <span>Select a category above to continue</span>
          </div>
        </div>
      </div>
    </section>
  );
}

