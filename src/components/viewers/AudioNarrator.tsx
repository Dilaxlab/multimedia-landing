'use client';

import React, { useState } from 'react';
import { Headphones } from 'lucide-react';

export default function AudioNarrator() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className={`flex items-center gap-2 px-3 h-10 rounded-lg border transition-all ${
          isPlaying
            ? 'bg-primary text-on-primary border-primary shadow-[0_0_12px_rgba(212,175,55,0.4)] font-bold'
            : 'bg-surface-container-low border-primary/20 text-[#f4f4f5] hover:text-primary hover:border-primary hover:bg-surface-container-high'
        }`}
        type="button"
        title="Toggle Audio Narration"
      >
        <Headphones className={`w-4 h-4 ${isPlaying ? 'animate-pulse text-on-primary' : 'text-primary'}`} />
        <span className="font-label-md text-label-md uppercase hidden xl:inline">
          {isPlaying ? 'Tour Playing (Atmos)' : 'Audio Tour'}
        </span>
      </button>
    </div>
  );
}
