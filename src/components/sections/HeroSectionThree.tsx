'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowRight,
  BookOpen,
  Boxes,
  Film,
  Image as ImageIcon,
  ScrollText,
} from 'lucide-react';

export type HeroThreePerspective = 'tilted' | 'wall' | 'tunnel' | 'flat';
export type HeroThreeDirection = 'alternate' | 'up' | 'down';
export type HeroThreeColumnCount = 1 | 2 | 3;
export type HeroThreeOutputType = 'video' | '3d' | 'book' | '2d' | 'story';

export interface HeroThreeCard {
  id: string;
  assetId: string;
  title: string;
  inventor: string;
  patent: string;
  year: string;
  outputType: HeroThreeOutputType;
  src: string;
  alt: string;
  /** Optional CSS object-position focal crop (e.g. '20% center') */
  imagePosition?: string;
}

export interface HeroThreeVault {
  id: string;
  name: string;
  code: string;
}

export interface HeroSectionThreeProps {
  /** Selectable heading level for page hierarchy & SEO */
  headingTag?: 'h1' | 'h2' | 'h3';
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  subtitle?: string;
  primaryCtaLabel?: string;
  secondaryCtaLabel?: string;
  disciplines?: string[];
  vaultsLabel?: string;
  vaults?: HeroThreeVault[];
  columns?: HeroThreeCard[][];
  defaultColumns?: HeroThreeColumnCount;
  defaultPerspective?: HeroThreePerspective;
  defaultDirection?: HeroThreeDirection;
  showStageControls?: boolean;
  monochrome?: boolean;
  onExploreCollection?: () => void;
  onWatchStories?: () => void;
  onExploreAsset?: (id: string, format?: HeroThreeOutputType) => void;
}

const OUTPUT_META: Record<
  HeroThreeOutputType,
  { label: string; shortLabel: string; hash: string; icon: typeof Film }
> = {
  video: { label: 'Video', shortLabel: 'Video', hash: 'video', icon: Film },
  '3d': { label: '3D Model', shortLabel: '3D', hash: '3d', icon: Boxes },
  book: { label: 'Book', shortLabel: 'Book', hash: 'book', icon: BookOpen },
  '2d': { label: '2D Plate', shortLabel: '2D', hash: '2d', icon: ImageIcon },
  story: { label: 'Story', shortLabel: 'Story', hash: 'story', icon: ScrollText },
};

const FORMAT_SEQUENCE: HeroThreeOutputType[] = ['video', '3d', 'book', '2d', 'story'];

const DEFAULT_VAULTS: HeroThreeVault[] = [
  { id: 'uspto', name: 'USPTO Patents', code: 'US' },
  { id: 'smithsonian', name: 'Smithsonian', code: 'SI' },
  { id: 'science-museum', name: 'Science Museum', code: 'UK' },
  { id: 'deutsches-museum', name: 'Deutsches Museum', code: 'DE' },
];

/**
 * 15 curated archival plates across 3 columns.
 * Row-by-row progression preserves:
 * video -> 3d -> book -> 2d -> story -> 3d -> video -> book
 */
