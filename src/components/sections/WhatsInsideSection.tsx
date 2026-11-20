'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Boxes,
  PlayCircle,
  AudioLines,
  FileImage,
  BookOpen,
  Sparkles,
  Rotate3d,
  ArrowRight,
} from 'lucide-react';
import { ProgressNumberBadge } from '@/components/ui/progress-number-badge';

// --- Custom Responsive Bento Grid Components ---
interface BentoCardProps {
  indexNumber: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  header: React.ReactNode;
  isActive: boolean;
  progress: number;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  className?: string;
}

const BentoCard = ({
  indexNumber,
  title,
  description,
  icon,
  header,
  isActive,
  progress,
  onClick,
  onMouseEnter,
  onMouseLeave,
  className = '',
}: BentoCardProps) => (
  <div
    role="button"
    tabIndex={0}
    onClick={onClick}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick();
      }
    }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={`group relative flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 w-[84vw] max-w-[320px] shrink-0 snap-center md:w-auto md:max-w-none select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
      isActive
        ? 'dark:bg-[#0e0e14] bg-surface border-2 border-amber-400 dark:border-amber-400/90 ring-4 ring-amber-400/15 shadow-[0_15px_40px_-8px_rgba(245,158,11,0.3)] md:scale-[1.01] z-10'
        : 'dark:bg-[#0A0A0C] bg-surface dark:border-white/5 border border-outline-variant/30 hover:border-amber-500/40 opacity-90 hover:opacity-100 shadow-sm dark:shadow-none hover:shadow-[0_0_25px_-5px_rgba(245,158,11,0.15)]'
    } ${className}`}
  >
    {/* Visual Header Area */}
    <div
      className={`relative h-28 sm:h-36 md:h-44 w-full overflow-hidden transition-colors duration-500 border-b ${
        isActive
          ? 'dark:bg-[#14141c] bg-surface-container-high border-amber-400/30'
          : 'dark:bg-[#0F0F13] bg-surface-container dark:border-white/5 border-outline-variant/20'
      }`}
    >
      {header}
      {/* Subtle depth gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t dark:from-[#0A0A0C] from-surface to-transparent opacity-60 pointer-events-none" />
    </div>

    {/* Content Area with Ondo Finance Style Circular Timer Badge */}
    <div className="flex flex-col flex-1 p-4 sm:p-5">
      {/* Header Row: Ondo Timer Number + Title + Icon */}
      <div className="flex items-center justify-between gap-3 mb-2 sm:mb-2.5">
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <ProgressNumberBadge
            number={indexNumber}
            isActive={isActive}
            progress={progress}
            size={36}
          />
          <h3
            className={`text-base sm:text-lg font-serif tracking-wide truncate transition-colors duration-300 ${
              isActive
                ? 'text-amber-500 dark:text-amber-300 font-bold'
                : 'dark:text-white text-on-surface'
            }`}
          >
            {title}
          </h3>
        </div>

        <div
          className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-transform duration-300 shrink-0 ${
            isActive
              ? 'bg-amber-500/20 border border-amber-500/40 text-amber-500 dark:text-amber-300 scale-110 shadow-[0_0_12px_rgba(245,158,11,0.3)]'
              : 'bg-amber-500/10 border border-amber-500/20 text-amber-500 dark:text-amber-400 group-hover:scale-110'
          }`}
        >
          {icon}
        </div>
      </div>

      <p className="text-sm dark:text-neutral-300 text-on-surface-variant leading-relaxed line-clamp-3">
        {description}
      </p>

      {/* Active Indicator Bar (Subtle bottom accent) */}
      <div className="mt-auto pt-3 flex items-center justify-between text-xs font-mono">
        <span
          className={`transition-colors duration-300 ${
            isActive ? 'text-amber-700 dark:text-amber-400 font-semibold' : 'text-on-surface-variant/70 dark:text-neutral-500'
          }`}
        >
          {isActive ? 'ACTIVE FORMAT' : 'TAP TO INSPECT'}
        </span>
        <div
          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
            isActive ? 'bg-amber-400 shadow-[0_0_8px_#fbbf24] scale-125' : 'bg-transparent'
          }`}
        />
      </div>
    </div>
  </div>
);

/* =========================================================================
   MINIMAL VISUALS (Reactive to isActive state)
   ========================================================================= */

