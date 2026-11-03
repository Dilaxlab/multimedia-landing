'use client';

import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { VideoVignette } from '@/types/media';

interface VideoPlayerModalProps {
  vignette?: VideoVignette | null;
  video?: VideoVignette | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoPlayerModal({ vignette, video, isOpen, onClose }: VideoPlayerModalProps) {
  const activeVignette = video || vignette;
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentSeconds, setCurrentSeconds] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentSeconds(prev => (prev + 1) % 31);
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlaying]);

  useEffect(() => {
    if (isOpen) {
      setIsPlaying(true);
      setCurrentSeconds(0);
    } else {
      setIsPlaying(false);
    }
  }, [isOpen]);

  if (!isOpen || !activeVignette) return null;

  const currentSceneIndex = currentSeconds <= 10 ? 0 : (currentSeconds <= 20 ? 1 : 2);
  const progressPercent = (currentSeconds / 30) * 100;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#0e0e10]/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full bg-surface-container-low border border-primary/40 rounded-2xl p-3.5 sm:p-6 shadow-2xl flex flex-col gap-4 max-h-[92vh] overflow-y-auto cursor-default"
      >
        
        {/* Modal Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-primary/20 gap-3">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center font-mono font-bold text-xs shrink-0">
              0:30
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-serif text-sm sm:text-base text-on-surface truncate font-bold">{activeVignette.title}</h3>
              <p className="text-[10px] sm:text-xs text-primary uppercase truncate font-mono">
                {activeVignette.inventor} • {activeVignette.narrator}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition cursor-pointer shrink-0"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cinematic Video Stage */}
        <div className="relative aspect-video rounded-xl overflow-hidden bg-surface-container-lowest border border-primary/25 shadow-2xl flex flex-col justify-between">
          <img
            src={activeVignette.thumbnailUrl}
            alt={activeVignette.title}
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-surface-container-lowest/60"></div>

          {/* Center Play/Pause Trigger */}
          <div className="relative z-10 flex-1 flex items-center justify-center">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 rounded-full bg-primary/90 hover:bg-primary text-on-primary flex items-center justify-center shadow-[0_0_35px_rgba(212,175,55,0.6)] hover:scale-110 transition"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 fill-current text-surface-container-lowest" />
              ) : (
                <Play className="w-8 h-8 fill-current text-surface-container-lowest ml-1" />
              )}
            </button>
          </div>

          {/* 3-Scene Timeline Scrubber HUD */}
          <div className="relative z-10 p-4 bg-surface-container-lowest/85 backdrop-blur-md flex flex-col gap-2.5 border-t border-primary/15">
            <div className="flex items-center justify-between text-on-surface-variant font-mono text-[9px] sm:text-[11px] uppercase">
              <span className={currentSceneIndex === 0 ? "text-primary font-bold" : ""}>
                1: Problem (0-10s)
              </span>
              <span className={currentSceneIndex === 1 ? "text-primary font-bold" : ""}>
                2: Breakthrough (10-20s)
              </span>
              <span className={currentSceneIndex === 2 ? "text-primary font-bold" : ""}>
                3: Legacy (20-30s)
              </span>
            </div>

            {/* Segmented Progress Track */}
            <div className="w-full h-1.5 rounded-full bg-surface-container-high relative overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Bottom Scrubber Actions */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-on-surface hover:text-primary transition"
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4 ml-0.5" />
                  )}
                </button>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  0:{currentSeconds < 10 ? '0' : ''}{currentSeconds} / 0:30
                </span>
                <span className="font-label-sm text-label-sm text-primary font-semibold">
                  {activeVignette.scenes[currentSceneIndex].title}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="text-on-surface hover:text-primary transition"
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Scene Detailed Narrative Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {activeVignette.scenes.map((scene, idx) => (
            <div
              key={idx}
              className={`p-3.5 rounded-xl border transition-all ${
                idx === currentSceneIndex
                  ? 'bg-surface-container border-primary shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                  : 'bg-surface-container-lowest/80 border-surface-container-highest/60'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-label-sm text-label-sm text-primary uppercase font-bold">
                  {scene.title}
                </span>
                <span className="font-label-sm text-[10px] text-on-surface-variant">
                  {scene.timeRange}
                </span>
              </div>
              <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                {scene.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
