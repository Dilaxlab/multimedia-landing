'use client';

import React, { useState, useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  MapPin,
  RotateCcw,
  Sun,
  Moon,
  Layers,
  RotateCw,
} from 'lucide-react';
import { HistoricalAsset } from '@/types/asset';
import { VideoVignette } from '@/types/media';
import { MOCK_HISTORICAL_ASSETS, MOCK_VIDEO_VIGNETTES } from '@/lib/constants';
import { ALL_50_CATEGORIES } from '@/data/taxonomy';
import YouTubeVideoPlayer from '@/components/viewers/YouTubeVideoPlayer';

const ModelViewer3D = dynamic(() => import('@/components/viewers/ModelViewer3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-950 text-neutral-300 font-mono text-xs gap-3">
      <div className="w-7 h-7 rounded-full border-2 border-white/20 border-t-[#d4af37] animate-spin" />
      <span>Loading interactive 3D model...</span>
    </div>
  ),
});

interface InventionDetailViewProps {
  asset: HistoricalAsset;
}

const FORMAT_ANCHORS = [
  { id: '2d', label: '1. 2D Plate' },
  { id: 'story', label: '2. Story' },
  { id: 'book', label: '3. Book & Related Books' },
  { id: '3d', label: '4. 3D Model' },
  { id: 'video', label: '5. Video' },
];

