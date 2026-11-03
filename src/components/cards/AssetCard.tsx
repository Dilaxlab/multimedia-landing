'use client';

import React from 'react';
import Link from 'next/link';
import { HistoricalAsset } from '@/types/asset';
import { ArrowRight, Box, User, Calendar, MapPin } from 'lucide-react';

interface AssetCardProps {
  asset: HistoricalAsset;
  onSelect?: (asset: HistoricalAsset) => void;
  onExplore?: (asset: HistoricalAsset) => void;
  onExplore3D?: (asset: HistoricalAsset) => void;
}

export default function AssetCard({ asset, onSelect, onExplore, onExplore3D }: AssetCardProps) {
  const handlePrimaryClick = () => {
    if (onSelect) onSelect(asset);
    else if (onExplore) onExplore(asset);
    else window.location.href = `/inventions/${asset.id}`;
  };

  return (
    <div className="group relative rounded-2xl bg-[#111111] overflow-hidden flex flex-col justify-between h-full transition-all duration-300 hover:translate-y-[-4px] border border-neutral-800 hover:border-amber-500/50 shadow-xl">
      <div className="flex flex-col">
        {/* Card Thumbnail Visual */}
        <div
          className="relative h-56 sm:h-60 overflow-hidden bg-[#1A1A1A] flex items-center justify-center cursor-pointer"
          onClick={handlePrimaryClick}
        >
          <img
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
            alt={asset.title}
            src={asset.image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />

          {/* Top Right Badge - Minimalist */}
          <div className="absolute top-3.5 right-3.5 flex gap-2">
            <span className="px-2.5 py-1 rounded-md bg-black/65 backdrop-blur-md text-amber-400 font-mono text-[10px] uppercase tracking-wider flex items-center gap-1.5 border border-amber-500/30 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" /> {asset.badge}
            </span>
          </div>
        </div>

        {/* Card Body - Uniform Height, Minimal Text, Premium Icons */}
        <div className="p-4 sm:p-5 flex flex-col gap-3">
          {/* Title - Fixed Single-line with Truncate */}
          <h3
            className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-amber-400 transition-colors cursor-pointer truncate leading-tight"
            onClick={handlePrimaryClick}
            title={asset.title}
          >
            {asset.title}
          </h3>

          {/* Single-line Metadata Details */}
          <div className="flex items-center justify-between gap-2 text-neutral-400 text-xs font-sans">
            {/* Inventor */}
            <div
              className="flex items-center gap-1.5 min-w-0 flex-1 truncate"
              title={`Inventor: ${asset.inventor}`}
            >
              <User className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span className="truncate">{asset.inventor}</span>
            </div>

            {/* Patent Date */}
            <div
              className="flex items-center gap-1.5 shrink-0 text-neutral-400"
              title={`Patent Date: ${asset.patentDate}`}
            >
              <Calendar className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span className="whitespace-nowrap">{asset.patentDate}</span>
            </div>

            {/* 3D Indicator */}
            <div
              className="flex items-center gap-1 shrink-0 text-amber-400 font-mono text-[11px]"
              title="3D Interactive Model"
            >
              <Box className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>3D</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer - Perfectly Aligned, No Cut-offs */}
      <div className="px-4 py-3 flex items-center justify-between gap-2.5 border-t border-neutral-800/60 bg-[#0A0A0A]/60 mt-auto">
        {/* Location with Icon - Flex-1 with clean truncation */}
        <div
          className="flex items-center gap-1.5 text-neutral-500 min-w-0 flex-1"
          title={`Location: ${asset.location}`}
        >
          <MapPin className="w-3.5 h-3.5 shrink-0 text-neutral-500" />
          <span className="font-mono text-[10px] uppercase tracking-wider truncate">
            {asset.location}
          </span>
        </div>

        {/* Action Buttons - Shrink-0 & Fixed Aligned */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* 3D Inspect Button */}
          {onExplore3D && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onExplore3D(asset);
              }}
              className="p-1.5 rounded-lg bg-[#1A1A1A] hover:bg-amber-500/20 text-neutral-400 hover:text-amber-400 transition-colors border border-neutral-800 hover:border-amber-500/40 shrink-0 cursor-pointer"
              title="Inspect 3D in Spatial Workbench"
              aria-label="Inspect 3D model"
            >
              <Box className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Explore Button */}
          <Link
            href={`/inventions/${asset.id}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 transition-all border border-amber-500/25 hover:border-amber-500/50 shrink-0 whitespace-nowrap cursor-pointer shadow-sm group-hover:bg-amber-500/15"
          >
            <span className="font-sans font-bold text-[11px] uppercase tracking-wider leading-none">
              Explore
            </span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
