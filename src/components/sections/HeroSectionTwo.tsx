'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowRight,
  BookOpen,
  Boxes,
  Compass,
  Film,
  Image as ImageIcon,
  Layers,
  Pause,
  Play,
  PlayCircle,
  ScrollText,
} from 'lucide-react';

export type InputReferenceType = 'story' | 'image' | '3d-ref';
export type OutputFormat = 'video' | '3d' | '2d' | 'story' | 'book';

export interface HeroTwoSlide {
  id: string;
  code: string;
  title: string;
  inventor: string;
  patent: string;
  year: string;
  storyExcerpt: string;
  inputType: InputReferenceType;
  inputImage: string;
  outputType: OutputFormat;
  outputImage: string;
  duration?: string;
}

export interface HeroSectionTwoProps {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  subtitle?: string;
  ctaLabel?: string;
  secondaryCtaLabel?: string;
  onExploreCollection?: () => void;
  onWatchStories?: () => void;
  onExploreAsset?: (id: string) => void;
  slides?: HeroTwoSlide[];
}

const INPUT_META: Record<InputReferenceType, { refTag: string }> = {
  story: { refTag: 'REF · STORY' },
  image: { refTag: 'REF · ARCHIVE PHOTO' },
  '3d-ref': { refTag: 'REF · 3D STUDY' },
};

const OUTPUT_META: Record<
  OutputFormat,
  { label: string; badge: string; hash: string; icon: typeof Film }
> = {
  video: {
    label: 'Video',
    badge: 'Motion Film',
    hash: 'video',
    icon: Film,
  },
  '3d': {
    label: '3D',
    badge: '3D Model',
    hash: '3d',
    icon: Boxes,
  },
  '2d': {
    label: '2D',
    badge: '2D Plate',
    hash: '2d',
    icon: ImageIcon,
  },
  story: {
    label: 'Story',
    badge: 'Story Folio',
    hash: 'story',
    icon: ScrollText,
  },
  book: {
    label: 'Book',
    badge: 'Digital Book',
    hash: 'book',
    icon: BookOpen,
  },
};

/**
 * Cross-checked against `src/data/historicalAssets.ts` in `heritage-archive-final`.
 *
 * TODO (Production Media Replacement Checklist):
 * Before production launch, replace these development placeholder `outputImage` files
 * with dedicated exported video frames, 3D viewport captures, and book plates:
 * - Slide 1 (`HA-107`, video): `/images/character_tesla.jpg` -> replace with real AC Induction Motor video frame
 * - Slide 2 (`HA-101`, 3d): `/images/bells_telephone_hq.jpg` -> replace with captured 3D viewport render
 * - Slide 3 (`HA-108`, book): `/images/character_ada.jpg` -> replace with Analytical Engine digital book spread
 * - Slide 4 (`HA-103`, 2d): `/images/asset_windmill_stage.png` -> replace with full-color Brush Wind Turbine 2D plate
 * - Slide 5 (`HA-109`, story): `/images/character_edison.jpg` -> replace with Carbon Button Transmitter story illustration
 * - Slide 6 (`HA-102`, 3d): `/images/character_fleming.jpg` -> replace with Rotary Agitator Washer 3D model render
 * - Slide 7 (`HA-106`, video): `/images/character_wright.jpg` -> replace with 1903 Wright Flyer motion video frame
 * - Slide 8 (`HA-100`, book): `/images/character_beville.jpg` -> replace with Astronomical Astrolabe book folio plate
 */