export default function InventionDetailView({ asset }: InventionDetailViewProps) {
  const [isWireframe, setIsWireframe] = useState<boolean>(false);
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(true);
  const [lightingMode, setLightingMode] = useState<'spotlight' | 'ambient'>('spotlight');
  const [zoomLevel, setZoomLevel] = useState<number>(4.6);
  const [schematicSrc, setSchematicSrc] = useState<string>(asset.schematicImage || asset.image);
  const [activeBookChapter, setActiveBookChapter] = useState<number>(0);

  useEffect(() => {
    setSchematicSrc(asset.schematicImage || asset.image);
    setActiveBookChapter(0);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [asset.id, asset.schematicImage, asset.image]);

  const matchedVignette = MOCK_VIDEO_VIGNETTES.find(
    (v) => v.assetId === asset.id || v.categoryId === asset.category
  );

  const assetVideoVignette: VideoVignette = {
    id: `reel-${asset.id}`,
    assetId: asset.id,
    categoryId: asset.category,
    title: `${asset.title}: ${asset.officialTitle || 'Video Overview'}`,
    inventor: asset.inventor,
    shortDesc: asset.desc,
    duration: asset.videoDuration || '0:30',
    totalSeconds: 30,
    narrator: matchedVignette?.narrator || 'Dr. Elena Vance',
    narratorInstitution: matchedVignette?.narratorInstitution || 'Heritage Archive',
    thumbnailUrl: asset.image,
    scenes: matchedVignette?.scenes || [
      {
        title: 'The Workshop Challenge',
        timeRange: '0:00 - 0:10',
        description:
          'How physical and mechanical limits before this invention slowed everyday work.',
      },
      {
        title: 'How the Patent Works',
        timeRange: '0:10 - 0:20',
        description:
          'Visual walkthrough of the patented moving mechanism and energy conversion.',
      },
      {
        title: 'Long-Term Impact',
        timeRange: '0:20 - 0:30',
        description:
          'How this breakthrough shaped later tools, engineering systems, and modern use.',
      },
    ],
  };

  const parentCategory = useMemo(
    () =>
      ALL_50_CATEGORIES.find((c) => c.legacyCategoryKeys[0] === asset.category) ||
      ALL_50_CATEGORIES.find((c) => c.legacyCategoryKeys.includes(asset.category)),
    [asset.category]
  );

  const relatedAssets = useMemo(
    () =>
      MOCK_HISTORICAL_ASSETS.filter(
        (a) => a.category === asset.category && a.id !== asset.id
      ).slice(0, 3),
    [asset.category, asset.id]
  );

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-surface dark:bg-[#050505] text-on-surface selection:bg-primary/30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 pb-20">
        {/* Clean In-Page 5-Format Guide Bar */}
        <div className="mb-8 pb-4 border-b border-outline-variant/40 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-xs sm:text-sm text-on-surface-variant dark:text-neutral-400">
            Jump to format on this record:
          </p>
          <nav
            aria-label="Invention study formats"
            className="flex flex-wrap items-center gap-2"
          >
            {FORMAT_ANCHORS.map((sec) => (
              <button
                key={sec.id}
                type="button"
                onClick={() => scrollTo(sec.id)}
                className="min-h-[38px] px-3 py-1.5 border border-outline-variant/45 dark:border-white/15 bg-surface-container-lowest dark:bg-[#111114] hover:border-[#8c5d12] dark:hover:border-[#d4af37] text-xs font-medium text-on-surface dark:text-neutral-200 hover:text-[#8c5d12] dark:hover:text-[#d4af37] transition-colors cursor-pointer"
              >
                {sec.label}
              </button>
            ))}
          </nav>
        </div>

        {/* =====================================================================
            1. 2D PLATE & INVENTION OVERVIEW (#2d)
           ===================================================================== */}
        <section
          id="2d"
          className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16"
        >
          {/* Left: Clean Specimen Frame + Caption Beneath */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="border border-outline-variant/40 dark:border-white/10 bg-surface-container-lowest dark:bg-[#0b0b0e] overflow-hidden">
              <div className="aspect-[4/3] sm:aspect-[4/5] w-full overflow-hidden bg-neutral-200 dark:bg-neutral-900">
                <img
                  src={asset.image}
                  alt={asset.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="px-4 py-3 border-t border-outline-variant/30 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-on-surface-variant dark:text-neutral-400">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#8c5d12] dark:text-[#d4af37]" />
                  {asset.patentDate}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#8c5d12] dark:text-[#d4af37]" />
                  {asset.location}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Factual Title, Attribution & Provenance */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-xs sm:text-sm font-medium text-[#8c5d12] dark:text-[#d4af37] mb-2.5">
              2D Reference Plate · {asset.categoryLabel} · {asset.era}
            </p>

            <h1 className="font-serif text-[clamp(28px,4vw,48px)] font-semibold tracking-[-0.02em] leading-[1.1] text-on-surface dark:text-white [text-wrap:balance]">
              {asset.officialTitle || asset.title}
            </h1>

            <p className="mt-3 text-sm sm:text-base text-on-surface-variant dark:text-neutral-300">
              Invented by{' '}
              <strong className="font-semibold text-on-surface dark:text-white">
                {asset.inventor}
              </strong>
            </p>

            <p className="mt-4 text-base text-on-surface-variant dark:text-neutral-300 leading-[1.6] max-w-[62ch]">
              {asset.desc}
            </p>

            {asset.curatorQuote && (
              <blockquote className="mt-6 border-l-2 border-[#8c5d12]/60 dark:border-[#d4af37]/60 pl-4 py-0.5">
                <p className="font-serif italic text-sm sm:text-base text-on-surface dark:text-neutral-200 leading-relaxed">
                  &ldquo;{asset.curatorQuote}&rdquo;
                </p>
                <footer className="mt-1.5 text-xs font-mono text-on-surface-variant dark:text-neutral-400">
                  — {asset.curatorAuthor || 'Curatorial Reference Note'}
                </footer>
              </blockquote>
            )}

            {/* Honest Historical Metadata Grid */}
            <dl className="mt-7 grid grid-cols-1 sm:grid-cols-2 border border-outline-variant/40 dark:border-white/10 divide-y sm:divide-y-0 sm:grid-flow-row bg-surface-container-lowest dark:bg-[#0b0b0e]">
              <div className="p-4 sm:border-b sm:border-r border-outline-variant/30 dark:border-white/10">
                <dt className="text-xs font-mono text-on-surface-variant dark:text-neutral-400">
                  Patent Number
                </dt>
                <dd className="mt-1 text-sm font-mono font-semibold text-on-surface dark:text-white">
                  {asset.patentNumber || asset.patent}
                </dd>
              </div>
              <div className="p-4 sm:border-b border-outline-variant/30 dark:border-white/10">
                <dt className="text-xs font-mono text-on-surface-variant dark:text-neutral-400">
                  Archive Collection
                </dt>
                <dd className="mt-1 text-sm font-medium text-on-surface dark:text-white">
                  {asset.badge}
                </dd>
              </div>
              <div className="p-4 sm:border-r border-outline-variant/30 dark:border-white/10">
                <dt className="text-xs font-mono text-on-surface-variant dark:text-neutral-400">
                  Place of Origin
                </dt>
                <dd className="mt-1 text-sm font-medium text-on-surface dark:text-white">
                  {asset.location}
                </dd>
              </div>
              <div className="p-4">
                <dt className="text-xs font-mono text-on-surface-variant dark:text-neutral-400">
                  Construction Materials
                </dt>
                <dd className="mt-1 text-sm text-on-surface dark:text-white">
                  {asset.medium}
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* =====================================================================
            2. HISTORICAL STORY (#story)
           ===================================================================== */}
        <section
          id="story"
          className="scroll-mt-28 pt-12 sm:pt-16 border-t border-outline-variant/40 dark:border-white/10 mb-16"
        >
          <div className="max-w-2xl mb-8">
            <h2 className="font-serif text-[clamp(24px,3vw,36px)] font-semibold tracking-[-0.02em] text-on-surface dark:text-white">
              The Story Behind This Invention
            </h2>
            <p className="mt-2 text-sm sm:text-base text-on-surface-variant dark:text-neutral-300 leading-relaxed">
              Why it was built, how the mechanism works, and what changed after it was patented.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                step: '01',
                title: 'The Problem',
                text: asset.story || asset.desc,
              },
              {
                step: '02',
                title: 'How It Works',
                text:
                  asset.mechanics ||
                  'Engineered mechanical parts convert input motion or electrical energy into controlled output.',
              },
              {
                step: '03',
                title: 'Why It Matters',
                text:
                  asset.legacy ||
                  'Established reliable principles that influenced subsequent machines and industrial standards.',
              },
            ].map((part) => (
              <div
                key={part.step}
                className="p-6 border border-outline-variant/40 dark:border-white/10 bg-surface-container-lowest dark:bg-[#0b0b0e]"
              >
                <span className="font-mono text-xs font-semibold text-[#8c5d12] dark:text-[#d4af37]">
                  Part {part.step}
                </span>
                <h3 className="mt-2 font-serif text-xl font-semibold text-on-surface dark:text-white">
                  {part.title}
                </h3>
                <p className="mt-2.5 text-sm text-on-surface-variant dark:text-neutral-300 leading-relaxed">
                  {part.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================================
            3. ARCHIVAL BOOK FOLIO & ASSET-RELATED BOOKS (#book)
           ===================================================================== */}
        {(() => {
          const bookChapters = [
            {
              num: '01',
              label: 'Historical Background',
              title: `Origins of ${asset.title}`,
              body: asset.story || asset.desc,
              note: `Documented context: ${asset.location} (${asset.year || asset.patentDate}).`,
            },
            {
              num: '02',
              label: 'Working Principles',
              title: 'Engineering & Operating Mechanism',
              body:
                asset.mechanics ||
                asset.description ||
                asset.desc,
              note: `Materials specified in the patent filing: ${asset.medium}.`,
            },
            {
              num: '03',
              label: 'Cultural & Technical Impact',
              title: 'Why This Patent Mattered',
              body:
                asset.legacy ||
                asset.desc,
              note: asset.curatorQuote
                ? `"${asset.curatorQuote}" — ${asset.curatorAuthor || 'Archive Curator'}`
                : `Recorded under ${asset.categoryLabel}.`,
            },
          ];

          const currentChapter = bookChapters[activeBookChapter] || bookChapters[0];
          const volumeNumerals = ['Vol. I', 'Vol. II', 'Vol. III'];

          return (
            <section
              id="book"
              className="scroll-mt-28 pt-12 sm:pt-16 border-t border-outline-variant/40 dark:border-white/10 mb-16 space-y-12"
            >
              {/* Header */}
              <div className="max-w-2xl">
                <h2 className="font-serif text-[clamp(24px,3vw,36px)] font-semibold tracking-[-0.02em] text-on-surface dark:text-white">
                  Archival Book &amp; Patent Dossier
                </h2>
                <p className="mt-2 text-sm sm:text-base text-on-surface-variant dark:text-neutral-300 leading-relaxed">
                  Read the study monograph for {asset.title}, inspect its technical specification sheet, and browse books for related inventions.
                </p>
              </div>

              {/* Book Spread Reader (book-serif-index structure: index rail + warm archival reading folio) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 border border-outline-variant/45 dark:border-white/15 bg-surface-container-lowest dark:bg-[#0b0b0e] overflow-hidden">
                {/* Chapter Index Rail */}
                <aside className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-outline-variant/40 dark:border-white/10 bg-surface-container-low/60 dark:bg-[#0f0f12] p-5 sm:p-6 flex flex-col justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-[#8c5d12] dark:text-[#d4af37] mb-3">
                      <BookOpen className="w-4 h-4 shrink-0" />
                      <span>Companion Monograph</span>
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-semibold text-on-surface dark:text-white leading-snug">
                      {asset.title}
                    </h3>
                    <p className="mt-1 text-xs text-on-surface-variant dark:text-neutral-400">
                      By {asset.inventor} · {asset.year || asset.patentDate}
                    </p>

                    <div
                      role="tablist"
                      aria-label="Monograph chapters"
                      className="mt-5 divide-y divide-outline-variant/30 dark:divide-white/10 border-y border-outline-variant/30 dark:border-white/10"
                    >
                      {bookChapters.map((chap, idx) => {
                        const selected = activeBookChapter === idx;
                        return (
                          <button
                            key={chap.num}
                            type="button"
                            role="tab"
                            aria-selected={selected}
                            onClick={() => setActiveBookChapter(idx)}
                            className={`w-full min-h-[48px] py-3 px-2 text-left flex items-baseline gap-3 border-l-2 transition-colors cursor-pointer ${
                              selected
                                ? 'border-l-[#8c5d12] dark:border-l-[#d4af37] bg-surface dark:bg-white/[0.04]'
                                : 'border-l-transparent hover:bg-surface/60 dark:hover:bg-white/[0.02]'
                            }`}
                          >
                            <span
                              className={`font-mono text-xs tabular-nums shrink-0 ${
                                selected
                                  ? 'text-[#8c5d12] dark:text-[#d4af37] font-semibold'
                                  : 'text-on-surface-variant dark:text-neutral-500'
                              }`}
                            >
                              {chap.num}
                            </span>
                            <span
                              className={`text-sm ${
                                selected
                                  ? 'font-medium text-on-surface dark:text-white'
                                  : 'text-on-surface-variant dark:text-neutral-300'
                              }`}
                            >
                              {chap.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <p className="text-xs font-mono text-on-surface-variant dark:text-neutral-400">
                    Ref: {asset.patentNumber || asset.patent}
                  </p>
                </aside>

                {/* Open Paper Folio */}
                <div className="lg:col-span-8 bg-[#FAF6EE] dark:bg-[#141311] text-[#1A1918] dark:text-[#EDE8DF] p-6 sm:p-10 flex flex-col justify-between gap-8">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-black/10 dark:border-white/10 text-xs font-mono text-[#6E5D47] dark:text-[#B8AA95]">
                      <span>Chapter {currentChapter.num} · {currentChapter.label}</span>
                      <span>{asset.badge}</span>
                    </div>

                    <h4 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight leading-snug text-[#1A1918] dark:text-[#FAF6EE]">
                      {currentChapter.title}
                    </h4>

                    <p className="mt-5 font-serif text-base sm:text-lg leading-[1.75] text-[#2A2622] dark:text-[#E2DDD3] max-w-[62ch]">
                      {currentChapter.body}
                    </p>

                    <aside className="mt-6 pt-4 border-t border-black/10 dark:border-white/10 text-sm italic text-[#5C4E3C] dark:text-[#C5B8A5] max-w-[60ch]">
                      {currentChapter.note}
                    </aside>
                  </div>

                  {/* Folio Page Controls */}
                  <div className="pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      disabled={activeBookChapter === 0}
                      onClick={() => setActiveBookChapter((c) => Math.max(0, c - 1))}
                      className="min-h-[40px] px-3 py-1.5 border border-black/15 dark:border-white/15 inline-flex items-center gap-1.5 text-xs font-medium disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed hover:border-[#8c5d12] dark:hover:border-[#d4af37] transition-colors"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Previous Chapter</span>
                    </button>

                    <span className="text-xs font-mono text-[#6E5D47] dark:text-[#B8AA95]">
                      Page {activeBookChapter + 1} of {bookChapters.length}
                    </span>

                    <button
                      type="button"
                      disabled={activeBookChapter === bookChapters.length - 1}
                      onClick={() =>
                        setActiveBookChapter((c) => Math.min(bookChapters.length - 1, c + 1))
                      }
                      className="min-h-[40px] px-3 py-1.5 border border-black/15 dark:border-white/15 inline-flex items-center gap-1.5 text-xs font-medium disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed hover:border-[#8c5d12] dark:hover:border-[#d4af37] transition-colors"
                    >
                      <span>Next Chapter</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Technical Specification Sheet & Ledger */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Patent Sheet Frame with Safe Fallback */}
                <div className="lg:col-span-5 border border-outline-variant/40 dark:border-white/10 bg-surface-container-lowest dark:bg-[#0b0b0e] p-5">
                  <div className="flex items-center justify-between text-xs font-mono text-on-surface-variant dark:text-neutral-400 mb-3">
                    <span className="text-[#8c5d12] dark:text-[#d4af37] font-semibold">
                      Patent Specification Sheet
                    </span>
                    <span>{asset.patentNumber || asset.patent}</span>
                  </div>
                  <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-950 border border-outline-variant/30 dark:border-white/10">
                    <img
                      src={schematicSrc}
                      alt={`${asset.title} patent specification plate`}
                      onError={() => {
                        if (schematicSrc !== asset.image) setSchematicSrc(asset.image);
                      }}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <p className="mt-3 text-xs text-on-surface-variant dark:text-neutral-400 leading-relaxed">
                    Reference drawing and archive plate from {asset.badge} ({asset.patentDate}).
                  </p>
                </div>

                {/* Specification Ledger Table */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="border border-outline-variant/40 dark:border-white/10 bg-surface-container-lowest dark:bg-[#0b0b0e] p-5 sm:p-6">
                    <h3 className="font-serif text-xl font-semibold text-on-surface dark:text-white mb-4">
                      Technical Specification Ledger
                    </h3>
                    <dl className="divide-y divide-outline-variant/30 dark:divide-white/10 text-sm">
                      {asset.blueprintLedger && asset.blueprintLedger.length > 0 ? (
                        asset.blueprintLedger.map((row, idx) => (
                          <div
                            key={idx}
                            className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4"
                          >
                            <dt className="text-on-surface-variant dark:text-neutral-400">{row.item}</dt>
                            <dd className="font-mono font-medium text-on-surface dark:text-white sm:text-right">
                              {row.spec}
                            </dd>
                          </div>
                        ))
                      ) : (
                        <>
                          <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                            <dt className="text-on-surface-variant dark:text-neutral-400">
                              Materials
                            </dt>
                            <dd className="font-mono font-medium text-on-surface dark:text-white sm:text-right">
                              {asset.medium}
                            </dd>
                          </div>
                          <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                            <dt className="text-on-surface-variant dark:text-neutral-400">
                              Patent Registration
                            </dt>
                            <dd className="font-mono font-medium text-on-surface dark:text-white sm:text-right">
                              {asset.patent}
                            </dd>
                          </div>
                        </>
                      )}
                    </dl>
                  </div>

                  <div className="border border-outline-variant/40 dark:border-white/10 bg-surface-container-lowest dark:bg-[#0b0b0e] p-5 sm:p-6">
                    <h3 className="font-serif text-lg font-semibold text-on-surface dark:text-white mb-2">
                      Archival Provenance Note
                    </h3>
                    <p className="text-sm text-on-surface-variant dark:text-neutral-300 leading-relaxed">
                      Prepared for {asset.title} ({asset.year || asset.patentDate}) by {asset.inventor} in {asset.location}, matching recorded construction materials and patent claims.
                    </p>
                  </div>
                </div>
              </div>

              {/* Dedicated Asset-Related Books Section (#related-books) */}
              {relatedAssets.length > 0 && (
                <div
                  id="related-books"
                  className="scroll-mt-28 pt-8 border-t border-outline-variant/30 dark:border-white/10"
                >
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-on-surface dark:text-white">
                        Books Related to {asset.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-on-surface-variant dark:text-neutral-300">
                        Companion study volumes from other milestone inventions in {asset.categoryLabel}.
                      </p>
                    </div>
                    <span className="text-xs font-mono text-on-surface-variant dark:text-neutral-400 shrink-0">
                      {relatedAssets.length} Related Volumes
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {relatedAssets.map((bookItem, idx) => (
                      <Link
                        key={`book-${bookItem.id}`}
                        href={`/inventions/${bookItem.id}#book`}
                        className="group border border-outline-variant/40 dark:border-white/10 border-l-4 border-l-[#8c5d12] dark:border-l-[#d4af37] bg-surface-container-lowest dark:bg-[#0b0b0e] hover:border-[#8c5d12]/70 dark:hover:border-[#d4af37]/70 p-5 flex flex-col justify-between gap-4 transition-colors"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 text-xs font-mono text-[#8c5d12] dark:text-[#d4af37]">
                            <span>{volumeNumerals[idx] || `Vol. ${idx + 1}`}</span>
                            <span className="text-on-surface-variant dark:text-neutral-400">
                              {bookItem.year || bookItem.patentDate}
                            </span>
                          </div>

                          <h4 className="mt-2.5 font-serif text-lg font-semibold leading-snug text-on-surface dark:text-white group-hover:text-[#8c5d12] dark:group-hover:text-[#d4af37] transition-colors">
                            {bookItem.title}: Study Monograph
                          </h4>

                          <p className="mt-1 text-xs font-medium text-on-surface-variant dark:text-neutral-400">
                            {bookItem.inventor} · {bookItem.patentNumber || bookItem.patent}
                          </p>

                          <p className="mt-3 text-sm text-on-surface-variant dark:text-neutral-300 leading-relaxed line-clamp-3">
                            {bookItem.story || bookItem.desc}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-outline-variant/30 dark:border-white/10 flex items-center justify-between text-xs font-medium text-on-surface dark:text-neutral-200 group-hover:text-[#8c5d12] dark:group-hover:text-[#d4af37]">
                          <span>Read book chapters</span>
                          <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </section>
          );
        })()}

        {/* =====================================================================
            4. INTERACTIVE 3D MODEL (#3d)
           ===================================================================== */}
        <section
          id="3d"
          className="scroll-mt-28 pt-12 sm:pt-16 border-t border-outline-variant/40 dark:border-white/10 mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="font-serif text-[clamp(24px,3vw,36px)] font-semibold tracking-[-0.02em] text-on-surface dark:text-white">
                Interactive 3D Model
              </h2>
              <p className="mt-2 text-sm sm:text-base text-on-surface-variant dark:text-neutral-300">
                Drag to rotate 360°, or use the controls to switch wireframe, lighting, and zoom.
              </p>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <button
                type="button"
                onClick={() => setIsWireframe(!isWireframe)}
                aria-pressed={isWireframe}
                className={`min-h-[40px] px-3 py-1.5 border text-xs font-mono inline-flex items-center gap-1.5 cursor-pointer transition-colors ${
                  isWireframe
                    ? 'border-[#8c5d12] dark:border-[#d4af37] bg-[#8c5d12]/10 dark:bg-[#d4af37]/15 text-[#8c5d12] dark:text-[#d4af37]'
                    : 'border-outline-variant/50 dark:border-white/15 text-on-surface dark:text-neutral-200 hover:border-on-surface dark:hover:border-white/35'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Wireframe: {isWireframe ? 'On' : 'Off'}</span>
              </button>

              <button
                type="button"
                onClick={() => setIsAutoRotating(!isAutoRotating)}
                aria-pressed={isAutoRotating}
                className={`min-h-[40px] px-3 py-1.5 border text-xs font-mono inline-flex items-center gap-1.5 cursor-pointer transition-colors ${
                  isAutoRotating
                    ? 'border-[#8c5d12] dark:border-[#d4af37] bg-[#8c5d12]/10 dark:bg-[#d4af37]/15 text-[#8c5d12] dark:text-[#d4af37]'
                    : 'border-outline-variant/50 dark:border-white/15 text-on-surface dark:text-neutral-200 hover:border-on-surface dark:hover:border-white/35'
                }`}
              >
                <RotateCw className="w-3.5 h-3.5" />
                <span>Rotate: {isAutoRotating ? 'On' : 'Off'}</span>
              </button>

              <button
                type="button"
                onClick={() =>
                  setLightingMode(lightingMode === 'spotlight' ? 'ambient' : 'spotlight')
                }
                className="min-h-[40px] px-3 py-1.5 border border-outline-variant/50 dark:border-white/15 text-xs font-mono text-on-surface dark:text-neutral-200 hover:border-on-surface dark:hover:border-white/35 inline-flex items-center gap-1.5 cursor-pointer"
              >
                {lightingMode === 'spotlight' ? (
                  <Sun className="w-3.5 h-3.5" />
                ) : (
                  <Moon className="w-3.5 h-3.5" />
                )}
                <span>Light</span>
              </button>
            </div>
          </div>

          <div className="border border-outline-variant/40 dark:border-white/15 bg-neutral-950 overflow-hidden">
            <div className="relative w-full h-[340px] sm:h-[480px] lg:h-[560px]">
              <ModelViewer3D
                modelType={asset.modelType || 'antigravity'}
                isWireframe={isWireframe}
                isAutoRotating={isAutoRotating}
                lightingMode={lightingMode}
                zoomLevel={zoomLevel}
              />
            </div>

            <div className="px-4 py-3 border-t border-white/10 bg-[#111114] flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-300">
              <span className="font-mono">
                {asset.title} · {asset.polyCount}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setZoomLevel((z) => Math.max(2.5, z - 0.5))}
                  aria-label="Zoom in 3D model"
                  className="min-w-[36px] min-h-[32px] border border-white/15 text-white hover:border-white/35 cursor-pointer font-mono"
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={() => setZoomLevel((z) => Math.min(8.0, z + 0.5))}
                  aria-label="Zoom out 3D model"
                  className="min-w-[36px] min-h-[32px] border border-white/15 text-white hover:border-white/35 cursor-pointer font-mono"
                >
                  -
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setZoomLevel(4.6);
                    setIsWireframe(false);
                    setIsAutoRotating(true);
                  }}
                  className="min-h-[32px] px-2.5 border border-white/15 text-white hover:border-white/35 inline-flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            5. DOCUMENTED VIDEO WALKTHROUGH (#video)
           ===================================================================== */}
        <section
          id="video"
          className="scroll-mt-28 pt-12 sm:pt-16 border-t border-outline-variant/40 dark:border-white/10 mb-16"
        >
          <div className="max-w-2xl mb-8">
            <h2 className="font-serif text-[clamp(24px,3vw,36px)] font-semibold tracking-[-0.02em] text-on-surface dark:text-white">
              Video Walkthrough
            </h2>
            <p className="mt-2 text-sm sm:text-base text-on-surface-variant dark:text-neutral-300 leading-relaxed">
              Short three-part reel explaining how {asset.title} works and why it mattered.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <div className="lg:col-span-8">
              <YouTubeVideoPlayer video={assetVideoVignette} initialCaptionsOn={true} />
            </div>

            <div className="lg:col-span-4 border border-outline-variant/40 dark:border-white/10 divide-y divide-outline-variant/30 dark:divide-white/10 bg-surface-container-lowest dark:bg-[#0b0b0e]">
              {assetVideoVignette.scenes.map((scene, idx) => (
                <div key={scene.title} className="p-4 sm:p-5">
                  <div className="text-xs font-mono text-[#8c5d12] dark:text-[#d4af37] mb-1">
                    Scene {idx + 1} · {scene.timeRange}
                  </div>
                  <h3 className="font-serif text-base font-semibold text-on-surface dark:text-white">
                    {scene.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-on-surface-variant dark:text-neutral-300 leading-relaxed">
                    {scene.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            6. MORE INVENTIONS IN THIS CATEGORY
           ===================================================================== */}
        {relatedAssets.length > 0 && (
          <section className="scroll-mt-24 pt-12 sm:pt-16 border-t border-outline-variant/40 dark:border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <h2 className="font-serif text-[clamp(22px,2.8vw,32px)] font-semibold text-on-surface dark:text-white">
                  More in {asset.categoryLabel}
                </h2>
              </div>
              <Link
                href={parentCategory ? `/categories/${parentCategory.slug}` : '/#themes'}
                className="min-h-[40px] inline-flex items-center gap-1.5 text-sm font-medium text-[#8c5d12] dark:text-[#d4af37] hover:underline shrink-0"
              >
                <span>
                  {parentCategory ? `All ${parentCategory.title}` : 'Browse all 10 themes'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {relatedAssets.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/inventions/${rel.id}`}
                  className="group flex flex-col border border-outline-variant/40 dark:border-white/10 bg-surface-container-lowest dark:bg-[#0b0b0e] hover:border-[#8c5d12]/60 dark:hover:border-[#d4af37]/60 transition-colors overflow-hidden"
                >
                  <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-200 dark:bg-neutral-900 border-b border-outline-variant/30 dark:border-white/10">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between gap-3">
                    <div>
                      <div className="text-xs font-mono text-on-surface-variant dark:text-neutral-400">
                        {rel.inventor} · {rel.year || rel.patentDate}
                      </div>
                      <h3 className="mt-1.5 font-serif text-lg font-semibold text-on-surface dark:text-white group-hover:text-[#8c5d12] dark:group-hover:text-[#d4af37] transition-colors">
                        {rel.title}
                      </h3>
                      <p className="mt-2 text-sm text-on-surface-variant dark:text-neutral-300 line-clamp-2 leading-relaxed">
                        {rel.desc}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-outline-variant/30 dark:border-white/10 flex items-center justify-between text-xs font-medium text-on-surface dark:text-neutral-200 group-hover:text-[#8c5d12] dark:group-hover:text-[#d4af37]">
                      <span>Open 5-format record</span>
                      <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
