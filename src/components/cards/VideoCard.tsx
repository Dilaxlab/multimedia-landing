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
    <div 
      onClick={() => onPlay(item)}
      className="p-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col justify-between gap-3 cursor-pointer group border border-outline-variant/20 hover:border-primary/50 shadow-md"
    >
      <div className="w-full h-36 rounded-lg overflow-hidden relative bg-black">
        <img
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          alt={item.title}
          src={item.thumbnailUrl}
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
          <span className="w-10 h-10 rounded-full bg-primary/90 text-surface-container-lowest flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Play className="w-5 h-5 fill-current ml-0.5" />
          </span>
        </div>
        <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 font-mono text-[10px] text-primary font-medium">
          {item.duration}
        </span>
      </div>

      <div className="flex flex-col gap-1.5 flex-1 min-w-0">
        <h4 className="font-serif text-sm text-on-surface group-hover:text-primary transition-colors line-clamp-1 font-medium">
          {item.title}
        </h4>
        <span className="font-mono text-[11px] text-primary truncate">
          {item.inventor}
        </span>
        <p className="font-sans text-xs text-on-surface-variant line-clamp-2 leading-relaxed">
          {item.shortDesc}
        </p>
      </div>

      <div className="pt-2 border-t border-outline-variant/15 flex items-center justify-between text-[10px] font-mono text-on-surface-variant">
        <span>3 SCENES // 30s MASTER</span>
        <span className="text-primary group-hover:translate-x-0.5 transition-transform">PLAY REEL →</span>
      </div>
    </div>
  );
}