export const CATALOG_SLIDES: HeroTwoSlide[] = [
  {
    id: 'HA-107',
    code: '01',
    title: 'AC Induction Motor',
    inventor: 'Nikola Tesla',
    patent: 'Pat. #381,968',
    year: '1888',
    storyExcerpt:
      'Tesla solved DC distance limits with a rotating polyphase magnetic field.',
    inputType: 'story',
    inputImage: '/images/character_tesla.jpg',
    outputType: 'video',
    outputImage: '/images/character_tesla.jpg',
    duration: '0:30',
  },
  {
    id: 'HA-101',
    code: '02',
    title: 'Early Speaking Telephone',
    inventor: 'Alexander Graham Bell',
    patent: 'Pat. #174,465',
    year: '1876',
    storyExcerpt:
      'In a Boston attic workshop, Bell turned acoustic vibrations into electrical current.',
    inputType: '3d-ref',
    inputImage: '/images/bells_telephone_clean.png',
    outputType: '3d',
    outputImage: '/images/bells_telephone_hq.jpg',
  },
  {
    id: 'HA-108',
    code: '03',
    title: 'Mechanical Analytical Engine',
    inventor: 'Babbage & Lovelace',
    patent: 'Pat. #1837-GB01',
    year: '1837',
    storyExcerpt:
      'Brass calculating columns and punched cards inspired the first published algorithm.',
    inputType: 'story',
    inputImage: '/images/character_babbage.jpg',
    outputType: 'book',
    outputImage: '/images/character_ada.jpg',
  },
  {
    id: 'HA-103',
    code: '04',
    title: 'Brush Wind Electric Turbine',
    inventor: 'Charles F. Brush',
    patent: 'Pat. #433,651',
    year: '1888',
    storyExcerpt:
      'A 144-blade cedar rotor charged basement battery banks across Cleveland.',
    inputType: 'image',
    inputImage: '/images/windmill_isolated.png',
    outputType: '2d',
    outputImage: '/images/asset_windmill_stage.png',
  },
  {
    id: 'HA-109',
    code: '05',
    title: 'Carbon Button Transmitter',
    inventor: 'Thomas Alva Edison',
    patent: 'Pat. #474,230',
    year: '1877',
    storyExcerpt:
      'Compressed carbon granules multiplied voice clarity across long-distance lines.',
    inputType: 'story',
    inputImage: '/images/character_edison.jpg',
    outputType: 'story',
    outputImage: '/images/character_edison.jpg',
  },
  {
    id: 'HA-102',
    code: '06',
    title: 'Rotary Agitator Clothes Washer',
    inventor: 'Caroline J. Fleming',
    patent: 'Pat. #249,002',
    year: '1881',
    storyExcerpt:
      'Engineered cylinder gearing replaced boiling lye tubs with enclosed rotary washing.',
    inputType: '3d-ref',
    inputImage: '/images/washing_machine_isolated.png',
    outputType: '3d',
    outputImage: '/images/character_fleming.jpg',
  },
  {
    id: 'HA-106',
    code: '07',
    title: '1903 Wright Flyer Airframe',
    inventor: 'Orville & Wilbur Wright',
    patent: 'Pat. #821,393',
    year: '1903',
    storyExcerpt:
      'Three-axis wing-warping control enabled sustained powered flight at Kitty Hawk.',
    inputType: 'image',
    inputImage: '/images/character_wright.jpg',
    outputType: 'video',
    outputImage: '/images/character_wright.jpg',
    duration: '0:30',
  },
  {
    id: 'HA-100',
    code: '08',
    title: 'Astronomical Astrolabe',
    inventor: 'Henry Beville',
    patent: 'Pat. #249,002',
    year: '1881',
    storyExcerpt:
      'Portable chronometric rings reconciled field sightings with astronomical tables.',
    inputType: 'story',
    inputImage: '/images/character_beville.jpg',
    outputType: 'book',
    outputImage: '/images/character_beville.jpg',
  },
];

const DEFAULT_SLIDES: HeroTwoSlide[] = CATALOG_SLIDES;

interface ViewportMetrics {
  isMobile: boolean;
  perspective: number;
  baseStep: number;
  outerAccel: number;
  depthMax: number;
  rotateStepDeg: number;
  cullThreshold: number;
}

function getViewportMetrics(width: number): ViewportMetrics {
  if (width < 640) {
    return {
      isMobile: true,
      perspective: 820,
      baseStep: 288,
      outerAccel: 14,
      depthMax: 110,
      rotateStepDeg: 8.5,
      cullThreshold: 1.85,
    };
  }
  if (width < 1024) {
    return {
      isMobile: false,
      perspective: 1040,
      baseStep: 360,
      outerAccel: 16,
      depthMax: 165,
      rotateStepDeg: 9.5,
      cullThreshold: 2.35,
    };
  }
  return {
    isMobile: false,
    perspective: 1180,
    baseStep: 412,
    outerAccel: 18,
    depthMax: 210,
    rotateStepDeg: 10,
    cullThreshold: 2.55,
  };
}

