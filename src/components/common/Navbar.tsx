'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useTheme } from '@/components/common/ThemeProvider';
import { useCategory } from '@/context/CategoryContext';
import {
  MOCK_HISTORICAL_ASSETS,
  OFFICIAL_18_CATEGORIES,
  CategoryMeta,
  VIRTUAL_TOUR_MUSEUM_URL,
} from '@/lib/constants';
import { getCategoryBySlug } from '@/data/taxonomy';
import {
  Home,
  Layers,
  BookOpen,
  Boxes,
  Film,
  FileText,
  Search,
  Glasses,
  Sun,
  Moon,
  ChevronDown,
  X,
  ArrowRight,
  ArrowUpRight,
  Landmark,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

interface NavbarProps {
  onSearchChange?: (val: string) => void;
  onOpenTaxonomy?: () => void;
}

type NavItem = {
  id: string;
  icon: React.ReactNode;
  label: string;
  tooltip: string;
  href?: string;
};

export default function Navbar({ onSearchChange }: NavbarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { activeCategoryMeta } = useCategory();

  const isHome = pathname === '/';
  const isTheme = pathname.startsWith('/themes/');
  const isCategorySlugRoute = pathname.startsWith('/categories/');
  const isCategory = isCategorySlugRoute || pathname.startsWith('/category/');
  const isAsset = pathname.startsWith('/inventions/');

  const categorySlug = isCategorySlugRoute
    ? pathname.split('/categories/')[1]?.split('/')[0]?.split('?')[0]
    : isCategory
      ? pathname.split('/category/')[1]?.split('/')[0]?.split('?')[0]?.toUpperCase()
      : null;

  const taxonomyMatch = isCategorySlugRoute && categorySlug ? getCategoryBySlug(categorySlug) : undefined;
  const themeBackHref = taxonomyMatch ? `/themes/${taxonomyMatch.theme.slug}` : '/#themes';

  const currentCategoryMeta: CategoryMeta | undefined =
    !isCategorySlugRoute && categorySlug
      ? OFFICIAL_18_CATEGORIES.find((c) => c.key === categorySlug) || activeCategoryMeta
      : activeCategoryMeta;

  const assetId = isAsset ? pathname.split('/inventions/')[1]?.split('?')[0]?.split('#')[0] : null;
  const currentAsset = assetId
    ? MOCK_HISTORICAL_ASSETS.find((a) => a.id.toLowerCase() === assetId.toLowerCase())
    : null;
  const assetCategoryMeta = currentAsset
    ? OFFICIAL_18_CATEGORIES.find((c) => c.key === currentAsset.category)
    : currentCategoryMeta;

  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentLang, setCurrentLang] = useState<string>('EN');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  const languages = ['EN', 'ES', 'FR', 'DE', 'TA'];

  // Scroll-spy
  useEffect(() => {
    let sectionIds: string[] = [];
    if (isHome) sectionIds = ['hero', 'whats-inside', 'themes', 'trending', 'virtual-portal'];
    else if (isTheme) sectionIds = ['overview', 'categories', 'highlights'];
    else if (isCategory) sectionIds = ['assets', 'story', 'book', '3d', 'videos'];
    else if (isAsset) sectionIds = ['story', 'book', '3d', 'video'];
    if (sectionIds.length === 0) return;

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      setActiveSection(sectionIds[0]);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome, isTheme, isCategory, isAsset, pathname]);

  // Scrolled shrink
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if ((isHome && id === 'hero') || ((isCategory || isTheme) && id === 'overview')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection(id);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsLangDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isSearchOpen) setTimeout(() => searchInputRef.current?.focus(), 50);
  }, [isSearchOpen]);

  const filteredAssets = searchQuery.trim()
    ? MOCK_HISTORICAL_ASSETS.filter(
        (a) =>
          a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.inventor.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.patent.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : MOCK_HISTORICAL_ASSETS.slice(0, 4);

  // ===== Build the nav list per page =====
  const navItems: NavItem[] = isHome
    ? [
        { id: 'hero', icon: <Home className="w-3.5 h-3.5" />, label: 'Home', tooltip: 'Entrance' },
        {
          id: 'whats-inside',
          icon: <Sparkles className="w-3.5 h-3.5" />,
          label: "What's Inside",
          tooltip: 'Inside the Archive',
        },
        {
          id: 'themes',
          icon: <Layers className="w-3.5 h-3.5" />,
          label: 'Themes',
          tooltip: '10 Theme Families',
        },
        {
          id: 'trending',
          icon: <TrendingUp className="w-3.5 h-3.5" />,
          label: 'Trending',
          tooltip: 'Popular',
        },
      ]
    : isTheme
      ? [
          {
            id: 'home',
            icon: <Home className="w-3.5 h-3.5" />,
            label: 'Home',
            tooltip: 'Return',
            href: '/',
          },
          {
            id: 'overview',
            icon: <Sparkles className="w-3.5 h-3.5" />,
            label: 'Overview',
            tooltip: 'Theme Overview',
          },
          {
            id: 'categories',
            icon: <Layers className="w-3.5 h-3.5" />,
            label: 'Categories',
            tooltip: '5 Categories',
          },
          {
            id: 'highlights',
            icon: <TrendingUp className="w-3.5 h-3.5" />,
            label: 'Highlights',
            tooltip: 'Featured Artifacts',
          },
        ]
      : isCategory
        ? [
            {
              id: 'home',
              icon: <Home className="w-3.5 h-3.5" />,
              label: 'Theme',
              tooltip: 'Parent Theme',
              href: themeBackHref,
            },
            {
              id: 'assets',
              icon: <Layers className="w-3.5 h-3.5" />,
            label: 'Assets',
            tooltip: 'Assets',
          },
          {
            id: 'story',
            icon: <BookOpen className="w-3.5 h-3.5" />,
            label: 'Story',
            tooltip: 'Story',
          },
          {
            id: 'book',
            icon: <FileText className="w-3.5 h-3.5" />,
            label: 'Books',
            tooltip: 'Books',
          },
          {
            id: '3d',
            icon: <Boxes className="w-3.5 h-3.5" />,
            label: '3D Vault',
            tooltip: '3D Vault',
          },
          {
            id: 'videos',
            icon: <Film className="w-3.5 h-3.5" />,
            label: 'Videos',
            tooltip: 'Videos',
          },
        ]
      : [
          {
            id: 'home',
            icon: <Home className="w-3.5 h-3.5" />,
            label: 'Home',
            tooltip: 'Return',
            href: '/',
          },
          {
            id: 'story',
            icon: <BookOpen className="w-3.5 h-3.5" />,
            label: 'Story',
            tooltip: 'Story',
          },
          {
            id: 'book',
            icon: <FileText className="w-3.5 h-3.5" />,
            label: 'Books',
            tooltip: 'Books',
          },
          {
            id: '3d',
            icon: <Boxes className="w-3.5 h-3.5" />,
            label: '3D Model',
            tooltip: '3D Model',
          },
          {
            id: 'video',
            icon: <Film className="w-3.5 h-3.5" />,
            label: 'Video Reel',
            tooltip: 'Video Reel',
          },
        ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 backdrop-blur-xl ${
          scrolled
            ? 'dark:bg-[#0a0a0e]/95 bg-[#faf8f4]/95 border-b dark:border-white/10 border-[#d8cfbe]/80 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.6)]'
            : 'dark:bg-[#0c0d12]/85 bg-[#faf8f4]/90 border-b dark:border-white/5 border-[#d8cfbe]/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between gap-2 sm:gap-4 transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}
          >
            {/* ============ LEFT: BRAND ============ */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group select-none shrink-0"
              title="Heritage Archive Digital Museum"
            >
              <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-amber-500/25 to-amber-600/10 border border-amber-500/40 group-hover:border-amber-400 group-hover:shadow-glow-gold group-hover:rotate-3 transition-all duration-400">
                <Landmark className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
              </div>
              <div className="hidden lg:flex flex-col leading-tight">
                <span className="font-serif font-bold text-[11px] tracking-[0.16em] dark:text-white text-[#1a1918] group-hover:text-primary transition-colors uppercase">
                  Heritage Archive
                </span>
                <span className="text-[7.5px] tracking-[0.22em] uppercase text-primary font-medium font-sans">
                  Digital Museum
                </span>
              </div>
            </Link>

            {/* ============ CENTER: SEAMLESS PILL NAV ============ */}
            <nav className="hidden md:flex items-center justify-center">
              <ul className="flex items-center gap-0.5 p-1 rounded-full dark:bg-black/50 bg-black/[0.04] dark:border dark:border-white/[0.06] border border-black/[0.04] backdrop-blur-md">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  const content = (
                    <span
                      className={`nav-item group relative flex items-center px-2.5 lg:px-3 py-2 rounded-full transition-all duration-300 cursor-pointer min-h-[36px] overflow-hidden ${
                        isActive
                          ? 'active-tab text-neutral-950 font-bold'
                          : 'dark:text-neutral-400 text-[#5c5549] hover:text-[#1a1918] dark:hover:text-white'
                      }`}
                    >
                      {/* Active gold fill */}
                      {isActive && (
                        <span className="absolute inset-0 bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-500 rounded-full shadow-[0_4px_14px_-4px_rgba(251,191,36,0.65),inset_0_1px_0_rgba(255,255,255,0.4)]" />
                      )}
                      {/* Hover sweep (inactive) */}
                      {!isActive && (
                        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/0 via-amber-400/10 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      )}

                      {/* Icon */}
                      <span
                        className={`relative z-10 transition-transform duration-300 ease-out ${
                          isActive
                            ? 'text-neutral-900 scale-110'
                            : 'dark:text-neutral-400 text-[#5c5549] group-hover:text-primary group-hover:scale-110 group-hover:-rotate-3'
                        }`}
                      >
                        {item.icon}
                      </span>

                      {/* Label — reveal on hover/active */}
                      <span
                        className={`nav-label relative z-10 text-[10px] tracking-wide whitespace-nowrap overflow-hidden ${
                          isActive ? 'font-bold text-neutral-950' : 'font-medium'
                        }`}
                      >
                        {item.label}
                      </span>
                    </span>
                  );

                  return (
                    <li key={item.id} className="relative has-tooltip">
                      {item.href ? (
                        <Link href={item.href} className="contents">
                          {content}
                        </Link>
                      ) : (
                        <button onClick={() => scrollToSection(item.id)} className="contents">
                          {content}
                        </button>
                      )}
                      <div className="tooltip absolute -bottom-9 left-1/2 -translate-x-1/2 pointer-events-none px-2.5 py-1 rounded-md bg-[#0e0e13]/95 dark:bg-white text-white dark:text-neutral-900 border border-amber-400/30 text-[10px] font-mono shadow-lg whitespace-nowrap z-50 backdrop-blur-md">
                        {item.tooltip}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* ============ RIGHT: ACTION CLUSTER ============ */}
            <div className="flex items-center gap-2 shrink-0">
              {/* GROUP 1: Search + Theme + Language in one capsule */}
              <div className="flex items-center gap-0.5 p-1 rounded-full dark:bg-black/50 bg-black/[0.04] dark:border dark:border-white/[0.06] border border-black/[0.04] backdrop-blur-md">
                {/* Search */}
                <div className="relative has-tooltip">
                  <button
                    onClick={() => setIsSearchOpen(true)}
                    aria-label="Global Search"
                    className="group relative p-2 rounded-full dark:text-neutral-300 text-[#5c5549] hover:text-primary transition-all cursor-pointer flex items-center justify-center w-9 h-9 overflow-hidden hover:bg-amber-500/10"
                  >
                    <Search className="w-4 h-4 relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
                  </button>
                  <div className="tooltip absolute -bottom-9 left-1/2 -translate-x-1/2 pointer-events-none px-2.5 py-1 rounded-md bg-[#0e0e13]/95 dark:bg-white text-white dark:text-neutral-900 border border-amber-400/30 text-[10px] font-mono shadow-lg whitespace-nowrap z-50 backdrop-blur-md">
                    Search ⌘K
                  </div>
                </div>

                {/* Theme */}
                <div className="relative has-tooltip">
                  <button
                    onClick={toggleTheme}
                    aria-label="Toggle Theme"
                    className="group relative p-2 rounded-full dark:text-neutral-300 text-[#5c5549] hover:text-primary transition-all cursor-pointer flex items-center justify-center w-9 h-9 overflow-hidden hover:bg-amber-500/10"
                  >
                    {theme === 'dark' ? (
                      <Sun className="w-4 h-4 text-amber-400 relative z-10 group-hover:rotate-180 transition-transform duration-700" />
                    ) : (
                      <Moon className="w-4 h-4 text-[#5c5549] relative z-10 group-hover:-rotate-12 transition-transform duration-500" />
                    )}
                  </button>
                  <div className="tooltip absolute -bottom-9 left-1/2 -translate-x-1/2 pointer-events-none px-2.5 py-1 rounded-md bg-[#0e0e13]/95 dark:bg-white text-white dark:text-neutral-900 border border-amber-400/30 text-[10px] font-mono shadow-lg whitespace-nowrap z-50 backdrop-blur-md">
                    {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                  </div>
                </div>

                {/* Divider */}
                <span className="w-px h-5 dark:bg-white/10 bg-black/10 mx-0.5" />

                {/* Language */}
                <div className="relative" ref={langDropdownRef}>
                  <button
                    onClick={() => setIsLangDropdownOpen((prev) => !prev)}
                    className="group flex items-center gap-0.5 px-2 h-9 rounded-full dark:text-neutral-300 text-[#5c5549] hover:text-primary transition-all cursor-pointer text-[10px] font-mono font-semibold tracking-wider hover:bg-amber-500/10"
                    aria-expanded={isLangDropdownOpen}
                    aria-haspopup="true"
                  >
                    <span>{currentLang}</span>
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-300 ${
                        isLangDropdownOpen
                          ? 'rotate-180 text-primary'
                          : 'group-hover:translate-y-0.5'
                      }`}
                    />
                  </button>

                  {isLangDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-28 rounded-xl dark:bg-[#121217] bg-white border border-amber-400/30 shadow-2xl py-1 z-50 animate-fadeIn">
                      <div className="px-2.5 py-1 text-[9px] font-mono dark:text-neutral-500 text-neutral-400 uppercase tracking-wider border-b dark:border-white/10 border-black/5">
                        Language
                      </div>
                      {languages.map((lang) => (
                        <button
                          key={lang}
                          onClick={() => {
                            setCurrentLang(lang);
                            setIsLangDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3 py-1.5 text-xs font-mono flex items-center justify-between hover:bg-primary/10 hover:pl-4 transition-all duration-200 ${
                            currentLang === lang
                              ? 'text-primary font-bold bg-primary/5'
                              : 'dark:text-neutral-300 text-neutral-700'
                          }`}
                        >
                          <span>{lang}</span>
                          {currentLang === lang && (
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* GROUP 2: VIRTUAL TOUR — compact beacon */}
              <a
                href={VIRTUAL_TOUR_MUSEUM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Launch 3D Virtual Tour Museum"
                className="group relative flex items-center gap-2 pl-2 pr-3 h-9 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-neutral-950 font-bold text-[11px] tracking-wide transition-all duration-300 hover:shadow-[0_0_24px_-4px_rgba(251,191,36,0.7)] hover:scale-[1.02] active:scale-95 overflow-hidden shrink-0"
              >
                {/* Rotating halo */}
                <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-400/0 via-amber-400/40 to-amber-400/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 pointer-events-none" />
                {/* Shine */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />

                <span className="relative z-10 flex items-center justify-center w-6 h-6 rounded-full bg-neutral-950/90">
                  <Glasses className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300" />
                </span>
                <span className="relative z-10 hidden sm:inline">Virtual Tour</span>
                <ArrowUpRight className="w-3 h-3 relative z-10 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ============ SEARCH MODAL — refined ============ */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4 bg-black/60 backdrop-blur-md animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsSearchOpen(false);
          }}
        >
          <div className="w-full max-w-2xl rounded-2xl dark:bg-[#0e0e13] bg-white border dark:border-white/10 border-black/5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden animate-modalIn">
            {/* Input row */}
            <div className="flex items-center px-5 py-4 border-b dark:border-white/[0.08] border-black/5 gap-3">
              <Search className="w-5 h-5 text-primary shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (onSearchChange) onSearchChange(e.target.value);
                }}
                placeholder="Search inventions, inventors, patents…"
                className="w-full bg-transparent dark:text-white text-neutral-900 placeholder:dark:text-neutral-500 placeholder:text-neutral-400 font-mono text-sm focus:outline-none"
              />
              <kbd className="hidden sm:flex items-center px-1.5 py-0.5 rounded border dark:border-white/10 border-black/10 text-[10px] font-mono dark:text-neutral-500 text-neutral-500">
                ESC
              </kbd>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-1.5 rounded-lg dark:text-neutral-500 text-neutral-400 hover:text-primary hover:bg-primary/10 transition-all duration-300 cursor-pointer"
                aria-label="Close Search"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-[55vh] overflow-y-auto p-2">
              <div className="px-3 py-2 flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-[0.15em] dark:text-neutral-500 text-neutral-400">
                  {searchQuery ? `${filteredAssets.length} results` : 'Featured'}
                </span>
                <span className="text-[10px] font-mono dark:text-neutral-600 text-neutral-400">
                  ↵ to open
                </span>
              </div>

              {filteredAssets.length > 0 ? (
                <ul className="space-y-1">
                  {filteredAssets.map((asset) => (
                    <li key={asset.id}>
                      <button
                        onClick={() => {
                          setIsSearchOpen(false);
                          if (typeof window !== 'undefined')
                            window.scrollTo({ top: 0, behavior: 'instant' });
                          router.push(`/inventions/${asset.id}`);
                        }}
                        className="group w-full text-left flex items-center gap-3 p-3 rounded-xl transition-all duration-200 dark:hover:bg-white/[0.05] hover:bg-black/[0.03] border border-transparent hover:border-amber-400/20"
                      >
                        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-600/5 border border-amber-500/20 shrink-0">
                          <FileText className="w-4 h-4 text-amber-500" />
                        </span>
                        <span className="flex-1 min-w-0">
                          <span className="block text-sm font-serif font-semibold dark:text-neutral-100 text-neutral-900 group-hover:text-primary transition-colors truncate">
                            {asset.title}
                          </span>
                          <span className="block text-[11px] font-mono dark:text-neutral-500 text-neutral-500 mt-0.5 truncate">
                            {asset.inventor} · {asset.patent}
                          </span>
                        </span>
                        <ArrowRight className="w-4 h-4 dark:text-neutral-600 text-neutral-400 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="py-14 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <Search className="w-5 h-5 text-primary/60" />
                  </div>
                  <p className="text-xs font-mono dark:text-neutral-500 text-neutral-400">
                    No matches for &ldquo;{searchQuery}&rdquo;
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
