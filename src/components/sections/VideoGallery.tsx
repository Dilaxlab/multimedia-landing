'use client';

import React, { useState } from 'react';
import { Film, Clock, Play, PlayCircle, Subtitles } from 'lucide-react';
import { MOCK_VIDEO_VIGNETTES } from '@/lib/constants';
import { VideoVignette } from '@/types/media';
import VideoCard from '@/components/cards/VideoCard';
import VideoPlayerModal from '@/components/viewers/VideoPlayerModal';

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<VideoVignette | null>(null);
  const [captionsPreference, setCaptionsPreference] = useState<boolean>(true);
  const featuredVideo = MOCK_VIDEO_VIGNETTES[0]; // Alexander Graham Bell

  return (
    <section id="videos" className="relative py-12 sm:py-24 bg-surface text-on-surface border-t border-outline-variant/20 scroll-mt-20">
      {/* Background cinematic vignette glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-surface to-surface" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Film className="w-4 h-4 text-primary" />
              <span className="text-xs font-mono tracking-widest text-primary uppercase">
              Audiovisual Archive
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl tracking-tight text-on-surface font-normal">
              Historical Narration Video Gallery
            </h2>

          </div>


        </div>

        {/* Featured Documentary Spotlight Box */}
        <div className="mb-10 sm:mb-14 rounded-2xl border border-outline-variant/30 bg-surface-container-low overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Video Preview Thumbnail / Trigger */}
          <div
            onClick={() => setSelectedVideo(featuredVideo)}
            className="lg:col-span-7 relative min-h-[220px] sm:min-h-[300px] lg:min-h-[420px] bg-black group cursor-pointer overflow-hidden flex items-center justify-center"
          >
            {/* Background poster */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80"
              style={{ backgroundImage: `url(${featuredVideo.thumbnailUrl})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-black/60" />

            {/* Play Button Overlay */}
            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/90 text-surface-container-lowest flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-primary transition-all">
                <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1 text-surface-container-lowest" />
              </div>
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-outline-variant/40 text-[11px] font-mono text-on-surface tracking-wider">
                WATCH SPOTLIGHT REEL ({featuredVideo.duration})
              </span>
            </div>

            {/* Bottom time badge & Caption toggle */}
            <div className="absolute bottom-4 left-4 z-10 flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-outline-variant/30 text-[10px] font-mono text-primary font-semibold">
                FEATURED DOC
              </span>
              <span className="text-xs font-mono text-on-surface/90">
                {featuredVideo.scenes.length} Scenes Verified
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCaptionsPreference(!captionsPreference);
                }}
                className={`px-2.5 py-1 rounded-md backdrop-blur-md border text-[10px] font-mono flex items-center gap-1.5 transition cursor-pointer ${
                  captionsPreference
                    ? 'bg-primary/20 border-primary text-primary font-bold shadow-sm'
                    : 'bg-black/80 border-outline-variant/30 text-on-surface-variant hover:text-on-surface'
                }`}
                title="Toggle Captions Preference"
              >
                <Subtitles className="w-3.5 h-3.5" />
                <span>CC: {captionsPreference ? 'ON' : 'OFF'}</span>
              </button>
            </div>
          </div>

          {/* Featured Info Panel */}
          <div className="lg:col-span-5 p-5 sm:p-8 flex flex-col justify-between bg-surface-container-low">
            <div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-primary uppercase mb-2">
                <span>{featuredVideo.inventor}</span>
                <span>•</span>
                <span>{featuredVideo.assetId}</span>
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl text-on-surface font-normal mb-3">
                {featuredVideo.title}
              </h3>
              <p className="text-xs text-on-surface-variant font-sans leading-relaxed mb-6">
                {featuredVideo.shortDesc}
              </p>

              {/* 3-Scene Timeline Breakdown */}
              <div className="space-y-3 mb-6">
                <span className="text-[10px] font-mono text-on-surface-variant uppercase tracking-wider block">
                  Tripartite Scene Structure (30 Seconds)
                </span>
                {featuredVideo.scenes.map((scene, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-surface-container border border-outline-variant/20 flex items-start gap-3"
                  >
                    <span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-mono text-[10px]">
                      {scene.timeRange}
                    </span>
                    <div className="text-xs">
                      <span className="text-on-surface font-medium block">{scene.title}</span>
                      <span className="text-on-surface-variant text-[11px] leading-snug">{scene.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>

              {/* Play Button */}
              <button
                onClick={() => setSelectedVideo(featuredVideo)}
                className="w-full py-3.5 rounded-xl bg-primary text-surface-container-lowest font-bold font-mono text-xs flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-md group cursor-pointer"
              >
                <PlayCircle className="w-4 h-4" />
                <span>
                  PLAY CINEMATIC REEL
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Video Reel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {MOCK_VIDEO_VIGNETTES.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onPlay={setSelectedVideo}
            />
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      <VideoPlayerModal
        isOpen={!!selectedVideo}
        video={selectedVideo}
        initialCaptionsOn={captionsPreference}
        onClose={() => setSelectedVideo(null)}
      />
    </section>
  );
}
