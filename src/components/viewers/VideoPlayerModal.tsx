'use client';

import React, { useState, useEffect } from 'react';
import { X, Subtitles } from 'lucide-react';
import { VideoVignette } from '@/types/media';
import YouTubeVideoPlayer from '@/components/viewers/YouTubeVideoPlayer';

interface VideoPlayerModalProps {
  vignette?: VideoVignette | null;
  video?: VideoVignette | null;
  isOpen: boolean;
  initialCaptionsOn?: boolean;
  onClose: () => void;
}

export default function VideoPlayerModal({
  vignette,
  video,
  isOpen,
  initialCaptionsOn = true,
  onClose,
}: VideoPlayerModalProps) {
  const activeVignette = video || vignette;
  const [captionsOn, setCaptionsOn] = useState<boolean>(initialCaptionsOn);

  useEffect(() => {
    setCaptionsOn(initialCaptionsOn);
  }, [initialCaptionsOn]);

  if (!isOpen || !activeVignette) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#0e0e10]/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full bg-surface-container-low border border-primary/40 rounded-2xl p-3 sm:p-6 shadow-2xl flex flex-col gap-4 max-h-[92vh] overflow-y-auto cursor-default"
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-primary/20 gap-3">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center font-mono font-bold text-xs shrink-0">
              0:30
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-serif text-sm sm:text-base text-on-surface truncate font-bold">
                {activeVignette.title}
              </h3>
              <p className="text-[10px] sm:text-xs text-primary uppercase truncate font-mono">
                {activeVignette.inventor} • {activeVignette.narrator}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Quick Caption Toggle Button */}
            <button
              onClick={() => setCaptionsOn(!captionsOn)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono transition cursor-pointer ${
                captionsOn
                  ? 'bg-primary/20 border-primary text-primary font-bold shadow-sm'
                  : 'bg-surface-container border-outline-variant/30 text-on-surface-variant hover:text-on-surface'
              }`}
              title="Toggle Captions"
            >
              <Subtitles className="w-3.5 h-3.5" />
              <span>CC: {captionsOn ? 'ON' : 'OFF'}</span>
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition cursor-pointer shrink-0"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* YouTube Style Video Player with Captions & Fullscreen */}
        <div className="w-full">
          <YouTubeVideoPlayer
            video={activeVignette}
            autoPlay={true}
            initialCaptionsOn={captionsOn}
          />
        </div>

        {/* 3-Scene Detailed Narrative Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {activeVignette.scenes.map((scene, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl border bg-surface-container-lowest/80 border-surface-container-highest/60 hover:border-primary/50 transition-all"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-label-sm text-label-sm text-primary uppercase font-bold">
                  {scene.title}
                </span>
                <span className="font-label-sm text-[10px] text-on-surface-variant font-mono">
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