function getCardCssTransform(
  slot: number,
  metrics: ViewportMetrics
): { transform: string; opacity: number; zIndex: number; hidden: boolean } {
  const absSlot = Math.abs(slot);
  if (absSlot > metrics.cullThreshold) {
    return {
      transform: 'translate3d(-50%, -50%, -400px)',
      opacity: 0,
      zIndex: 0,
      hidden: true,
    };
  }

  const sign = slot < 0 ? -1 : 1;
  const normalizedDepth = Math.min(1.4, absSlot / 2.8);
  const z = Math.pow(normalizedDepth, 1.55) * metrics.depthMax;
  const rotateY = -slot * metrics.rotateStepDeg;

  const desiredScreenX =
    slot * metrics.baseStep + sign * Math.pow(absSlot, 1.35) * metrics.outerAccel;
  const x = desiredScreenX * ((metrics.perspective - z) / metrics.perspective);

  const opacity = Math.max(0, Math.min(1, 1.48 - absSlot * 0.48));

  return {
    transform: `translate3d(calc(-50% + ${x.toFixed(2)}px), -50%, ${z.toFixed(1)}px) rotateY(${rotateY.toFixed(2)}deg)`,
    opacity,
    zIndex: Math.round(40 + absSlot * 10),
    hidden: false,
  };
}

interface CarouselHalfLayerProps {
  mode: 'input' | 'output';
  slides: HeroTwoSlide[];
  metrics: ViewportMetrics;
  cardRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  onOpenInput: (slide: HeroTwoSlide) => void;
  onOpenOutput: (slide: HeroTwoSlide) => void;
}

/**
 * Synchronized clipped carousel half (`clip-path: inset(...)` at 50% X):
 * - LEFT (`input`): Monochrome archival reference (Story / Reference Image / 3D Study)
 * - RIGHT (`output`): Single full-color museum multimedia deliverable for that card
 */
