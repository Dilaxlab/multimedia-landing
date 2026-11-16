'use client';

import React from 'react';
import { Play } from 'lucide-react';
import { VideoVignette } from '@/types/media';

interface VideoCardProps {
  vignette?: VideoVignette;
  video?: VideoVignette;
  onPlay: (vignette: VideoVignette) => void;
}

export default function VideoCard({ vignette, video, onPlay }: VideoCardProps) {
  const item = video || vignette;
  if (!item) return null;

  return (
    <button
      type="button"
      onClick={() => onPlay(item)}
      className="group w-full text-left border border-outline-variant/40 dark:border-white/10 bg-surface-container-lowest dark:bg-[#111114] hover:border-[#8c5d12]/60 dark:hover:border-[#d4af37]/60 transition-colors flex flex-col justify-between overflow-hidden cursor-pointer"
    >
      <div>
        <div className="aspect-[16/10] w-full overflow-hidden relative bg-neutral-900 border-b border-outline-variant/30 dark:border-white/10">
          <img
            src={item.thumbnailUrl}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03] opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors flex items-center justify-center">
            <span className="w-11 h-11 rounded-full bg-on-surface text-surface dark:bg-[#f5f3ee] dark:text-[#111114] flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
              <Play className="w-4 h-4 fill-current ml-0.5" />
            </span>
          </div>
          <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 bg-black/80 text-white font-mono text-xs">
            {item.duration}
          </span>
        </div>

        <div className="p-4 sm:p-5">
          <p className="text-xs font-mono text-[#8c5d12] dark:text-[#d4af37] truncate">
            {item.inventor}
          </p>
          <h4 className="mt-1 font-serif text-base sm:text-lg font-medium text-on-surface dark:text-white group-hover:text-[#8c5d12] dark:group-hover:text-[#d4af37] transition-colors line-clamp-2 leading-snug">
            {item.title}
          </h4>
          <p className="mt-2 text-sm text-on-surface-variant dark:text-neutral-300 line-clamp-2 leading-relaxed">
            {item.shortDesc}
          </p>
        </div>
      </div>

      <div className="px-4 sm:px-5 py-3 border-t border-outline-variant/30 dark:border-white/10 flex items-center justify-between text-xs font-medium text-on-surface dark:text-neutral-200 group-hover:text-[#8c5d12] dark:group-hover:text-[#d4af37]">
        <span>Watch documentary clip</span>
        <Play className="w-3.5 h-3.5 shrink-0" />
      </div>
    </button>
  );
}
