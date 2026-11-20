'use client';

import React, { useState, useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  ExternalLink,
  Layers,
  MapPin,
  Moon,
  RotateCcw,
  RotateCw,
  Shield,
  Sun,
} from 'lucide-react';
import { HistoricalAsset } from '@/types/asset';
import { VideoVignette } from '@/types/media';
import { ALL_50_CATEGORIES } from '@/data/taxonomy';
import { assetService } from '@/services/assetService';
import { useSignedMediaUrl } from '@/services/signedMediaService';
import { useAuth } from '@/context/AuthContext';
import YouTubeVideoPlayer from '@/components/viewers/YouTubeVideoPlayer';
import WatermarkedMediaFrame from '@/components/viewers/WatermarkedMediaFrame';
import AuthUnlockGate from '@/components/common/AuthUnlockGate';

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
  assetId: string;
}

const FORMAT_ANCHORS = [
  { id: '2d', label: '1. 2D Plate' },
  { id: 'story', label: '2. Story' },
  { id: 'book', label: '3. Book & Related Books' },
  { id: '3d', label: '4. 3D Model' },
  { id: 'video', label: '5. Video' },
];

export default function InventionDetailView({ assetId }: InventionDetailViewProps) {
  const { isAuthenticated, isLoading: authLoading } = useAuth();

  const [asset, setAsset] = useState<HistoricalAsset | null>(null);
  const [relatedAssets, setRelatedAssets] = useState<HistoricalAsset[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  const [isWireframe, setIsWireframe] = useState<boolean>(false);
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(true);
  const [lightingMode, setLightingMode] = useState<'spotlight' | 'ambient'>('spotlight');
  const [zoomLevel, setZoomLevel] = useState<number>(4.6);
  const [schematicSrc, setSchematicSrc] = useState<string>('');
  const [activeBookChapter, setActiveBookChapter] = useState<number>(0);
  const [activeHotspotId, setActiveHotspotId] = useState<number | null>(null);
  const [summaryMode, setSummaryMode] = useState<'curatorial' | 'educational' | 'child'>('curatorial');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [assetId]);

  useEffect(() => {
    if (authLoading) return;
    if (!isAuthenticated) {
      setAsset(null);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    let contextCatSlug: string | undefined;
    try {
      contextCatSlug = sessionStorage.getItem('ha_last_category_slug') || undefined;
    } catch {
      contextCatSlug = undefined;
    }

    assetService
      .getAssetById(assetId, contextCatSlug)
      .then(async (loaded) => {
        if (cancelled) return;
        setAsset(loaded);
        setSchematicSrc(loaded.schematicImage || loaded.image);
        setActiveBookChapter(0);
        setActiveHotspotId(loaded.hotspots?.[0]?.id ?? null);

        const related = await assetService
          .getAssets({ category: loaded.category })
          .catch(() => [] as HistoricalAsset[]);
        if (!cancelled) {
          setRelatedAssets(
            related.filter((r) => r.id !== loaded.id).slice(0, 3)
          );
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err);
          setAsset(null);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [authLoading, isAuthenticated, assetId]);

  // Identify media IDs for 900s signed URL streaming
  const primaryPlateMedia = useMemo(
    () =>
      asset?.asset_media?.find((m) => m.type === 'plate_2d' || m.type === 'image'),
    [asset]
  );
  const primaryVideoMedia = useMemo(
    () =>
      asset?.asset_media?.find((m) => m.type === 'video_30s' || m.type === 'video_edu'),
    [asset]
  );
  const primaryBookMedia = useMemo(
    () => asset?.asset_media?.find((m) => m.type === 'book'),
    [asset]
  );

  const { data: signedPlate } = useSignedMediaUrl(primaryPlateMedia?.id);
  const { data: signedVideo } = useSignedMediaUrl(primaryVideoMedia?.id);

  const parentCategory = useMemo(
    () =>
      asset
        ? ALL_50_CATEGORIES.find((c) => c.legacyCategoryKeys[0] === asset.category) ||
          ALL_50_CATEGORIES.find((c) => c.legacyCategoryKeys.includes(asset.category))
        : undefined,
    [asset]
  );

  if (!authLoading && !isAuthenticated) {
    return (
      <div className="min-h-screen w-full bg-surface dark:bg-[#050505] px-4 sm:px-8 py-12">
        <AuthUnlockGate nextPath={`/inventions/${assetId}`} />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-surface dark:bg-[#050505] px-4 sm:px-8 py-12">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="h-12 bg-surface-container-low dark:bg-[#0e0e12] animate-pulse" />
          <div className="h-96 bg-surface-container-low dark:bg-[#0e0e12] animate-pulse" />
        </div>
      </div>
    );
  }

  if (error || !asset) {
    return (
      <div className="min-h-screen bg-surface dark:bg-[#050505] px-4 sm:px-8 py-12">
        <AuthUnlockGate nextPath={`/inventions/${assetId}`} error={error} />
      </div>
    );
  }

  const plateDisplayUrl = signedPlate?.signed_url || asset.image;

  const assetVideoVignette: VideoVignette = {
    id: primaryVideoMedia?.id || `reel-${asset.id}`,
    assetId: asset.id,
    categoryId: asset.category,
    title:
      primaryVideoMedia?.title ||
      `${asset.title}: ${asset.officialTitle || 'Video Overview'}`,
    inventor: asset.inventor,
    shortDesc: primaryVideoMedia?.description || asset.desc,
    duration: primaryVideoMedia?.duration_label || asset.videoDuration || '0:30',
    totalSeconds: primaryVideoMedia?.duration_seconds || 30,
    narrator: primaryVideoMedia?.narrator_name || 'Dr. Elena Vance',
    narratorInstitution:
      primaryVideoMedia?.narrator_institution || 'Heritage Archive',
    thumbnailUrl: primaryVideoMedia?.thumbnail_path || asset.image,
    videoUrl: signedVideo?.signed_url || asset.videoUrl || null,
    watermarkEnabled:
      signedVideo?.watermark_enabled ?? primaryVideoMedia?.watermark_enabled ?? true,
    signedUrlTtlSeconds:
      signedVideo?.ttl_seconds ?? primaryVideoMedia?.signed_url_ttl_seconds ?? 900,
    scenes:
      (primaryVideoMedia?.scenes_timeline_json?.length
        ? primaryVideoMedia.scenes_timeline_json
        : undefined) || [
        {
          title: 'The Workshop Challenge',
          timeRange: '0:00 - 0:10',
          description: asset.story || asset.desc,
        },
        {
          title: 'How the Patent Works',
          timeRange: '0:10 - 0:20',
          description: asset.mechanics || asset.desc,
        },
        {
          title: 'Long-Term Impact',
          timeRange: '0:20 - 0:30',
          description: asset.legacy || asset.desc,
        },
      ],
  };

  const bookChapters =
    primaryBookMedia?.book_pages_json && primaryBookMedia.book_pages_json.length > 0
      ? primaryBookMedia.book_pages_json
      : [
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
            body: asset.mechanics || asset.description || asset.desc,
            note: `Materials specified in filing: ${asset.medium}.`,
          },
          {
            num: '03',
            label: 'Cultural & Technical Impact',
            title: 'Why This Patent Mattered',
            body: asset.legacy || asset.desc,
            note: asset.curatorQuote
              ? `"${asset.curatorQuote}" — ${asset.curatorAuthor || 'Archive Curator'}`
              : `Recorded under ${asset.categoryLabel}.`,
          },
        ];

  const currentChapter = bookChapters[activeBookChapter] || bookChapters[0];
  const volumeNumerals = ['Vol. I', 'Vol. II', 'Vol. III'];
  const hotspots = asset.hotspots || [];
  const activeHotspot = hotspots.find((h) => h.id === activeHotspotId) || hotspots[0];
  const profile3d = asset.asset_3d_profile;
  const historicalEvents = asset.historical_events || [];
  const historicalRefs = asset.historical_references || [];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-surface dark:bg-[#050505] text-on-surface selection:bg-primary/30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 pb-20">
        {/* Format Navigation + Sensitivity Strip */}
        <div className="mb-8 pb-4 border-b border-outline-variant/40 dark:border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="inline-flex items-center gap-1 px-2 py-1 border border-[#8c5d12]/35 dark:border-[#d4af37]/35 text-[#8c5d12] dark:text-[#d4af37]">
              <Shield className="w-3 h-3" />
              {asset.sensitivity_level || 'authenticated_member'}
            </span>
            {typeof asset.twin_completeness_score === 'number' && (
              <span className="px-2 py-1 border border-outline-variant/40 dark:border-white/15 text-on-surface-variant dark:text-neutral-400">
                Twin Score: {asset.twin_completeness_score}%
              </span>
            )}
            {asset.holding_institution && (
              <span className="px-2 py-1 border border-outline-variant/40 dark:border-white/15 text-on-surface-variant dark:text-neutral-400">
                {asset.holding_institution}
              </span>
            )}
          </div>

          <nav aria-label="Invention study formats" className="flex flex-wrap items-center gap-2">
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

        {/* 1. 2D PLATE & OVERVIEW (#2d) */}
        <section
          id="2d"
          className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16"
        >
          <div className="lg:col-span-5 flex flex-col">
            <WatermarkedMediaFrame
              watermarkEnabled={primaryPlateMedia?.watermark_enabled ?? true}
              watermarkText={signedPlate?.watermark_text}
              signedExpiresAt={signedPlate?.expires_at}
              className="border border-outline-variant/40 dark:border-white/10 bg-surface-container-lowest dark:bg-[#0b0b0e]"
            >
              <div className="aspect-[4/3] sm:aspect-[4/5] w-full overflow-hidden bg-neutral-200 dark:bg-neutral-900">
                <img
                  src={plateDisplayUrl}
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
            </WatermarkedMediaFrame>
          </div>

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

            {(asset.educational_summary || asset.child_friendly_summary) && (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {(['curatorial', 'educational', 'child'] as const).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setSummaryMode(m)}
                    className={`px-2.5 py-1 text-xs font-mono border cursor-pointer ${
                      summaryMode === m
                        ? 'border-[#8c5d12] dark:border-[#d4af37] bg-[#8c5d12]/10 dark:bg-[#d4af37]/10 text-[#8c5d12] dark:text-[#d4af37]'
                        : 'border-outline-variant/40 dark:border-white/15 text-on-surface-variant dark:text-neutral-400'
                    }`}
                  >
                    {m === 'curatorial'
                      ? 'Curatorial Brief'
                      : m === 'educational'
                        ? 'Student Note'
                        : 'Young Explorer'}
                  </button>
                ))}
              </div>
            )}

            <p className="mt-4 text-base text-on-surface-variant dark:text-neutral-300 leading-[1.6] max-w-[62ch]">
              {summaryMode === 'educational' && asset.educational_summary
                ? asset.educational_summary
                : summaryMode === 'child' && asset.child_friendly_summary
                  ? asset.child_friendly_summary
                  : asset.desc}
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

        {/* 2. HISTORICAL STORY (#story) */}
        <section
          id="story"
          className="scroll-mt-28 pt-12 sm:pt-16 border-t border-outline-variant/40 dark:border-white/10 mb-16"
        >
          <div className="max-w-2xl mb-8">
            <h2 className="font-serif text-[clamp(24px,3vw,36px)] font-semibold tracking-[-0.02em] text-on-surface dark:text-white">
              The Story Behind This Invention
            </h2>
            <p className="mt-2 text-sm sm:text-base text-on-surface-variant dark:text-neutral-300 leading-relaxed">
              Three-act contextual narrative authored for this archival classification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {[
              { step: '01', title: 'The Problem (Genesis)', text: asset.story || asset.desc },
              {
                step: '02',
                title: 'How It Works (Mechanics)',
                text:
                  asset.mechanics ||
                  'Engineered mechanical parts convert input motion or electrical energy into controlled output.',
              },
              {
                step: '03',
                title: 'Why It Matters (Legacy)',
                text:
                  asset.legacy ||
                  'Established reliable principles that influenced subsequent tools and industrial standards.',
              },
            ].map((part) => (
              <div
                key={part.step}
                className="p-6 border border-outline-variant/40 dark:border-white/10 bg-surface-container-lowest dark:bg-[#0b0b0e]"
              >
                <span className="font-mono text-xs font-semibold text-[#8c5d12] dark:text-[#d4af37]">
                  Act {part.step}
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

        {/* 3. ARCHIVAL BOOK FOLIO & ASSET-RELATED BOOKS (#book) */}
        <section
          id="book"
          className="scroll-mt-28 pt-12 sm:pt-16 border-t border-outline-variant/40 dark:border-white/10 mb-16 space-y-12"
        >
          <div className="max-w-2xl">
            <h2 className="font-serif text-[clamp(24px,3vw,36px)] font-semibold tracking-[-0.02em] text-on-surface dark:text-white">
              Archival Book &amp; Patent Dossier
            </h2>
            <p className="mt-2 text-sm sm:text-base text-on-surface-variant dark:text-neutral-300 leading-relaxed">
              Read the study monograph for {asset.title}, inspect interactive plate hotspots and blueprint specs, and browse related monographs.
            </p>
          </div>

          <div className="border border-[#2A2319]/20 dark:border-white/15 bg-[#f7f2e7] dark:bg-[#141311] grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#2A2319]/15 dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between gap-6 bg-[#f2ecdd] dark:bg-[#100f0d]">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#8c5d12] dark:text-[#d4af37] mb-3">
                  <BookOpen className="w-4 h-4 shrink-0" />
                  <span>Study Monograph · {bookChapters.length} Chapters</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#1E1912] dark:text-[#F4EEE4] leading-snug">
                  {primaryBookMedia?.title || `${asset.title}: Study Monograph`}
                </h3>

                <p className="mt-1.5 text-xs font-mono text-[#6E5D47] dark:text-[#B8AA95]">
                  By {asset.inventor} · {asset.patentNumber || asset.patent}
                </p>

                <div className="mt-6 space-y-1.5" role="tablist" aria-label="Book chapters">
                  {bookChapters.map((chap, idx) => {
                    const selected = activeBookChapter === idx;
                    return (
                      <button
                        key={chap.num}
                        type="button"
                        role="tab"
                        aria-selected={selected}
                        onClick={() => setActiveBookChapter(idx)}
                        className={`w-full text-left px-3.5 py-2.5 border transition-colors cursor-pointer flex items-center justify-between gap-3 ${
                          selected
                            ? 'border-[#8c5d12] dark:border-[#d4af37] bg-white/80 dark:bg-white/[0.08] text-[#1E1912] dark:text-white font-medium'
                            : 'border-transparent hover:border-[#2A2319]/20 dark:hover:border-white/15 text-[#5c5141] dark:text-[#B8AA95]'
                        }`}
                      >
                        <span className="text-sm">
                          <span className="font-mono text-xs text-[#8c5d12] dark:text-[#d4af37] mr-2">
                            {chap.num}
                          </span>
                          {chap.label}
                        </span>
                        <ArrowRight
                          className={`w-3.5 h-3.5 shrink-0 ${
                            selected ? 'opacity-100 text-[#8c5d12] dark:text-[#d4af37]' : 'opacity-30'
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-[#2A2319]/15 dark:border-white/10 text-xs font-mono text-[#6E5D47] dark:text-[#B8AA95]">
                Folio Edition · {asset.badge}
              </div>
            </div>

            <div className="lg:col-span-8 p-6 sm:p-10 flex flex-col justify-between gap-8">
              <div>
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#2A2319]/15 dark:border-white/10 text-xs font-mono text-[#6E5D47] dark:text-[#B8AA95]">
                  <span>
                    Chapter {currentChapter.num} — {currentChapter.label}
                  </span>
                  <span>{asset.year || asset.patentDate}</span>
                </div>

                <h4 className="mt-6 font-serif text-2xl sm:text-3xl font-semibold text-[#1E1912] dark:text-[#F4EEE4] leading-snug">
                  {currentChapter.title}
                </h4>

                <p className="mt-4 font-serif text-base sm:text-lg leading-[1.8] text-[#2A2319] dark:text-[#E5DED0]">
                  {currentChapter.body}
                </p>

                {currentChapter.note && (
                  <p className="mt-6 pt-4 border-t border-dashed border-[#2A2319]/20 dark:border-white/15 text-xs sm:text-sm font-mono text-[#6E5D47] dark:text-[#B8AA95]">
                    {currentChapter.note}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between gap-4 pt-4 border-t border-[#2A2319]/15 dark:border-white/10">
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

          {/* Technical Specification Sheet + Interactive Hotspots + Ledger */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 border border-outline-variant/40 dark:border-white/10 bg-surface-container-lowest dark:bg-[#0b0b0e] p-5">
              <div className="flex items-center justify-between text-xs font-mono text-on-surface-variant dark:text-neutral-400 mb-3">
                <span className="text-[#8c5d12] dark:text-[#d4af37] font-semibold">
                  Patent Specification Sheet
                </span>
                <span>{asset.patentNumber || asset.patent}</span>
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950 border border-outline-variant/30 dark:border-white/10">
                <img
                  src={schematicSrc || plateDisplayUrl}
                  alt={`${asset.title} patent specification plate`}
                  onError={() => {
                    if (schematicSrc !== asset.image) setSchematicSrc(asset.image);
                  }}
                  className="w-full h-full object-contain p-2"
                />
                {hotspots.map((hs) => (
                  <button
                    key={hs.id}
                    type="button"
                    onClick={() => setActiveHotspotId(hs.id)}
                    style={{ left: `${hs.pos[0]}%`, top: `${hs.pos[1]}%` }}
                    title={hs.title}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border text-[10px] font-mono font-bold transition-transform cursor-pointer ${
                      activeHotspot?.id === hs.id
                        ? 'bg-[#d4af37] text-neutral-950 border-white scale-110'
                        : 'bg-black/75 text-white border-[#d4af37]'
                    }`}
                  >
                    {hs.id}
                  </button>
                ))}
              </div>
              {activeHotspot && (
                <div className="mt-3 p-3 border border-[#8c5d12]/30 dark:border-[#d4af37]/30 bg-surface-container-low/60 dark:bg-white/[0.04] text-xs">
                  <div className="font-mono font-semibold text-[#8c5d12] dark:text-[#d4af37]">
                    Hotspot #{activeHotspot.id}: {activeHotspot.title}
                  </div>
                  <p className="mt-1 text-on-surface-variant dark:text-neutral-300">
                    {activeHotspot.desc}
                  </p>
                </div>
              )}
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div className="border border-outline-variant/40 dark:border-white/10 bg-surface-container-lowest dark:bg-[#0b0b0e] p-5 sm:p-6">
                <h3 className="font-serif text-xl font-semibold text-on-surface dark:text-white mb-4">
                  Context Blueprint Specification Ledger
                </h3>
                <dl className="divide-y divide-outline-variant/30 dark:divide-white/10 text-sm">
                  {asset.blueprintLedger && asset.blueprintLedger.length > 0 ? (
                    asset.blueprintLedger.map((row, idx) => (
                      <div
                        key={idx}
                        className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4"
                      >
                        <dt className="text-on-surface-variant dark:text-neutral-400">
                          {row.figureRef ? (
                            <span className="font-mono text-xs text-[#8c5d12] dark:text-[#d4af37] mr-2">
                              {row.figureRef}
                            </span>
                          ) : null}
                          {row.item}
                        </dt>
                        <dd className="font-mono font-medium text-on-surface dark:text-white sm:text-right">
                          {row.spec}
                        </dd>
                      </div>
                    ))
                  ) : (
                    <div className="py-3 flex justify-between gap-4">
                      <dt className="text-on-surface-variant dark:text-neutral-400">
                        Materials & Registration
                      </dt>
                      <dd className="font-mono font-medium text-on-surface dark:text-white text-right">
                        {asset.medium} · {asset.patent}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            </div>
          </div>

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
                    </div>
                    <div className="pt-3 border-t border-outline-variant/30 dark:border-white/10 flex items-center justify-between text-xs font-medium text-on-surface dark:text-neutral-200 group-hover:text-[#8c5d12] dark:group-hover:text-[#d4af37]">
                      <span>Read book chapters</span>
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* 4. INTERACTIVE 3D MODEL + 3D PROFILE SPECS (#3d) */}
        <section
          id="3d"
          className="scroll-mt-28 pt-12 sm:pt-16 border-t border-outline-variant/40 dark:border-white/10 mb-16 space-y-6"
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-[clamp(24px,3vw,36px)] font-semibold tracking-[-0.02em] text-on-surface dark:text-white">
                Interactive 3D Model
              </h2>
              <p className="mt-2 text-sm sm:text-base text-on-surface-variant dark:text-neutral-300">
                Drag to rotate 360°, toggle wireframe, lighting, or inspect verified dimensional twin specs.
              </p>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <button
                type="button"
                onClick={() => setIsWireframe(!isWireframe)}
                aria-pressed={isWireframe}
                className={`min-h-[40px] px-3 py-1.5 border text-xs font-mono inline-flex items-center gap-1.5 cursor-pointer ${
                  isWireframe
                    ? 'border-[#8c5d12] dark:border-[#d4af37] bg-[#8c5d12]/10 dark:bg-[#d4af37]/15 text-[#8c5d12] dark:text-[#d4af37]'
                    : 'border-outline-variant/50 dark:border-white/15 text-on-surface dark:text-neutral-200'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Wireframe: {isWireframe ? 'On' : 'Off'}</span>
              </button>

              <button
                type="button"
                onClick={() => setIsAutoRotating(!isAutoRotating)}
                aria-pressed={isAutoRotating}
                className={`min-h-[40px] px-3 py-1.5 border text-xs font-mono inline-flex items-center gap-1.5 cursor-pointer ${
                  isAutoRotating
                    ? 'border-[#8c5d12] dark:border-[#d4af37] bg-[#8c5d12]/10 dark:bg-[#d4af37]/15 text-[#8c5d12] dark:text-[#d4af37]'
                    : 'border-outline-variant/50 dark:border-white/15 text-on-surface dark:text-neutral-200'
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
                className="min-h-[40px] px-3 py-1.5 border border-outline-variant/50 dark:border-white/15 text-xs font-mono text-on-surface dark:text-neutral-200 inline-flex items-center gap-1.5 cursor-pointer"
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

          <WatermarkedMediaFrame
            watermarkEnabled={true}
            className="border border-outline-variant/40 dark:border-white/15 bg-neutral-950"
          >
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
                {profile3d
                  ? ` · Readiness: ${profile3d.readiness_status} (${profile3d.readiness_score}%)`
                  : ''}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setZoomLevel((z) => Math.max(2.5, z - 0.5))}
                  aria-label="Zoom in 3D model"
                  className="min-w-[36px] min-h-[32px] border border-white/15 text-white cursor-pointer font-mono"
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={() => setZoomLevel((z) => Math.min(8.0, z + 0.5))}
                  aria-label="Zoom out 3D model"
                  className="min-w-[36px] min-h-[32px] border border-white/15 text-white cursor-pointer font-mono"
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
                  className="min-h-[32px] px-2.5 border border-white/15 text-white inline-flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>
            </div>
          </WatermarkedMediaFrame>

          {profile3d && profile3d.components && profile3d.components.length > 0 && (
            <div className="border border-outline-variant/40 dark:border-white/10 bg-surface-container-lowest dark:bg-[#0b0b0e] p-5">
              <h3 className="font-serif text-lg font-semibold mb-3">
                Verified 3D Sub-Components (`asset_3d_components`)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                {profile3d.components.map((comp) => (
                  <div
                    key={comp.id}
                    className="p-3 border border-outline-variant/30 dark:border-white/10"
                  >
                    <div className="font-medium text-on-surface dark:text-white">
                      {comp.name}
                    </div>
                    <div className="mt-1 font-mono text-on-surface-variant dark:text-neutral-400">
                      {comp.material || 'Alloy'} · Confidence: {comp.confidence}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* 5. VIDEO WALKTHROUGH (#video) */}
        <section
          id="video"
          className="scroll-mt-28 pt-12 sm:pt-16 border-t border-outline-variant/40 dark:border-white/10 mb-16"
        >
          <div className="max-w-2xl mb-8">
            <h2 className="font-serif text-[clamp(24px,3vw,36px)] font-semibold tracking-[-0.02em] text-on-surface dark:text-white">
              Video Walkthrough
            </h2>
            <p className="mt-2 text-sm sm:text-base text-on-surface-variant dark:text-neutral-300 leading-relaxed">
              Authenticated 900s signed three-part reel explaining how {asset.title} operates.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <WatermarkedMediaFrame
              watermarkEnabled={assetVideoVignette.watermarkEnabled}
              watermarkText={signedVideo?.watermark_text}
              signedExpiresAt={signedVideo?.expires_at}
              className="lg:col-span-8"
            >
              <YouTubeVideoPlayer video={assetVideoVignette} initialCaptionsOn={true} />
            </WatermarkedMediaFrame>

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

        {/* HISTORICAL EVENTS & CITATIONS (Master v5 `historical_events` & `historical_references`) */}
        {(historicalEvents.length > 0 || historicalRefs.length > 0) && (
          <section className="pt-12 sm:pt-16 border-t border-outline-variant/40 dark:border-white/10 mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {historicalEvents.length > 0 && (
              <div className="border border-outline-variant/40 dark:border-white/10 bg-surface-container-lowest dark:bg-[#0b0b0e] p-6">
                <h2 className="font-serif text-xl font-semibold text-on-surface dark:text-white mb-4">
                  Verified Historical Timeline
                </h2>
                <ol className="space-y-4 divide-y divide-outline-variant/25 dark:divide-white/10">
                  {historicalEvents.map((ev) => (
                    <li key={ev.id} className="pt-3 first:pt-0">
                      <div className="text-xs font-mono text-[#8c5d12] dark:text-[#d4af37]">
                        {ev.event_date_text || ev.event_date} · {ev.event_type}
                      </div>
                      <h3 className="font-serif text-base font-medium text-on-surface dark:text-white mt-0.5">
                        {ev.title}
                      </h3>
                      {ev.short_description && (
                        <p className="text-sm text-on-surface-variant dark:text-neutral-300 mt-1">
                          {ev.short_description}
                        </p>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {historicalRefs.length > 0 && (
              <div className="border border-outline-variant/40 dark:border-white/10 bg-surface-container-lowest dark:bg-[#0b0b0e] p-6">
                <h2 className="font-serif text-xl font-semibold text-on-surface dark:text-white mb-4">
                  Primary Archival References
                </h2>
                <ul className="space-y-3 divide-y divide-outline-variant/25 dark:divide-white/10 text-sm">
                  {historicalRefs.map((ref) => (
                    <li key={ref.id} className="pt-3 first:pt-0">
                      <div className="font-medium text-on-surface dark:text-white">
                        {ref.title}
                      </div>
                      <div className="text-xs font-mono text-on-surface-variant dark:text-neutral-400 mt-0.5">
                        {[ref.author, ref.publisher, ref.isbn && `ISBN ${ref.isbn}`, ref.doi && `DOI ${ref.doi}`]
                          .filter(Boolean)
                          .join(' · ')}
                      </div>
                      {ref.source_url && (
                        <a
                          href={ref.source_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-[#8c5d12] dark:text-[#d4af37] hover:underline mt-1"
                        >
                          <span>Source Record</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        <div className="mb-12">
            </div>

        {/* 6. MORE INVENTIONS IN THIS CATEGORY */}
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
                      <ArrowRight className="w-4 h-4 shrink-0" />
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
