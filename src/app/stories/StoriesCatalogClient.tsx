'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  FileText,
  Globe,
  Layers,
  Search,
  Sparkles,
  Users,
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import AuthUnlockGate from '@/components/common/AuthUnlockGate';
import { storyService } from '@/services/storyService';
import { StoryPublication, StoryPublicationType } from '@/types/story';

const TYPE_OPTIONS: Array<{ value: 'all' | StoryPublicationType; label: string }> = [
  { value: 'all', label: 'All Editions' },
  { value: 'storybook', label: 'Illustrated Storybooks' },
  { value: 'digital_book', label: 'Digital Books' },
  { value: 'narrative', label: 'Curatorial Narratives' },
];

const TYPE_BADGE: Record<StoryPublicationType, string> = {
  storybook: 'Storybook',
  digital_book: 'Digital Book',
  narrative: 'Narrative',
};

export default function StoriesCatalogClient() {
  const { isAuthenticated, isLoading: authLoading } = useAuth();
  const [stories, setStories] = useState<StoryPublication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [activeType, setActiveType] = useState<'all' | StoryPublicationType>('all');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    if (authLoading) return;
    if (!isAuthenticated) {
      setStories([]);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    storyService
      .getStories()
      .then((rows) => {
        if (!cancelled) setStories(Array.isArray(rows) ? rows : []);
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Unable to load stories catalog.');
          setStories([]);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [authLoading, isAuthenticated]);

  const languages = useMemo(() => {
    const set = new Set<string>();
    stories.forEach((s) => s.language && set.add(s.language));
    return ['all', ...Array.from(set).sort()];
  }, [stories]);

  const ageGroups = useMemo(() => {
    const set = new Set<string>();
    stories.forEach((s) => s.ageGroup && set.add(s.ageGroup));
    return ['all', ...Array.from(set).sort()];
  }, [stories]);

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return stories.filter((item) => {
      if (activeType !== 'all' && item.type !== activeType) return false;
      if (selectedLanguage !== 'all' && item.language !== selectedLanguage) return false;
      if (selectedAgeGroup !== 'all' && item.ageGroup !== selectedAgeGroup) return false;
      if (!q) return true;
      return (
        item.title.toLowerCase().includes(q) ||
        item.assetName.toLowerCase().includes(q) ||
        item.assetCode.toLowerCase().includes(q) ||
        (item.inventor || '').toLowerCase().includes(q) ||
        (item.excerpt || '').toLowerCase().includes(q)
      );
    });
  }, [stories, activeType, selectedLanguage, selectedAgeGroup, searchQuery]);

  const featured = stories[0] || null;

  if (!authLoading && !isAuthenticated) {
    return (
      <div className="min-h-screen w-full bg-surface dark:bg-[#09090b] px-4 sm:px-8 py-12">
        <AuthUnlockGate nextPath="/stories" />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-surface dark:bg-[#09090b] text-on-surface dark:text-white">
      {/* Editorial Header & Featured Folio */}
      <section className="w-full border-b border-outline-variant/40 dark:border-white/10 bg-surface-container-low/60 dark:bg-[#0d0d11] py-12 sm:py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#8c5d12]/35 dark:border-[#d4af37]/35 bg-[#8c5d12]/10 dark:bg-[#d4af37]/10 text-[#8c5d12] dark:text-[#d4af37] text-xs font-mono uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Stories &amp; Interactive Reading Room</span>
            </div>

            <h1 className="font-serif text-[clamp(30px,4vw,50px)] font-semibold tracking-[-0.02em] leading-[1.1] text-on-surface dark:text-white">
              Illustrated Books &amp; Invention Folios
            </h1>

            <p className="text-base sm:text-lg text-on-surface-variant dark:text-neutral-300 leading-relaxed max-w-[62ch]">
              Step inside page-by-page visual editions crafted for students, researchers, and curious readers. Every folio connects directly to its historical patent dossier.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              {featured && (
                <Link
                  href={`/stories/${encodeURIComponent(featured.id)}`}
                  className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 bg-[#8c5d12] dark:bg-[#d4af37] text-white dark:text-[#1a1500] font-medium text-sm hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37]"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Read Featured Folio</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
              <Link
                href="/media"
                className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 border border-outline-variant/60 dark:border-white/15 bg-surface dark:bg-white/5 text-sm font-medium hover:border-[#8c5d12] dark:hover:border-[#d4af37] transition-colors"
              >
                <Layers className="w-4 h-4" />
                <span>Explore Media Library</span>
              </Link>
            </div>
          </div>

          {/* Featured Book Plinth Card */}
          <div className="lg:col-span-5">
            {featured ? (
              <Link
                href={`/stories/${encodeURIComponent(featured.id)}`}
                className="group block border border-outline-variant/50 dark:border-white/15 bg-surface-container-lowest dark:bg-[#131318] p-4 sm:p-5 hover:border-[#8c5d12]/70 dark:hover:border-[#d4af37]/70 transition-colors"
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-5 aspect-[3/4] overflow-hidden bg-neutral-900 border border-outline-variant/30 dark:border-white/10">
                    <img
                      src={featured.coverUrl || '/images/bells_telephone_hq.jpg'}
                      alt={featured.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="col-span-7 space-y-2.5">
                    <span className="inline-block font-mono text-[11px] uppercase tracking-wider text-[#8c5d12] dark:text-[#d4af37]">
                      Featured Edition · {featured.pageCount} Pages
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-semibold leading-snug text-on-surface dark:text-white group-hover:text-[#8c5d12] dark:group-hover:text-[#d4af37] transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-xs text-on-surface-variant dark:text-neutral-400 line-clamp-3 leading-relaxed">
                      {featured.excerpt}
                    </p>
                    <div className="pt-1 flex flex-wrap items-center gap-2 text-[11px] font-mono text-on-surface-variant dark:text-neutral-400">
                      <span>{featured.ageGroup}</span>
                      <span>·</span>
                      <span>{featured.language}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="h-56 border border-outline-variant/40 dark:border-white/10 bg-surface-container-lowest dark:bg-[#131318] animate-pulse" />
            )}
          </div>
        </div>
      </section>

      {/* Filter Toolbar */}
      <section className="w-full border-b border-outline-variant/35 dark:border-white/10 bg-surface dark:bg-[#09090b] sticky top-16 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Format Tabs */}
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Story format filter">
            {TYPE_OPTIONS.map((opt) => {
              const active = activeType === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveType(opt.value)}
                  className={`min-h-[44px] px-3.5 py-2 text-xs sm:text-sm font-medium border transition-colors cursor-pointer ${
                    active
                      ? 'bg-[#8c5d12] dark:bg-[#d4af37] text-white dark:text-[#1a1500] border-[#8c5d12] dark:border-[#d4af37]'
                      : 'bg-surface-container-lowest dark:bg-[#121216] text-on-surface-variant dark:text-neutral-300 border-outline-variant/45 dark:border-white/15 hover:border-[#8c5d12]/60 dark:hover:border-[#d4af37]/60'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>

          {/* Search + Age + Language */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="relative flex-1 sm:flex-initial min-w-[210px]">
              <Search className="w-4 h-4 text-on-surface-variant dark:text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search title, asset, code..."
                aria-label="Search stories and digital books"
                className="w-full min-h-[44px] pl-9 pr-3 py-2 text-sm bg-surface-container-lowest dark:bg-[#121216] border border-outline-variant/50 dark:border-white/15 focus:outline-none focus:border-[#8c5d12] dark:focus:border-[#d4af37]"
              />
            </div>

            <select
              value={selectedAgeGroup}
              onChange={(e) => setSelectedAgeGroup(e.target.value)}
              aria-label="Filter by age group"
              className="min-h-[44px] px-3 py-2 text-xs sm:text-sm bg-surface-container-lowest dark:bg-[#121216] border border-outline-variant/50 dark:border-white/15 cursor-pointer"
            >
              {ageGroups.map((ag) => (
                <option key={ag} value={ag}>
                  {ag === 'all' ? 'All Ages' : ag}
                </option>
              ))}
            </select>

            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              aria-label="Filter by language"
              className="min-h-[44px] px-3 py-2 text-xs sm:text-sm bg-surface-container-lowest dark:bg-[#121216] border border-outline-variant/50 dark:border-white/15 cursor-pointer"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang === 'all' ? 'All Languages' : lang}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={`story-skel-${i}`}
                className="h-96 border border-outline-variant/35 dark:border-white/10 bg-surface-container-low dark:bg-[#111115] animate-pulse"
              />
            ))}
          </div>
        ) : error ? (
          <div className="p-8 border border-red-500/35 bg-red-500/10 text-sm text-red-700 dark:text-red-300">
            {error}
          </div>
        ) : filtered.length === 0 ? (
          <div className="p-12 border border-dashed border-outline-variant/50 dark:border-white/15 text-center space-y-3">
            <BookOpen className="w-8 h-8 mx-auto text-on-surface-variant dark:text-neutral-500" />
            <p className="font-serif text-lg text-on-surface dark:text-white">
              No matching stories or digital books found
            </p>
            <p className="text-sm text-on-surface-variant dark:text-neutral-400">
              Try clearing your search or switching the age group and edition filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveType('all');
                setSelectedAgeGroup('all');
                setSelectedLanguage('all');
                setSearchQuery('');
              }}
              className="min-h-[44px] px-4 py-2 border border-outline-variant/60 dark:border-white/20 text-xs font-medium hover:border-[#8c5d12] dark:hover:border-[#d4af37] cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6 flex items-center justify-between text-xs font-mono text-on-surface-variant dark:text-neutral-400">
              <span>Showing {filtered.length} published editions</span>
              <span>Click any book to open the interactive reader</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((story) => (
                <article
                  key={story.id}
                  className="group flex flex-col border border-outline-variant/45 dark:border-white/12 bg-surface-container-lowest dark:bg-[#111115] hover:border-[#8c5d12]/70 dark:hover:border-[#d4af37]/70 transition-colors overflow-hidden"
                >
                  <Link
                    href={`/stories/${encodeURIComponent(story.id)}`}
                    className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900 border-b border-outline-variant/30 dark:border-white/10"
                  >
                    <img
                      src={story.coverUrl || '/images/bells_telephone_hq.jpg'}
                      alt={story.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-black/75 backdrop-blur-sm text-[#f2ca50] font-mono text-[10px] uppercase tracking-wider border border-white/15">
                      {TYPE_BADGE[story.type] || 'Storybook'}
                    </span>
                    <span className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/75 backdrop-blur-sm text-white font-mono text-[11px] border border-white/15">
                      {story.pageCount} {story.pageCount === 1 ? 'Page' : 'Pages'}
                    </span>
                  </Link>

                  <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2 text-[11px] font-mono text-on-surface-variant dark:text-neutral-400">
                        <span>{story.assetCode}</span>
                        <span>{story.assetName}</span>
                      </div>

                      <Link href={`/stories/${encodeURIComponent(story.id)}`}>
                        <h2 className="font-serif text-xl font-semibold leading-snug text-on-surface dark:text-white group-hover:text-[#8c5d12] dark:group-hover:text-[#d4af37] transition-colors">
                          {story.title}
                        </h2>
                      </Link>

                      {story.excerpt && (
                        <p className="text-sm text-on-surface-variant dark:text-neutral-300 leading-relaxed line-clamp-3">
                          {story.excerpt}
                        </p>
                      )}
                    </div>

                    <div className="space-y-3 pt-3 border-t border-outline-variant/30 dark:border-white/10">
                      <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-on-surface-variant dark:text-neutral-400">
                        <span className="inline-flex items-center gap-1">
                          <Users className="w-3.5 h-3.5" />
                          {story.ageGroup}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Globe className="w-3.5 h-3.5" />
                          {story.language}
                        </span>
                        {story.downloadUrl && (
                          <span className="inline-flex items-center gap-1">
                            <FileText className="w-3.5 h-3.5" />
                            PDF
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between gap-2">
                        <Link
                          href={`/stories/${encodeURIComponent(story.id)}`}
                          className="min-h-[44px] flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#8c5d12] dark:bg-[#d4af37] text-white dark:text-[#1a1500] text-xs font-semibold hover:opacity-90 transition-opacity"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Open Interactive Reader</span>
                        </Link>
                        <Link
                          href={`/inventions/${encodeURIComponent(story.assetCode)}`}
                          className="min-h-[44px] inline-flex items-center justify-center px-3 py-2 border border-outline-variant/50 dark:border-white/15 text-xs font-medium hover:border-[#8c5d12] dark:hover:border-[#d4af37] transition-colors"
                          title="Inspect linked invention dossier"
                        >
                          Dossier
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