const DEFAULT_COLUMNS: HeroThreeCard[][] = [
  [
    {
      id: 'col1-tesla',
      assetId: 'HA-107',
      title: 'AC Induction Motor',
      inventor: 'Nikola Tesla',
      patent: 'Pat. #381,968',
      year: '1888',
      outputType: 'video',
      src: '/images/themes/electricity-energy-communication.jpg',
      imagePosition: '18% center',
      alt: 'Nikola Tesla AC Induction Motor gallery display',
    },
    {
      id: 'col1-windmill',
      assetId: 'HA-103',
      title: 'Brush Wind Turbine',
      inventor: 'Charles F. Brush',
      patent: 'Pat. #433,651',
      year: '1888',
      outputType: '2d',
      src: '/images/themes/agriculture-food-environment.jpg',
      imagePosition: '68% center',
      alt: 'Brush Wind Turbine and patent drawings on gallery wall',
    },
    {
      id: 'col1-wright',
      assetId: 'HA-106',
      title: '1903 Wright Flyer',
      inventor: 'Orville & Wilbur Wright',
      patent: 'Pat. #821,393',
      year: '1903',
      outputType: 'video',
      src: '/images/themes/transportation-mobility.jpg',
      imagePosition: '65% center',
      alt: '1903 Wright Flyer biplane display and framed patent plate',
    },
    {
      id: 'col1-telegraph',
      assetId: 'HA-TEL-03',
      title: 'Recording Telegraph',
      inventor: 'Samuel F.B. Morse',
      patent: 'Pat. #1,647',
      year: '1840',
      outputType: 'story',
      src: '/images/themes/electricity-energy-communication.jpg',
      imagePosition: '50% center',
      alt: 'Morse electromagnetic telegraph key and receiver in museum hall',
    },
    {
      id: 'col1-roebling',
      assetId: 'HA-CIV-02',
      title: 'Suspension Bridge Cable',
      inventor: 'John A. Roebling',
      patent: 'Pat. #4,710',
      year: '1869',
      outputType: 'book',
      src: '/images/themes/infrastructure-construction-cities.jpg',
      imagePosition: '42% center',
      alt: 'Suspension bridge structural model and cyanotype drawings',
    },
  ],
  [
    {
      id: 'col2-bell',
      assetId: 'HA-101',
      title: 'Speaking Telephone',
      inventor: 'Alexander Graham Bell',
      patent: 'Pat. #174,465',
      year: '1876',
      outputType: '3d',
      src: '/images/bells_telephone_hq.jpg',
      imagePosition: 'center',
      alt: 'Alexander Graham Bell acoustic horn telephone instrument',
    },
    {
      id: 'col2-daguerre',
      assetId: 'HA-119',
      title: 'Daguerreotype Camera',
      inventor: 'Louis Daguerre',
      patent: 'Pat. #1839-FR01',
      year: '1839',
      outputType: 'story',
      src: '/images/themes/science-engineering-technology.jpg',
      imagePosition: '16% center',
      alt: 'Daguerreotype tripod plate camera and cyanotype wall frame',
    },
    {
      id: 'col2-astrolabe',
      assetId: 'HA-100',
      title: 'Astronomical Astrolabe',
      inventor: 'Henry Beville',
      patent: 'Pat. #249,002',
      year: '1881',
      outputType: 'book',
      src: '/images/themes/heritage-special-collections-future-vision.jpg',
      imagePosition: '28% center',
      alt: 'Brass armillary sphere and astrolabe in museum wing',
    },
    {
      id: 'col2-lamp',
      assetId: 'HA-105',
      title: 'Bamboo Filament Lamp',
      inventor: 'Thomas Alva Edison',
      patent: 'Pat. #223,898',
      year: '1879',
      outputType: '3d',
      src: '/images/themes/electricity-energy-communication.jpg',
      imagePosition: '78% center',
      alt: 'Incandescent carbonized bamboo filament bulb inside glass dome',
    },
    {
      id: 'col2-stethoscope',
      assetId: 'HA-118',
      title: 'Acoustic Stethoscope',
      inventor: 'René Laennec',
      patent: 'Pat. #1819-FR01',
      year: '1816',
      outputType: '2d',
      src: '/images/themes/health-medicine-human-safety.jpg',
      imagePosition: '36% center',
      alt: 'Historic acoustic stethoscope, microscope, and medical patent prints',
    },
  ],
  [
    {
      id: 'col3-babbage',
      assetId: 'HA-108',
      title: 'Analytical Engine',
      inventor: 'Babbage & Lovelace',
      patent: 'Pat. #1837-GB01',
      year: '1837',
      outputType: 'book',
      src: '/images/themes/heritage-special-collections-future-vision.jpg',
      imagePosition: '56% center',
      alt: 'Analytical calculating gearwork alongside archival manuscript folio',
    },
    {
      id: 'col3-washer',
      assetId: 'HA-102',
      title: 'Rotary Agitator Washer',
      inventor: 'Caroline J. Fleming',
      patent: 'Pat. #249,002',
      year: '1881',
      outputType: '3d',
      src: '/images/themes/home-family-everyday-life.jpg',
      imagePosition: '48% center',
      alt: 'Coopered oak rotary clothes washer and framed mechanical plans',
    },
    {
      id: 'col3-singer',
      assetId: 'HA-DOM-02',
      title: 'Lockstitch Machine',
      inventor: 'Isaac M. Singer',
      patent: 'Pat. #8,294',
      year: '1851',
      outputType: '2d',
      src: '/images/themes/industrial-innovation-manufacturing.jpg',
      imagePosition: '68% center',
      alt: 'Cast-iron lockstitch sewing machine and industrial blueprint gallery',
    },
    {
      id: 'col3-locomotive',
      assetId: 'HA-117',
      title: 'Locomotion No. 1',
      inventor: 'George Stephenson',
      patent: 'Pat. #1814-GB01',
      year: '1825',
      outputType: 'video',
      src: '/images/themes/transportation-mobility.jpg',
      imagePosition: '48% center',
      alt: 'Steam locomotive display with historic engineering plates',
    },
    {
      id: 'col3-reaper',
      assetId: 'HA-114',
      title: 'Mechanical Grain Reaper',
      inventor: 'Cyrus H. McCormick',
      patent: 'Pat. #X8,277',
      year: '1831',
      outputType: 'story',
      src: '/images/themes/agriculture-food-environment.jpg',
      imagePosition: '44% center',
      alt: 'Brass mechanical grain harvester exhibit and archival wall drawings',
    },
  ],
];

