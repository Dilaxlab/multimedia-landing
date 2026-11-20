'use client';

import React, { useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Boxes,
  FileImage,
  Film,
  Headphones,
  Image as ImageIcon,
  Pause,
  Play,
  Search,
  Volume2,
  X,
} from 'lucide-react';
import { MEDIA_FILTER_TABS } from '@/data/mediaLibrary';
import { AssetMediaRecord, AssetMediaType, VideoVignette } from '@/types/media';
import { LandingSection, LandingSectionItem } from '@/types/landing';
import { ThemeRecord } from '@/types/taxonomy';
import { useAuth } from '@/context/AuthContext';
import { mediaService } from '@/services/mediaService';
import { landingService } from '@/services/landingService';
import { taxonomyService } from '@/services/taxonomyService';
import { useSignedMediaUrl } from '@/services/signedMediaService';
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

const PAGE_BATCH = 12;

const TYPE_LABEL_MAP: Record<AssetMediaType, { label: string; action: string }> = {
  image: { label: 'Image', action: 'View image' },
  plate_2d: { label: '2D Plate', action: 'Inspect plate' },
  '3d_model': { label: '3D Model', action: 'Open 3D' },
  video_30s: { label: '30-Second Video', action: 'Play video' },
  video_edu: { label: 'Educational Video', action: 'Watch film' },
  audio_narration: { label: 'Audio', action: 'Listen' },
  book: { label: 'Archival Book', action: 'Read folio' },
};

