'use client';

import TaxonomyModal from '@/components/common/TaxonomyModal';
import { useTheme } from '@/components/common/ThemeProvider';
import { MOCK_HISTORICAL_ASSETS } from '@/lib/constants';
import {
  ArrowRight,
  BookOpen,
  Boxes,
  ChevronDown,
  Headphones,
  Home,
  Landmark,
  Layers,
  Lightbulb,
  Moon,
  Search,
  Sun,
  X,
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

type TabName = 'Home' | 'Inventions' | '3D Gallery' | 'Stories' | 'Disciplines';

interface NavbarProps {
  onSearchChange?: (val: string) => void;
  onOpenTaxonomy?: () => void;
}

export default function Navbar({ onSearchChange, onOpenTaxonomy }: NavbarProps) {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<TabName>('Home');
  const [isAudioTourActive, setIsAudioTourActive] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isTaxonomyOpen, setIsTaxonomyOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Language Dropdown States
  const [currentLang, setCurrentLang] = useState<string>('EN');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState<boolean>(false);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  // Scroll-spy: dynamically reflect active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;

      const sections: { id: string; tab: TabName }[] = [
        { id: 'hero', tab: 'Home' },
        { id: 'collection', tab: 'Inventions' },
        { id: 'gallery3d', tab: '3D Gallery' },
        { id: 'videos', tab: 'Stories' },
        { id: 'explore', tab: 'Disciplines' },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveTab(sections[i].tab);
            return;
          }
        }
      }
      setActiveTab('Home');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ⌘K / Ctrl+K and ESC Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsTaxonomyOpen(false);
        setIsLangDropdownOpen(false); // Close lang dropdown on ESC
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Click outside to close language dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus search input when modal opens
  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
  }, [isSearchOpen]);

  // Audio Tour chime playback
  const toggleAudioTour = () => {
    const nextState = !isAudioTourActive;
    setIsAudioTourActive(nextState);

    try {
      if (!audioContextRef.current && typeof window !== 'undefined') {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioCtx) audioContextRef.current = new AudioCtx();
      }
      if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }

      if (audioContextRef.current && nextState) {
        const ctx = audioContextRef.current;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now); // A4
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.3); // A5
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.35);
      }
    } catch {
      // AudioContext fallback handled silently
    }
  };

  const navItems: {
    name: TabName;
    label: string;
    href: string;
    icon: React.ReactNode;
    tooltip: string;
    action?: () => void;
  }[] = [
    {
      name: 'Home',
      label: 'Home',
      href: '/#hero',
      icon: <Home className="w-4 h-4 shrink-0 transition-colors" />,
      tooltip: 'Archive Entrance',
    },
    {
      name: 'Inventions',
      label: 'Inventions',
      href: '/#collection',
      icon: <Lightbulb className="w-4 h-4 shrink-0 transition-colors" />,
      tooltip: 'Historic Innovations',
    },
    {
      name: '3D Gallery',
      label: '3D Gallery',
      href: '/#gallery3d',
      icon: <Boxes className="w-4 h-4 shrink-0" />,
      tooltip: 'Photogrammetry Models',
    },
    {
      name: 'Stories',
      label: 'Stories',
      href: '/#videos',
      icon: <BookOpen className="w-4 h-4 shrink-0 transition-colors" />,
      tooltip: 'Archival Narratives',
    },
    {
      name: 'Disciplines',
      label: 'Disciplines',
      href: '/#collection',
      icon: <Layers className="w-4 h-4 shrink-0 transition-colors" />,
      tooltip: 'Fields of Study',
      action: () => {
        if (onOpenTaxonomy) onOpenTaxonomy();
        else setIsTaxonomyOpen(true);
      },
    },
  ];

  const filteredAssets = searchQuery.trim()
    ? MOCK_HISTORICAL_ASSETS.filter(
        (a) =>
          a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.inventor.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.patent.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : MOCK_HISTORICAL_ASSETS.slice(0, 4);

  const languages = ['EN', 'ES', 'FR', 'DE', 'TA'];

  return (
    <>
      {/* ==================== ICON-FORWARD NAVBAR ==================== */}
      <header className="sticky top-0 z-50 w-full px-3 py-3 md:px-8">
        <div className="max-w-6xl mx-auto backdrop-blur-xl dark:bg-[#0e0e13]/85 bg-[#faf8f4]/95 dark:border-white/10 border-[#d8cfbe]/80 hover:border-amber-500/30 rounded-2xl shadow-xl dark:shadow-2xl transition-all duration-300">
          <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 gap-2">
            {/* 1. COMPACT LOGO WITH CLASSICAL TEMPLE CREST */}
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-2.5 group select-none flex-shrink-0"
            >
              <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-amber-500/25 to-amber-600/10 border border-amber-500/40 group-hover:border-amber-400 group-hover:shadow-glow-gold transition-all duration-300">
                <Landmark className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif font-bold text-[10px] sm:text-[12px] tracking-[0.14em] sm:tracking-[0.2em] dark:text-white text-[#1a1918] group-hover:text-primary transition-colors uppercase">
                  Heritage Archive
                </span>
                <span className="text-[7px] sm:text-[8px] tracking-[0.18em] sm:tracking-[0.25em] uppercase text-primary font-medium font-sans">
                  Digital Museum
                </span>
              </div>
            </Link>

            {/* 2. ICON-FIRST NAV PILL — YOUR SECTIONS */}
            <nav className="hidden md:flex items-center p-1 dark:bg-black/40 bg-surface-container-high/60 dark:border-white/[0.08] border-outline-variant/30 rounded-xl backdrop-blur-md">
              <ul className="flex items-center gap-0.5">
                {navItems.map((item) => {
                  const isActive = activeTab === item.name;
                  return (
                    <li key={item.name} className="relative has-tooltip">
                      <Link
                        href={item.href}
                        onClick={(e) => {
                          setActiveTab(item.name);
                          if (item.action) {
                            item.action();
                          }
                        }}
                        className={`nav-item nav-icon-item group flex items-center px-3 py-2 rounded-lg transition-all ${
                          isActive
                            ? 'active-tab bg-gradient-to-r from-amber-500 to-yellow-500 text-neutral-950 font-semibold shadow-glow-pill'
                            : 'dark:text-neutral-400 text-[#5c5549] dark:hover:text-white hover:text-[#1a1918] dark:hover:bg-white/[0.06] hover:bg-black/[0.04]'
                        }`}
                      >
                        <span
                          className={
                            isActive
                              ? 'text-black stroke-[2.2] shrink-0'
                              : 'dark:text-neutral-400 text-[#5c5549] group-hover:text-primary transition-colors shrink-0'
                          }
                        >
                          {item.icon}
                        </span>
                        <span
                          className={`nav-label text-[10px] tracking-wide ${
                            isActive ? 'font-bold text-neutral-950' : 'font-medium'
                          }`}
                        >
                          {item.label}
                        </span>
                      </Link>
                      <div className="tooltip absolute -bottom-8 left-1/2 -translate-x-1/2 pointer-events-none px-2 py-0.5 rounded bg-surface-container-high border border-outline-variant/30 text-[10px] text-on-surface font-mono shadow-lg whitespace-nowrap z-50">
                        {item.tooltip}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* 3. ACTIONS */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Search */}
              <div className="relative has-tooltip">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  aria-label="Search"
                  className="p-2 rounded-xl dark:bg-white/[0.04] dark:hover:bg-white/[0.08] bg-surface-container hover:bg-surface-container-high dark:border-white/10 border-outline-variant/30 dark:text-neutral-300 text-on-surface hover:text-primary transition-all cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                </button>
                <div className="tooltip absolute -bottom-8 left-1/2 -translate-x-1/2 pointer-events-none px-2 py-0.5 rounded bg-surface-container-high border border-outline-variant/30 text-[10px] text-on-surface font-mono shadow-lg whitespace-nowrap z-50">
                  Search ⌘K
                </div>
              </div>

              {/* Audio Tour */}
              <div className="relative has-tooltip hidden sm:block">
                <button
                  onClick={toggleAudioTour}
                  aria-label="Audio Commentary"
                  className={`nav-icon-item flex items-center gap-1.5 px-2.5 py-2 rounded-xl border transition-all cursor-pointer ${
                    isAudioTourActive
                      ? 'border-amber-400 bg-amber-500/10 text-amber-400'
                      : 'dark:bg-white/[0.04] dark:hover:bg-white/[0.08] bg-surface-container hover:bg-surface-container-high dark:border-white/10 border-outline-variant/30 text-on-surface-variant hover:text-primary'
                  }`}
                >
                  <Headphones className="w-4 h-4 text-primary shrink-0" />
                  {isAudioTourActive ? (
                    <div className="flex items-center gap-0.5 h-3">
                      <span className="sound-bar w-0.5 bg-amber-400 rounded-full inline-block" />
                      <span className="sound-bar w-0.5 bg-amber-400 rounded-full inline-block" />
                      <span className="sound-bar w-0.5 bg-amber-400 rounded-full inline-block" />
                    </div>
                  ) : null}
                  <span
                    className={`nav-label text-[10px] ${
                      isAudioTourActive
                        ? 'font-semibold text-primary'
                        : 'font-medium text-on-surface'
                    }`}
                  >
                    {isAudioTourActive ? 'On' : 'Tour'}
                  </span>
                </button>
                <div className="tooltip absolute -bottom-8 left-1/2 -translate-x-1/2 pointer-events-none px-2 py-0.5 rounded bg-surface-container-high border border-outline-variant/30 text-[10px] text-on-surface font-mono shadow-lg whitespace-nowrap z-50">
                  {isAudioTourActive ? 'Voiceover Active' : 'Curator Voiceover'}
                </div>
              </div>

              {/* Theme Toggle Button (Light & Dark Mode Switcher) */}
              <div className="relative has-tooltip">
                <button
                  onClick={toggleTheme}
                  aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
                  className="p-2 rounded-xl dark:bg-white/[0.04] dark:hover:bg-white/[0.08] bg-surface-container hover:bg-surface-container-high dark:border-white/10 border-outline-variant/30 text-on-surface-variant hover:text-primary transition-all cursor-pointer flex items-center justify-center group"
                >
                  {theme === 'dark' ? (
                    <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
                  ) : (
                    <Moon className="w-4 h-4 text-amber-700 group-hover:-rotate-12 transition-transform duration-300" />
                  )}
                </button>
                <div className="tooltip absolute -bottom-8 left-1/2 -translate-x-1/2 pointer-events-none px-2 py-0.5 rounded bg-surface-container-high border border-outline-variant/30 text-[10px] text-on-surface font-mono shadow-lg whitespace-nowrap z-50">
                  {theme === 'dark' ? 'Parchment Light' : 'Nocturnal Dark'}
                </div>
              </div>

              <div className="hidden sm:block h-5 w-px dark:bg-white/10 bg-outline-variant/40 mx-0.5" />

              {/* Language Selector Dropdown (Replaced Explore Archives) */}
              <div className="relative" ref={langDropdownRef}>
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center gap-1 px-2 sm:px-3 py-2 rounded-xl dark:hover:bg-white/[0.06] hover:bg-black/[0.05] text-on-surface-variant hover:text-on-surface transition-colors text-[11px] sm:text-xs font-semibold tracking-wide cursor-pointer select-none"
                >
                  <span>{currentLang}</span>
                  <ChevronDown
                    className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-200 ${isLangDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isLangDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-24 bg-surface-container border border-outline-variant/30 rounded-xl shadow-xl overflow-hidden py-1 z-50 animate-fadeIn">
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setCurrentLang(lang);
                          setIsLangDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-xs font-mono transition-colors ${
                          currentLang === lang
                            ? 'bg-primary/10 text-primary font-bold'
                            : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* QUICK ARCHIVE SEARCH MODAL (⌘K) */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start sm:items-center justify-center p-3 sm:p-4 pt-16 sm:pt-0 animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsSearchOpen(false);
          }}
        >
          <div className="w-full max-w-md bg-surface-container-low dark:bg-[#121217] border border-outline-variant/40 dark:border-amber-500/30 rounded-2xl p-4 sm:p-5 shadow-2xl flex flex-col gap-3 sm:gap-4 max-h-[85vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                <Search className="w-4 h-4" />
                <span className="font-serif">Quick Archive Search</span>
              </div>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="w-9 h-9 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors shrink-0 cursor-pointer"
                aria-label="Close search modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Search Input Box */}
            <div className="relative">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Type artifact name or era..."
                value={searchQuery}
                onChange={(e) => {
                  const val = e.target.value;
                  setSearchQuery(val);
                  onSearchChange?.(val);
                }}
                className="w-full bg-surface-container dark:bg-black/60 border border-outline-variant/40 dark:border-white/15 rounded-xl px-4 py-2.5 text-sm text-on-surface dark:text-neutral-100 placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary font-mono transition"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    onSearchChange?.('');
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary text-xs font-mono"
                >
                  CLEAR
                </button>
              )}
            </div>

            {/* Quick Result List */}
            <div className="flex flex-col gap-1.5 max-h-60 overflow-y-auto">
              <span className="text-[10px] font-mono uppercase tracking-wider text-on-surface-variant px-1">
                {searchQuery
                  ? `Matching Inventions (${filteredAssets.length})`
                  : 'Featured Inventions'}
              </span>
              {filteredAssets.length === 0 ? (
                <div className="py-6 text-center text-xs font-mono text-on-surface-variant">
                  No artifacts found matching &ldquo;{searchQuery}&rdquo;
                </div>
              ) : (
                filteredAssets.map((asset) => (
                  <button
                    key={asset.id}
                    onClick={() => {
                      setIsSearchOpen(false);
                      router.push(`/inventions/${asset.id}`);
                    }}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-surface-container/60 dark:bg-white/[0.02] hover:bg-surface-container-high dark:hover:bg-white/[0.08] border border-outline-variant/20 dark:border-white/5 hover:border-primary/40 text-left transition group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg overflow-hidden bg-surface-container-highest dark:bg-neutral-900 shrink-0">
                        <img
                          src={asset.image}
                          alt={asset.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <span className="text-xs font-medium text-on-surface dark:text-neutral-200 group-hover:text-primary transition-colors block">
                          {asset.title}
                        </span>
                        <span className="text-[10px] font-mono text-on-surface-variant block">
                          {asset.inventor} • {asset.patent}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-on-surface-variant group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))
              )}
            </div>

            {/* Modal Footer Key Hint */}
            <div className="pt-2 border-t border-outline-variant/20 dark:border-white/10 flex items-center justify-between text-[10px] font-mono text-on-surface-variant">
            </div>
          </div>
        </div>
      )}

      {/* 64 Disciplines Taxonomy Modal */}
      <TaxonomyModal
        isOpen={isTaxonomyOpen}
        onClose={() => setIsTaxonomyOpen(false)}
        onSelectCategory={(category) => {
          setIsTaxonomyOpen(false);
          const el = document.getElementById('collection');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          const keyword = category
            ? category.toLowerCase().startsWith('test taxonomy')
              ? 'Test'
              : category.split(' ')[0]
            : '';
          window.dispatchEvent(new CustomEvent('heritage:filterCategory', { detail: keyword }));
          if (onSearchChange) onSearchChange(keyword);
        }}
      />
    </>
  );
}
