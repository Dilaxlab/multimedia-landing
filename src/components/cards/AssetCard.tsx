'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { HistoricalAsset } from '@/types/asset';

interface AssetCardProps {
  asset: HistoricalAsset;
  onSelect?: (asset: HistoricalAsset) => void;
  onExplore?: (asset: HistoricalAsset) => void;
  onExplore3D?: (asset: HistoricalAsset) => void;
}

export default function AssetCard({ asset, onSelect }: AssetCardProps) {
  return (
    <Link
      href={`/inventions/${asset.id}`}
      onClick={(e) => {
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
        if (onSelect) {
          e.preventDefault();
          onSelect(asset);
        }
      }}
      className="group flex flex-col border border-outline-variant/40 dark:border-white/10 bg-surface dark:bg-[#111114] hover:border-[#8c5d12]/60 dark:hover:border-[#d4af37]/60 transition-colors overflow-hidden"
    >
      {/* Clean Unobscured Image Frame */}
      <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-200 dark:bg-neutral-900 border-b border-outline-variant/30 dark:border-white/10">
        <img
          src={asset.image}
          alt={asset.title}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      {/* Archival Copy */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
        <div>
          <div className="flex items-center justify-between gap-2 text-xs font-mono text-on-surface-variant dark:text-neutral-400">
            <span>{asset.year || asset.patentDate}</span>
            <span className="truncate">{asset.patentNumber || asset.patent}</span>
          </div>

          <h3 className="mt-2 font-serif text-lg sm:text-xl font-semibold leading-snug text-on-surface dark:text-white group-hover:text-[#8c5d12] dark:group-hover:text-[#d4af37] transition-colors">
            {asset.title}
          </h3>

          <p className="mt-1 text-xs font-medium text-on-surface-variant dark:text-neutral-400 truncate">
            {asset.inventor}
            {asset.location ? ` · ${asset.location}` : ''}
          </p>

          <p className="mt-2.5 text-sm text-on-surface-variant dark:text-neutral-300 leading-relaxed line-clamp-2">
            {asset.desc}
          </p>
        </div>

        <div className="pt-3 border-t border-outline-variant/30 dark:border-white/10 flex items-center justify-between text-xs font-medium text-on-surface dark:text-neutral-200 group-hover:text-[#8c5d12] dark:group-hover:text-[#d4af37] transition-colors">
          <span>Open 5-format record</span>
          <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
}
