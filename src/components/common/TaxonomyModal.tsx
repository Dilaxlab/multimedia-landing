'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Network,
  X,
  Search,
  SlidersHorizontal,
  ArrowRight,
  Filter,
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
      }, 80);

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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-surface-container border border-outline-variant/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[88vh] sm:max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ========================================================
            MODAL HEADER: Matches Primary Registry style
           ======================================================== */}
        <div className="p-4 sm:p-6 border-b border-outline-variant/20 flex items-start sm:items-center justify-between gap-4 bg-surface-container-high/50">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Network className="w-4 h-4 text-primary" />
              <span className="text-[11px] font-mono tracking-widest text-primary uppercase">
                IAMS Taxonomy Register
              </span>
              <span className="text-[11px] font-mono text-on-surface-variant">
                • 64 Disciplines
              </span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-on-surface font-normal">
              Filter Archival Assets by Discipline
            </h3>
            <p className="text-xs text-on-surface-variant font-mono mt-1">
              Select or search any historical engineering classification to filter the collection.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors shrink-0 cursor-pointer"
            aria-label="Close taxonomy modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* ========================================================
            DISTINCT & CLEAN SEARCH BAR (Clean Contrast, Zero Overglow)
           ======================================================== */}
        <div className="p-4 sm:p-5 bg-surface-container-low border-b border-outline-variant/20 space-y-3">
          {/* Defined Search Capsule */}
          <div className="flex items-center gap-2.5 px-3 py-2 bg-surface-container-lowest border border-outline-variant/40 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 rounded-xl transition-all">
            <Search className="w-4 h-4 text-primary shrink-0" />

            <input
              ref={inputRef}
              type="text"
              placeholder="Search disciplines (e.g. steam, optics, telephony, pneumatic, time)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none font-mono"
            />

            {search && (
              <button
                onClick={() => {
                  setSearch('');
                  inputRef.current?.focus();
                }}
                className="text-xs text-on-surface-variant hover:text-primary font-mono shrink-0 cursor-pointer px-1.5 py-0.5 rounded hover:bg-surface-container-high transition-colors"
              >
                CLEAR
              </button>
            )}

            <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-surface-container border border-outline-variant/30 text-[11px] font-mono text-on-surface-variant shrink-0">
              {filtered.length} of {TAXONOMY_MASTER_LIST.length}
            </span>
          </div>

          {/* Quick Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 scrollbar-none text-xs">
            <span className="text-[11px] font-mono text-on-surface-variant uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3 text-primary" />
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
                  className={`shrink-0 px-2.5 py-1 rounded-lg font-mono text-[11px] transition-colors cursor-pointer border ${
                    isSelected
                      ? 'bg-primary text-surface-container-lowest font-medium border-primary'
                      : 'bg-surface-container border-outline-variant/30 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                  }`}
                >
                  {tag.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            CATEGORIES GRID: Clean museum card design
           ======================================================== */}
        <div className="p-4 sm:p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
          {filtered.length === 0 ? (
            <div className="col-span-full py-14 text-center text-on-surface-variant font-mono text-sm">
              <p className="mb-3">No historical disciplines match &ldquo;{search}&rdquo;</p>
              <button
                onClick={() => setSearch('')}
                className="px-3.5 py-1.5 rounded-lg bg-surface-container-high text-xs font-mono text-primary hover:text-on-surface border border-outline-variant/30 cursor-pointer"
              >
                Reset Search
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
                  className={`group text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isCurrent
                      ? 'bg-primary/10 border-primary text-primary'
                      : 'bg-surface-container-high/40 hover:bg-surface-container-highest border-outline-variant/20 hover:border-primary/50 text-on-surface'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="font-mono text-[11px] text-primary/70 group-hover:text-primary shrink-0">
                      {String(idx + 1).padStart(2, '0')}.
                    </span>
                    <span className="text-xs font-sans group-hover:text-primary transition-colors truncate">
                      {item}
                    </span>
                  </div>

                  <ArrowRight className="w-3.5 h-3.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </button>
              );
            })
          )}
        </div>

        {/* ========================================================
            MODAL FOOTER
           ======================================================== */}
        <div className="p-3.5 sm:p-4 border-t border-outline-variant/20 bg-surface-container-low flex items-center justify-between text-[11px] font-mono text-on-surface-variant">
          <span>Showing {filtered.length} of {TAXONOMY_MASTER_LIST.length} cataloged domains</span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (onSelectCategory) onSelectCategory('');
                onClose();
              }}
              className="text-primary hover:underline cursor-pointer"
            >
              Clear Active Filter
            </button>
            <span>•</span>
            <span>ISO-IAMS-2024</span>
          </div>
        </div>
      </div>
    </div>
  );
}
