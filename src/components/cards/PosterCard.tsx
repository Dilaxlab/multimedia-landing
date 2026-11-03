'use client';

import React from 'react';
import { ZoomIn } from 'lucide-react';
import { BlueprintMedia } from '@/types/media';

interface PosterCardProps {
  item: BlueprintMedia;
  onOpenLightbox: (item: BlueprintMedia) => void;
}

export default function PosterCard({ item, onOpenLightbox }: PosterCardProps) {
  return (
    <div 
      onClick={() => onOpenLightbox(item)}
      className="group relative rounded-xl bg-surface-container-low overflow-hidden cursor-pointer shadow-lg border border-primary/15 hover:border-primary/50 transition-all duration-300"
    >
      <div className="relative h-60 overflow-hidden bg-surface-container-lowest">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          alt={item.title}
          src={item.imageUrl}
        />
        <div className="absolute inset-0 bg-surface-container-lowest/40 group-hover:bg-surface-container-lowest/10 transition-colors flex items-center justify-center">
          <span className="w-10 h-10 rounded-full bg-surface-container-high/90 text-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
            <ZoomIn className="w-5 h-5 text-primary" />
          </span>
        </div>
        <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-surface-container-lowest/80 text-primary font-label-sm text-label-sm uppercase border border-primary/20">
          {item.typeLabel}
        </span>
      </div>

      <div className="p-3.5 flex flex-col gap-1 bg-surface-container-low">
        <span className="font-headline-sm text-headline-sm text-on-surface text-sm line-clamp-1">
          {item.title}
        </span>
        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase line-clamp-1">
          {item.format}
        </span>
      </div>
    </div>
  );
}
