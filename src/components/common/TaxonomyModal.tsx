'use client';

import React, { useState } from 'react';
import { Network, X, Search } from 'lucide-react';
import { TAXONOMY_MASTER_LIST } from '@/lib/constants';

interface TaxonomyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory?: (category: string) => void;
}

export default function TaxonomyModal({ isOpen, onClose, onSelectCategory }: TaxonomyModalProps) {
  const [search, setSearch] = useState('');

  if (!isOpen) return null;

  const filtered = TAXONOMY_MASTER_LIST.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-surface-container border border-outline-variant/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[88vh] sm:max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-outline-variant/20 flex items-center justify-between gap-3 bg-surface-container-high/50">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Network className="w-5 h-5 text-primary" />
              <span className="text-[11px] font-mono tracking-widest text-primary uppercase">IAMS Taxonomy Register</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-on-surface font-normal">
              64 Curated Historical Disciplines
            </h3>
            <p className="text-[11px] sm:text-xs text-on-surface-variant font-mono mt-0.5 sm:mt-1">
              Classified in accordance with the International Archive for Mechanical Standards (IAMS)
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/40 transition-colors shrink-0"
            aria-label="Close taxonomy modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Input */}
        <div className="px-4 py-3 sm:px-6 sm:py-4 bg-surface-container-low border-b border-outline-variant/20 flex items-center gap-3">
          <Search className="w-4 h-4 text-on-surface-variant shrink-0" />
          <input
            type="text"
            placeholder="Search disciplines (e.g. steam, optics, telephony, pneumatic)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none font-mono"
            autoFocus
          />
          {search && (
            <button 
              onClick={() => setSearch('')}
              className="text-xs text-on-surface-variant hover:text-primary font-mono"
            >
              CLEAR
            </button>
          )}
        </div>

        {/* Categories Grid */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.length === 0 ? (
            <div className="col-span-full py-12 text-center text-on-surface-variant font-mono text-sm">
              No historical disciplines match &ldquo;{search}&rdquo;
            </div>
          ) : (
            filtered.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (onSelectCategory) onSelectCategory(item);
                  onClose();
                }}
                className="text-left p-3.5 rounded-lg border border-outline-variant/20 bg-surface-container-high/40 hover:bg-surface-container-highest hover:border-primary/50 transition-all group flex items-start gap-3"
              >
                <span className="font-mono text-[10px] text-primary/70 mt-0.5 group-hover:text-primary">
                  {String(idx + 1).padStart(2, '0')}.
                </span>
                <span className="text-xs font-sans text-on-surface group-hover:text-primary transition-colors leading-relaxed">
                  {item}
                </span>
              </button>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-outline-variant/20 bg-surface-container-low flex items-center justify-between text-[11px] font-mono text-on-surface-variant">
          <span>Showing {filtered.length} of {TAXONOMY_MASTER_LIST.length} cataloged domains</span>
          <span>Standards Compliance: ISO-IAMS-2024</span>
        </div>
      </div>
    </div>
  );
}
