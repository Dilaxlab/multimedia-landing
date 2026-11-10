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

export default function AssetCard({
  asset,
  onSelect,
  onExplore,
  onExplore3D,
}: AssetCardProps) {
  const handlePrimaryClick = () => {
    if (onSelect) onSelect(asset);
    else if (onExplore) onExplore(asset);
    else window.location.href = `/inventions/${asset.id}`;
  };

  return (
    <div className="group relative rounded-xl sm:rounded-2xl bg-surface-container-low dark:bg-[#111113] overflow-hidden flex flex-col justify-between h-full transition-all duration-300 hover:translate-y-[-3px] border border-outline-variant/30 hover:border-primary/50 shadow-lg">
      <div className="flex flex-col">
        {/* Thumbnail — Responsive for 2-column mobile and 3-column desktop */}
        <div
          className="relative h-36 xs:h-40 sm:h-56 md:h-60 overflow-hidden bg-surface-container dark:bg-[#18181b] flex items-center justify-center cursor-pointer"
          onClick={handlePrimaryClick}
        >
          <img
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
            alt={asset.title}
            src={asset.image}
          />

          <div className="absolute inset-0 bg-gradient-to-t dark:from-[#111113] from-black/40 via-transparent to-transparent opacity-60 dark:opacity-90" />

          {/* Badge */}
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 flex gap-1 z-10">
            <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-black/75 backdrop-blur-md text-amber-400 font-mono text-[8px] sm:text-[10px] uppercase tracking-wider flex items-center gap-1 border border-amber-500/30 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="truncate max-w-[70px] xs:max-w-[80px] sm:max-w-none">{asset.badge}</span>
            </span>
          </div>

          {/* Patent Reference Chip */}
          <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 z-10">
            <span className="px-1.5 sm:px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-neutral-300 font-mono text-[8px] sm:text-[10px] tracking-tight border border-white/10">
              {asset.patent}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-2.5 sm:p-4 md:p-5 flex flex-col gap-1 sm:gap-2">
          {/* Title */}
          <h3
            className="font-serif text-xs xs:text-sm sm:text-base md:text-lg font-bold dark:text-white text-on-surface group-hover:text-primary transition-colors cursor-pointer line-clamp-1 leading-snug"
            onClick={handlePrimaryClick}
            title={asset.title}
          >
            {asset.title}
          </h3>

          {/* Short Curatorial Excerpt */}
          <p className="text-on-surface-variant font-sans text-[10px] xs:text-[11px] sm:text-xs line-clamp-1 sm:line-clamp-2 leading-relaxed">
            {asset.desc}
          </p>

          {/* Metadata Row */}
          <div className="flex items-center justify-between gap-1 pt-1 text-on-surface-variant text-[10px] sm:text-xs font-mono border-t border-outline-variant/20">
            <div
              className="flex items-center gap-1 min-w-0 flex-1"
              title={`Inventor: ${asset.inventor}`}
            >
              <User className="w-3 h-3 text-primary shrink-0" />
              <span className="truncate text-on-surface">{asset.inventor}</span>
            </div>

            <div
              className="hidden sm:flex items-center gap-1 shrink-0 text-on-surface-variant text-[11px]"
              title={`Patent Date: ${asset.patentDate}`}
            >
              <Calendar className="w-3.5 h-3.5 text-primary shrink-0" />
              <span className="whitespace-nowrap">{asset.patentDate}</span>
            </div>

            <Link
              href={`/inventions/${asset.id}#explore`}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-0.5 shrink-0 text-primary font-mono text-[9px] sm:text-[11px] hover:underline cursor-pointer"
              title="View 3D Model"
            >
              <Box className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>3D</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-2.5 sm:px-4 py-2 sm:py-3 flex items-center justify-between gap-1 sm:gap-2.5 border-t border-outline-variant/30 bg-surface-container/60 dark:bg-[#0c0c0e] mt-auto">
        <div
          className="hidden sm:flex items-center gap-1.5 text-on-surface-variant min-w-0 flex-1"
          title={`Location: ${asset.location}`}
        >
          <MapPin className="w-3.5 h-3.5 shrink-0 text-primary" />
          <span className="font-mono text-[10px] uppercase tracking-wider truncate">
            {asset.location}
          </span>
        </div>

        <div className="flex items-center justify-end gap-1.5 sm:gap-2 w-full sm:w-auto">
          {/* 3D Model Button — Navigates to 3D View on Invention Page */}
          <Link
            href={`/inventions/${asset.id}#explore`}
            onClick={(e) => {
              e.stopPropagation();
              if (onExplore3D) onExplore3D(asset);
            }}
            className="inline-flex p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-surface-container-high/80 dark:bg-white/[0.04] hover:bg-primary/20 text-on-surface-variant dark:text-neutral-300 hover:text-primary transition-colors border border-outline-variant/30 dark:border-white/10 hover:border-primary/40 shrink-0 cursor-pointer shadow-sm active:scale-95"
            title="Inspect 3D Spatial Model on Invention Page"
            aria-label="Inspect 3D model"
          >
            <Box className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </Link>

          <Link
            href={`/inventions/${asset.id}`}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 rounded-lg sm:rounded-xl bg-primary/15 hover:bg-primary/25 text-primary hover:text-primary transition-all border border-primary/30 hover:border-primary/50 shrink-0 whitespace-nowrap cursor-pointer shadow-sm active:scale-95"
            aria-label="Explore Asset"
          >
            <span className="font-sans font-bold text-[9px] xs:text-[10px] sm:text-xs uppercase tracking-wider leading-none">
              Explore
            </span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
          </Link>
        </div>
      </div>
    </div>
  );
}
