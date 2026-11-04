'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Network,
  X,
  Search,
  SlidersHorizontal,
  Sparkles,
  ArrowRight,
  Filter,
  CheckCheck,
} from 'lucide-react';
import { TAXONOMY_MASTER_LIST } from '@/lib/constants';

interface TaxonomyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory?: (category: string) => void;
  activeCategory?: string;
}

// Popular domain shortcuts for rapid filtering
const QUICK_DOMAIN_TAGS = [
  { label: 'All (64)', query: '' },
  { label: 'Telephony & Sound', query: 'Telephony' },
  { label: 'Steam & Pressure', query: 'Steam' },
  { label: 'Aeronautics & Flight', query: 'Aero' },
  { label: 'Domestic Mechanics', query: 'Domestic' },
  { label: 'Horology & Clocks', query: 'Time' },
  { label: 'Computing Engines', query: 'Computing' },
  { label: 'Optics & Lenses', query: 'Optic' },
];

export default function TaxonomyModal({
  isOpen,
  onClose,
  onSelectCategory,
  activeCategory = '',
}: TaxonomyModalProps) {
  const [search, setSearch] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus search input when modal opens & handle Escape key
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = TAXONOMY_MASTER_LIST.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/90 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0f0f16] border-2 border-amber-500/40 rounded-3xl shadow-[0_0_60px_rgba(245,158,11,0.2)] overflow-hidden flex flex-col max-h-[90vh] sm:max-h-[86vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ========================================================
            MODAL HEADER: Clear Purpose & Action Explanation
           ======================================================== */}
        <div className="p-4 sm:p-6 border-b border-amber-500/20 flex items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-[#171724] via-[#12121b] to-[#171724]">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-[10px] font-mono font-bold tracking-widest text-amber-300 uppercase">
                <SlidersHorizontal className="w-3 h-3 text-amber-400" />
                IAMS Taxonomy &amp; Filter Directory
              </span>
              <span className="text-[10px] font-mono text-neutral-400">
                • 64 Registered Disciplines
              </span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-white font-normal tracking-tight">
              Filter Archival Assets by Discipline
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-sans mt-1 leading-relaxed">
              Select or search any historical engineering classification to immediately filter the
              main gallery.
            </p>
          </div>

          <button
            onClick={onClose}
            className="group flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-amber-400 text-neutral-400 hover:text-white transition-all cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <span className="text-[11px] font-mono hidden sm:inline">ESC</span>
            <X className="w-4 h-4 text-neutral-400 group-hover:text-amber-400 transition-colors" />
          </button>
        </div>

        {/* ========================================================
            HIGH-VISIBILITY SEARCH BAR CONTAINER (Striking Contrast)
           ======================================================== */}
        <div className="p-4 sm:p-5 bg-gradient-to-b from-[#181826] to-[#111119] border-b border-amber-500/25">
          {/* Distinct Search Capsule */}
          <div className="relative flex items-center gap-2 bg-[#08080d] border-2 border-amber-500/70 focus-within:border-amber-400 focus-within:ring-4 focus-within:ring-amber-500/25 rounded-2xl p-2 sm:p-2.5 transition-all shadow-[0_0_25px_rgba(245,158,11,0.18)]">
            {/* Search Pill Badge */}
            <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-amber-500/30 to-amber-600/30 text-amber-300 border border-amber-400/50 font-mono text-xs font-bold tracking-wider shrink-0 select-none shadow-sm">
              <Search className="w-4 h-4 text-amber-300 animate-pulse" />
              <span className="hidden sm:inline">SEARCH</span>
            </div>

            {/* Main Search Input */}
            <input
              ref={inputRef}
              type="text"
              placeholder="Type discipline name, patent term, or classification (e.g. Telephony, Steam, Optics, Acoustics)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent px-2 sm:px-3 py-1 text-sm sm:text-base text-white placeholder:text-neutral-400 focus:outline-none font-mono tracking-tight"
            />

            {/* Clear Button (Visible when typing) */}
            {search && (
              <button
                onClick={() => {
                  setSearch('');
                  inputRef.current?.focus();
                }}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white text-xs font-mono border border-neutral-700 shrink-0 transition-colors cursor-pointer"
                title="Clear search text"
              >
                <X className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">CLEAR</span>
              </button>
            )}

            {/* Counter Pill */}
            <div className="px-3 py-1.5 rounded-xl bg-amber-500/15 border border-amber-500/35 text-xs font-mono font-bold text-amber-300 shrink-0 whitespace-nowrap hidden sm:flex items-center gap-1">
              <span>{filtered.length}</span>
              <span className="text-amber-500/70 font-normal">/ {TAXONOMY_MASTER_LIST.length}</span>
            </div>
          </div>

          {/* Quick Filter Tag Buttons */}
          <div className="mt-3 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
            <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3 text-amber-400" />
              Quick:
            </span>
            {QUICK_DOMAIN_TAGS.map((tag) => {
              const isSelected =
                (tag.query === '' && search === '') ||
                (tag.query !== '' && search.toLowerCase() === tag.query.toLowerCase());
              return (
                <button
                  key={tag.label}
                  onClick={() => setSearch(tag.query)}
                  className={`shrink-0 px-2.5 py-1 rounded-lg font-mono text-[11px] transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-400 text-neutral-950 font-bold shadow-[0_0_10px_rgba(245,158,11,0.4)]'
                      : 'bg-neutral-800/80 hover:bg-neutral-700 text-neutral-300 hover:text-white border border-neutral-700/60'
                  }`}
                >
                  {tag.label}
                </button>
              );
            })}
          </div>

          {/* Helpful Click-To-Filter Hint */}
          <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono text-neutral-400">
            <span className="flex items-center gap-1.5 text-amber-300/80">
              <Sparkles className="w-3 h-3 text-amber-400" />
              Tip: Click any card below to apply it as the active filter in the gallery.
            </span>
            <span className="hidden md:inline text-neutral-400">
              Showing {filtered.length} matching disciplines
            </span>
          </div>
        </div>

        {/* ========================================================
            CATEGORIES GRID: Interactive discipline cards
           ======================================================== */}
        <div className="p-4 sm:p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3 bg-[#0c0c12]">
          {filtered.length === 0 ? (
            <div className="col-span-full py-16 text-center text-neutral-400 font-mono">
              <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mx-auto mb-3">
                <Search className="w-6 h-6 text-neutral-400" />
              </div>
              <h4 className="text-base text-white font-medium mb-1">
                No disciplines match &ldquo;{search}&rdquo;
              </h4>
              <p className="text-xs text-neutral-400 mb-4 max-w-sm mx-auto">
                Try searching by a broader keyword like &ldquo;Acoustic&rdquo;, &ldquo;Steam&rdquo;,
                or click Reset.
              </p>
              <button
                onClick={() => setSearch('')}
                className="px-4 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-mono font-bold transition-colors cursor-pointer"
              >
                Reset Search Filter
              </button>
            </div>
          ) : (
            filtered.map((item, idx) => {
              const isCurrent =
                activeCategory &&
                item.toLowerCase().includes(activeCategory.toLowerCase());

              return (
                <button
                  key={idx}
                  onClick={() => {
                    if (onSelectCategory) onSelectCategory(item);
                    onClose();
                  }}
                  className={`group relative text-left p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isCurrent
                      ? 'bg-amber-500/20 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.25)]'
                      : 'bg-[#151520] hover:bg-gradient-to-r hover:from-amber-500/15 hover:to-transparent border-neutral-800 hover:border-amber-400/70 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="font-mono text-xs text-amber-400/80 group-hover:text-amber-300 font-bold shrink-0">
                      {String(idx + 1).padStart(2, '0')}.
                    </span>
                    <span className="text-xs sm:text-sm font-sans text-neutral-200 group-hover:text-white transition-colors truncate font-medium">
                      {item}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] font-mono text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                    <span className="hidden sm:inline text-[10px]">Filter</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* ========================================================
            MODAL FOOTER: Standards & Quick Actions
           ======================================================== */}
        <div className="p-3.5 sm:p-4 border-t border-amber-500/20 bg-[#101018] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              IAMS Register • <strong>{TAXONOMY_MASTER_LIST.length} Disciplines</strong> Indexed
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (onSelectCategory) onSelectCategory('');
                onClose();
              }}
              className="text-amber-400 hover:text-amber-300 underline underline-offset-4 cursor-pointer text-[11px]"
            >
              Clear Active Filter
            </button>
            <span className="text-neutral-400">•</span>
            <span className="text-[11px] text-neutral-400">Standard: ISO-IAMS-2024</span>
          </div>
        </div>
      </div>
    </div>
  );
}
