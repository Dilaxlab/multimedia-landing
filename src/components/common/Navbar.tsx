'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  ArrowLeft,
  BookOpen,
  Boxes,
  ChevronDown,
  ChevronRight,
  Film,
  Image as ImageIcon,
  Layers,
  Lock,
  LogOut,
  Menu,
  Moon,
  ScrollText,
  Search,
  Shield,
  Sparkles,
  Sun,
  User as UserIcon,
  X,
} from 'lucide-react';
import { useTheme } from '@/components/common/ThemeProvider';
import { useCategory } from '@/context/CategoryContext';
import { useAuth } from '@/context/AuthContext';
import { assetService } from '@/services/assetService';
import { HistoricalAsset } from '@/types/asset';
import { ALL_50_CATEGORIES, THEME_FAMILIES } from '@/data/taxonomy';
import {
  LAST_CATEGORY_STORAGE_KEY,
  resolveRouteContext,
} from '@/lib/routeContext';

export interface NavbarProps {
  onSearchChange?: (val: string) => void;
  onOpenTaxonomy?: () => void;
}

type ActivePanel = 'formats' | 'themes' | 'mobile' | 'profile' | null;

function getUserInitials(name: string): string {
  const cleaned = name
    .replace(/\([^)]*\)/g, '')
    .trim()
    .split(/\s+/)
    .filter((w) => w && !/^(dr|mr|mrs|ms|prof)\.?$/i.test(w));
  if (cleaned.length === 0) return 'HA';
  if (cleaned.length === 1) return cleaned[0].slice(0, 2).toUpperCase();
  return `${cleaned[0][0]}${cleaned[cleaned.length - 1][0]}`.toUpperCase();
}

const FORMAT_ITEMS = [
  {
    id: '3d',
    title: '3D Patent Models',
    subtitle: 'Orbit & inspect reconstructed mechanisms',
    icon: Boxes,
    href: '/#whats-inside',
  },
  {
    id: 'video',
    title: 'Video & Motion Studies',
    subtitle: 'Step-by-step mechanical demonstrations',
    icon: Film,
    href: '/#whats-inside',
  },
  {
    id: 'story',
    title: 'Narrated Stories',
    subtitle: 'Inventor breakthroughs & historical context',
    icon: ScrollText,
    href: '/#whats-inside',
  },
  {
    id: '2d',
    title: '2D Patent Plates',
    subtitle: 'High-resolution drawings & filing specs',
    icon: ImageIcon,
    href: '/#whats-inside',
  },
  {
    id: 'book',
    title: 'Illustrated Books',
    subtitle: 'Age-tailored editions & archival folios',
    icon: BookOpen,
    href: '/#whats-inside',
  },
  {
    id: 'library',
    title: 'Full Media Library',
    subtitle: 'Browse all formats across 50 categories',
    icon: Layers,
    href: '/media',
  },
];

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
  const { isAuthenticated } = useAuth();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const [matchingAssets, setMatchingAssets] = useState<HistoricalAsset[]>([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setMatchingAssets([]);
      return;
    }
    const timer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 30);
    return () => window.clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !isAuthenticated) {
      setMatchingAssets([]);
      return;
    }

    let cancelled = false;
    const debounce = window.setTimeout(async () => {
      setSearching(true);
      try {
        const res = await assetService.getAssets(
          query.trim() ? { q: query.trim() } : {}
        );
        if (!cancelled) {
          setMatchingAssets(res.slice(0, 8));
        }
      } catch {
        if (!cancelled) setMatchingAssets([]);
      } finally {
        if (!cancelled) setSearching(false);
      }
    }, 200);

    return () => {
      cancelled = true;
      window.clearTimeout(debounce);
    };
  }, [isOpen, isAuthenticated, query]);

  const matchingCategories = useMemo(() => {
    if (!isAuthenticated) return [];
    const q = query.trim().toLowerCase();
    if (!q) {
      return ALL_50_CATEGORIES.slice(0, 4);
    }

    return ALL_50_CATEGORIES.filter(
      (cat) =>
        cat.title.toLowerCase().includes(q) ||
        cat.quote.toLowerCase().includes(q) ||
        cat.number.includes(q)
    ).slice(0, 4);
  }, [query, isAuthenticated]);

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
        className="w-full max-w-2xl rounded-2xl bg-surface dark:bg-[#111114] border border-outline-variant/50 dark:border-white/15 shadow-2xl overflow-hidden animate-modalIn"
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
            placeholder="Search patent models, inventors, patents, or categories..."
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
          {!isAuthenticated ? (
            <div className="py-10 px-4 text-center space-y-3 rounded-xl border border-dashed border-outline-variant/45 dark:border-white/15">
              <Lock className="w-5 h-5 mx-auto text-[#8c5d12] dark:text-[#d4af37]" />
              <p className="font-serif text-lg font-medium text-on-surface dark:text-white">
                Sign in to search the Heritage Archive
              </p>
              <p className="text-xs text-on-surface-variant dark:text-neutral-400 max-w-sm mx-auto">
                Sign in with a member or curator account to search all 50 categories and patent dossiers.
              </p>
              <button
                type="button"
                onClick={() => handleNavigate('/login')}
                className="inline-flex items-center gap-2 min-h-[40px] px-4 py-2 rounded-full bg-on-surface text-surface dark:bg-[#f5f3ee] dark:text-[#111114] text-xs font-medium cursor-pointer"
              >
                Sign In to Search
              </button>
            </div>
          ) : (
            <>
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
                        className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl text-left hover:bg-surface-container-low dark:hover:bg-white/[0.05] border border-outline-variant/25 dark:border-white/[0.08] transition-colors cursor-pointer"
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
                  {searching
                    ? 'Searching archive...'
                    : query.trim()
                      ? 'Matching Records'
                      : 'Featured Records'}
                </div>
                {matchingAssets.length === 0 && matchingCategories.length === 0 ? (
                  <div className="px-3 py-8 text-center text-sm text-on-surface-variant dark:text-neutral-400">
                    No archival records match &ldquo;{query}&rdquo;.
                  </div>
                ) : (
                  <div className="divide-y divide-outline-variant/25 dark:divide-white/[0.08] rounded-xl border border-outline-variant/25 dark:border-white/[0.08] overflow-hidden">
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
            </>
          )}
        </div>

        <div className="px-4 py-2.5 border-t border-outline-variant/30 dark:border-white/10 bg-surface-container-low/60 dark:bg-white/[0.02] flex items-center justify-between text-xs text-on-surface-variant dark:text-neutral-400">
          <span>Enter to open top match</span>
          <span>Esc to close</span>
        </div>
      </div>
    </div>
  );
}