// 1. Interactive 3D
const Visual3D = ({ isActive }: { isActive: boolean }) => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: 'radial-gradient(#f59e0b 1px, transparent 1px)',
        backgroundSize: '16px 16px',
      }}
    />
    <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
      <div
        className={`absolute inset-0 rounded-full border border-amber-500/30 ${
          isActive ? 'animate-[spin_6s_linear_infinite] border-amber-400/60' : 'animate-[spin_12s_linear_infinite]'
        }`}
      />
      <div
        className={`absolute inset-3 rounded-full border border-dashed border-amber-500/50 ${
          isActive ? 'animate-[spin_8s_linear_infinite_reverse] border-amber-400/80' : 'animate-[spin_16s_linear_infinite_reverse]'
        }`}
      />
      <div
        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-400/25 to-transparent border flex items-center justify-center backdrop-blur-sm transition-all duration-500 ${
          isActive
            ? 'scale-115 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.5)] rotate-6'
            : 'border-amber-400/40'
        }`}
      >
        <Rotate3d className="w-5 h-5 text-amber-500 dark:text-amber-400" />
      </div>
    </div>
  </div>
);

// 2. Kinematic Animations
const VisualAnimation = ({ isActive }: { isActive: boolean }) => (
  <div className="relative w-full h-full flex flex-col justify-center items-center gap-2 sm:gap-2.5 px-6 sm:px-8">
    <div className="w-full h-1.5 dark:bg-neutral-800 bg-surface-container-high rounded-full overflow-hidden">
      <div
        className={`h-full bg-amber-500 rounded-full transition-all duration-700 ease-out ${
          isActive ? 'w-full shadow-[0_0_10px_#f59e0b]' : 'w-2/3'
        }`}
      />
    </div>
    <div className="w-full h-1.5 dark:bg-neutral-800 bg-surface-container-high rounded-full overflow-hidden">
      <div
        className={`h-full bg-amber-600 rounded-full transition-all duration-700 ease-out delay-100 ${
          isActive ? 'w-4/5 shadow-[0_0_8px_#d97706]' : 'w-1/2'
        }`}
      />
    </div>
    <div className="w-full h-1.5 dark:bg-neutral-800 bg-surface-container-high rounded-full overflow-hidden">
      <div
        className={`h-full bg-amber-700 rounded-full transition-all duration-700 ease-out delay-200 ${
          isActive ? 'w-3/4 shadow-[0_0_8px_#b45309]' : 'w-1/3'
        }`}
      />
    </div>
  </div>
);

// 3. Narrated Stories
const VisualAudio = ({ isActive }: { isActive: boolean }) => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent pointer-events-none" />
    <div className="flex items-end gap-1 sm:gap-1.5 h-10 sm:h-12">
      {[40, 75, 100, 60, 85, 50, 95, 45].map((height, i) => (
        <div
          key={i}
          className={`w-1.5 sm:w-2 bg-gradient-to-t from-amber-600 to-amber-400 rounded-t-full transition-all duration-300 ${
            isActive ? 'opacity-100 shadow-[0_0_8px_rgba(245,158,11,0.6)]' : 'opacity-70'
          }`}
          style={{
            height: `${isActive ? Math.min(100, height * 1.15) : height}%`,
            animation: `pulse ${isActive ? '1s' : '1.8s'} ease-in-out ${i * 0.1}s infinite alternate`,
          }}
        />
      ))}
    </div>
  </div>
);

// 4. Archival Plates
const VisualArchive = ({ isActive }: { isActive: boolean }) => (
  <div className="relative w-full h-full flex items-center justify-center perspective-1000">
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage:
          'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    />
    <div
      className={`relative w-16 h-20 sm:w-20 sm:h-26 dark:bg-[#18181b] bg-surface-container-high border rounded-lg p-1.5 shadow-xl transition-all duration-500 flex flex-col gap-1 ${
        isActive
          ? '-rotate-2 -translate-x-2 border-amber-400/40 shadow-amber-500/10'
          : '-rotate-6 dark:border-white/10 border-outline-variant/40'
      }`}
    >
      <div className="w-full h-8 sm:h-10 dark:bg-neutral-800 bg-surface-container rounded-sm" />
      <div className="w-3/4 h-1 dark:bg-neutral-700 bg-outline-variant/60 rounded-full" />
      <div className="w-1/2 h-1 dark:bg-neutral-700 bg-outline-variant/60 rounded-full" />
    </div>
    <div
      className={`absolute w-16 h-20 sm:w-20 sm:h-26 dark:bg-[#18181b] bg-surface-container-high border rounded-lg p-1.5 shadow-xl transition-all duration-500 flex flex-col gap-1 ${
        isActive
          ? 'rotate-3 translate-x-7 sm:translate-x-9 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.25)]'
          : 'rotate-6 translate-x-6 sm:translate-x-8 border-amber-500/40'
      }`}
    >
      <div className="w-full h-8 sm:h-10 bg-amber-900/25 rounded-sm flex items-center justify-center">
        <FileImage className={`w-4 h-4 transition-colors ${isActive ? 'text-amber-400' : 'text-amber-500'}`} />
      </div>
      <div className="w-3/4 h-1 dark:bg-neutral-700 bg-outline-variant/60 rounded-full" />
      <div className="w-1/2 h-1 dark:bg-neutral-700 bg-outline-variant/60 rounded-full" />
    </div>
  </div>
);

// 5. Kids Storybooks
const VisualBooks = ({ isActive }: { isActive: boolean }) => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none" />
    <div
      className={`relative w-16 h-20 sm:w-20 sm:h-24 bg-gradient-to-br from-emerald-800 to-emerald-950 border border-emerald-500/30 rounded-xl shadow-xl transition-all duration-500 flex flex-col items-center justify-center gap-1.5 ${
        isActive ? '-rotate-6 -translate-x-3 scale-105' : '-rotate-3'
      }`}
    >
      <BookOpen className="w-6 h-6 text-emerald-400/90" />
      <div className="w-8 h-1 bg-emerald-400/30 rounded-full" />
    </div>
    <div
      className={`absolute w-16 h-20 sm:w-20 sm:h-24 bg-gradient-to-br from-amber-700 to-amber-900 border rounded-xl shadow-xl transition-all duration-500 flex flex-col items-center justify-center gap-1.5 ${
        isActive
          ? 'rotate-10 translate-x-8 sm:translate-x-10 scale-105 border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.35)]'
          : 'rotate-6 translate-x-7 sm:translate-x-9 border-amber-500/30'
      }`}
    >
      <Sparkles className="w-6 h-6 text-amber-300/90" />
      <div className="w-8 h-1 bg-amber-300/30 rounded-full" />
    </div>
  </div>
);

/* =========================================================================
   MAIN SECTION
   ========================================================================= */
interface WhatsInsideSectionProps {
  title?: string;
  subtitle?: string;
  onExploreDisciplines?: () => void;
}

export default function WhatsInsideSection({
  title = 'One Authoritative Record. Five Reusable Formats.',
  subtitle = 'Every historical patent model carries one persistent IAMIS asset ID linked to five curated formats, ready for museum halls, classrooms, and collector editions.',
}: WhatsInsideSectionProps = {}) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isSectionVisible, setIsSectionVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const DURATION = 4500; // 4.5 seconds per card, like ondo.finance
  const INTERVAL = 40; // 40ms update tick for buttery smooth SVG progress arc

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsSectionVisible(entry.isIntersecting),
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Auto-advance circular progress effect only when section is paused=false
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((curr) => (curr + 1) % 5);
          return 0;
        }
        return prev + (INTERVAL / DURATION) * 100;
      });
    }, INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Smooth scroll active card into view on small screens only while user is viewing this section
  useEffect(() => {
    if (
      isSectionVisible &&
      typeof window !== 'undefined' &&
      window.innerWidth < 768 &&
      cardsContainerRef.current
    ) {
      const container = cardsContainerRef.current;
      const cardEl = container.children[activeIndex] as HTMLElement;
      if (cardEl) {
        const offsetLeft = cardEl.offsetLeft - (container.clientWidth - cardEl.clientWidth) / 2;
        container.scrollTo({ left: Math.max(0, offsetLeft), behavior: 'smooth' });
      }
    }
  }, [activeIndex, isSectionVisible]);

  const handleCardClick = (idx: number) => {
    setActiveIndex(idx);
    setProgress(0);
  };

  return (
    <section
      ref={sectionRef}
      id="whats-inside"
      className="scroll-mt-20 relative w-full py-12 sm:py-16 md:py-20 dark:bg-[#050505] bg-surface-container-low border-t dark:border-white/5 border-outline-variant/30 overflow-hidden transition-colors duration-300"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-7 sm:mb-10 lg:mb-12">
          <h2 className="font-serif text-[clamp(26px,4vw,44px)] leading-[1.15] dark:text-white text-on-surface font-semibold tracking-tight mb-2.5 sm:mb-3">
            {title}
          </h2>

          <p className="text-sm sm:text-base dark:text-neutral-300 text-on-surface-variant leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Bento Grid with Ondo Finance Auto-Cycling Timer Effect */}
        <div
          ref={cardsContainerRef}
          onTouchStart={() => setIsPaused(true)}
          className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory gap-3.5 sm:gap-5 pb-3 md:pb-0 scrollbar-none -mx-4 px-4 md:mx-0 md:px-0 max-w-5xl md:mx-auto"
        >
          {/* Card 01: 3D Models */}
          <BentoCard
            indexNumber="01"
            title="3D Patent Models"
            description="Orbit, zoom, and inspect reconstructed mechanisms in your browser to see how every brass gear, shaft, and housing fits together."
            icon={<Boxes className="w-4 h-4" />}
            header={<Visual3D isActive={activeIndex === 0} />}
            isActive={activeIndex === 0}
            progress={activeIndex === 0 ? progress : 0}
            onClick={() => handleCardClick(0)}
            onMouseEnter={() => {
              setActiveIndex(0);
              setProgress(0);
              setIsPaused(true);
            }}
            onMouseLeave={() => setIsPaused(false)}
            className="md:col-span-1"
          />

          {/* Card 02: Video Animations */}
          <BentoCard
            indexNumber="02"
            title="Video & Motion Studies"
            description="Watch short visual demonstrations and documentary cuts showing how steam valves, coils, looms, and turbines operate in motion."
            icon={<PlayCircle className="w-4 h-4" />}
            header={<VisualAnimation isActive={activeIndex === 1} />}
            isActive={activeIndex === 1}
            progress={activeIndex === 1 ? progress : 0}
            onClick={() => handleCardClick(1)}
            onMouseEnter={() => {
              setActiveIndex(1);
              setProgress(0);
              setIsPaused(true);
            }}
            onMouseLeave={() => setIsPaused(false)}
            className="md:col-span-1"
          />

          {/* Card 03: Historical Stories */}
          <BentoCard
            indexNumber="03"
            title="Narrated Stories"
            description="Read and listen to the inventor's breakthrough, the engineering problem they faced, and how the mechanism reshaped daily life."
            icon={<AudioLines className="w-4 h-4" />}
            header={<VisualAudio isActive={activeIndex === 2} />}
            isActive={activeIndex === 2}
            progress={activeIndex === 2 ? progress : 0}
            onClick={() => handleCardClick(2)}
            onMouseEnter={() => {
              setActiveIndex(2);
              setProgress(0);
              setIsPaused(true);
            }}
            onMouseLeave={() => setIsPaused(false)}
            className="md:col-span-1"
          />

          {/* Card 04: 2D Patent Plates */}
          <BentoCard
            indexNumber="04"
            title="2D Patent Plates & Prints"
            description="Examine high-resolution historical patent drawings, filing numbers, provenance records, and figure callouts prepared for study and print editions."
            icon={<FileImage className="w-4 h-4" />}
            header={<VisualArchive isActive={activeIndex === 3} />}
            isActive={activeIndex === 3}
            progress={activeIndex === 3 ? progress : 0}
            onClick={() => handleCardClick(3)}
            onMouseEnter={() => {
              setActiveIndex(3);
              setProgress(0);
              setIsPaused(true);
            }}
            onMouseLeave={() => setIsPaused(false)}
            className="md:col-span-2"
          />

          {/* Card 05: Archival Books */}
          <BentoCard
            indexNumber="05"
            title="Illustrated Books"
            description="Open age-tailored companion books spanning ages 3–6 adventures, STEM engineering editions, and collector heritage volumes."
            icon={<BookOpen className="w-4 h-4" />}
            header={<VisualBooks isActive={activeIndex === 4} />}
            isActive={activeIndex === 4}
            progress={activeIndex === 4 ? progress : 0}
            onClick={() => handleCardClick(4)}
            onMouseEnter={() => {
              setActiveIndex(4);
              setProgress(0);
              setIsPaused(true);
            }}
            onMouseLeave={() => setIsPaused(false)}
            className="md:col-span-1"
          />
        </div>

        {/* Mobile 44px Tap Index Pills + Guidance */}
        <div className="md:hidden mt-4 flex flex-col items-center gap-2.5">
          <div className="flex items-center justify-center gap-1.5" role="tablist" aria-label="Select archive format">
            {['01', '02', '03', '04', '05'].map((num, idx) => {
              const selected = activeIndex === idx;
              return (
                <button
                  key={num}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-label={`Format ${num}`}
                  onClick={() => {
                    setIsPaused(true);
                    handleCardClick(idx);
                  }}
                  className={`min-w-[44px] min-h-[40px] px-2.5 text-xs font-mono font-semibold border transition-colors cursor-pointer ${
                    selected
                      ? 'bg-amber-600 text-white border-amber-600 dark:bg-amber-400 dark:text-[#09090b] dark:border-amber-400'
                      : 'border-outline-variant/40 dark:border-white/15 text-on-surface-variant dark:text-neutral-400'
                  }`}
                >
                  {num}
                </button>
              );
            })}
          </div>
          <div className="flex items-center justify-center gap-1.5 text-xs text-on-surface-variant dark:text-neutral-400">
            <ArrowRight className="w-3.5 h-3.5 text-primary" />
            <span>Tap or swipe to inspect all 5 formats</span>
          </div>
        </div>
      </div>
    </section>
  );
}
