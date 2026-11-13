'use client';

import React, { useState } from 'react';
import { Film, Clock, Play, PlayCircle, Subtitles } from 'lucide-react';
import { MOCK_VIDEO_VIGNETTES } from '@/lib/constants';
import { VideoVignette } from '@/types/media';
import { CategoryFilterType } from '@/types/asset';
import VideoCard from '@/components/cards/VideoCard';
import VideoPlayerModal from '@/components/viewers/VideoPlayerModal';

interface VideoGalleryProps {
  category?: CategoryFilterType;
}

export default function VideoGallery({ category }: VideoGalleryProps = {}) {
  const [selectedVideo, setSelectedVideo] = useState<VideoVignette | null>(null);
  const [captionsPreference, setCaptionsPreference] = useState<boolean>(true);

  const filteredVideos =
    category && category !== 'ALL'
      ? MOCK_VIDEO_VIGNETTES.filter((v) => v.categoryId === category)
      : MOCK_VIDEO_VIGNETTES;

  const displayVideos = filteredVideos.length > 0 ? filteredVideos : MOCK_VIDEO_VIGNETTES;
  const featuredVideo = displayVideos[0];

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
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/50" />

            {/* Play Button Overlay */}
            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary text-neutral-950 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-primary/95 transition-all">
                <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1 text-neutral-950" />
              </div>
              <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[11px] font-mono text-white tracking-wider shadow-lg">
                WATCH SPOTLIGHT REEL ({featuredVideo.duration})
              </span>
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
                className="w-full py-3.5 rounded-xl bg-primary text-neutral-950 font-bold font-mono text-xs flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-md group cursor-pointer active:scale-95"
              >
                <PlayCircle className="w-4 h-4 text-neutral-950" />
                <span>
                  PLAY CINEMATIC REEL
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Video Reel Grid — Responsive 2-card grid on mobile, 4-card on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6">
          {displayVideos.map((video) => (
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