export default function Navbar({ onSearchChange }: NavbarProps) {
  const pathname = usePathname() || '/';
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const { activeCategory } = useCategory();
  const { user, roles, isAuthenticated, canAccessAdmin, logout } = useAuth();

  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activePanel, setActivePanel] = useState<ActivePanel>(null);
  const [lastCategorySlug, setLastCategorySlug] = useState<string | null>(null);
  const [activeHomeSection, setActiveHomeSection] = useState<
    'home' | 'formats' | 'themes' | 'featured'
  >('home');

  const navShellRef = useRef<HTMLDivElement>(null);

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
    () => resolveRouteContext(pathname, lastCategorySlug, activeCategory || 'ALL'),
    [pathname, lastCategorySlug, activeCategory]
  );

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
    setActivePanel(null);
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
        setActivePanel(null);
        setSearchOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setActivePanel(null);
        setSearchOpen(false);
      }
    };

    const onOpenSearchEvent = () => {
      setActivePanel(null);
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
    if (!activePanel) return;
    const onPointerDown = (e: MouseEvent) => {
      if (!navShellRef.current?.contains(e.target as Node)) {
        setActivePanel(null);
      }
    };
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, [activePanel]);

  const handleHomeAnchor = useCallback(
    (sectionId: string, fallbackHref: string) => {
      setActivePanel(null);
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

  const togglePanel = (panel: ActivePanel) => {
    setActivePanel((prev) => (prev === panel ? null : panel));
  };

  const navPillClass = (active: boolean) =>
    `inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[13px] font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
      active
        ? 'bg-neutral-900/10 text-neutral-950 dark:bg-white/15 dark:text-white'
        : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-900/[0.05] dark:text-neutral-300 dark:hover:text-white dark:hover:bg-white/[0.08]'
    }`;

  return (
    <>
      <header className="sticky top-0 z-50 w-full px-3 sm:px-6 pt-3 pb-1 pointer-events-none">
        <div
          ref={navShellRef}
          className={`pointer-events-auto mx-auto transition-all duration-300 rounded-2xl border backdrop-blur-2xl ${
            activePanel === 'themes' || activePanel === 'formats'
              ? 'max-w-[740px]'
              : 'max-w-[700px]'
          } ${
            scrolled || activePanel
              ? 'bg-white/85 dark:bg-[#14161b]/88 border-black/[0.1] dark:border-white/[0.15] shadow-[0_14px_40px_-10px_rgba(0,0,0,0.18)] dark:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.65)]'
              : 'bg-white/75 dark:bg-[#14161b]/75 border-black/[0.08] dark:border-white/[0.12] shadow-[0_8px_28px_-8px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_36px_-10px_rgba(0,0,0,0.45)]'
          }`}
        >
          {/* TOP COMPACT BAR */}
          <div className="h-12 px-2.5 sm:px-3.5 flex items-center justify-between gap-2">
            {/* Brand Emblem */}
            <Link
              href="/"
              onClick={() => setActivePanel(null)}
              aria-label="Heritage Archive Home"
              className="flex items-center gap-2 pl-1 pr-1.5 py-1 rounded-full hover:bg-black/[0.04] dark:hover:bg-white/[0.08] transition-colors shrink-0"
            >
              <span className="w-7 h-7 rounded-full bg-neutral-900 dark:bg-white/15 text-white flex items-center justify-center border border-black/10 dark:border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              </span>
              <span className="hidden sm:inline font-serif text-sm font-semibold tracking-tight text-neutral-900 dark:text-white">
                Heritage
              </span>
            </Link>

            {/* Desktop Center Links: Home, Formats, Themes, Media, Featured */}
            <nav
              aria-label="Primary archive navigation"
              className="hidden md:flex items-center gap-0.5"
            >
              <button
                type="button"
                onClick={() => handleHomeAnchor('top', '/')}
                className={navPillClass(
                  routeCtx.isHome &&
                    activeHomeSection === 'home' &&
                    !activePanel
                )}
              >
                Home
              </button>

              {routeCtx.stage === 'asset' ? (
                <button
                  type="button"
                  onClick={() => togglePanel('formats')}
                  aria-expanded={activePanel === 'formats'}
                  className={navPillClass(activePanel === 'formats')}
                >
                  <span>Formats</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 opacity-70 transition-transform duration-200 ${
                      activePanel === 'formats' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => handleHomeAnchor('whats-inside', '/#whats-inside')}
                  className={navPillClass(
                    routeCtx.isHome &&
                      activeHomeSection === 'formats' &&
                      !activePanel
                  )}
                >
                  Formats
                </button>
              )}

              <button
                type="button"
                onClick={() => togglePanel('themes')}
                aria-expanded={activePanel === 'themes'}
                className={navPillClass(
                  activePanel === 'themes' ||
                    routeCtx.stage === 'theme' ||
                    routeCtx.stage === 'category' ||
                    (routeCtx.isHome &&
                      activeHomeSection === 'themes' &&
                      !activePanel)
                )}
              >
                <span>Themes</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 opacity-70 transition-transform duration-200 ${
                    activePanel === 'themes' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <Link
                href="/media"
                onClick={() => setActivePanel(null)}
                className={navPillClass(
                  routeCtx.stage === 'media' && !activePanel
                )}
              >
                Media
              </Link>

              <button
                type="button"
                onClick={() => handleHomeAnchor('trending', '/#trending')}
                className={navPillClass(
                  routeCtx.isHome &&
                    activeHomeSection === 'featured' &&
                    !activePanel
                )}
              >
                Featured
              </button>
            </nav>

            {/* Right Compact Actions */}
            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={() => {
                  setActivePanel(null);
                  setSearchOpen(true);
                }}
                aria-label="Search archive (Command K)"
                title="Search (⌘K)"
                className="w-8 h-8 rounded-full inline-flex items-center justify-center text-neutral-600 hover:text-neutral-950 hover:bg-black/[0.05] dark:text-neutral-300 dark:hover:text-white dark:hover:bg-white/[0.1] transition-colors cursor-pointer"
              >
                <Search className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={toggleTheme}
                aria-label={
                  mounted && theme === 'light'
                    ? 'Switch to dark mode'
                    : 'Switch to light mode'
                }
                className="w-8 h-8 rounded-full inline-flex items-center justify-center text-neutral-600 hover:text-neutral-950 hover:bg-black/[0.05] dark:text-neutral-300 dark:hover:text-white dark:hover:bg-white/[0.1] transition-colors cursor-pointer"
              >
                {mounted && theme === 'light' ? (
                  <Moon className="w-3.5 h-3.5" />
                ) : (
                  <Sun className="w-3.5 h-3.5" />
                )}
              </button>

              {isAuthenticated && user ? (
                <button
                  type="button"
                  onClick={() => togglePanel('profile')}
                  aria-expanded={activePanel === 'profile'}
                  aria-label="Open profile details"
                  title={user.name}
                  className={`inline-flex items-center gap-1.5 h-8 pl-1 pr-2 rounded-full border transition-all cursor-pointer ${
                    activePanel === 'profile'
                      ? 'bg-neutral-900 text-white border-neutral-900 dark:bg-white/20 dark:text-white dark:border-white/30'
                      : 'bg-black/[0.05] hover:bg-black/[0.09] text-neutral-900 border-black/[0.08] dark:bg-white/[0.1] dark:hover:bg-white/[0.18] dark:text-white dark:border-white/[0.15]'
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-neutral-900 text-amber-300 dark:bg-amber-400/20 dark:text-amber-300 text-[11px] font-semibold flex items-center justify-center shrink-0">
                    {getUserInitials(user.name)}
                  </span>
                  <ChevronDown
                    className={`w-3 h-3 opacity-70 transition-transform duration-200 ${
                      activePanel === 'profile' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setActivePanel(null)}
                  className="inline-flex items-center gap-1.5 h-8 px-3.5 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white/15 dark:hover:bg-white/25 dark:text-white border border-transparent dark:border-white/20 text-xs font-medium whitespace-nowrap transition-colors"
                >
                  <span>Sign In</span>
                </Link>
              )}

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => togglePanel('mobile')}
                aria-label="Toggle navigation menu"
                aria-expanded={activePanel === 'mobile'}
                className="md:hidden w-8 h-8 rounded-full inline-flex items-center justify-center text-neutral-700 hover:bg-black/[0.06] dark:text-neutral-200 dark:hover:bg-white/[0.1] transition-colors cursor-pointer"
              >
                {activePanel === 'mobile' ? (
                  <X className="w-4 h-4" />
                ) : (
                  <Menu className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* INLINE EXPANDING PANEL: FORMATS (Asset Page Only — 2-Column Framer Grid) */}
          {activePanel === 'formats' && routeCtx.stage === 'asset' && (
            <div className="px-2.5 pb-2.5 pt-2 border-t border-black/[0.06] dark:border-white/[0.09] animate-fadeIn">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {FORMAT_ITEMS.map((item) => {
                  const Icon = item.icon;
                  const isLibrary = item.id === 'library';
                  if (isLibrary) {
                    return (
                      <Link
                        key={item.id}
                        href={item.href}
                        onClick={() => setActivePanel(null)}
                        className="group flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-black/[0.045] dark:hover:bg-white/[0.09] transition-colors"
                      >
                        <span className="mt-0.5 w-7 h-7 rounded-lg bg-black/[0.05] dark:bg-white/[0.08] flex items-center justify-center text-neutral-700 dark:text-neutral-200 group-hover:text-amber-600 dark:group-hover:text-amber-300 shrink-0 transition-colors">
                          <Icon className="w-3.5 h-3.5" />
                        </span>
                        <div className="min-w-0">
                          <div className="text-[13px] font-medium text-neutral-900 dark:text-white leading-tight">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5 truncate">
                            {item.subtitle}
                          </div>
                        </div>
                      </Link>
                    );
                  }

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setActivePanel(null);
                        if (typeof window !== 'undefined') {
                          window.history.replaceState(null, '', `#${item.id}`);
                        }
                        document
                          .getElementById(item.id)
                          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                      className="group flex items-start gap-3 px-3 py-2.5 rounded-xl text-left hover:bg-black/[0.045] dark:hover:bg-white/[0.09] transition-colors cursor-pointer"
                    >
                      <span className="mt-0.5 w-7 h-7 rounded-lg bg-black/[0.05] dark:bg-white/[0.08] flex items-center justify-center text-neutral-700 dark:text-neutral-200 group-hover:text-amber-600 dark:group-hover:text-amber-300 shrink-0 transition-colors">
                        <Icon className="w-3.5 h-3.5" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-[13px] font-medium text-neutral-900 dark:text-white leading-tight">
                          {item.title}
                        </div>
                        <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5 truncate">
                          {item.subtitle}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* INLINE EXPANDING PANEL: THEMES (2-Column Framer Grid; 5 on mobile + link to all 10) */}
          {activePanel === 'themes' && (
            <div className="px-2.5 pb-2.5 pt-2 border-t border-black/[0.06] dark:border-white/[0.09] animate-fadeIn">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-[60vh] overflow-y-auto">
                {THEME_FAMILIES.map((family, idx) => (
                  <Link
                    key={family.slug}
                    href={`/themes/${family.slug}`}
                    onClick={() => setActivePanel(null)}
                    className={`group items-start gap-3 px-3 py-2 rounded-xl hover:bg-black/[0.045] dark:hover:bg-white/[0.09] transition-colors ${
                      idx >= 5 ? 'hidden sm:flex' : 'flex'
                    }`}
                  >
                    <span className="mt-0.5 w-7 h-7 rounded-lg bg-black/[0.05] dark:bg-white/[0.08] flex items-center justify-center font-mono text-[11px] font-semibold text-neutral-700 dark:text-amber-300 shrink-0">
                      {family.number}
                    </span>
                    <div className="min-w-0">
                      <div className="text-[13px] font-medium text-neutral-900 dark:text-white leading-tight truncate">
                        {family.title}
                      </div>
                      <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5 truncate">
                        {family.categoryRange}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-2 pt-2 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between px-2">
                <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                  10 Theme Families · 50 Categories
                </span>
                <button
                  type="button"
                  onClick={() => handleHomeAnchor('themes', '/#themes')}
                  className="text-xs font-medium text-neutral-900 dark:text-amber-300 hover:underline cursor-pointer"
                >
                  View all 10 themes →
                </button>
              </div>
            </div>
          )}

          {/* INLINE EXPANDING PANEL: PROFILE DETAILS */}
          {activePanel === 'profile' && isAuthenticated && user && (
            <div className="px-3.5 pb-3.5 pt-3 border-t border-black/[0.06] dark:border-white/[0.09] animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-neutral-900 text-amber-300 dark:bg-amber-400/20 dark:text-amber-300 text-sm font-semibold flex items-center justify-center shrink-0">
                    {getUserInitials(user.name)}
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold text-neutral-900 dark:text-white truncate">
                        {user.name}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-amber-500/15 text-[#8c5d12] dark:text-amber-300 border border-amber-500/25">
                        {roles[0] || user.clearance_level}
                      </span>
                    </div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400 truncate mt-0.5">
                      {user.email}
                      {user.institution_name ? ` · ${user.institution_name}` : ''}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  {canAccessAdmin && (
                    <Link
                      href="/admin"
                      onClick={() => setActivePanel(null)}
                      className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full bg-black/[0.05] hover:bg-black/[0.1] dark:bg-white/[0.08] dark:hover:bg-white/[0.15] text-xs font-medium text-neutral-900 dark:text-white transition-colors"
                    >
                      <Shield className="w-3.5 h-3.5 text-amber-500 dark:text-amber-300" />
                      <span>Admin Studio</span>
                    </Link>
                  )}

                  

                  <button
                    type="button"
                    onClick={async () => {
                      setActivePanel(null);
                      await logout();
                      router.push('/');
                      router.refresh();
                    }}
                    className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full bg-red-500/10 hover:bg-red-500/20 text-xs font-medium text-red-600 dark:text-red-300 border border-red-500/20 transition-colors cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* INLINE MOBILE MENU DRAWER */}
          {activePanel === 'mobile' && (
            <div className="md:hidden px-2.5 pb-2.5 pt-2 border-t border-black/[0.06] dark:border-white/[0.09] animate-fadeIn">
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  type="button"
                  onClick={() => handleHomeAnchor('top', '/')}
                  className="px-3 py-2.5 rounded-xl text-left text-xs font-medium text-neutral-900 dark:text-white bg-black/[0.04] dark:bg-white/[0.07]"
                >
                  Home
                </button>
                <button
                  type="button"
                  onClick={() => handleHomeAnchor('whats-inside', '/#whats-inside')}
                  className="px-3 py-2.5 rounded-xl text-left text-xs font-medium text-neutral-900 dark:text-white bg-black/[0.04] dark:bg-white/[0.07]"
                >
                  Formats
                </button>
                <button
                  type="button"
                  onClick={() => togglePanel('themes')}
                  className="px-3 py-2.5 rounded-xl text-left text-xs font-medium text-neutral-900 dark:text-white bg-black/[0.04] dark:bg-white/[0.07] flex items-center justify-between"
                >
                  <span>Themes</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-70" />
                </button>
                <Link
                  href="/media"
                  onClick={() => setActivePanel(null)}
                  className="px-3 py-2.5 rounded-xl text-left text-xs font-medium text-neutral-900 dark:text-white bg-black/[0.04] dark:bg-white/[0.07]"
                >
                  Media
                </Link>
                <button
                  type="button"
                  onClick={() => handleHomeAnchor('trending', '/#trending')}
                  className="col-span-2 px-3 py-2.5 rounded-xl text-left text-xs font-medium text-neutral-900 dark:text-white bg-black/[0.04] dark:bg-white/[0.07]"
                >
                  Featured Patent Models
                </button>
              </div>
            </div>
          )}
        </div>

        {/* SLIM SUB-PAGE BREADCRUMB PILL (Hidden on Home) */}
        {!routeCtx.isHome && (
          <div className="pointer-events-auto max-w-[700px] mx-auto mt-1.5 px-3 py-1.5 rounded-xl border border-black/[0.08] dark:border-white/[0.1] bg-white/80 dark:bg-[#14161b]/80 backdrop-blur-xl flex items-center justify-between gap-2 text-xs">
            <nav
              aria-label="Breadcrumb"
              className="flex-1 min-w-0 flex items-center gap-1 text-neutral-500 dark:text-neutral-400 overflow-x-auto scrollbar-none whitespace-nowrap"
            >
              <Link
                href="/"
                className="hover:text-neutral-950 dark:hover:text-white transition-colors shrink-0"
              >
                Home
              </Link>

              {routeCtx.activeTheme && (
                <>
                  <ChevronRight className="w-3 h-3 opacity-55 shrink-0" />
                  {routeCtx.stage === 'theme' ? (
                    <span className="font-medium text-neutral-900 dark:text-white truncate">
                      {routeCtx.activeTheme.number}. {routeCtx.activeTheme.title}
                    </span>
                  ) : (
                    <Link
                      href={`/themes/${routeCtx.activeTheme.slug}`}
                      className="hover:text-neutral-950 dark:hover:text-white transition-colors truncate"
                    >
                      {routeCtx.activeTheme.number}. {routeCtx.activeTheme.title}
                    </Link>
                  )}
                </>
              )}

              {(routeCtx.activeCategory || routeCtx.legacyCategory) && (
                <>
                  <ChevronRight className="w-3 h-3 opacity-55 shrink-0" />
                  {routeCtx.stage === 'category' ? (
                    <span className="font-medium text-neutral-900 dark:text-white truncate">
                      {routeCtx.activeCategory
                        ? `${routeCtx.activeCategory.number}. ${routeCtx.activeCategory.title}`
                        : routeCtx.legacyCategory?.label}
                    </span>
                  ) : (
                    <Link
                      href={routeCtx.parentCategoryHref}
                      className="hover:text-neutral-950 dark:hover:text-white transition-colors truncate"
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
                  <ChevronRight className="w-3 h-3 opacity-55 shrink-0" />
                  <span className="font-medium text-neutral-900 dark:text-white truncate max-w-[160px] sm:max-w-[240px]">
                    {routeCtx.activeAsset.title}
                  </span>
                </>
              )}

              {routeCtx.stage === 'media' && (
                <>
                  <ChevronRight className="w-3 h-3 opacity-55 shrink-0" />
                  <span className="font-medium text-neutral-900 dark:text-white">
                    Media Library
                  </span>
                </>
              )}
            </nav>

            <button
              type="button"
              onClick={handleSubpageBack}
              className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/[0.05] dark:bg-white/[0.08] hover:bg-black/[0.1] dark:hover:bg-white/[0.14] text-[11px] font-medium text-neutral-700 dark:text-neutral-200 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>Back</span>
            </button>
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
