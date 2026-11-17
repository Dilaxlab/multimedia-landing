'use client';

import React, { useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowRight,
  Boxes,
  Film,
  Headphones,
  Image as ImageIcon,
  Pause,
  Play,
  Search,
  Volume2,
  X,
} from 'lucide-react';
import {
  MEDIA_FILTER_TABS,
  MEDIA_LIBRARY_ITEMS,
  MediaKind,
  MediaLibraryItem,
} from '@/data/mediaLibrary';
import { MOCK_HISTORICAL_ASSETS, MOCK_VIDEO_VIGNETTES } from '@/lib/constants';
import { THEME_FAMILIES } from '@/data/taxonomy';
import { VideoVignette } from '@/types/media';
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

const PAGE_BATCH = 12;

export default function MediaLibraryClient() {
  const [activeTab, setActiveTab] = useState<'all' | MediaKind>('all');
  const [selectedThemeSlug, setSelectedThemeSlug] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleLimit, setVisibleLimit] = useState<number>(PAGE_BATCH);
  const [modalItem, setModalItem] = useState<MediaLibraryItem | null>(null);
  const [modalWireframe, setModalWireframe] = useState(false);
  const [isAudioSpeaking, setIsAudioSpeaking] = useState(false);

  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return MEDIA_LIBRARY_ITEMS.filter((item) => {
      if (activeTab !== 'all' && item.kind !== activeTab) return false;
      if (selectedThemeSlug !== 'all' && item.themeSlug !== selectedThemeSlug) return false;
      if (!q) return true;
      return (
        item.title.toLowerCase().includes(q) ||
        item.assetName.toLowerCase().includes(q) ||
        item.inventor.toLowerCase().includes(q) ||
        item.assetId.toLowerCase().includes(q) ||
        item.themeTitle.toLowerCase().includes(q)
      );
    });
  }, [activeTab, selectedThemeSlug, searchQuery]);

  const tabCounts = useMemo(() => {
    const counts: Record<string, number> = { all: MEDIA_LIBRARY_ITEMS.length };
    for (const item of MEDIA_LIBRARY_ITEMS) {
      counts[item.kind] = (counts[item.kind] || 0) + 1;
    }
    return counts;
  }, []);

  useEffect(() => {
    setVisibleLimit(PAGE_BATCH);
  }, [activeTab, selectedThemeSlug, searchQuery]);

  // Stop speech synthesis on modal close/unmount
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

  const jumpToArchiveWithPreset = (kind: 'all' | MediaKind, themeSlug = 'all') => {
    setActiveTab(kind);
    setSelectedThemeSlug(themeSlug);
    setSearchQuery('');
    document.getElementById('archive')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const modalAsset = useMemo(
    () =>
      modalItem
        ? MOCK_HISTORICAL_ASSETS.find((a) => a.id === modalItem.assetId)
        : undefined,
    [modalItem]
  );

  const modalVideo = useMemo<VideoVignette | undefined>(() => {
    if (!modalItem) return undefined;
    const found = MOCK_VIDEO_VIGNETTES.find((v) => v.assetId === modalItem.assetId);
    if (found) {
      return {
        ...found,
        title: modalItem.title,
        duration: modalItem.duration || found.duration,
        thumbnailUrl: modalItem.image,
      };
    }
    return {
      id: `modal-vid-${modalItem.id}`,
      assetId: modalItem.assetId,
      title: modalItem.title,
      inventor: modalItem.inventor,
      shortDesc: modalItem.summary,
      duration: modalItem.duration || '0:30',
      totalSeconds: modalItem.kind === 'edu' ? 105 : 30,
      narrator: 'Heritage Archive',
      narratorInstitution: modalItem.themeTitle,
      thumbnailUrl: modalItem.image,
      scenes: [
        {
          title: 'Early Challenge',
          timeRange: '0:00 - 0:10',
          description: modalAsset?.story || modalItem.summary,
        },
        {
          title: 'Patented Mechanism',
          timeRange: '0:10 - 0:20',
          description: modalAsset?.mechanics || modalItem.summary,
        },
        {
          title: 'Lasting Impact',
          timeRange: '0:20 - 0:30',
          description: modalAsset?.legacy || modalItem.summary,
        },
      ],
    };
  }, [modalItem, modalAsset]);

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
      const text = `${modalItem.title} by ${modalItem.inventor}, ${modalItem.year}. ${modalAsset?.story || modalItem.summary} ${modalAsset?.mechanics || ''}`;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.96;
      utterance.onend = () => setIsAudioSpeaking(false);
      utterance.onerror = () => setIsAudioSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsAudioSpeaking(true);
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-surface dark:bg-[#050505] text-on-surface selection:bg-primary/30">
      {/* =====================================================================
          1. HERO + 5-FORMAT COLLAGE STAGE (matching media.html structure)
         ===================================================================== */}
      <section className="w-full border-b border-outline-variant/40 dark:border-white/10 bg-surface dark:bg-[#09090b] py-10 sm:py-16 lg:py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Headline & Intro */}
          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm font-medium text-[#8c5d12] dark:text-[#d4af37] mb-3">
              The Media Library
            </p>
            <h1 className="font-serif text-[clamp(32px,4.5vw,56px)] font-semibold tracking-[-0.02em] leading-[1.06] text-on-surface dark:text-white [text-wrap:balance]">
              History. Within reach.
            </h1>
            <p className="mt-4 text-base text-on-surface-variant dark:text-neutral-300 leading-relaxed max-w-[44ch]">
              Images. 3D models. Films. Audio. Discover the collection from every angle.
            </p>
            <div className="mt-7">
              <a
                href="#archive"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] w-full sm:w-auto px-6 py-3 bg-on-surface text-surface dark:bg-[#f5f3ee] dark:text-[#111114] text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <span>Explore the Archive</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right 5-Tile Collage (Tile 1 spans 2 columns on sm+, clickable format shortcuts) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {/* Tile 1: 3D MODEL (spans 2 columns) */}
            <button
              type="button"
              onClick={() => jumpToArchiveWithPreset('model')}
              className="group col-span-2 relative aspect-[16/9] sm:aspect-auto sm:min-h-[180px] border border-outline-variant/40 dark:border-white/15 bg-neutral-900 overflow-hidden text-left cursor-pointer"
            >
              <img
                src="/images/bells_telephone_clean.png"
                alt="Interactive 3D telephone model"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
              />
              <div className="absolute inset-x-3.5 bottom-3 flex items-center justify-between gap-2 text-white">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase">
                  <Boxes className="w-3.5 h-3.5 text-[#d4af37]" />
                  3D Model
                </span>
                <span className="text-xs text-white/80">7 models</span>
              </div>
            </button>

            {/* Tile 2: IMAGE */}
            <button
              type="button"
              onClick={() => jumpToArchiveWithPreset('image')}
              className="group relative min-h-[150px] sm:min-h-[180px] border border-outline-variant/40 dark:border-white/15 bg-neutral-900 overflow-hidden text-left cursor-pointer"
            >
              <img
                src="/images/raw_card_4_astrolabe.jpg"
                alt="Archival specimen plate"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
              />
              <div className="absolute inset-x-3 bottom-3 text-white">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase">
                  <ImageIcon className="w-3.5 h-3.5 text-[#d4af37]" />
                  Image
                </span>
              </div>
            </button>

            {/* Tile 3: VIDEO · 0:30 */}
            <button
              type="button"
              onClick={() => jumpToArchiveWithPreset('v30')}
              className="group relative min-h-[145px] border border-outline-variant/40 dark:border-white/15 bg-neutral-900 overflow-hidden text-left cursor-pointer"
            >
              <img
                src="/images/themes/transportation-mobility.jpg"
                alt="Short 30-second video reels"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
              />
              <div className="absolute inset-x-3 bottom-3 text-white">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase">
                  <Film className="w-3.5 h-3.5 text-[#d4af37]" />
                  Video · 0:30
                </span>
              </div>
            </button>

            {/* Tile 4: EDUCATIONAL · 1:45 */}
            <button
              type="button"
              onClick={() => jumpToArchiveWithPreset('edu')}
              className="group relative min-h-[145px] border border-outline-variant/40 dark:border-white/15 bg-neutral-900 overflow-hidden text-left cursor-pointer"
            >
              <img
                src="/images/raw_card_2_washing.jpg"
                alt="Educational how-it-works films"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
              />
              <div className="absolute inset-x-3 bottom-3 text-white">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase">
                  <Play className="w-3.5 h-3.5 text-[#d4af37]" />
                  Educational · 1:45
                </span>
              </div>
            </button>

            {/* Tile 5: AUDIO */}
            <button
              type="button"
              onClick={() => jumpToArchiveWithPreset('audio')}
              className="group col-span-2 sm:col-span-1 relative min-h-[145px] border border-outline-variant/40 dark:border-white/15 bg-[#121622] text-white p-4 flex flex-col justify-between overflow-hidden text-left cursor-pointer"
            >
              <div className="flex items-end justify-center gap-1.5 h-16 my-auto" aria-hidden="true">
                {[38, 68, 95, 58, 86, 48, 90, 62, 40].map((h, i) => (
                  <span
                    key={i}
                    className="w-1.5 bg-[#d4af37] transition-all group-hover:bg-[#f0cc5c]"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase">
                <Headphones className="w-3.5 h-3.5 text-[#d4af37]" />
                Audio · 1:20
              </span>
            </button>
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
          {/* Header + Inline Count */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-outline-variant/40 dark:border-white/10 mb-6">
            <div>
              <h2 className="font-serif text-[clamp(24px,3vw,36px)] font-semibold tracking-[-0.02em] text-on-surface dark:text-white">
                Explore the Archive
              </h2>
              <p className="mt-1.5 text-sm sm:text-base text-on-surface-variant dark:text-neutral-300">
                A curated selection across the collection · {filteredItems.length} of{' '}
                {MEDIA_LIBRARY_ITEMS.length} items shown
              </p>
            </div>

            {/* Search + Theme Select Controls */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full md:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 text-on-surface-variant dark:text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search media, inventor, ID..."
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
                {THEME_FAMILIES.map((theme) => (
                  <option key={theme.slug} value={theme.slug}>
                    {theme.number}. {theme.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 6 Format Filter Tabs */}
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

          {/* Empty State vs. Asymmetric 6-Col Media Bento Grid */}
          {displayedItems.length === 0 ? (
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
                // Match media.html asymmetric spotlight on large desktop screens
                const gridSpanClass =
                  idx === 0
                    ? 'sm:col-span-2 lg:col-span-3 lg:row-span-2'
                    : idx === 1 || idx === 2
                      ? 'lg:col-span-3'
                      : 'lg:col-span-2';

                return (
                  <article
                    key={item.id}
                    className={`flex flex-col border border-outline-variant/40 dark:border-white/10 bg-surface-container-lowest dark:bg-[#0b0b0e] overflow-hidden ${gridSpanClass}`}
                  >
                    {/* Visual Media Surface */}
                    <button
                      type="button"
                      onClick={() => setModalItem(item)}
                      aria-label={`${item.actionLabel}: ${item.title}`}
                      className={`group relative w-full overflow-hidden bg-neutral-900 border-b border-outline-variant/30 dark:border-white/10 text-left cursor-pointer ${
                        idx === 0
                          ? 'aspect-[16/10] lg:flex-1 lg:min-h-[260px]'
                          : 'aspect-[16/10]'
                      }`}
                    >
                      {item.kind === 'audio' ? (
                        <div className="w-full h-full bg-[#121622] flex flex-col items-center justify-center p-6 gap-3">
                          <div
                            className="flex items-end justify-center gap-1.5 h-14"
                            aria-hidden="true"
                          >
                            {[42, 74, 100, 62, 88, 52, 95, 65, 42, 78, 50].map((h, i) => (
                              <span
                                key={i}
                                className="w-1.5 bg-[#d4af37] opacity-85 group-hover:opacity-100 transition-opacity"
                                style={{ height: `${h}%` }}
                              />
                            ))}
                          </div>
                          <span className="text-xs font-mono text-white/80">
                            Audio Narration · {item.duration}
                          </span>
                        </div>
                      ) : (
                        <>
                          <img
                            src={item.image}
                            alt={item.title}
                            loading={idx < 3 ? 'eager' : 'lazy'}
                            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                          />
                          {(item.kind === 'v30' || item.kind === 'edu') && (
                            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 flex items-center justify-center transition-colors">
                              <span className="w-11 h-11 rounded-full bg-on-surface text-surface dark:bg-[#f5f3ee] dark:text-[#111114] flex items-center justify-center shadow-lg">
                                <Play className="w-4 h-4 fill-current ml-0.5" />
                              </span>
                            </div>
                          )}
                          {item.kind === 'model' && (
                            <span className="absolute top-3 left-3 px-2.5 py-1 bg-black/75 border border-white/20 text-xs font-mono text-white inline-flex items-center gap-1.5">
                              <Boxes className="w-3.5 h-3.5 text-[#d4af37]" />
                              3D preview
                            </span>
                          )}
                        </>
                      )}
                    </button>

                    {/* Metadata & Actions */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between gap-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="px-2.5 py-0.5 border border-outline-variant/45 dark:border-white/15 text-xs font-medium text-[#8c5d12] dark:text-[#d4af37]">
                            {item.kindLabel}
                          </span>
                          {item.duration && (
                            <span className="px-2 py-0.5 border border-outline-variant/35 dark:border-white/10 text-xs font-mono text-on-surface-variant dark:text-neutral-400">
                              {item.duration}
                            </span>
                          )}
                        </div>

                        <h3 className="font-serif text-lg sm:text-xl font-semibold text-on-surface dark:text-white leading-snug">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-xs font-mono text-on-surface-variant dark:text-neutral-400">
                          {item.assetName} · {item.assetId}
                        </p>

                        {idx === 0 && (
                          <p className="mt-2.5 text-sm text-on-surface-variant dark:text-neutral-300 leading-relaxed max-w-[46ch]">
                            {item.summary}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-outline-variant/30 dark:border-white/10">
                        <button
                          type="button"
                          onClick={() => setModalItem(item)}
                          className="min-h-[38px] px-3.5 py-1.5 bg-on-surface text-surface dark:bg-[#f5f3ee] dark:text-[#111114] text-xs font-medium hover:opacity-90 transition-opacity cursor-pointer"
                        >
                          {item.actionLabel}
                        </button>
                        <Link
                          href={`/inventions/${item.assetId}#${item.assetAnchor}`}
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

          {/* Load More */}
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
        </div>
      </section>

      {/* =====================================================================
          3. ASK THE ARCHIVE — QUICK ROUTES (matching media.html band)
         ===================================================================== */}
      <section className="w-full border-y border-outline-variant/40 dark:border-white/10 bg-surface-container-low/60 dark:bg-[#0b0b0e] py-12 sm:py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-[clamp(22px,3vw,34px)] font-semibold text-on-surface dark:text-white">
            Ask the Archive
          </h2>
          <p className="mt-1.5 text-sm sm:text-base text-on-surface-variant dark:text-neutral-300">
            Jump straight to a filtered view with one click:
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
              onClick={() => jumpToArchiveWithPreset('edu', 'transportation-mobility')}
              className="min-h-[44px] px-4 py-2 border border-outline-variant/50 dark:border-white/20 bg-surface dark:bg-[#111114] hover:border-[#8c5d12] dark:hover:border-[#d4af37] text-sm font-medium text-on-surface dark:text-white transition-colors cursor-pointer"
            >
              Find videos about transport
            </button>
            <button
              type="button"
              onClick={() => jumpToArchiveWithPreset('model', 'all')}
              className="min-h-[44px] px-4 py-2 border border-outline-variant/50 dark:border-white/20 bg-surface dark:bg-[#111114] hover:border-[#8c5d12] dark:hover:border-[#d4af37] text-sm font-medium text-on-surface dark:text-white transition-colors cursor-pointer"
            >
              Open all 3D models
            </button>
            <button
              type="button"
              onClick={() => jumpToArchiveWithPreset('audio', 'all')}
              className="min-h-[44px] px-4 py-2 border border-outline-variant/50 dark:border-white/20 bg-surface dark:bg-[#111114] hover:border-[#8c5d12] dark:hover:border-[#d4af37] text-sm font-medium text-on-surface dark:text-white transition-colors cursor-pointer"
            >
              Listen to narrated stories
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. CLOSING CALLOUT (matching media.html)
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
          INTERACTIVE MEDIA MODAL (Image / 3D Model / Video / Audio)
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
            {/* Modal Header */}
            <div className="px-5 py-4 border-b border-outline-variant/35 dark:border-white/10 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <div className="text-xs font-mono text-[#8c5d12] dark:text-[#d4af37]">
                  {modalItem.kindLabel} · {modalItem.assetName} ({modalItem.assetId})
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

            {/* Modal Media Viewport */}
            <div className="p-5 overflow-y-auto space-y-5">
              {modalItem.kind === 'model' && (
                <div className="border border-outline-variant/40 dark:border-white/15 bg-neutral-950">
                  <div className="h-[320px] sm:h-[420px] w-full">
                    <ModelViewer3D
                      modelType={modalAsset?.modelType || 'antigravity'}
                      isWireframe={modalWireframe}
                      isAutoRotating={true}
                    />
                  </div>
                  <div className="px-4 py-2.5 border-t border-white/10 bg-[#111114] flex items-center justify-between text-xs text-neutral-300">
                    <span>Drag to rotate 360°</span>
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

              {modalItem.kind === 'image' && (
                <div className="border border-outline-variant/40 dark:border-white/15 bg-neutral-950 overflow-hidden">
                  <img
                    src={modalItem.image}
                    alt={modalItem.title}
                    className="w-full max-h-[55vh] object-contain mx-auto"
                  />
                </div>
              )}

              {(modalItem.kind === 'v30' || modalItem.kind === 'edu') && modalVideo && (
                <YouTubeVideoPlayer video={modalVideo} initialCaptionsOn={true} />
              )}

              {modalItem.kind === 'audio' && (
                <div className="border border-outline-variant/40 dark:border-white/15 bg-[#121622] text-white p-6 space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Volume2 className="w-5 h-5 text-[#d4af37] shrink-0" />
                      <div>
                        <div className="text-sm font-medium">{modalItem.title}</div>
                        <div className="text-xs text-neutral-400">
                          Narrated summary · {modalItem.duration || '1:20'}
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

                  <p className="text-sm text-neutral-300 leading-relaxed border-t border-white/10 pt-4">
                    {modalAsset?.story || modalItem.summary}
                    {modalAsset?.mechanics ? ` ${modalAsset.mechanics}` : ''}
                  </p>
                </div>
              )}

              <p className="text-sm text-on-surface-variant dark:text-neutral-300 leading-relaxed">
                {modalItem.summary} — Recorded under{' '}
                <strong className="font-medium text-on-surface dark:text-white">
                  {modalItem.themeTitle}
                </strong>
                .
              </p>
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3.5 border-t border-outline-variant/35 dark:border-white/10 bg-surface-container-low/60 dark:bg-[#0b0b0e] flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-mono text-on-surface-variant dark:text-neutral-400">
                {modalItem.inventor} · {modalItem.year}
              </span>
              <Link
                href={`/inventions/${modalItem.assetId}#${modalItem.assetAnchor}`}
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