const PERSPECTIVE_TRANSFORMS: Record<HeroThreePerspective, string> = {
  tilted: 'rotate(6deg) rotateY(-12deg) rotateX(8deg)',
  wall: 'rotate(4deg) rotateY(-8deg) rotateX(8deg)',
  tunnel: 'rotateX(18deg) scale(0.92)',
  flat: 'rotate(0deg)',
};

const COLUMN_SPEEDS = [24, 30, 26];

interface CardDimensions {
  width: number;
  height: number;
  gap: number;
}

function getResponsiveCardDimensions(viewportWidth: number): CardDimensions {
  if (viewportWidth < 640) {
    return { width: 132, height: 184, gap: 12 };
  }
  if (viewportWidth < 1024) {
    return { width: 176, height: 244, gap: 18 };
  }
  return { width: 214, height: 296, gap: 22 };
}

/**
 * Minimal editorial hero showcasing Heritage Archive inventions across
 * five unified output formats: Video, 3D Model, Book, 2D Plate, and Story.
 */
export default function HeroSectionThree({
  headingTag = 'h1',
  eyebrow = '',
  titleLine1 = '90 Historical Inventions,',
  titleLine2 = 'Documented Five Ways.',
  subtitle = 'Explore landmark patents across 10 themes and 50 categories. Each invention includes a Video, 3D Model, Book, 2D Plate, and Story.',
  primaryCtaLabel = 'Browse Collections',
  secondaryCtaLabel = 'How Formats Work',
  vaultsLabel = 'Archival Sources',
  vaults = DEFAULT_VAULTS,
  columns = DEFAULT_COLUMNS,
  defaultColumns = 3,
  defaultPerspective = 'tilted',
  defaultDirection = 'alternate',
  monochrome = false,
  onExploreCollection,
  onWatchStories,
  onExploreAsset,
}: HeroSectionThreeProps) {
  const router = useRouter();
  const [cardDims, setCardDims] = useState<CardDimensions>(() =>
    getResponsiveCardDimensions(1440)
  );
  const [isDesktop, setIsDesktop] = useState(true);
  const [isHoverPaused, setIsHoverPaused] = useState(false);
  const [activeFormat, setActiveFormat] = useState<HeroThreeOutputType | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const trackRefs = useRef<(HTMLDivElement | null)[]>([]);
  const phasesRef = useRef<number[]>([0, 0, 0]);
  const initializedRef = useRef(false);
  const directionRef = useRef(defaultDirection);
  const pausedRef = useRef(false);
  const reducedMotionRef = useRef(prefersReducedMotion);

  directionRef.current = defaultDirection;
  pausedRef.current = isHoverPaused;
  reducedMotionRef.current = prefersReducedMotion;

  const activeColumns = useMemo(
    () => columns.slice(0, defaultColumns),
    [columns, defaultColumns]
  );

  const mobileCards = useMemo(() => {
    const interleaved: HeroThreeCard[] = [];
    const maxLen = Math.max(0, ...activeColumns.map((c) => c.length));
    for (let row = 0; row < maxLen; row++) {
      for (let col = 0; col < activeColumns.length; col++) {
        const card = activeColumns[col]?.[row];
        if (card) interleaved.push(card);
      }
    }
    if (!activeFormat) return interleaved;
    return interleaved.filter((c) => c.outputType === activeFormat);
  }, [activeColumns, activeFormat]);

  useEffect(() => {
    const syncDims = () => {
      const w = window.innerWidth;
      setCardDims(getResponsiveCardDimensions(w));
      setIsDesktop(w >= 1024);
    };
    syncDims();
    window.addEventListener('resize', syncDims);

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const onMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', onMotionChange);

    return () => {
      window.removeEventListener('resize', syncDims);
      mediaQuery.removeEventListener('change', onMotionChange);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const stride = cardDims.height + cardDims.gap;

    if (!initializedRef.current) {
      phasesRef.current = activeColumns.map((col, idx) => {
        const cycle = Math.max(1, col.length * stride);
        const stagger = [0.76, 0.85, 0.79][idx % 3];
        return cycle * stagger;
      });
      initializedRef.current = true;
    }

    let rafId = 0;
    let lastTime = performance.now();

    const paint = () => {
      activeColumns.forEach((col, idx) => {
        const el = trackRefs.current[idx];
        if (!el || col.length === 0) return;
        const cycleHeight = col.length * stride;
        const phase = ((phasesRef.current[idx] % cycleHeight) + cycleHeight) % cycleHeight;
        const translateY = phase - cycleHeight * 2;
        el.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0)`;
      });
    };

    paint();

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;

      if (!reducedMotionRef.current && !pausedRef.current) {
        const mode = directionRef.current;
        activeColumns.forEach((col, idx) => {
          if (col.length === 0) return;
          const cycleHeight = col.length * stride;
          const speed = COLUMN_SPEEDS[idx % COLUMN_SPEEDS.length];
          const sign =
            mode === 'down' ? 1 : mode === 'up' ? -1 : idx % 2 === 0 ? 1 : -1;
          const next = (phasesRef.current[idx] + sign * speed * dt) % cycleHeight;
          phasesRef.current[idx] = next < 0 ? next + cycleHeight : next;
        });
        paint();
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [activeColumns, cardDims, isDesktop]);

  const handlePrimaryClick = () => {
    if (onExploreCollection) {
      onExploreCollection();
      return;
    }
    const el = document.getElementById('themes');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else router.push('/inventions');
  };

  const handleSecondaryClick = () => {
    if (onWatchStories) {
      onWatchStories();
      return;
    }
    router.push('/inventions');
  };

  const handleCardClick = (card: HeroThreeCard) => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    if (onExploreAsset) {
      onExploreAsset(card.assetId, card.outputType);
      return;
    }
    const hash = OUTPUT_META[card.outputType].hash;
    router.push(`/inventions/${card.assetId}#${hash}`);
  };

  const HeadingTag = headingTag;

  return (
    <section
      id="hero"
      aria-label={`${titleLine1} ${titleLine2}`.trim()}
      className="relative w-full lg:min-h-[calc(100svh-64px)] bg-surface dark:bg-[#09090b] text-on-surface dark:text-[#f5f3ee] border-b border-outline-variant/25 dark:border-white/[0.08] flex flex-col lg:flex-row items-stretch overflow-hidden transition-colors duration-300"
    >
      {/* Left / Top Editorial Column */}
      <div className="relative z-20 w-full lg:w-[46%] lg:max-w-[600px] flex flex-col justify-center px-5 pt-8 pb-6 sm:px-8 sm:pt-12 sm:pb-8 lg:px-14 lg:py-14 shrink-0 box-border">
        {/* Optional Eyebrow */}
        {eyebrow ? (
          <span className="block font-sans text-xs font-medium uppercase tracking-[0.16em] text-on-surface-variant dark:text-neutral-400 mb-3">
            {eyebrow}
          </span>
        ) : null}

        {/* Display Headline */}
        <HeadingTag className="font-serif text-[clamp(30px,5.2vw,52px)] leading-[1.08] tracking-[-0.02em] font-semibold text-on-surface dark:text-white mb-3.5 sm:mb-4 max-w-[520px]">
          <span className="block">{titleLine1}</span>
          {titleLine2 ? (
            <span className="block mt-1 text-on-surface dark:text-white">
              {titleLine2}
            </span>
          ) : null}
        </HeadingTag>

        {/* Clear Value Proposition */}
        <p className="font-sans text-sm sm:text-base leading-[1.6] font-normal text-on-surface-variant dark:text-neutral-300 mb-6 sm:mb-7 max-w-[460px]">
          {subtitle}
        </p>

        {/* Primary & Secondary CTAs (Touch-Safe on Mobile) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-7 sm:mb-8">
          <button
            type="button"
            onClick={handlePrimaryClick}
            className="group inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 bg-on-surface hover:opacity-90 dark:bg-[#f5f3ee] dark:hover:bg-white text-surface dark:text-[#09090b] text-sm font-semibold leading-none transition-opacity cursor-pointer"
          >
            <span>{primaryCtaLabel}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 shrink-0" />
          </button>

          <button
            type="button"
            onClick={handleSecondaryClick}
            className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 border border-outline-variant/60 dark:border-white/20 hover:border-on-surface/50 dark:hover:border-white/40 text-on-surface dark:text-[#f5f3ee] text-sm font-medium leading-none transition-colors cursor-pointer"
          >
            {secondaryCtaLabel}
          </button>
        </div>

        {/* Interactive Format Filter Bar */}


        {/* Quiet Archival Provenance Row */}
        <div className="mt-7 pt-5 border-t border-outline-variant/30 dark:border-white/[0.08] flex flex-col sm:flex-row sm:items-center gap-x-5 gap-y-1.5 text-xs text-on-surface-variant dark:text-neutral-400">
          <span className="font-medium shrink-0 text-on-surface/80 dark:text-neutral-300">
            {vaultsLabel}:
          </span>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-serif">
            {vaults.map((vault) => (
              <span key={vault.id} className="whitespace-nowrap">
                {vault.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE / TABLET (< lg): Crisp Horizontal Touch-Swipe Exhibition Deck */}
      <div className="lg:hidden w-full pb-8">
        <div
          className="flex overflow-x-auto snap-x snap-mandatory gap-3.5 px-5 pb-2 scrollbar-none"
          role="region"
          aria-label="Invention preview cards"
        >
          {mobileCards.map((card) => {
            const meta = OUTPUT_META[card.outputType];
            const FormatIcon = meta.icon;
            return (
              <button
                key={`mob-${card.id}`}
                type="button"
                onClick={() => handleCardClick(card)}
                className="group relative w-[205px] sm:w-[230px] aspect-[3/4] shrink-0 snap-start border border-outline-variant/40 dark:border-white/15 bg-neutral-900 overflow-hidden text-left cursor-pointer"
              >
                <img
                  src={card.src}
                  alt={card.alt}
                  loading="lazy"
                  style={{ objectPosition: card.imagePosition || 'center' }}
                  className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03] ${
                    monochrome ? 'grayscale contrast-[1.08]' : ''
                  }`}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/45 to-transparent"
                />
                <div className="pointer-events-none absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-black/70 border border-white/20 text-white backdrop-blur-sm">
                    <FormatIcon className="h-3.5 w-3.5 shrink-0" />
                    <span>{meta.label}</span>
                  </span>
                </div>
                <div className="pointer-events-none absolute inset-x-3.5 bottom-3.5">
                  <span className="block font-serif text-sm font-medium text-white leading-snug">
                    {card.title}
                  </span>
                  <span className="block font-sans text-xs text-white/80 truncate mt-0.5">
                    {card.inventor} · {card.year}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
        <p className="px-5 pt-2 text-xs text-on-surface-variant dark:text-neutral-400">
          Swipe cards or tap any invention to inspect it.
        </p>
      </div>

      {/* DESKTOP (lg+): 3D Perspective Infinite Card River */}
      <div
        className="hidden lg:flex relative flex-1 min-h-[calc(100svh-64px)] overflow-hidden items-center justify-center select-none"
        onPointerEnter={(e) => {
          if (e.pointerType === 'mouse') setIsHoverPaused(true);
        }}
        onPointerLeave={(e) => {
          if (e.pointerType === 'mouse') setIsHoverPaused(false);
        }}
      >
        <div
          className="absolute inset-[-30%_-20%] flex items-center justify-center"
          style={{
            perspective: '1400px',
            transformStyle: 'preserve-3d',
          }}
        >
          <div
            className="flex items-center justify-center will-change-transform"
            style={{
              gap: `${cardDims.gap}px`,
              transformStyle: 'preserve-3d',
              transform: PERSPECTIVE_TRANSFORMS[defaultPerspective],
            }}
          >
            {activeColumns.map((colCards, colIdx) => {
              const loopCards = [...colCards, ...colCards, ...colCards, ...colCards];
              return (
                <div
                  key={`col-${colIdx}`}
                  className="relative h-0 overflow-visible shrink-0"
                  style={{ width: `${cardDims.width}px` }}
                >
                  <div
                    ref={(el) => {
                      trackRefs.current[colIdx] = el;
                    }}
                    className="flex flex-col will-change-transform"
                    style={{ gap: `${cardDims.gap}px` }}
                  >
                    {loopCards.map((card, itemIdx) => {
                      const meta = OUTPUT_META[card.outputType];
                      const FormatIcon = meta.icon;
                      const isSelected = activeFormat === card.outputType;
                      const isDimmed = activeFormat !== null && !isSelected;

                      return (
                        <button
                          key={`${card.id}-${itemIdx}`}
                          type="button"
                          onClick={() => handleCardClick(card)}
                          title={`${card.title} (${card.patent}) — ${meta.label}`}
                          aria-label={`Open ${card.title} (${card.year}) in ${meta.label} view`}
                          className={`group relative shrink-0 rounded-2xl overflow-hidden bg-neutral-900 border transition-all duration-300 text-left focus:outline-none cursor-pointer ${
                            isSelected
                              ? 'border-[#d4af37]/80 shadow-[0_18px_40px_rgba(0,0,0,0.45)]'
                              : isDimmed
                              ? 'border-white/[0.06] opacity-25 shadow-none'
                              : 'border-black/10 dark:border-white/[0.1] shadow-[0_16px_36px_rgba(0,0,0,0.2)] dark:shadow-[0_18px_42px_rgba(0,0,0,0.7)] hover:border-black/25 dark:hover:border-white/25'
                          }`}
                          style={{
                            width: `${cardDims.width}px`,
                            height: `${cardDims.height}px`,
                          }}
                        >
                          <img
                            src={card.src}
                            alt={card.alt}
                            draggable={false}
                            style={{ objectPosition: card.imagePosition || 'center' }}
                            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04] ${
                              monochrome ? 'grayscale contrast-[1.08]' : ''
                            }`}
                          />

                          {/* Clean Bottom Readability Vignette */}
                          <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 via-black/30 to-transparent"
                          />

                          {/* Single Subtle Format Pill */}
                          <div className="pointer-events-none absolute top-3 left-3">
                            <span
                              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium backdrop-blur-md border transition-colors ${
                                isSelected
                                  ? 'bg-[#f5f3ee] text-[#09090b] border-[#f5f3ee]'
                                  : 'bg-black/55 border-white/15 text-white/90'
                              }`}
                            >
                              <FormatIcon className="h-3 w-3 shrink-0" />
                              <span className="sm:hidden">{meta.shortLabel}</span>
                              <span className="hidden sm:inline">{meta.label}</span>
                            </span>
                          </div>

                          {/* Simple 2-Line Caption */}
                          <div className="pointer-events-none absolute inset-x-3.5 bottom-3.5">
                            <span className="block font-serif text-[13px] sm:text-sm font-medium text-white leading-snug truncate">
                              {card.title}
                            </span>
                            <span className="block font-sans text-[11px] text-white/70 truncate mt-0.5">
                              {card.inventor} · {card.year}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Soft Edge Vignettes */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 inset-x-0 h-[24%] z-30 bg-gradient-to-b from-surface via-surface/70 to-transparent dark:from-[#09090b] dark:via-[#09090b]/70 dark:to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 inset-x-0 h-[24%] z-30 bg-gradient-to-t from-surface via-surface/70 to-transparent dark:from-[#09090b] dark:via-[#09090b]/70 dark:to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 z-30 bg-gradient-to-r from-surface via-surface/65 to-transparent dark:from-[#09090b] dark:via-[#09090b]/65 dark:to-transparent"
        />
        <div
          aria-hidden="true"
          className="hidden lg:block pointer-events-none absolute inset-y-0 right-0 w-12 z-30 bg-gradient-to-l from-surface/70 to-transparent dark:from-[#09090b]/70 dark:to-transparent"
        />
      </div>
    </section>
  );
}