function CarouselHalfLayer({
  mode,
  slides,
  metrics,
  cardRefs,
  onOpenInput,
  onOpenOutput,
}: CarouselHalfLayerProps) {
  const isInput = mode === 'input';
  const total = slides.length;

  return (
    <div
      aria-hidden={isInput ? 'true' : undefined}
      className="absolute inset-0 overflow-hidden"
      style={{
        clipPath: isInput ? 'inset(0 50% 0 0)' : 'inset(0 0 0 50%)',
      }}
    >
      <div
        className="relative w-full h-full"
        style={{
          perspective: `${metrics.perspective}px`,
          perspectiveOrigin: '50% 50%',
        }}
      >
        {slides.map((slide, i) => {
          let raw = total === 1 ? 0 : i % total;
          if (total > 1 && raw > total / 2) raw -= total;
          const init = getCardCssTransform(raw, metrics);
          const inputMeta = INPUT_META[slide.inputType];
          const outputMeta = OUTPUT_META[slide.outputType];
          const OutputIcon = outputMeta.icon;

          return (
            <div
              key={`${mode}-${slide.id}`}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              onClick={() => {
                if (isInput) onOpenInput(slide);
                else onOpenOutput(slide);
              }}
              role="link"
              tabIndex={isInput ? -1 : 0}
              onKeyDown={(e) => {
                if (!isInput && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  onOpenOutput(slide);
                }
              }}
              aria-label={
                isInput
                  ? undefined
                  : `Open ${slide.title} (${outputMeta.badge}) in archive`
              }
              className={`group absolute top-1/2 left-1/2 w-[268px] sm:w-[336px] lg:w-[384px] h-[186px] sm:h-[220px] lg:h-[246px] rounded-xl overflow-hidden border cursor-pointer will-change-transform transition-colors duration-300 ${
                isInput
                  ? 'border-neutral-800/35 dark:border-white/20 bg-[#141311] text-[#F5F2EB] shadow-[0_14px_36px_rgba(0,0,0,0.22)] dark:shadow-[0_18px_46px_rgba(0,0,0,0.85)]'
                  : 'border-[#a1701b]/45 dark:border-[#d4af37]/40 hover:border-[#d4af37] bg-[#0E0D0C] text-white shadow-[0_18px_44px_rgba(24,18,10,0.24)] dark:shadow-[0_22px_54px_rgba(0,0,0,0.9)]'
              }`}
              style={{
                transform: init.transform,
                opacity: init.opacity,
                zIndex: init.zIndex,
                visibility: init.hidden ? 'hidden' : 'visible',
                pointerEvents: init.hidden ? 'none' : 'auto',
              }}
            >
              {isInput ? (
                /* =========================================================
                   LEFT HALF: MONOCHROME ARCHIVAL REFERENCE
                   ========================================================= */
                <div className="relative w-full h-full">
                  <img
                    src={slide.inputImage}
                    alt=""
                    draggable={false}
                    className="w-full h-full object-cover grayscale contrast-[1.25] brightness-[0.88]"
                  />

                  {/* Subtle Orthographic Drafting Grid for 3D Reference Inputs */}
                  {slide.inputType === '3d-ref' && (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-35"
                      style={{
                        backgroundImage:
                          'linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.18) 1px, transparent 1px)',
                        backgroundSize: '18px 18px',
                      }}
                    />
                  )}

                  {/* Archival Plate Inset Frame for Photo Inputs */}
                  {slide.inputType === 'image' && (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-2.5 rounded-lg border border-white/25"
                    />
                  )}

                  {/* Readability Gradient Scrim */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/92 via-black/45 to-black/65"
                  />

                  {/* Top-Left Patent Number & Desktop-Only REF Tag (min 11px) */}
                  <div className="pointer-events-none absolute top-2.5 left-2.5 z-10 flex flex-col items-start gap-1">
                    <span className="rounded bg-black/75 border border-white/20 px-2 py-0.5 text-[11px] font-mono text-neutral-200 backdrop-blur-sm">
                      {slide.patent}
                    </span>
                    <span className="hidden sm:inline-flex items-center rounded bg-black/70 border border-white/15 px-2 py-0.5 text-[11px] font-mono uppercase tracking-wider text-neutral-300">
                      {inputMeta.refTag}
                    </span>
                  </div>

                  {/* Bottom-Left Reference Title, Inventor & Desktop-Only 2-Line Story (min 11px) */}
                  <div className="pointer-events-none absolute bottom-2.5 left-2.5 z-10 max-w-[46%] flex flex-col gap-0.5 pr-1 text-left">
                    <span className="font-serif text-[11px] sm:text-sm font-bold leading-tight text-white line-clamp-2">
                      {slide.title}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-300 truncate">
                      {slide.inventor} · {slide.year}
                    </span>
                    {slide.inputType === 'story' && (
                      <p className="hidden sm:block mt-1 text-[11px] font-serif italic leading-snug text-neutral-200 line-clamp-2">
                        &ldquo;{slide.storyExcerpt}&rdquo;
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                /* =========================================================
                   RIGHT HALF: SINGLE NATURAL MUSEUM MULTIMEDIA DELIVERABLE
                   ========================================================= */
                <div className="relative w-full h-full">
                  <img
                    src={slide.outputImage}
                    alt={`${slide.title} — ${outputMeta.badge}`}
                    draggable={false}
                    className="w-full h-full object-cover saturate-[1.12] contrast-[1.04] transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/88 via-black/20 to-black/55"
                  />

                  {/* Top-Right Single Multimedia Format Badge (min 11px, no AI/Sample text) */}
                  <div className="pointer-events-none absolute top-2.5 right-2.5 z-10 flex items-center gap-1.5">
                    <span className="inline-flex items-center gap-1.5 rounded bg-black/75 border border-[#d4af37]/45 px-2 py-0.5 text-[11px] font-mono font-medium text-[#f3dfb2] backdrop-blur-md">
                      <OutputIcon className="h-3 w-3 text-[#d4af37] shrink-0" />
                      <span>{outputMeta.badge}</span>
                    </span>
                  </div>

                  {/* Format-Specific Natural Presentation in Right Half */}
                  {slide.outputType === 'video' && (
                    <div className="pointer-events-none absolute inset-0 z-10">
                      <div className="absolute top-1/2 left-[72%] -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/65 bg-black/65 backdrop-blur-sm shadow-lg">
                        <Play className="h-4 w-4 fill-white text-white ml-0.5" />
                      </div>
                      <div className="absolute bottom-2.5 right-2.5 left-[54%] flex flex-col gap-1">
                        <div className="flex items-center justify-between text-[11px] font-mono text-neutral-200">
                          <span>0:14</span>
                          <span>{slide.duration ?? '0:30'}</span>
                        </div>
                        <div className="h-1 w-full rounded-full bg-white/30 overflow-hidden">
                          <div className="h-full w-1/2 rounded-full bg-[#d4af37]" />
                        </div>
                      </div>
                    </div>
                  )}

                  {slide.outputType === '3d' && (
                    <div className="pointer-events-none absolute inset-0 z-10">
                      <div className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1.5 rounded bg-black/75 border border-white/20 px-2 py-1 text-[11px] font-mono text-neutral-100 backdrop-blur-sm">
                        <Compass className="h-3.5 w-3.5 text-[#d4af37]" />
                        <span>360° View</span>
                      </div>
                    </div>
                  )}

                  {slide.outputType === 'book' && (
                    <div className="pointer-events-none absolute inset-0 z-10">
                      <div className="absolute inset-y-10 right-2.5 left-[54%] rounded border border-[#d4af37]/35 bg-[#FAF4E8]/92 p-2 text-[#1D150E] shadow-lg flex flex-col justify-between">
                        <span className="text-[11px] font-mono uppercase text-[#7A5012]">
                          Folio · {slide.year}
                        </span>
                        <p className="text-[11px] font-serif font-semibold leading-snug line-clamp-2">
                          {slide.title}
                        </p>
                      </div>
                    </div>
                  )}

                  {slide.outputType === '2d' && (
                    <div className="pointer-events-none absolute inset-0 z-10">
                      <div className="absolute inset-2.5 rounded-lg border border-[#d4af37]/40" />
                      <div className="absolute bottom-2.5 right-2.5 rounded bg-black/75 px-2 py-0.5 text-[11px] font-mono text-neutral-200">
                        Archival Plate · {slide.year}
                      </div>
                    </div>
                  )}

                  {slide.outputType === 'story' && (
                    <div className="pointer-events-none absolute inset-0 z-10">
                      <div className="absolute bottom-2.5 right-2.5 left-[54%] rounded border-l-2 border-[#d4af37] bg-black/75 px-2 py-1 backdrop-blur-sm">
                        <p className="text-[11px] font-serif italic text-neutral-100 line-clamp-2">
                          &ldquo;{slide.storyExcerpt}&rdquo;
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function HeroSectionTwo({
  eyebrow = 'Curated Heritage Archive • Primary Sources to Living Multimedia',
  titleLine1 = 'From Archival References',
  titleLine2 = 'To Video, 3D, Books & Stories',
  subtitle = 'Explore how historical stories, patent photographs, and 3D study references transform across the scan line into motion films, interactive 3D models, 2D plates, and digital books.',
  ctaLabel = 'Explore Collections',
  secondaryCtaLabel = 'Browse All Inventions',
  onExploreCollection,
  slides = DEFAULT_SLIDES,
}: HeroSectionTwoProps) {
  const router = useRouter();
  const [isPaused, setIsPaused] = useState(false);
  const [metrics, setMetrics] = useState<ViewportMetrics>(() => getViewportMetrics(1280));
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const offsetRef = useRef<number>(0);
  const isPausedRef = useRef<boolean>(false);
  const metricsRef = useRef<ViewportMetrics>(metrics);
  const leftCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rightCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  isPausedRef.current = isPaused;
  metricsRef.current = metrics;

  const visibleSlides = metrics.isMobile ? slides.slice(0, 5) : slides;

  useEffect(() => {
    const syncMetrics = () => {
      setMetrics(getViewportMetrics(window.innerWidth));
    };
    syncMetrics();
    window.addEventListener('resize', syncMetrics);

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const onMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', onMotionChange);

    return () => {
      window.removeEventListener('resize', syncMetrics);
      mediaQuery.removeEventListener('change', onMotionChange);
    };
  }, []);

  useEffect(() => {
    const total = visibleSlides.length;
    if (total === 0) return;

    let rafId = 0;
    let lastTime = performance.now();

    const applyPositions = (offset: number) => {
      const currentMetrics = metricsRef.current;

      for (let i = 0; i < total; i++) {
        let raw: number;
        if (total === 1) {
          // Single-slide verification mode: when paused or reduced motion, hold dead-center (slot 0) on the scan line.
          raw =
            prefersReducedMotion || isPausedRef.current
              ? 0
              : Math.sin(offset * Math.PI * 2) * 0.32;
        } else {
          raw = ((i + offset) % total + total) % total;
          if (raw > total / 2) raw -= total;
        }

        const style = getCardCssTransform(raw, currentMetrics);

        const leftEl = leftCardRefs.current[i];
        const rightEl = rightCardRefs.current[i];

        if (leftEl) {
          leftEl.style.transform = style.transform;
          leftEl.style.opacity = String(style.opacity);
          leftEl.style.zIndex = String(style.zIndex);
          leftEl.style.visibility = style.hidden ? 'hidden' : 'visible';
          leftEl.style.pointerEvents = style.hidden ? 'none' : 'auto';
        }
        if (rightEl) {
          rightEl.style.transform = style.transform;
          rightEl.style.opacity = String(style.opacity);
          rightEl.style.zIndex = String(style.zIndex);
          rightEl.style.visibility = style.hidden ? 'hidden' : 'visible';
          rightEl.style.pointerEvents = style.hidden ? 'none' : 'auto';
        }
      }
    };

    applyPositions(offsetRef.current);

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;

      if (!prefersReducedMotion && !isPausedRef.current) {
        const span = total === 1 ? 1 : total;
        offsetRef.current = (offsetRef.current + dt * 0.14) % span;
        applyPositions(offsetRef.current);
      } else if (total === 1) {
        applyPositions(0);
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [visibleSlides.length, metrics, prefersReducedMotion, isPaused]);

  const handlePrimaryClick = () => {
    if (onExploreCollection) {
      onExploreCollection();
      return;
    }
    const el = document.getElementById('themes');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else router.push('/#themes');
  };

  const handleOpenInput = (slide: HeroTwoSlide) => {
    router.push(`/inventions/${slide.id}`);
  };

  const handleOpenOutput = (slide: HeroTwoSlide) => {
    const hash = OUTPUT_META[slide.outputType].hash;
    router.push(`/inventions/${slide.id}#${hash}`);
  };

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-surface dark:bg-[#09090b] text-on-surface dark:text-[#f5f3ee] border-b border-outline-variant/20 dark:border-white/[0.06] pt-8 pb-8 sm:pt-11 sm:pb-10 lg:pt-12 lg:pb-12 transition-colors duration-300"
    >
      {/* Subtle Museum Paper / Grid Texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.04] bg-[radial-gradient(#d4af37_1px,_transparent_1px)] [background-size:28px_28px]"
      />

      {/* =====================================================================
          1. CENTERED CURATORIAL HERO COPY & CTA CLUSTER
         ===================================================================== */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#a1701b]/25 dark:border-[#d4af37]/25 bg-[#a1701b]/[0.05] dark:bg-[#d4af37]/[0.07] mb-3.5">
            <span className="font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-[#8c5d12] dark:text-[#e2bd44]">
              {eyebrow}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.35rem] font-semibold tracking-tight leading-[1.08] text-on-surface dark:text-white">
            <span className="block">{titleLine1}</span>
            <span className="block mt-1 italic font-normal text-[#a1701b] dark:text-[#e2bd44]">
              {titleLine2}
            </span>
          </h1>

          <p className="mt-3.5 max-w-2xl mx-auto text-xs sm:text-sm md:text-[15px] leading-relaxed text-on-surface-variant dark:text-[#b4aea4]">
            {subtitle}
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={handlePrimaryClick}
              className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-xs sm:text-sm font-semibold tracking-wide bg-[#a1701b] hover:bg-[#8c5d12] dark:bg-[#d4af37] dark:hover:bg-[#e2bd44] text-white dark:text-[#09090b] shadow-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{ctaLabel}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>

            <button
              type="button"
              onClick={() => router.push('/inventions')}
              className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-medium tracking-wide border border-outline-variant/60 dark:border-white/15 bg-white/75 hover:bg-white dark:bg-white/[0.04] dark:hover:bg-white/[0.08] text-on-surface dark:text-[#f5f3ee] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <PlayCircle className="w-3.5 h-3.5 text-[#a1701b] dark:text-[#e2bd44]" />
              <span>{secondaryCtaLabel}</span>
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================================
          2. ARCHIVAL PIPELINE GUIDE STRIP (min 11px, zero AI wording)
         ===================================================================== */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 mt-6 sm:mt-7 mb-2 grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4 text-[11px] font-mono uppercase tracking-wider">
        <div className="flex items-center justify-end text-right text-on-surface-variant dark:text-neutral-400">
          <span className="truncate">
            <strong className="text-on-surface dark:text-neutral-200">Reference:</strong>{' '}
            <span className="hidden sm:inline">Story · Photo · 3D Study</span>
            <span className="sm:hidden">Archive Source</span>
          </span>
        </div>

        <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium border border-[#a1701b]/35 dark:border-[#d4af37]/35 bg-[#a1701b]/[0.06] dark:bg-[#d4af37]/[0.08] text-[#8c5d12] dark:text-[#e2bd44]">
          <span>Scan Line</span>
        </div>

        <div className="flex items-center justify-start text-left text-[#8c5d12] dark:text-[#e2bd44]">
          <span className="truncate">
            <strong>Multimedia:</strong>{' '}
            <span className="hidden sm:inline">Video · 3D · Book · 2D · Story</span>
            <span className="sm:hidden">Living Media</span>
          </span>
        </div>
      </div>

      {/* =====================================================================
          3. 3D CONVEYOR WITH THIN MUSEUM SCAN LINE AT 50%
         ===================================================================== */}
      <div
        className="relative w-full h-[220px] sm:h-[260px] lg:h-[288px] select-none overflow-hidden"
        onPointerEnter={(e) => {
          if (e.pointerType === 'mouse') setIsPaused(true);
        }}
        onPointerLeave={(e) => {
          if (e.pointerType === 'mouse') setIsPaused(false);
        }}
      >
        <CarouselHalfLayer
          mode="input"
          slides={visibleSlides}
          metrics={metrics}
          cardRefs={leftCardRefs}
          onOpenInput={handleOpenInput}
          onOpenOutput={handleOpenOutput}
        />

        <CarouselHalfLayer
          mode="output"
          slides={visibleSlides}
          metrics={metrics}
          cardRefs={rightCardRefs}
          onOpenInput={handleOpenInput}
          onOpenOutput={handleOpenOutput}
        />

        {/* OUTER HORIZONTAL VIGNETTES */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-20 lg:w-36 z-30 bg-gradient-to-r from-surface via-surface/70 to-transparent dark:from-[#09090b] dark:via-[#09090b]/75 dark:to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-20 lg:w-36 z-30 bg-gradient-to-l from-surface via-surface/70 to-transparent dark:from-[#09090b] dark:via-[#09090b]/75 dark:to-transparent"
        />

        {/* THIN SUBTLE VERTICAL SCAN LINE (No flashy neon laser bloom) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 flex items-center justify-center h-[88%]"
        >
          <div
            className="w-[1.5px] h-full rounded-full"
            style={{
              background:
                'linear-gradient(to bottom, transparent 0%, rgba(212,175,55,0.65) 15%, rgba(255,255,255,0.92) 50%, rgba(212,175,55,0.65) 85%, transparent 100%)',
            }}
          />
        </div>
      </div>

      {/* =====================================================================
          4. SUBTLE PAUSE / RESUME CONTROL (min 11px)
         ===================================================================== */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2.5 flex items-center justify-center">
        <button
          type="button"
          onClick={() => setIsPaused((prev) => !prev)}
          className="inline-flex items-center gap-1.5 rounded-full border border-[#a1701b]/35 dark:border-[#d4af37]/30 bg-[#a1701b]/[0.06] dark:bg-[#d4af37]/10 px-3.5 py-1 text-[11px] font-mono uppercase tracking-wider text-[#8c5d12] dark:text-[#e2bd44] hover:border-[#a1701b] transition-colors cursor-pointer"
        >
          {isPaused ? (
            <>
              <Play className="w-3 h-3 fill-current" />
              <span>Resume</span>
            </>
          ) : (
            <>
              <Pause className="w-3 h-3 fill-current" />
              <span>Pause</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
}
