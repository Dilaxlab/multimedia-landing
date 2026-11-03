'use client';

import React, { useState } from 'react';
import { Sparkles, Play } from 'lucide-react';
import { MOCK_BLUEPRINTS, MOCK_VIDEO_VIGNETTES } from '@/lib/constants';
import { BlueprintMedia, VideoVignette } from '@/types/media';
import PosterCard from '@/components/cards/PosterCard';
import LightboxModal from '@/components/common/LightboxModal';
import VideoPlayerModal from '@/components/viewers/VideoPlayerModal';

type MediaFilterCategory = 'ALL' | 'VIDEOS' | '3D' | 'IMAGES' | 'POSTERS';

export default function MultimediaMasonry() {
  const [activeTab, setActiveTab] = useState<MediaFilterCategory>('ALL');
  const [selectedLightboxItem, setSelectedLightboxItem] = useState<BlueprintMedia | null>(null);
  const [selectedVideoItem, setSelectedVideoItem] = useState<VideoVignette | null>(null);

  // Map filters
  const filteredBlueprints = MOCK_BLUEPRINTS.filter((item) => {
    if (activeTab === 'ALL') return true;
    if (activeTab === '3D') return item.type === '3D';
    if (activeTab === 'POSTERS') return item.type === 'POSTER';
    if (activeTab === 'IMAGES') return item.type === 'PLATE' || item.type === 'BLUEPRINT';
    return false;
  });

  const showVideos = activeTab === 'ALL' || activeTab === 'VIDEOS';

  return (
    <section id="multimedia" className="relative py-12 sm:py-24 bg-surface-container-lowest text-on-surface border-t border-outline-variant/20 scroll-mt-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-mono tracking-widest text-primary uppercase">
                Section 05 // Curatorial Media Archive
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl tracking-tight text-on-surface font-normal">
              Other Multimedia Content
            </h2>
            <p className="mt-3 text-sm md:text-base text-on-surface-variant max-w-2xl font-sans leading-relaxed">
              Explore historical storytelling posters, reconstructed invention schematics, collodion glass plates, and digital educational catalogue materials preserved under lossless digitization standards.
            </p>
          </div>

          {/* Media Category Filter Buttons */}
          <div className="flex items-center gap-1.5 p-1 sm:p-1.5 bg-surface-container border border-outline-variant/30 rounded-xl overflow-x-auto max-w-full scrollbar-none -mx-1 px-1 scroll-smooth">
            {(
              [
                { key: 'ALL', label: 'All Media' },
                { key: 'VIDEOS', label: 'Videos' },
                { key: '3D', label: '3D Models' },
                { key: 'IMAGES', label: 'Images' },
                { key: 'POSTERS', label: 'Posters' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all whitespace-nowrap ${
                  activeTab === tab.key
                    ? 'bg-primary text-surface-container-lowest font-medium shadow-md'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Video Reel Row (if Videos or All is active) */}
        {showVideos && (
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-primary uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Featured 30s Narration Reels
              </span>
              <span className="text-[11px] font-mono text-on-surface-variant">
                {MOCK_VIDEO_VIGNETTES.length} Documentaries Available
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {MOCK_VIDEO_VIGNETTES.map((vid) => (
                <div
                  key={vid.id}
                  onClick={() => setSelectedVideoItem(vid)}
                  className="group relative rounded-xl bg-surface-container-low border border-outline-variant/20 overflow-hidden cursor-pointer hover:border-primary/50 transition-all shadow-md"
                >
                  <div className="relative h-40 overflow-hidden bg-black">
                    <img
                      src={vid.thumbnailUrl}
                      alt={vid.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="w-10 h-10 rounded-full bg-primary/90 text-surface-container-lowest flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </span>
                    </div>
                    <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-primary font-semibold">
                      {vid.duration}
                    </span>
                  </div>
                  <div className="p-3">
                    <span className="text-xs font-serif text-on-surface block truncate font-medium group-hover:text-primary transition-colors">
                      {vid.title}
                    </span>
                    <span className="text-[10px] font-mono text-on-surface-variant block truncate mt-0.5">
                      {vid.inventor}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Blueprint & Poster Grid */}
        {activeTab !== 'VIDEOS' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-primary uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Schematics, Plates & Posters
              </span>
              <span className="text-[11px] font-mono text-on-surface-variant">
                {filteredBlueprints.length} Plates Cataloged
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {filteredBlueprints.map((item) => (
                <PosterCard
                  key={item.id}
                  item={item}
                  onOpenLightbox={setSelectedLightboxItem}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal for high-res plates */}
      <LightboxModal
        isOpen={!!selectedLightboxItem}
        item={selectedLightboxItem}
        onClose={() => setSelectedLightboxItem(null)}
      />

      {/* Video Modal Player */}
      <VideoPlayerModal
        isOpen={!!selectedVideoItem}
        video={selectedVideoItem}
        onClose={() => setSelectedVideoItem(null)}
      />
    </section>
  );
}
