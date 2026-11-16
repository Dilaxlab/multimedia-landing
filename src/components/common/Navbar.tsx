'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  Moon,
  Search,
  Sun,
  X,
} from 'lucide-react';
import { useTheme } from '@/components/common/ThemeProvider';
import { useCategory } from '@/context/CategoryContext';
import {
  ALL_50_CATEGORIES,
  THEME_FAMILIES,
  ThemeFamily,
} from '@/data/taxonomy';
import {
  MOCK_HISTORICAL_ASSETS,
  VIRTUAL_TOUR_MUSEUM_URL,
} from '@/lib/constants';
import {
  FunnelStage,
  LAST_CATEGORY_STORAGE_KEY,
  resolveRouteContext,
} from '@/lib/routeContext';

export interface NavbarProps {
  onSearchChange?: (val: string) => void;
  onOpenTaxonomy?: () => void;
}

type DropdownOpenSource = 'hover' | 'click' | null;

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSearchChange?: (val: string) => void;
}

function SearchArchiveModal({
  isOpen,
  onClose,
  onSearchChange,
}: SearchModalProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      return;
    }
    const timer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 30);
    return () => window.clearTimeout(timer);
  }, [isOpen]);

  const { matchingCategories, matchingAssets } = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return {
        matchingCategories: ALL_50_CATEGORIES.slice(0, 4),
        matchingAssets: MOCK_HISTORICAL_ASSETS.slice(0, 6),
      };
    }

    const categories = ALL_50_CATEGORIES.filter(
      (cat) =>
        cat.title.toLowerCase().includes(q) ||
        cat.quote.toLowerCase().includes(q) ||
        cat.number.includes(q)
    ).slice(0, 4);

    const assets = MOCK_HISTORICAL_ASSETS.filter(
      (asset) =>
        asset.title.toLowerCase().includes(q) ||
        asset.inventor.toLowerCase().includes(q) ||
        asset.patent.toLowerCase().includes(q) ||
        asset.era.toLowerCase().includes(q) ||
        asset.id.toLowerCase().includes(q) ||
        asset.tags?.some((t) => t.toLowerCase().includes(q))
    ).slice(0, 8);

    return { matchingCategories: categories, matchingAssets: assets };
  }, [query]);

  const handleNavigate = useCallback(
    (href: string) => {
      onClose();
      router.push(href);
    },
    [onClose, router]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (matchingAssets[0]) {
      handleNavigate(`/inventions/${matchingAssets[0].id}`);
    } else if (matchingCategories[0]) {
      handleNavigate(`/categories/${matchingCategories[0].slug}`);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Search Heritage Archive"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-surface dark:bg-[#111114] border border-outline-variant/50 dark:border-white/15 shadow-2xl overflow-hidden animate-modalIn"
        onClick={(e) => e.stopPropagation()}
      >
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-3 px-4 py-3.5 border-b border-outline-variant/40 dark:border-white/10"
        >
          <Search className="w-4 h-4 text-on-surface-variant dark:text-neutral-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              const val = e.target.value;
              setQuery(val);
              if (onSearchChange) onSearchChange(val);
            }}
            placeholder="Search 90 inventions, inventors, patents, or categories..."
            className="flex-1 bg-transparent text-sm text-on-surface dark:text-white placeholder:text-on-surface-variant/70 dark:placeholder:text-neutral-500 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                if (onSearchChange) onSearchChange('');
                inputRef.current?.focus();
              }}
              aria-label="Clear search query"
              className="text-xs font-mono text-on-surface-variant hover:text-on-surface dark:text-neutral-400 dark:hover:text-white px-2 py-1 cursor-pointer"
            >
              Clear
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="p-2 text-on-surface-variant hover:text-on-surface dark:text-neutral-400 dark:hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </form>

        <div className="max-h-[65vh] overflow-y-auto p-4 space-y-5">
          {matchingCategories.length > 0 && (
            <div>
              <div className="px-1 pb-2 text-xs font-medium text-on-surface-variant dark:text-neutral-400">
                Categories ({ALL_50_CATEGORIES.length})
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {matchingCategories.map((cat) => (
                  <button
                    key={cat.slug}
                    type="button"
                    onClick={() => handleNavigate(`/categories/${cat.slug}`)}
                    className="flex items-center justify-between gap-2 px-3 py-2 text-left hover:bg-surface-container-low dark:hover:bg-white/[0.05] border border-outline-variant/25 dark:border-white/[0.08] transition-colors cursor-pointer"
                  >
                    <div className="min-w-0">
                      <div className="text-xs font-medium text-on-surface dark:text-white truncate">
                        {cat.number}. {cat.title}
                      </div>
                      <div className="text-xs text-on-surface-variant dark:text-neutral-400 truncate mt-0.5">
                        {cat.quote}
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-on-surface-variant dark:text-neutral-500 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          <div>
            <div className="px-1 pb-2 text-xs font-medium text-on-surface-variant dark:text-neutral-400">
              {query.trim() ? 'Matching Records' : 'Featured Records'}
            </div>
            {matchingAssets.length === 0 && matchingCategories.length === 0 ? (
              <div className="px-3 py-8 text-center text-sm text-on-surface-variant dark:text-neutral-400">
                No archival records match &ldquo;{query}&rdquo;.
              </div>
            ) : (
              <div className="divide-y divide-outline-variant/25 dark:divide-white/[0.08] border border-outline-variant/25 dark:border-white/[0.08]">
                {matchingAssets.map((asset) => (
                  <button
                    key={asset.id}
                    type="button"
                    onClick={() => handleNavigate(`/inventions/${asset.id}`)}
                    className="w-full flex items-center justify-between gap-3 px-3.5 py-2.5 text-left hover:bg-surface-container-low dark:hover:bg-white/[0.05] transition-colors cursor-pointer"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-[#8c5d12] dark:text-[#d4af37]">
                          {asset.id}
                        </span>
                        <span className="text-sm font-medium text-on-surface dark:text-white truncate">
                          {asset.title}
                        </span>
                      </div>
                      <div className="text-xs text-on-surface-variant dark:text-neutral-400 truncate">
                        {asset.inventor} · {asset.patent}
                      </div>
                    </div>
                    <span className="text-xs font-mono text-on-surface-variant dark:text-neutral-400 shrink-0">
                      {asset.year || asset.era.slice(0, 4)}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="px-4 py-2.5 border-t border-outline-variant/30 dark:border-white/10 bg-surface-container-low/60 dark:bg-white/[0.02] flex items-center justify-between text-xs text-on-surface-variant dark:text-neutral-400">
          <span>Enter to open top match</span>
          <span>Esc to close</span>
        </div>
      </div>
    </div>
  );
}

interface ContextDropdownPanelProps {
  stage: FunnelStage;
  activeTheme?: ThemeFamily;
  onScrollQuickAction: () => void;
  onNavigateItem: () => void;
}

function ContextDropdownPanel({
  stage,
  activeTheme,
  onScrollQuickAction,
  onNavigateItem,
}: ContextDropdownPanelProps) {
  if (stage === 'theme' && activeTheme) {
    return (
      <div
        role="menu"
        aria-label={`${activeTheme.title} categories`}
        className="w-[min(460px,calc(100vw-24px))] bg-surface dark:bg-[#111114] border border-outline-variant/50 dark:border-white/15 shadow-2xl p-3.5 animate-fadeIn"
      >
        <div className="flex items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-outline-variant/30 dark:border-white/10">
          <div className="min-w-0">
            <div className="text-xs font-mono text-[#8c5d12] dark:text-[#d4af37]">
              Theme {activeTheme.number} · {activeTheme.categoryRange}
            </div>
            <div className="text-sm font-medium text-on-surface dark:text-white truncate">
              {activeTheme.title}
            </div>
          </div>
          <button
            type="button"
            onClick={onScrollQuickAction}
            className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1.5 border border-[#8c5d12]/40 dark:border-[#d4af37]/40 bg-[#8c5d12]/[0.06] dark:bg-[#d4af37]/[0.08] text-xs font-medium text-[#8c5d12] dark:text-[#d4af37] hover:bg-[#8c5d12]/12 dark:hover:bg-[#d4af37]/15 transition-colors cursor-pointer"
          >
            <span>Browse All 5 Categories</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="divide-y divide-outline-variant/20 dark:divide-white/[0.06] max-h-[60vh] overflow-y-auto">
          {activeTheme.categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              role="menuitem"
              onClick={onNavigateItem}
              className="group flex items-center justify-between gap-3 px-2.5 py-2.5 hover:bg-surface-container-low dark:hover:bg-white/[0.05] transition-colors"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#8c5d12] dark:text-[#d4af37] shrink-0">
                    {cat.number}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-on-surface dark:text-white group-hover:text-[#8c5d12] dark:group-hover:text-[#d4af37] truncate transition-colors">
                    {cat.title}
                  </span>
                </div>
                <p className="text-xs text-on-surface-variant dark:text-neutral-400 truncate mt-0.5 pl-6">
                  {cat.quote}
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-on-surface-variant/60 dark:text-neutral-500 group-hover:text-[#8c5d12] dark:group-hover:text-[#d4af37] shrink-0" />
            </Link>
          ))}
        </div>

        <div className="sm:hidden mt-2.5 pt-2.5 border-t border-outline-variant/30 dark:border-white/10">
          <a
            href={VIRTUAL_TOUR_MUSEUM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-2.5 py-2 text-xs font-medium text-on-surface dark:text-neutral-200 hover:text-[#8c5d12] dark:hover:text-[#d4af37]"
          >
            <span>Open 3D Virtual Museum</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      role="menu"
      aria-label="10 Archive Theme Families"
      className="w-[min(620px,calc(100vw-24px))] bg-surface dark:bg-[#111114] border border-outline-variant/50 dark:border-white/15 shadow-2xl p-3.5 animate-fadeIn"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-outline-variant/30 dark:border-white/10">
        <div className="text-xs text-on-surface-variant dark:text-neutral-400">
          <strong className="font-medium text-on-surface dark:text-white">
            10 Theme Families
          </strong>{' '}
          · 50 Categories · 90 Inventions
        </div>
        <button
          type="button"
          onClick={onScrollQuickAction}
          className="inline-flex items-center gap-1 px-2.5 py-1.5 border border-[#8c5d12]/40 dark:border-[#d4af37]/40 bg-[#8c5d12]/[0.06] dark:bg-[#d4af37]/[0.08] text-xs font-medium text-[#8c5d12] dark:text-[#d4af37] hover:bg-[#8c5d12]/12 dark:hover:bg-[#d4af37]/15 transition-colors cursor-pointer"
        >
          <span>Scroll to All 10 Themes</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 max-h-[60vh] overflow-y-auto">
        {THEME_FAMILIES.map((family) => (
          <Link
            key={family.slug}
            href={`/themes/${family.slug}`}
            role="menuitem"
            onClick={onNavigateItem}
            className="group flex items-start justify-between gap-2 px-3 py-2 border border-transparent hover:border-outline-variant/30 dark:hover:border-white/10 hover:bg-surface-container-low dark:hover:bg-white/[0.05] transition-colors"
          >
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#8c5d12] dark:text-[#d4af37] shrink-0">
                  {family.number}
                </span>
                <span className="text-xs sm:text-sm font-medium text-on-surface dark:text-white group-hover:text-[#8c5d12] dark:group-hover:text-[#d4af37] truncate transition-colors">
                  {family.title}
                </span>
              </div>
              <div className="text-xs font-mono text-on-surface-variant dark:text-neutral-400 pl-6 mt-0.5">
                {family.categoryRange}
              </div>
            </div>
            <ChevronRight className="w-3.5 h-3.5 mt-0.5 text-on-surface-variant/60 dark:text-neutral-500 group-hover:text-[#8c5d12] dark:group-hover:text-[#d4af37] shrink-0" />
          </Link>
        ))}
      </div>

      <div className="sm:hidden mt-2.5 pt-2.5 border-t border-outline-variant/30 dark:border-white/10">
        <a
          href={VIRTUAL_TOUR_MUSEUM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-2.5 py-2 text-xs font-medium text-on-surface dark:text-neutral-200 hover:text-[#8c5d12] dark:hover:text-[#d4af37]"
        >
          <span>Open 3D Virtual Museum</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

export default function Navbar({ onSearchChange }: NavbarProps) {
  const pathname = usePathname() || '/';
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const { activeCategory } = useCategory();

  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [dropdownSource, setDropdownSource] =
    useState<DropdownOpenSource>(null);
  const [lastCategorySlug, setLastCategorySlug] = useState<string | null>(null);
  const [activeHomeSection, setActiveHomeSection] = useState<
    'home' | 'formats' | 'themes' | 'featured'
  >('home');

  const dropdownContainerRef = useRef<HTMLDivElement>(null);
  const mobileSlotRef = useRef<HTMLDivElement>(null);
  const hoverTimerRef = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = sessionStorage.getItem(LAST_CATEGORY_STORAGE_KEY);
      if (saved) setLastCategorySlug(saved);
    } catch {
      // ignore storage unavailable
    }
  }, []);

  const routeCtx = useMemo(
    () => resolveRouteContext(pathname, lastCategorySlug, activeCategory),
    [pathname, lastCategorySlug, activeCategory]
  );

  // Persist visited category slug so Asset pages keep deterministic parent category context
  useEffect(() => {
    if (routeCtx.stage === 'category' && routeCtx.activeCategory?.slug) {
      setLastCategorySlug(routeCtx.activeCategory.slug);
      try {
        sessionStorage.setItem(
          LAST_CATEGORY_STORAGE_KEY,
          routeCtx.activeCategory.slug
        );
      } catch {
        // ignore storage unavailable
      }
    }
  }, [routeCtx.stage, routeCtx.activeCategory?.slug]);

  useEffect(() => {
    setDropdownSource(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!routeCtx.isHome) return;
    const sectionMap: {
      id: string;
      key: 'home' | 'formats' | 'themes' | 'featured';
    }[] = [
      { id: 'hero', key: 'home' },
      { id: 'whats-inside', key: 'formats' },
      { id: 'themes', key: 'themes' },
      { id: 'trending', key: 'featured' },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const match = sectionMap.find((s) => s.id === entry.target.id);
            if (match) setActiveHomeSection(match.key);
          }
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: 0.05 }
    );

    sectionMap.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [routeCtx.isHome]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setDropdownSource(null);
        setSearchOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setDropdownSource(null);
        setSearchOpen(false);
      }
    };

    const onOpenSearchEvent = () => {
      setDropdownSource(null);
      setSearchOpen(true);
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('ha:open-search', onOpenSearchEvent);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('ha:open-search', onOpenSearchEvent);
    };
  }, []);

  useEffect(() => {
    if (!dropdownSource) return;
    const onPointerDown = (e: MouseEvent) => {
      const target = e.target as Node;
      const inDesktop = dropdownContainerRef.current?.contains(target);
      const inMobile = mobileSlotRef.current?.contains(target);
      if (!inDesktop && !inMobile) {
        setDropdownSource(null);
      }
    };
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, [dropdownSource]);

  const clearHoverTimer = useCallback(() => {
    if (hoverTimerRef.current !== null) {
      window.clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  }, []);

  const handleDesktopHoverEnter = useCallback(() => {
    clearHoverTimer();
    setDropdownSource((prev) => prev ?? 'hover');
  }, [clearHoverTimer]);

  const handleDesktopHoverLeave = useCallback(() => {
    clearHoverTimer();
    hoverTimerRef.current = window.setTimeout(() => {
      setDropdownSource((prev) => (prev === 'hover' ? null : prev));
    }, 150);
  }, [clearHoverTimer]);

  const handleCaretClick = useCallback(() => {
    clearHoverTimer();
    setDropdownSource((prev) => (prev === 'click' ? null : 'click'));
  }, [clearHoverTimer]);

  const scrollToElementId = useCallback(
    (elementId: string, fallbackHref: string) => {
      setDropdownSource(null);
      const el = document.getElementById(elementId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        router.push(fallbackHref);
      }
    },
    [router]
  );

  const handleHomeAnchor = useCallback(
    (sectionId: string, fallbackHref: string) => {
      setDropdownSource(null);
      if (routeCtx.isHome) {
        if (sectionId === 'top') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          document
            .getElementById(sectionId)
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        router.push(fallbackHref);
      }
    },
    [routeCtx.isHome, router]
  );

  const handleSubpageBack = useCallback(() => {
    const sameOriginReferrer =
      typeof document !== 'undefined' &&
      (!document.referrer ||
        document.referrer.startsWith(window.location.origin));
    if (
      typeof window !== 'undefined' &&
      window.history.length > 1 &&
      sameOriginReferrer
    ) {
      router.back();
    } else {
      router.push(routeCtx.backFallbackHref);
    }
  }, [router, routeCtx.backFallbackHref]);

  const handleSlot3LabelClick = useCallback(() => {
    setDropdownSource(null);
    if (routeCtx.stage === 'home') {
      handleHomeAnchor('themes', '/#themes');
    } else if (routeCtx.stage === 'theme') {
      scrollToElementId(
        'categories',
        routeCtx.activeTheme
          ? `/themes/${routeCtx.activeTheme.slug}#categories`
          : '/#themes'
      );
    } else if (routeCtx.stage === 'category') {
      scrollToElementId('assets', '#assets');
    }
  }, [routeCtx.stage, routeCtx.activeTheme, handleHomeAnchor, scrollToElementId]);

  const isDropdownOpen = dropdownSource !== null;
  const hasDropdownForStage =
    routeCtx.stage === 'home' || routeCtx.stage === 'theme';

  const fixedNavLinkClass = (active: boolean) =>
    `inline-flex items-center h-16 px-1 text-sm whitespace-nowrap border-b-2 transition-colors cursor-pointer ${
      active
        ? 'border-[#8c5d12] dark:border-[#d4af37] text-on-surface dark:text-white font-medium'
        : 'border-transparent text-on-surface-variant dark:text-neutral-400 hover:text-on-surface dark:hover:text-white'
    }`;

  const slot3LabelText =
    routeCtx.stage === 'theme'
      ? 'Categories'
      : routeCtx.stage === 'category'
        ? 'Category Assets'
        : routeCtx.stage === 'asset'
          ? routeCtx.parentCategoryTitle
          : 'Themes';

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-colors duration-200 backdrop-blur-md border-b ${
          scrolled
            ? 'bg-surface/95 dark:bg-[#09090b]/95 border-outline-variant/50 dark:border-white/[0.12]'
            : 'bg-surface/90 dark:bg-[#09090b]/90 border-outline-variant/35 dark:border-white/[0.08]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-8 h-16 flex items-center justify-between gap-2 sm:gap-4">
          {/* LEFT: Spatial Anchor Brand Wordmark */}
          <Link
            href="/"
            onClick={() => setDropdownSource(null)}
            className="font-serif text-[15px] sm:text-xl font-semibold tracking-tight text-on-surface dark:text-white hover:opacity-85 transition-opacity whitespace-nowrap shrink-0"
          >
            Heritage Archive
          </Link>

          {/* MOBILE (< md): Compact Split Progressive Context Slot */}
          <div ref={mobileSlotRef} className="md:hidden relative flex items-center">
            {hasDropdownForStage ? (
              <div className="inline-flex items-center border border-[#8c5d12]/40 dark:border-[#d4af37]/40 border-b-2 border-b-[#8c5d12] dark:border-b-[#d4af37] bg-[#8c5d12]/[0.06] dark:bg-[#d4af37]/[0.08] text-[#8c5d12] dark:text-[#d4af37]">
                <button
                  type="button"
                  onClick={handleSlot3LabelClick}
                  className="pl-2.5 pr-1.5 min-h-[38px] text-xs font-medium whitespace-nowrap cursor-pointer"
                >
                  {slot3LabelText}
                </button>
                <span className="w-px h-4 bg-[#8c5d12]/25 dark:bg-[#d4af37]/25" />
                <button
                  type="button"
                  onClick={handleCaretClick}
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="menu"
                  aria-label={`Open ${slot3LabelText} directory`}
                  className="px-2 min-h-[38px] inline-flex items-center justify-center cursor-pointer"
                >
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-150 ${
                      isDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
            ) : routeCtx.stage === 'category' ? (
              <button
                type="button"
                onClick={handleSlot3LabelClick}
                className="inline-flex items-center gap-1 px-2.5 min-h-[38px] border border-[#8c5d12]/40 dark:border-[#d4af37]/40 border-b-2 border-b-[#8c5d12] dark:border-b-[#d4af37] bg-[#8c5d12]/[0.06] dark:bg-[#d4af37]/[0.08] text-xs font-medium text-[#8c5d12] dark:text-[#d4af37] whitespace-nowrap cursor-pointer"
              >
                <span>Category Assets</span>
                <ArrowDown className="w-3 h-3" />
              </button>
            ) : (
              <Link
                href={routeCtx.parentCategoryHref}
                className="inline-flex items-center gap-1 px-2.5 min-h-[38px] border border-[#8c5d12]/40 dark:border-[#d4af37]/40 border-b-2 border-b-[#8c5d12] dark:border-b-[#d4af37] bg-[#8c5d12]/[0.06] dark:bg-[#d4af37]/[0.08] text-xs font-medium text-[#8c5d12] dark:text-[#d4af37] max-w-[130px]"
              >
                <ArrowLeft className="w-3 h-3 shrink-0" />
                <span className="truncate">{routeCtx.parentCategoryTitle}</span>
              </Link>
            )}

            {isDropdownOpen && hasDropdownForStage && (
              <div className="fixed left-3 right-3 top-[68px] z-50 flex justify-center">
                <ContextDropdownPanel
                  stage={routeCtx.stage}
                  activeTheme={routeCtx.activeTheme}
                  onScrollQuickAction={handleSlot3LabelClick}
                  onNavigateItem={() => setDropdownSource(null)}
                />
              </div>
            )}
          </div>

          {/* CENTER (Desktop md+): Locked 4-Slot Spatial Anchor Navigation */}
          <nav
            aria-label="Primary archive navigation"
            className="hidden md:flex items-center gap-5 lg:gap-8"
          >
            {/* Slot 1: Home */}
            <button
              type="button"
              onClick={() => handleHomeAnchor('top', '/')}
              className={fixedNavLinkClass(
                routeCtx.isHome && activeHomeSection === 'home'
              )}
            >
              Home
            </button>

            {/* Slot 2: Formats */}
            <button
              type="button"
              onClick={() => handleHomeAnchor('whats-inside', '/#whats-inside')}
              className={fixedNavLinkClass(
                routeCtx.isHome && activeHomeSection === 'formats'
              )}
            >
              Formats
            </button>

            {/* Slot 3: Progressive Context Directory Slot (Stable Anchor Width) */}
            <div
              ref={dropdownContainerRef}
              onMouseEnter={
                hasDropdownForStage ? handleDesktopHoverEnter : undefined
              }
              onMouseLeave={
                hasDropdownForStage ? handleDesktopHoverLeave : undefined
              }
              className="relative flex items-center justify-center min-w-[132px] lg:min-w-[162px]"
            >
              {hasDropdownForStage ? (
                <div className="inline-flex items-center border border-[#8c5d12]/40 dark:border-[#d4af37]/40 border-b-2 border-b-[#8c5d12] dark:border-b-[#d4af37] bg-[#8c5d12]/[0.06] dark:bg-[#d4af37]/[0.08] text-[#8c5d12] dark:text-[#d4af37]">
                  <button
                    type="button"
                    onClick={handleSlot3LabelClick}
                    className="pl-3 pr-2 py-1.5 text-sm font-medium whitespace-nowrap hover:text-on-surface dark:hover:text-white transition-colors cursor-pointer"
                  >
                    {slot3LabelText}
                  </button>
                  <span
                    aria-hidden="true"
                    className="w-px h-4 bg-[#8c5d12]/25 dark:bg-[#d4af37]/25"
                  />
                  <button
                    type="button"
                    onClick={handleCaretClick}
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="menu"
                    aria-label={`Open ${slot3LabelText} menu`}
                    className="pl-2 pr-2.5 py-1.5 inline-flex items-center justify-center hover:text-on-surface dark:hover:text-white transition-colors cursor-pointer"
                  >
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-150 ${
                        isDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>
              ) : routeCtx.stage === 'category' ? (
                <button
                  type="button"
                  onClick={handleSlot3LabelClick}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#8c5d12]/40 dark:border-[#d4af37]/40 border-b-2 border-b-[#8c5d12] dark:border-b-[#d4af37] bg-[#8c5d12]/[0.06] dark:bg-[#d4af37]/[0.08] text-sm font-medium text-[#8c5d12] dark:text-[#d4af37] hover:bg-[#8c5d12]/12 dark:hover:bg-[#d4af37]/14 whitespace-nowrap transition-colors cursor-pointer"
                >
                  <span>Category Assets</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </button>
              ) : (
                <Link
                  href={routeCtx.parentCategoryHref}
                  title={`Back to ${routeCtx.parentCategoryTitle}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#8c5d12]/40 dark:border-[#d4af37]/40 border-b-2 border-b-[#8c5d12] dark:border-b-[#d4af37] bg-[#8c5d12]/[0.06] dark:bg-[#d4af37]/[0.08] text-sm font-medium text-[#8c5d12] dark:text-[#d4af37] hover:bg-[#8c5d12]/12 dark:hover:bg-[#d4af37]/14 max-w-[190px] lg:max-w-[220px] transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{routeCtx.parentCategoryTitle}</span>
                </Link>
              )}

              {/* Desktop Popover Panel */}
              {isDropdownOpen && hasDropdownForStage && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50">
                  <ContextDropdownPanel
                    stage={routeCtx.stage}
                    activeTheme={routeCtx.activeTheme}
                    onScrollQuickAction={handleSlot3LabelClick}
                    onNavigateItem={() => setDropdownSource(null)}
                  />
                </div>
              )}
            </div>

            {/* Slot 4: Featured */}
            <button
              type="button"
              onClick={() => handleHomeAnchor('trending', '/#trending')}
              className={fixedNavLinkClass(
                routeCtx.isHome && activeHomeSection === 'featured'
              )}
            >
              Featured
            </button>
          </nav>

          {/* RIGHT: Locked Action Frame */}
          <div className="flex items-center gap-0.5 sm:gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => {
                setDropdownSource(null);
                setSearchOpen(true);
              }}
              aria-label="Search archive (Command K)"
              className="inline-flex items-center justify-center gap-2 min-w-[40px] min-h-[40px] md:min-w-0 md:min-h-0 md:h-9 px-2 md:px-3 md:border border-outline-variant/45 dark:border-white/15 bg-transparent hover:border-on-surface/40 dark:hover:border-white/30 text-xs text-on-surface-variant dark:text-neutral-300 hover:text-on-surface dark:hover:text-white transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4 md:w-3.5 md:h-3.5 shrink-0" />
              <span className="hidden lg:inline">Search</span>
              <span className="hidden xl:inline font-mono text-[11px] opacity-60">
                ⌘K
              </span>
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                mounted && theme === 'light'
                  ? 'Switch to dark mode'
                  : 'Switch to light mode'
              }
              className="inline-flex items-center justify-center min-w-[40px] min-h-[40px] md:min-w-0 md:min-h-0 md:w-9 md:h-9 text-on-surface-variant dark:text-neutral-300 hover:text-on-surface dark:hover:text-white transition-colors cursor-pointer"
            >
              {mounted && theme === 'light' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>

            <a
              href={VIRTUAL_TOUR_MUSEUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 h-9 px-3.5 bg-on-surface text-surface dark:bg-[#f5f3ee] dark:text-[#111114] hover:opacity-90 text-xs font-medium whitespace-nowrap transition-opacity"
            >
              <span>Virtual Tour</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </a>
          </div>
        </div>

        {/* SLIM SUB-PAGE BREADCRUMB STRIP (Hidden on Home) */}
        {!routeCtx.isHome && (
          <div className="border-t border-outline-variant/30 dark:border-white/[0.08] bg-surface-container-low/65 dark:bg-[#0c0c0e]/95">
            <div className="max-w-7xl mx-auto px-3 sm:px-8 min-h-[38px] py-1.5 flex items-center justify-between gap-3">
              <nav
                aria-label="Breadcrumb"
                className="flex-1 min-w-0 flex items-center gap-1.5 text-xs text-on-surface-variant dark:text-neutral-400 overflow-x-auto scrollbar-none whitespace-nowrap"
              >
                <Link
                  href="/"
                  className="hover:text-on-surface dark:hover:text-white transition-colors shrink-0"
                >
                  Home
                </Link>

                {routeCtx.activeTheme && (
                  <>
                    <ChevronRight className="w-3.5 h-3.5 opacity-55 shrink-0" />
                    {routeCtx.stage === 'theme' ? (
                      <span className="font-medium text-on-surface dark:text-white">
                        {routeCtx.activeTheme.number}. {routeCtx.activeTheme.title}
                      </span>
                    ) : (
                      <Link
                        href={`/themes/${routeCtx.activeTheme.slug}`}
                        className="hover:text-[#8c5d12] dark:hover:text-[#d4af37] transition-colors"
                      >
                        {routeCtx.activeTheme.number}. {routeCtx.activeTheme.title}
                      </Link>
                    )}
                  </>
                )}

                {(routeCtx.activeCategory || routeCtx.legacyCategory) && (
                  <>
                    <ChevronRight className="w-3.5 h-3.5 opacity-55 shrink-0" />
                    {routeCtx.stage === 'category' ? (
                      <span className="font-medium text-on-surface dark:text-white">
                        {routeCtx.activeCategory
                          ? `${routeCtx.activeCategory.number}. ${routeCtx.activeCategory.title}`
                          : routeCtx.legacyCategory?.label}
                      </span>
                    ) : (
                      <Link
                        href={routeCtx.parentCategoryHref}
                        className="hover:text-[#8c5d12] dark:hover:text-[#d4af37] transition-colors"
                      >
                        {routeCtx.activeCategory
                          ? `${routeCtx.activeCategory.number}. ${routeCtx.activeCategory.title}`
                          : routeCtx.legacyCategory?.label}
                      </Link>
                    )}
                  </>
                )}

                {routeCtx.stage === 'asset' && routeCtx.activeAsset && (
                  <>
                    <ChevronRight className="w-3.5 h-3.5 opacity-55 shrink-0" />
                    <span className="font-medium text-on-surface dark:text-white truncate max-w-[180px] sm:max-w-[320px]">
                      {routeCtx.activeAsset.title}
                    </span>
                  </>
                )}
              </nav>

              <button
                type="button"
                onClick={handleSubpageBack}
                className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1 border border-outline-variant/45 dark:border-white/15 hover:border-[#8c5d12]/50 dark:hover:border-[#d4af37]/50 text-xs font-medium text-on-surface-variant dark:text-neutral-300 hover:text-[#8c5d12] dark:hover:text-[#d4af37] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            </div>
          </div>
        )}
      </header>

      <SearchArchiveModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSearchChange={onSearchChange}
      />
    </>
  );
}
