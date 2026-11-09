'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles } from 'lucide-react';
import AssetCollection from '@/components/sections/AssetCollection';
import { MOCK_HISTORICAL_ASSETS } from '@/lib/constants';
import { HistoricalAsset } from '@/types/asset';

export default function InventionsIndexPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSelectAsset = (asset: HistoricalAsset) => {
    window.location.href = `/inventions/${asset.id}`;
  };

  const handleExplore3D = (asset: HistoricalAsset) => {
    window.location.href = `/inventions/${asset.id}`;
  };

  return (
    <main className="min-h-screen bg-surface dark:bg-[#07090E] text-on-surface dark:text-neutral-200 pt-28 pb-20 transition-colors duration-300">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-1/4 w-[700px] h-[500px] bg-[radial-gradient(circle,_rgba(212,175,55,0.06)_0%,_transparent_70%)] blur-3xl" />
        <div className="absolute bottom-1/3 left-10 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(200,125,85,0.04)_0%,_transparent_70%)] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-mono text-on-surface-variant hover:text-primary transition-colors mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Main Archive
        </Link>

        {/* Inventions Registry Collection */}
        <AssetCollection
          assets={MOCK_HISTORICAL_ASSETS}
          onSelectAsset={handleSelectAsset}
          onExplore3D={handleExplore3D}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
      </div>
    </main>
  );
}
