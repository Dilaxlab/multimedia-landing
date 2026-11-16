'use client';

import React, { useState } from 'react';
import { Play } from 'lucide-react';
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

  const filteredVideos =
    category && category !== 'ALL'
      ? MOCK_VIDEO_VIGNETTES.filter((v) => v.categoryId === category)
      : MOCK_VIDEO_VIGNETTES;

  const displayVideos = filteredVideos.length > 0 ? filteredVideos : MOCK_VIDEO_VIGNETTES;
  const featuredVideo = displayVideos[0];

  return (
    <section
      id="videos"
      className="scroll-mt-24 w-full py-12 sm:py-20 bg-surface dark:bg-[#050505] text-on-surface border-t border-outline-variant/40 dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Clean Editorial Header */}
        <div className="max-w-2xl pb-6 sm:pb-8 border-b border-outline-variant/40 dark:border-white/10 mb-8 sm:mb-10">
          <h2 className="font-serif text-[clamp(24px,3vw,38px)] font-semibold tracking-[-0.02em] leading-[1.15] text-on-surface dark:text-white">
            Video Documentary Archive
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-on-surface-variant dark:text-neutral-300 leading-relaxed">
            Short narrated clips explaining how machines in this category operate step by step.
          </p>
        </div>

        {/* Spotlight Feature */}
        {featuredVideo && (
          <div className="mb-8 sm:mb-12 border border-outline-variant/40 dark:border-white/10 bg-surface-container-lowest dark:bg-[#0b0b0e] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <button
              type="button"
              onClick={() => setSelectedVideo(featuredVideo)}
              aria-label={`Play spotlight video: ${featuredVideo.title}`}
              className="lg:col-span-7 relative min-h-[220px] sm:min-h-[320px] lg:min-h-[400px] bg-neutral-950 group cursor-pointer overflow-hidden flex items-center justify-center border-b lg:border-b-0 lg:border-r border-outline-variant/40 dark:border-white/10 text-left"
            >
              <img
                src={featuredVideo.thumbnailUrl}
                alt={featuredVideo.title}
                className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-on-surface text-surface dark:bg-[#f5f3ee] dark:text-[#111114] flex items-center justify-center shadow-xl transition-transform group-hover:scale-105">
                <Play className="w-6 h-6 fill-current ml-0.5" />
              </div>
            </button>

            <div className="lg:col-span-5 p-5 sm:p-8 flex flex-col justify-between gap-6">
              <div>
                <p className="text-xs font-mono text-[#8c5d12] dark:text-[#d4af37] mb-2">
                  {featuredVideo.inventor} · {featuredVideo.duration}
                </p>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-on-surface dark:text-white leading-snug">
                  {featuredVideo.title}
                </h3>
                <p className="mt-2.5 text-sm text-on-surface-variant dark:text-neutral-300 leading-relaxed">
                  {featuredVideo.shortDesc}
                </p>

                <div className="mt-5 pt-5 border-t border-outline-variant/30 dark:border-white/10 space-y-2.5">
                  <p className="text-xs font-medium text-on-surface-variant dark:text-neutral-400">
                    Video chapters ({featuredVideo.duration})
                  </p>
                  {featuredVideo.scenes.map((scene, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                      <span className="font-mono text-xs text-[#8c5d12] dark:text-[#d4af37] shrink-0 pt-0.5">
                        {scene.timeRange}
                      </span>
                      <div className="min-w-0">
                        <span className="font-medium text-on-surface dark:text-white block">
                          {scene.title}
                        </span>
                        <span className="text-xs text-on-surface-variant dark:text-neutral-400 leading-relaxed">
                          {scene.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedVideo(featuredVideo)}
                className="w-full min-h-[44px] py-3 px-5 bg-on-surface text-surface dark:bg-[#f5f3ee] dark:text-[#111114] text-sm font-medium inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Play Video Walkthrough</span>
              </button>
            </div>
          </div>
        )}

        {/* Video Card Grid — Readable Single Column on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayVideos.map((video) => (
            <VideoCard key={video.id} video={video} onPlay={setSelectedVideo} />
          ))}
        </div>
      </div>

      <VideoPlayerModal
        isOpen={!!selectedVideo}
        video={selectedVideo}
        initialCaptionsOn={true}
        onClose={() => setSelectedVideo(null)}
      />
    </section>
  );
}
