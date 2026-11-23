'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Columns2,
  ExternalLink,
  Minus,
  Pause,
  Plus,
  Square,
  Volume2,
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import AuthUnlockGate from '@/components/common/AuthUnlockGate';
import { storyService } from '@/services/storyService';
import { StoryPublication } from '@/types/story';

interface StoryReaderClientProps {
  storyId: string;
}

const FONT_SIZES = [16, 18, 20, 22] as const;

export default function StoryReaderClient({ storyId }: StoryReaderClientProps) {
  const { isAuthenticated, isLoading: authLoading } = useAuth();
  const [story, setStory] = useState<StoryPublication | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [fontSizeIdx, setFontSizeIdx] = useState(1); // default 18px
  const [spreadMode, setSpreadMode] = useState<'spread' | 'single'>('spread');
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setCurrentIdx(0);
  }, [storyId]);

  useEffect(() => {
    if (authLoading) return;
    if (!isAuthenticated) {
      setStory(null);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    storyService
      .getStoryById(storyId)
      .then((loaded) => {
        if (!cancelled) setStory(loaded);
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Unable to load this folio.');
          setStory(null);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [authLoading, isAuthenticated, storyId]);

  const stopSpeech = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  }, []);

  useEffect(() => {
    stopSpeech();
  }, [currentIdx, stopSpeech]);

  useEffect(() => {
    return () => stopSpeech();
  }, [stopSpeech]);

  const pages = story?.pages || [];
  const totalPages = pages.length;
  const activePage = pages[currentIdx] || null;

  const goPrev = useCallback(() => {
    setCurrentIdx((idx) => Math.max(0, idx - 1));
  }, []);

  const goNext = useCallback(() => {
    setCurrentIdx((idx) => Math.min(Math.max(0, totalPages - 1), idx + 1));
  }, [totalPages]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [goPrev, goNext]);

  const toggleReadAloud = () => {
    if (!activePage || typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }
    if (isSpeaking) {
      stopSpeech();
      return;
    }
    window.speechSynthesis.cancel();
    const text = `${activePage.heading ? activePage.heading + '. ' : ''}${activePage.body}`;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.96;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  if (!authLoading && !isAuthenticated) {
    return (
      <div className="min-h-screen w-full bg-surface dark:bg-[#09090b] px-4 sm:px-8 py-12">
        <AuthUnlockGate nextPath={`/stories/${encodeURIComponent(storyId)}`} />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-surface dark:bg-[#09090b] px-4 sm:px-8 py-12">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="h-14 bg-surface-container-low dark:bg-[#111115] animate-pulse border border-outline-variant/30 dark:border-white/10" />
          <div className="h-[520px] bg-surface-container-low dark:bg-[#111115] animate-pulse border border-outline-variant/30 dark:border-white/10" />
        </div>
      </div>
    );
  }

  if (error || !story || !activePage) {
    return (
      <div className="min-h-screen w-full bg-surface dark:bg-[#09090b] px-4 sm:px-8 py-16">
        <div className="max-w-xl mx-auto border border-outline-variant/50 dark:border-white/15 bg-surface-container-lowest dark:bg-[#121216] p-8 text-center space-y-4">
          <BookOpen className="w-8 h-8 mx-auto text-[#8c5d12] dark:text-[#d4af37]" />
          <h1 className="font-serif text-2xl font-semibold text-on-surface dark:text-white">
            Folio Not Available
          </h1>
          <p className="text-sm text-on-surface-variant dark:text-neutral-400">
            {error || 'This story publication could not be found or has no reading pages yet.'}
          </p>
          <Link
            href="/stories"
            className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 bg-[#8c5d12] dark:bg-[#d4af37] text-white dark:text-[#1a1500] text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Stories &amp; Books</span>
          </Link>
        </div>
      </div>
    );
  }

  const progressPct = totalPages > 0 ? Math.round(((currentIdx + 1) / totalPages) * 100) : 100;
  const fontSizePx = FONT_SIZES[fontSizeIdx];

  return (
    <div className="min-h-screen w-full bg-[#f4efe4] dark:bg-[#0b0b0e] text-on-surface dark:text-white flex flex-col">
      {/* Top Reader Controls Bar */}
      <header className="sticky top-16 z-20 w-full border-b border-outline-variant/45 dark:border-white/10 bg-surface/95 dark:bg-[#111115]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <Link
              href="/stories"
              className="min-h-[44px] inline-flex items-center gap-1.5 px-3 py-2 border border-outline-variant/45 dark:border-white/15 text-xs font-medium hover:border-[#8c5d12] dark:hover:border-[#d4af37] transition-colors shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Library</span>
            </Link>
            <div className="min-w-0">
              <h1 className="font-serif text-sm sm:text-base font-semibold truncate text-on-surface dark:text-white">
                {story.title}
              </h1>
              <p className="font-mono text-[11px] text-on-surface-variant dark:text-neutral-400">
                Page {currentIdx + 1} of {totalPages} · {story.ageGroup} · {story.language}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Font Size Controls */}
            <div className="inline-flex items-center border border-outline-variant/45 dark:border-white/15 bg-surface-container-lowest dark:bg-[#16161b]">
              <button
                type="button"
                onClick={() => setFontSizeIdx((i) => Math.max(0, i - 1))}
                disabled={fontSizeIdx === 0}
                aria-label="Decrease reading font size"
                className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center disabled:opacity-40 cursor-pointer"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="px-2 font-mono text-[11px] text-on-surface-variant dark:text-neutral-300">
                {fontSizePx}px
              </span>
              <button
                type="button"
                onClick={() => setFontSizeIdx((i) => Math.min(FONT_SIZES.length - 1, i + 1))}
                disabled={fontSizeIdx === FONT_SIZES.length - 1}
                aria-label="Increase reading font size"
                className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center disabled:opacity-40 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Spread Mode Toggle (Desktop) */}
            <button
              type="button"
              onClick={() => setSpreadMode((m) => (m === 'spread' ? 'single' : 'spread'))}
              aria-label="Toggle two-page spread or single-page layout"
              className="hidden lg:inline-flex min-h-[44px] items-center gap-1.5 px-3 py-2 border border-outline-variant/45 dark:border-white/15 text-xs font-medium hover:border-[#8c5d12] dark:hover:border-[#d4af37] cursor-pointer"
            >
              {spreadMode === 'spread' ? (
                <>
                  <Square className="w-3.5 h-3.5" />
                  <span>Single Page</span>
                </>
              ) : (
                <>
                  <Columns2 className="w-3.5 h-3.5" />
                  <span>Book Spread</span>
                </>
              )}
            </button>

            {/* Read Aloud Toggle */}
            <button
              type="button"
              onClick={toggleReadAloud}
              aria-label={isSpeaking ? 'Pause read aloud narration' : 'Listen to page narration'}
              className={`min-h-[44px] inline-flex items-center gap-1.5 px-3.5 py-2 border text-xs font-medium cursor-pointer transition-colors ${
                isSpeaking
                  ? 'bg-[#8c5d12] dark:bg-[#d4af37] text-white dark:text-[#1a1500] border-[#8c5d12] dark:border-[#d4af37]'
                  : 'border-outline-variant/45 dark:border-white/15 hover:border-[#8c5d12] dark:hover:border-[#d4af37]'
              }`}
            >
              {isSpeaking ? <Pause className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              <span>{isSpeaking ? 'Pause Audio' : 'Read Aloud'}</span>
            </button>

            <Link
              href={`/inventions/${encodeURIComponent(story.assetCode)}`}
              className="min-h-[44px] inline-flex items-center gap-1.5 px-3.5 py-2 border border-[#8c5d12]/50 dark:border-[#d4af37]/50 text-[#8c5d12] dark:text-[#d4af37] text-xs font-medium hover:bg-[#8c5d12]/10 dark:hover:bg-[#d4af37]/10 transition-colors"
            >
              <span>Invention Dossier</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Reading Progress Bar */}
        <div className="w-full h-1 bg-outline-variant/25 dark:bg-white/10">
          <div
            className="h-full bg-[#8c5d12] dark:bg-[#d4af37] transition-all duration-300"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </header>

      {/* Book Spread Canvas */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-12 flex flex-col justify-center">
        <div
          className={`border border-outline-variant/55 dark:border-white/15 bg-[#fcfaf5] dark:bg-[#141419] shadow-2xl overflow-hidden ${
            spreadMode === 'spread' ? 'grid grid-cols-1 lg:grid-cols-12' : 'max-w-3xl mx-auto w-full flex flex-col'
          }`}
        >
          {/* Left Page: Illustration / Archival Plate */}
          <div
            className={`${
              spreadMode === 'spread'
                ? 'lg:col-span-6 lg:border-r border-b lg:border-b-0 border-outline-variant/40 dark:border-white/10'
                : 'border-b border-outline-variant/40 dark:border-white/10'
            } bg-[#f3ede0] dark:bg-[#0e0e12] p-5 sm:p-8 flex flex-col justify-between gap-4`}
          >
            <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-900 border border-outline-variant/40 dark:border-white/10">
              <img
                src={activePage.imageUrl || story.coverUrl || '/images/bells_telephone_hq.jpg'}
                alt={activePage.imageAltText || story.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between gap-2 text-[11px] font-mono text-on-surface-variant dark:text-neutral-400">
              <span className="truncate">{activePage.imageAltText || story.assetName}</span>
              <span className="shrink-0">{story.assetCode}</span>
            </div>
          </div>

          {/* Right Page: Narrative Text */}
          <div
            className={`${
              spreadMode === 'spread' ? 'lg:col-span-6' : ''
            } p-6 sm:p-10 lg:p-12 flex flex-col justify-between gap-8`}
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#8c5d12] dark:text-[#d4af37]">
                <span>Folio Page {String(activePage.pageNumber).padStart(2, '0')}</span>
                <span>{progressPct}% Complete</span>
              </div>

              {activePage.heading && (
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold leading-snug text-on-surface dark:text-white">
                  {activePage.heading}
                </h2>
              )}

              <p
                className="font-serif text-on-surface dark:text-neutral-200 leading-[1.78] max-w-[62ch]"
                style={{ fontSize: `${fontSizePx}px` }}
              >
                {activePage.body}
              </p>
            </div>

            {/* Page Turn Controls */}
            <div className="pt-6 border-t border-outline-variant/35 dark:border-white/10 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={goPrev}
                disabled={currentIdx === 0}
                className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2 border border-outline-variant/55 dark:border-white/15 text-xs sm:text-sm font-medium disabled:opacity-35 hover:border-[#8c5d12] dark:hover:border-[#d4af37] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous Page</span>
              </button>

              <button
                type="button"
                onClick={goNext}
                disabled={currentIdx >= totalPages - 1}
                className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2 bg-[#8c5d12] dark:bg-[#d4af37] text-white dark:text-[#1a1500] text-xs sm:text-sm font-semibold disabled:opacity-35 hover:opacity-90 transition-opacity cursor-pointer"
              >
                <span>Next Page</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Page Jump Strip */}
        {totalPages > 1 && (
          <nav
            aria-label="Folio page selector"
            className="mt-6 flex flex-wrap items-center justify-center gap-2"
          >
            {pages.map((pg, idx) => {
              const active = idx === currentIdx;
              return (
                <button
                  key={`jump-pg-${pg.pageNumber}`}
                  type="button"
                  onClick={() => setCurrentIdx(idx)}
                  aria-label={`Jump to page ${pg.pageNumber}`}
                  aria-current={active ? 'page' : undefined}
                  className={`min-h-[44px] min-w-[44px] px-3 py-2 font-mono text-xs border transition-colors cursor-pointer ${
                    active
                      ? 'bg-[#8c5d12] dark:bg-[#d4af37] text-white dark:text-[#1a1500] border-[#8c5d12] dark:border-[#d4af37] font-semibold'
                      : 'bg-surface-container-lowest dark:bg-[#141419] text-on-surface-variant dark:text-neutral-300 border-outline-variant/45 dark:border-white/15 hover:border-[#8c5d12] dark:hover:border-[#d4af37]'
                  }`}
                >
                  {String(pg.pageNumber).padStart(2, '0')}
                </button>
              );
            })}
          </nav>
        )}
      </main>
    </div>
  );
}
