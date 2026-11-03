'use client';

import React, { useState } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import AssetCollection from '@/components/sections/AssetCollection';
import SpatialGallery from '@/components/sections/SpatialGallery';
import VideoGallery from '@/components/sections/VideoGallery';
import MultimediaMasonry from '@/components/sections/MultimediaMasonry';
import DossierView from '@/components/sections/DossierView';
import { MOCK_HISTORICAL_ASSETS } from '@/lib/constants';
import { HistoricalAsset } from '@/types/asset';

export default function HomePage() {
  const [selectedAsset, setSelectedAsset] = useState<HistoricalAsset>(MOCK_HISTORICAL_ASSETS[0]);
  const [spatialAssetId, setSpatialAssetId] = useState<string>('HA-101');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showDossierModal, setShowDossierModal] = useState<boolean>(false);

  const handleSelectAsset = (asset: HistoricalAsset) => {
    setSelectedAsset(asset);
    setShowDossierModal(true);
    // Smooth scroll to explore section if not opening modal
    const exploreEl = document.getElementById('explore');
    if (exploreEl) {
      exploreEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExplore3D = (asset: HistoricalAsset) => {
    setSelectedAsset(asset);
    setSpatialAssetId(asset.id);
    const galleryEl = document.getElementById('gallery3d');
    if (galleryEl) {
      galleryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* SECTION 1: Hero Section */}
      <HeroSection
        onExploreCollection={() => {
          const el = document.getElementById('collection');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onWatchStories={() => {
          const el = document.getElementById('videos');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onExploreAsset={(id) => {
          window.location.href = `/inventions/${id}`;
        }}
      />

      {/* SECTION 2: Historical Asset Collection */}
      <AssetCollection
        assets={MOCK_HISTORICAL_ASSETS}
        onSelectAsset={handleSelectAsset}
        onExplore3D={handleExplore3D}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* SECTION 3: Interactive 3D Model Gallery */}
      <SpatialGallery
        selectedAssetId={spatialAssetId}
        onSelectAssetId={setSpatialAssetId}
        onSelectAssetForDossier={(asset) => {
          setSelectedAsset(asset);
          const el = document.getElementById('explore');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* SECTION 4: Historical Narration Video Gallery */}
      <VideoGallery />

     

      {/* SECTION 6: Explore an Invention Detailed Experience */}
      <DossierView
        asset={selectedAsset}
        onClose={
          showDossierModal
            ? () => {
                setShowDossierModal(false);
                const colEl = document.getElementById('collection');
                if (colEl) colEl.scrollIntoView({ behavior: 'smooth' });
              }
            : undefined
        }
      />
    </div>
  );
}
