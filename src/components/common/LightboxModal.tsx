'use client';

import React from 'react';
import { X } from 'lucide-react';
import { BlueprintMedia } from '@/types/media';

interface LightboxModalProps {
  item: BlueprintMedia | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function LightboxModal({ item, isOpen, onClose }: LightboxModalProps) {
  if (!isOpen || !item) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#0e0e10]/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-4 cursor-pointer animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full bg-surface-container-low border border-primary/40 rounded-2xl p-3 sm:p-6 shadow-2xl flex flex-col items-center cursor-default"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition border border-primary/20 cursor-pointer z-10"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        <img
          src={item.imageUrl}
          alt={item.title}
          className="max-h-[60vh] sm:max-h-[72vh] rounded-xl object-contain border border-primary/20 shadow-2xl mb-3 sm:mb-4"
        />

        <div className="text-center px-2">
          <h4 className="font-serif text-base sm:text-xl font-bold text-on-surface mb-1">
            {item.title}
          </h4>
          <p className="font-mono text-[11px] sm:text-xs text-primary uppercase">
            {item.format} • Accession #{item.accessionRef}
          </p>
        </div>
      </div>
    </div>
  );
}