export default function MediaLibraryClient() {
  const { isAuthenticated, isLoading: authLoading } = useAuth();

  const [items, setItems] = useState<AssetMediaRecord[]>([]);
  const [themes, setThemes] = useState<ThemeRecord[]>([]);
  const [collageTiles, setCollageTiles] = useState<LandingSectionItem[]>([]);
  const [heroSection, setHeroSection] = useState<LandingSection | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  const [activeTab, setActiveTab] = useState<'all' | AssetMediaType>('all');
  const [selectedThemeSlug, setSelectedThemeSlug] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleLimit, setVisibleLimit] = useState<number>(PAGE_BATCH);

  const [modalItem, setModalItem] = useState<AssetMediaRecord | null>(null);
  const [modalWireframe, setModalWireframe] = useState(false);
  const [isAudioSpeaking, setIsAudioSpeaking] = useState(false);

  // Fetch temporary 900s (15 min) Signed URL ONLY when user opens modal preview
  const {
    data: signedPayload,
    loading: signedLoading,
    error: signedError,
  } = useSignedMediaUrl(modalItem?.id);

  useEffect(() => {
    if (authLoading) return;
    if (!isAuthenticated) {
      setItems([]);
      setThemes([]);
      setCollageTiles([]);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    Promise.all([
      mediaService.getMediaLibraryItems({ show_in_media_library: true }),
      taxonomyService.getThemes().catch(() => [] as ThemeRecord[]),
      landingService.getPortalPage('media_library').catch(() => null),
    ])
      .then(([mediaRows, themeRows, mediaPage]) => {
        if (cancelled) return;
        const sorted = [...mediaRows].sort(
          (a, b) =>
            (a.library_spotlight_rank ?? 9999) - (b.library_spotlight_rank ?? 9999) ||
            a.sort_order - b.sort_order
        );
        setItems(sorted);
        setThemes(themeRows);

        if (mediaPage?.sections?.length) {
          const hero = mediaPage.sections.find(
            (s) => s.section_key === 'media_hero_collage' && s.is_enabled
          );
          if (hero) {
            setHeroSection(hero);
            setCollageTiles(
              (hero.items || [])
                .filter((i) => i.slot_role === 'hero_collage_tile' && i.is_visible)
                .sort((a, b) => a.display_order - b.display_order)
            );
          }
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err);
          setItems([]);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [authLoading, isAuthenticated]);

  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return items.filter((item) => {
      if (activeTab !== 'all' && item.type !== activeTab) return false;
      if (selectedThemeSlug !== 'all' && item.theme_slug !== selectedThemeSlug) {
        return false;
      }
      if (!q) return true;
      return (
        item.title.toLowerCase().includes(q) ||
        (item.asset_name || '').toLowerCase().includes(q) ||
        (item.inventor_name || '').toLowerCase().includes(q) ||
        (item.asset_code || item.asset_id).toLowerCase().includes(q) ||
        (item.theme_title || '').toLowerCase().includes(q)
      );
    });
  }, [items, activeTab, selectedThemeSlug, searchQuery]);

  const tabCounts = useMemo(() => {
    const counts: Record<string, number> = { all: items.length };
    for (const item of items) {
      counts[item.type] = (counts[item.type] || 0) + 1;
    }
    return counts;
  }, [items]);

  useEffect(() => {
    setVisibleLimit(PAGE_BATCH);
  }, [activeTab, selectedThemeSlug, searchQuery]);

  useEffect(() => {
    if (!modalItem && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsAudioSpeaking(false);
    }
  }, [modalItem]);

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  useEffect(() => {
    if (!modalItem) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalItem(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modalItem]);

  const displayedItems = filteredItems.slice(0, visibleLimit);
  const remaining = Math.max(0, filteredItems.length - displayedItems.length);

  const jumpToArchiveWithPreset = (kind: 'all' | AssetMediaType, themeSlug = 'all') => {
    setActiveTab(kind);
    setSelectedThemeSlug(themeSlug);
    setSearchQuery('');
    document.getElementById('archive')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const modalVideo = useMemo<VideoVignette | undefined>(() => {
    if (!modalItem) return undefined;
    const scenes = modalItem.scenes_timeline_json;
    return {
      id: modalItem.id,
      assetId: modalItem.asset_code || modalItem.asset_id,
      title: modalItem.title,
      inventor: modalItem.inventor_name || 'Archive Inventor',
      shortDesc: modalItem.description || '',
      duration: modalItem.duration_label || '0:30',
      totalSeconds:
        modalItem.duration_seconds || (modalItem.type === 'video_edu' ? 105 : 30),
      narrator: modalItem.narrator_name || 'Heritage Archive',
      narratorInstitution:
        modalItem.narrator_institution || modalItem.theme_title || 'Heritage Archive',
      thumbnailUrl: modalItem.thumbnail_path || '/images/bells_telephone_hq.jpg',
      videoUrl: signedPayload?.signed_url || null,
      watermarkEnabled: modalItem.watermark_enabled,
      signedUrlTtlSeconds: modalItem.signed_url_ttl_seconds,
      scenes:
        Array.isArray(scenes) && scenes.length > 0
          ? scenes
          : [
              {
                title: 'Archival Overview',
                timeRange: '0:00 - 0:30',
                description: modalItem.description || modalItem.title,
              },
            ],
    };
  }, [modalItem, signedPayload]);

  const toggleAudioNarration = () => {
    if (!modalItem || typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setIsAudioSpeaking((s) => !s);
      return;
    }
    if (isAudioSpeaking) {
      window.speechSynthesis.cancel();
      setIsAudioSpeaking(false);
    } else {
      window.speechSynthesis.cancel();
      const text =
        modalItem.transcript_text ||
        `${modalItem.title} by ${modalItem.inventor_name || 'Inventor'}. ${modalItem.description || ''}`;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.96;
      utterance.onend = () => setIsAudioSpeaking(false);
      utterance.onerror = () => setIsAudioSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsAudioSpeaking(true);
    }
  };

  if (!authLoading && !isAuthenticated) {
    return (
      <div className="min-h-screen w-full bg-surface dark:bg-[#050505] px-4 sm:px-8 py-10">
        <AuthUnlockGate
          nextPath="/media"
          title="All-Media Library Requires Authentication"
          description="Sign in to browse 7 archival media formats across all themes and open 15-minute (900s) watermarked signed streams."
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-surface dark:bg-[#050505] text-on-surface selection:bg-primary/30">

      {/* =====================================================================
          1. HERO + 5-TILE COLLAGE STAGE (CMS-driven `media_hero_collage`)
         ===================================================================== */}
      <section className="w-full border-b border-outline-variant/40 dark:border-white/10 bg-surface dark:bg-[#09090b] py-10 sm:py-16 lg:py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm font-medium text-[#8c5d12] dark:text-[#d4af37] mb-3">
              {heroSection?.eyebrow || 'The Media Library · 900s Signed Streams'}
            </p>
            <h1 className="font-serif text-[clamp(32px,4.5vw,56px)] font-semibold tracking-[-0.02em] leading-[1.06] text-on-surface dark:text-white [text-wrap:balance]">
              {heroSection?.title_line_1 || 'History. Within reach.'}
            </h1>
            <p className="mt-4 text-base text-on-surface-variant dark:text-neutral-300 leading-relaxed max-w-[44ch]">
              {heroSection?.subtitle ||
                'Images, 2D plates, 3D reconstructions, films, books, and narrated audio delivered securely via Master v5 signed streams.'}
            </p>
            <div className="mt-7">
              <a
                href="#archive"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] w-full sm:w-auto px-6 py-3 bg-on-surface text-surface dark:bg-[#f5f3ee] dark:text-[#111114] text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <span>{heroSection?.primary_cta_label || 'Explore the Archive'}</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right 5-Tile Collage (hydrated from `landing_section_items` or format quick-filters) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {collageTiles.length > 0 ? (
              collageTiles.map((tile, i) => {
                const targetKind = (tile.media?.type || '3d_model') as AssetMediaType;
                return (
                  <button
                    key={tile.id}
                    type="button"
                    onClick={() => jumpToArchiveWithPreset(targetKind)}
                    className={`group relative min-h-[150px] border border-outline-variant/40 dark:border-white/15 bg-neutral-900 overflow-hidden text-left cursor-pointer ${
                      i === 0 ? 'col-span-2 aspect-[16/9] sm:aspect-auto sm:min-h-[180px]' : ''
                    }`}
                  >
                    <img
                      src={
                        tile.override_image_url ||
                        tile.media?.thumbnail_path ||
                        '/images/bells_telephone_clean.png'
                      }
                      alt={tile.override_title || tile.media?.title || 'Media tile'}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                    />
                    <div className="absolute inset-x-3.5 bottom-3 flex items-center justify-between gap-2 text-white">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase">
                        <Boxes className="w-3.5 h-3.5 text-[#d4af37]" />
                        {tile.override_badge || tile.override_title || 'Media'}
                      </span>
                    </div>
                  </button>
                );
              })
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => jumpToArchiveWithPreset('3d_model')}
                  className="group col-span-2 relative min-h-[160px] border border-outline-variant/40 dark:border-white/15 bg-neutral-900 p-4 flex items-end text-left cursor-pointer"
                >
                  <span className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-white">
                    <Boxes className="w-4 h-4 text-[#d4af37]" />
                    3D Models ({tabCounts['3d_model'] || 0})
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => jumpToArchiveWithPreset('plate_2d')}
                  className="group relative min-h-[160px] border border-outline-variant/40 dark:border-white/15 bg-neutral-900 p-4 flex items-end text-left cursor-pointer"
                >
                  <span className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-white">
                    <FileImage className="w-4 h-4 text-[#d4af37]" />
                    2D Plates ({tabCounts.plate_2d || 0})
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => jumpToArchiveWithPreset('video_30s')}
                  className="group relative min-h-[145px] border border-outline-variant/40 dark:border-white/15 bg-neutral-900 p-4 flex items-end text-left cursor-pointer"
                >
                  <span className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-white">
                    <Film className="w-4 h-4 text-[#d4af37]" />
                    Video · 0:30 ({tabCounts.video_30s || 0})
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => jumpToArchiveWithPreset('video_edu')}
                  className="group relative min-h-[145px] border border-outline-variant/40 dark:border-white/15 bg-neutral-900 p-4 flex items-end text-left cursor-pointer"
                >
                  <span className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-white">
                    <Play className="w-4 h-4 text-[#d4af37]" />
                    Educational ({tabCounts.video_edu || 0})
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => jumpToArchiveWithPreset('audio_narration')}
                  className="group relative min-h-[145px] border border-outline-variant/40 dark:border-white/15 bg-[#121622] text-white p-4 flex flex-col justify-between text-left cursor-pointer"
                >
                  <div className="flex items-end justify-center gap-1.5 h-14 my-auto" aria-hidden="true">
                    {[38, 68, 95, 58, 86, 48, 90].map((h, i) => (
                      <span
                        key={i}
                        className="w-1.5 bg-[#d4af37]"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase">
                    <Headphones className="w-3.5 h-3.5 text-[#d4af37]" />
                    Audio ({tabCounts.audio_narration || 0})
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. INTERACTIVE MEDIA ARCHIVE (#archive)
         ===================================================================== */}
      <section
        id="archive"
        className="scroll-mt-24 w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {error ? (
            <AuthUnlockGate nextPath="/media" error={error} />
          ) : (
            <>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-outline-variant/40 dark:border-white/10 mb-6">
                <div>
                  <h2 className="font-serif text-[clamp(24px,3vw,36px)] font-semibold tracking-[-0.02em] text-on-surface dark:text-white">
                    Explore the Archive
                  </h2>
                  <p className="mt-1.5 text-sm sm:text-base text-on-surface-variant dark:text-neutral-300">
                    A curated selection across the collection · {filteredItems.length} of{' '}
                    {items.length} items shown
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full md:w-auto">
                  <div className="relative flex-1 sm:w-64">
                    <Search className="w-4 h-4 text-on-surface-variant dark:text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search media, inventor, code..."
                      aria-label="Search media library"
                      className="w-full min-h-[42px] pl-9 pr-9 py-2 bg-surface-container-lowest dark:bg-[#111114] border border-outline-variant/50 dark:border-white/15 focus:border-[#8c5d12] dark:focus:border-[#d4af37] text-sm text-on-surface dark:text-white focus:outline-none"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery('')}
                        aria-label="Clear search"
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 inline-flex items-center justify-center text-on-surface-variant hover:text-on-surface dark:text-neutral-400 dark:hover:text-white cursor-pointer"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  <select
                    value={selectedThemeSlug}
                    onChange={(e) => setSelectedThemeSlug(e.target.value)}
                    aria-label="Filter by theme"
                    className="min-h-[42px] px-3 py-2 bg-surface-container-lowest dark:bg-[#111114] border border-outline-variant/50 dark:border-white/15 focus:border-[#8c5d12] dark:focus:border-[#d4af37] text-sm text-on-surface dark:text-white focus:outline-none cursor-pointer"
                  >
                    <option value="all">All Themes</option>
                    {themes.map((theme) => (
                      <option key={theme.slug} value={theme.slug}>
                        {String(theme.theme_slot).padStart(2, '0')}. {theme.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Format Filter Tabs */}
              <div
                role="tablist"
                aria-label="Filter media by format"
                className="flex flex-wrap items-center gap-2 mb-8"
              >
                {MEDIA_FILTER_TABS.map((tab) => {
                  const selected = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActiveTab(tab.id)}
                      className={`min-h-[40px] px-3.5 py-2 border text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                        selected
                          ? 'bg-on-surface text-surface border-on-surface dark:bg-[#f5f3ee] dark:text-[#111114] dark:border-[#f5f3ee]'
                          : 'border-outline-variant/45 dark:border-white/15 text-on-surface-variant dark:text-neutral-300 hover:border-on-surface/50 dark:hover:border-white/35'
                      }`}
                    >
                      {tab.label} ({tabCounts[tab.id] || 0})
                    </button>
                  );
                })}
              </div>

              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-64 border border-outline-variant/30 dark:border-white/10 bg-surface-container-low/40 dark:bg-[#0e0e12] animate-pulse"
                    />
                  ))}
                </div>
              ) : displayedItems.length === 0 ? (
                <div className="py-16 px-4 text-center border border-dashed border-outline-variant/45 dark:border-white/15 bg-surface-container-low/40 dark:bg-[#0b0b0e]">
                  <h3 className="font-serif text-xl font-medium text-on-surface dark:text-white">
                    No matching media found
                  </h3>
                  <p className="mt-1.5 text-sm text-on-surface-variant dark:text-neutral-400">
                    Try clearing your search or choosing &ldquo;All Media&rdquo;.
                  </p>
                  <button
                    type="button"
                    onClick={() => jumpToArchiveWithPreset('all', 'all')}
                    className="mt-4 min-h-[44px] px-5 py-2 border border-outline-variant/50 dark:border-white/20 text-sm font-medium text-on-surface dark:text-white hover:border-[#8c5d12] dark:hover:border-[#d4af37] cursor-pointer"
                  >
                    Reset filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-5">
                  {displayedItems.map((item, idx) => {
                    const gridSpanClass =
                      idx === 0
                        ? 'sm:col-span-2 lg:col-span-3 lg:row-span-2'
                        : idx === 1 || idx === 2
                          ? 'lg:col-span-3'
                          : 'lg:col-span-2';
                    const meta = TYPE_LABEL_MAP[item.type] || {
                      label: item.kind_label || item.type,
                      action: item.action_label || 'Open media',
                    };
                    const assetRef = item.asset_code || item.asset_id;

                    return (
                      <article
                        key={item.id}
                        className={`flex flex-col border border-outline-variant/40 dark:border-white/10 bg-surface-container-lowest dark:bg-[#0b0b0e] overflow-hidden ${gridSpanClass}`}
                      >
                        <button
                          type="button"
                          onClick={() => setModalItem(item)}
                          aria-label={`${meta.action}: ${item.title}`}
                          className={`group relative w-full overflow-hidden bg-neutral-900 border-b border-outline-variant/30 dark:border-white/10 text-left cursor-pointer ${
                            idx === 0
                              ? 'aspect-[16/10] lg:flex-1 lg:min-h-[260px]'
                              : 'aspect-[16/10]'
                          }`}
                        >
                          <img
                            src={item.thumbnail_path || '/images/bells_telephone_hq.jpg'}
                            alt={item.alt_text || item.title}
                            loading={idx < 3 ? 'eager' : 'lazy'}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                          />
                          {item.watermark_enabled && (
                            <span className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-black/70 border border-white/15 text-[10px] font-mono text-[#d4af37]">
                              {item.signed_url_ttl_seconds || 900}s Signed
                            </span>
                          )}
                        </button>

                        <div className="p-4 sm:p-5 flex flex-col justify-between gap-4">
                          <div>
                            <div className="flex items-center justify-between gap-2 text-xs font-mono text-[#8c5d12] dark:text-[#d4af37] mb-1.5">
                              <span>{item.kind_label || meta.label}</span>
                              {item.duration_label && (
                                <span className="text-on-surface-variant dark:text-neutral-400">
                                  {item.duration_label}
                                </span>
                              )}
                            </div>

                            <h3 className="font-serif text-lg sm:text-xl font-semibold text-on-surface dark:text-white leading-snug">
                              {item.title}
                            </h3>

                            <p className="mt-1 text-xs font-mono text-on-surface-variant dark:text-neutral-400">
                              {item.asset_name || 'Specimen'} · {assetRef}
                            </p>

                            {idx === 0 && item.description && (
                              <p className="mt-2.5 text-sm text-on-surface-variant dark:text-neutral-300 leading-relaxed max-w-[46ch]">
                                {item.description}
                              </p>
                            )}
                          </div>

                          <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-outline-variant/30 dark:border-white/10">
                            <button
                              type="button"
                              onClick={() => setModalItem(item)}
                              className="min-h-[38px] px-3.5 py-1.5 bg-on-surface text-surface dark:bg-[#f5f3ee] dark:text-[#111114] text-xs font-medium hover:opacity-90 transition-opacity cursor-pointer"
                            >
                              {item.action_label || meta.action}
                            </button>
                            <Link
                              href={`/inventions/${assetRef}#${item.asset_anchor || '2d'}`}
                              className="min-h-[38px] px-3.5 py-1.5 border border-outline-variant/50 dark:border-white/20 text-xs font-medium text-on-surface dark:text-neutral-200 hover:border-[#8c5d12] dark:hover:border-[#d4af37] inline-flex items-center transition-colors"
                            >
                              View Asset
                            </Link>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}

              {remaining > 0 && (
                <div className="mt-10 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setVisibleLimit((prev) => prev + PAGE_BATCH)}
                    className="min-h-[44px] px-6 py-2.5 border border-outline-variant/50 dark:border-white/20 hover:border-[#8c5d12] dark:hover:border-[#d4af37] text-sm font-medium text-on-surface dark:text-white transition-colors cursor-pointer"
                  >
                    Load more ({remaining} remaining)
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* =====================================================================
          3. ASK THE ARCHIVE QUICK ROUTES
         ===================================================================== */}
      <section className="w-full border-y border-outline-variant/40 dark:border-white/10 bg-surface-container-low/60 dark:bg-[#0b0b0e] py-12 sm:py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-[clamp(22px,3vw,34px)] font-semibold text-on-surface dark:text-white">
            Ask the Archive
          </h2>
          <p className="mt-1.5 text-sm sm:text-base text-on-surface-variant dark:text-neutral-300">
            Jump straight to a filtered view across 7 verified formats:
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => jumpToArchiveWithPreset('all', 'home-family-everyday-life')}
              className="min-h-[44px] px-4 py-2 border border-outline-variant/50 dark:border-white/20 bg-surface dark:bg-[#111114] hover:border-[#8c5d12] dark:hover:border-[#d4af37] text-sm font-medium text-on-surface dark:text-white transition-colors cursor-pointer"
            >
              Show me household inventions
            </button>
            <button
              type="button"
              onClick={() => jumpToArchiveWithPreset('video_edu', 'transportation-mobility')}
              className="min-h-[44px] px-4 py-2 border border-outline-variant/50 dark:border-white/20 bg-surface dark:bg-[#111114] hover:border-[#8c5d12] dark:hover:border-[#d4af37] text-sm font-medium text-on-surface dark:text-white transition-colors cursor-pointer"
            >
              Find videos about transport
            </button>
            <button
              type="button"
              onClick={() => jumpToArchiveWithPreset('3d_model', 'all')}
              className="min-h-[44px] px-4 py-2 border border-outline-variant/50 dark:border-white/20 bg-surface dark:bg-[#111114] hover:border-[#8c5d12] dark:hover:border-[#d4af37] text-sm font-medium text-on-surface dark:text-white transition-colors cursor-pointer"
            >
              Open all 3D models
            </button>
            <button
              type="button"
              onClick={() => jumpToArchiveWithPreset('audio_narration', 'all')}
              className="min-h-[44px] px-4 py-2 border border-outline-variant/50 dark:border-white/20 bg-surface dark:bg-[#111114] hover:border-[#8c5d12] dark:hover:border-[#d4af37] text-sm font-medium text-on-surface dark:text-white transition-colors cursor-pointer"
            >
              Listen to narrated stories
            </button>
            <button
              type="button"
              onClick={() => jumpToArchiveWithPreset('book', 'all')}
              className="min-h-[44px] px-4 py-2 border border-outline-variant/50 dark:border-white/20 bg-surface dark:bg-[#111114] hover:border-[#8c5d12] dark:hover:border-[#d4af37] text-sm font-medium text-on-surface dark:text-white transition-colors cursor-pointer"
            >
              Read archival books
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. CLOSING CALLOUT
         ===================================================================== */}
      <section className="w-full py-12 sm:py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <h2 className="font-serif text-[clamp(24px,3vw,36px)] font-semibold text-on-surface dark:text-white">
            Many objects. Endless discoveries.
          </h2>
          <Link
            href="/#themes"
            className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 bg-on-surface text-surface dark:bg-[#f5f3ee] dark:text-[#111114] text-sm font-medium hover:opacity-90 transition-opacity shrink-0"
          >
            <span>Explore themes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* =====================================================================
          INTERACTIVE SIGNED MEDIA MODAL (900s Temporary Stream + Watermark)
         ===================================================================== */}
      {modalItem && (
        <div
          className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label={modalItem.title}
          onClick={() => setModalItem(null)}
        >
          <div
            className="w-full max-w-4xl bg-surface dark:bg-[#111114] border border-outline-variant/50 dark:border-white/15 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-5 py-4 border-b border-outline-variant/35 dark:border-white/10 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <div className="text-xs font-mono text-[#8c5d12] dark:text-[#d4af37]">
                  {TYPE_LABEL_MAP[modalItem.type]?.label || modalItem.type} ·{' '}
                  {modalItem.asset_name || 'Artifact'} ({modalItem.asset_code || modalItem.asset_id})
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-on-surface dark:text-white truncate">
                  {modalItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setModalItem(null)}
                aria-label="Close viewer"
                className="w-10 h-10 inline-flex items-center justify-center text-on-surface-variant hover:text-on-surface dark:text-neutral-400 dark:hover:text-white cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 overflow-y-auto space-y-5">
              {signedLoading && (
                <div className="py-12 text-center font-mono text-xs text-on-surface-variant dark:text-neutral-400">
                  Requesting temporary 900s signed stream URL...
                </div>
              )}

              {signedError && (
                <AuthUnlockGate compact nextPath="/media" error={signedError} />
              )}

              {!signedLoading && !signedError && (
                <WatermarkedMediaFrame
                  watermarkEnabled={
                    signedPayload?.watermark_enabled ?? modalItem.watermark_enabled
                  }
                  watermarkText={signedPayload?.watermark_text}
                  signedExpiresAt={signedPayload?.expires_at}
                >
                  {modalItem.type === '3d_model' && (
                    <div className="border border-outline-variant/40 dark:border-white/15 bg-neutral-950">
                      <div className="h-[320px] sm:h-[420px] w-full">
                        <ModelViewer3D
                          modelType={
                            (modalItem.viewer_preset_json?.modelType as string) ||
                            'antigravity'
                          }
                          isWireframe={modalWireframe}
                          isAutoRotating={true}
                        />
                      </div>
                      <div className="px-4 py-2.5 border-t border-white/10 bg-[#111114] flex items-center justify-between text-xs text-neutral-300">
                        <span>
                          Drag to rotate 360°{' '}
                          {modalItem.poly_count ? `· ${modalItem.poly_count}` : ''}
                        </span>
                        <button
                          type="button"
                          onClick={() => setModalWireframe((w) => !w)}
                          className="px-3 py-1 border border-white/20 text-white hover:border-[#d4af37] cursor-pointer"
                        >
                          Wireframe: {modalWireframe ? 'On' : 'Off'}
                        </button>
                      </div>
                    </div>
                  )}

                  {(modalItem.type === 'image' || modalItem.type === 'plate_2d') && (
                    <div className="border border-outline-variant/40 dark:border-white/15 bg-neutral-950 overflow-hidden">
                      <img
                        src={
                          signedPayload?.signed_url ||
                          modalItem.thumbnail_path ||
                          '/images/bells_telephone_hq.jpg'
                        }
                        alt={modalItem.alt_text || modalItem.title}
                        className="w-full max-h-[55vh] object-contain mx-auto"
                      />
                    </div>
                  )}

                  {(modalItem.type === 'video_30s' || modalItem.type === 'video_edu') &&
                    modalVideo && (
                      <YouTubeVideoPlayer video={modalVideo} initialCaptionsOn={true} />
                    )}

                  {modalItem.type === 'audio_narration' && (
                    <div className="border border-outline-variant/40 dark:border-white/15 bg-[#121622] text-white p-6 space-y-5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <Volume2 className="w-5 h-5 text-[#d4af37] shrink-0" />
                          <div>
                            <div className="text-sm font-medium">{modalItem.title}</div>
                            <div className="text-xs text-neutral-400">
                              Narrated by {modalItem.narrator_name || 'Archive Scholar'} ·{' '}
                              {modalItem.duration_label || '1:20'}
                            </div>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={toggleAudioNarration}
                          className="min-h-[42px] px-4 py-2 bg-[#f5f3ee] text-[#111114] text-xs font-medium inline-flex items-center justify-center gap-2 hover:opacity-90 cursor-pointer shrink-0"
                        >
                          {isAudioSpeaking ? (
                            <>
                              <Pause className="w-4 h-4" />
                              <span>Pause audio</span>
                            </>
                          ) : (
                            <>
                              <Play className="w-4 h-4 fill-current" />
                              <span>Play audio</span>
                            </>
                          )}
                        </button>
                      </div>

                      {signedPayload?.signed_url && (
                        <audio
                          controls
                          src={signedPayload.signed_url}
                          className="w-full"
                        />
                      )}

                      <p className="text-sm text-neutral-300 leading-relaxed border-t border-white/10 pt-4">
                        {modalItem.transcript_text || modalItem.description}
                      </p>
                    </div>
                  )}

                  {modalItem.type === 'book' && (
                    <div className="border border-outline-variant/40 dark:border-white/15 bg-surface-container-low dark:bg-[#17161a] p-6 space-y-4">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#8c5d12] dark:text-[#d4af37]">
                        <BookOpen className="w-4 h-4" />
                        <span>
                          {modalItem.page_count || modalItem.book_pages_json?.length || 3} Chapters
                          · Age Tier: {modalItem.book_age_group || 'all'}
                        </span>
                      </div>
                      {(modalItem.book_pages_json || []).map((page, idx) => (
                        <div
                          key={idx}
                          className="p-4 border border-outline-variant/30 dark:border-white/10 bg-surface dark:bg-[#111114]"
                        >
                          <div className="font-mono text-[11px] text-[#8c5d12] dark:text-[#d4af37]">
                            Chapter {page.num} · {page.label}
                          </div>
                          <h4 className="font-serif text-base font-semibold mt-1">
                            {page.title}
                          </h4>
                          <p className="text-sm text-on-surface-variant dark:text-neutral-300 mt-1.5 leading-relaxed">
                            {page.body}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </WatermarkedMediaFrame>
              )}

              {modalItem.description && (
                <p className="text-sm text-on-surface-variant dark:text-neutral-300 leading-relaxed">
                  {modalItem.description}
                  {modalItem.theme_title ? ` — ${modalItem.theme_title}` : ''}
                </p>
              )}
            </div>

            <div className="px-5 py-3.5 border-t border-outline-variant/35 dark:border-white/10 bg-surface-container-low/60 dark:bg-[#0b0b0e] flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-mono text-on-surface-variant dark:text-neutral-400">
                {modalItem.inventor_name || ''} {modalItem.year ? `· ${modalItem.year}` : ''}
              </span>
              <Link
                href={`/inventions/${modalItem.asset_code || modalItem.asset_id}#${modalItem.asset_anchor || '2d'}`}
                onClick={() => setModalItem(null)}
                className="min-h-[40px] px-4 py-2 bg-on-surface text-surface dark:bg-[#f5f3ee] dark:text-[#111114] text-xs font-medium inline-flex items-center gap-1.5 hover:opacity-90"
              >
                <span>Open full invention page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
