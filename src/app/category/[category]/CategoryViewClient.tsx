'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CategoryMeta } from '@/lib/constants';
import { HistoricalAsset } from '@/types/asset';
import { useCategory } from '@/context/CategoryContext';
import AssetCollection from '@/components/sections/AssetCollection';
import SpatialGallery from '@/components/sections/SpatialGallery';
import VideoGallery from '@/components/sections/VideoGallery';
import CuratorialDispatchSection from '@/components/sections/CuratorialDispatchSection';
import {
  Sparkles,
  BookOpen,
  Boxes,
  Film,
  Calendar,
  ExternalLink,
  ShieldCheck,
  Quote,
  ArrowUpRight,
  Award,
  Scroll,
} from 'lucide-react';

interface CategoryViewClientProps {
  catMeta: CategoryMeta;
  categoryAssets: HistoricalAsset[];
}

export default function CategoryViewClient({ catMeta, categoryAssets }: CategoryViewClientProps) {
  const router = useRouter();
  const { selectCategory } = useCategory();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    selectCategory(catMeta.key, false);
  }, [catMeta.key, selectCategory]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [catMeta.key]);

  const handleSelectAsset = (asset: HistoricalAsset) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    router.push(`/inventions/${asset.id}`);
  };

  const handleExplore3D = (asset: HistoricalAsset) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    router.push(`/inventions/${asset.id}`);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-surface selection:bg-primary/30">
      {/* =======================================================================
          HERO — MUSEUM WING ENTRANCE
         ======================================================================= */}
      <section
        id="overview"
        className="relative w-full pt-14 pb-16 sm:pt-20 sm:pb-24 px-4 sm:px-8 scroll-mt-20 overflow-hidden border-b border-outline-variant/20"
      >
        {/* Background pattern: archival grid + radial glow */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface-container-low to-surface" />
        <div
          className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            color: '#fbbf24',
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">
            {/* LEFT: Editorial copy */}
            <div>
              {/* Category label chip */}
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-500 dark:text-amber-400 font-mono text-[10px] font-bold tracking-[0.2em] uppercase shadow-[0_0_20px_-6px_rgba(251,191,36,0.5)]">
                  <Sparkles className="w-3 h-3 animate-pulse" />
                  Archival Category
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container border border-outline-variant/40 text-on-surface-variant font-mono text-[10px] tracking-wider">
                  <ShieldCheck className="w-3 h-3 text-emerald-500" />
                  Verified · Smithsonian Standard
                </span>
              </div>

              {/* Big heading */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-on-surface font-normal tracking-tight leading-[1.05] mb-5">
                <span className="block text-amber-500/90 dark:text-amber-400 font-mono text-sm tracking-[0.3em] uppercase mb-3 font-bold">
                  Wing {catMeta.key.slice(0, 3)} · {catMeta.era}
                </span>
                <span className="relative inline-block">
                  {catMeta.label}
                  <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-500 via-yellow-400 to-transparent" />
                </span>
              </h1>

              {/* Curatorial description */}
              <p className="text-sm sm:text-base lg:text-lg text-on-surface-variant font-sans max-w-2xl leading-relaxed mb-8">
                {catMeta.desc}
              </p>

              {/* Quick navigate */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() =>
                    document.getElementById('assets')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-neutral-950 font-bold text-xs tracking-wide shadow-[0_4px_14px_-4px_rgba(251,191,36,0.6)] hover:shadow-[0_6px_22px_-4px_rgba(251,191,36,0.8)] hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <span>Explore the Collection</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
                <button
                  onClick={() =>
                    document.getElementById('3d')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-outline-variant/50 hover:border-amber-500/50 text-on-surface text-xs font-mono tracking-wide hover:bg-amber-500/5 transition-all"
                >
                  <Boxes className="w-3.5 h-3.5 text-amber-500" />
                  <span>Enter 3D Vault</span>
                </button>
              </div>
            </div>

            {/* RIGHT: Orbital emblem + stat stack */}
            <div className="relative shrink-0">
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 mx-auto lg:mx-0">
                {/* Rotating outer ring */}
                <div className="absolute inset-0 rounded-full border border-amber-500/20 animate-spin-slow" />
                {/* Inner dashed ring */}
                <div
                  className="absolute inset-4 rounded-full border border-dashed border-amber-500/30"
                  style={{ animation: 'spin 30s linear infinite reverse' }}
                />
                {/* Core emblem */}
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-amber-500/20 via-amber-600/10 to-transparent border border-amber-500/40 flex items-center justify-center shadow-[inset_0_0_40px_-10px_rgba(251,191,36,0.5),0_0_60px_-15px_rgba(251,191,36,0.4)]">
                  <span className="text-6xl sm:text-8xl drop-shadow-[0_4px_20px_rgba(251,191,36,0.4)]">
                    {catMeta.emoji}
                  </span>
                </div>
                {/* Orbiting dots */}
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.9)]" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-500/60" />
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-amber-500/60" />
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-amber-500/60" />
              </div>

              {/* Stat stack below emblem */}
              <div className="mt-8 grid grid-cols-2 gap-2 max-w-[280px] mx-auto lg:mx-0">
                <StatChip label="Assets" value={categoryAssets.length} />
                <StatChip label="3D Twins" value={categoryAssets.length} />
                <StatChip label="Films" value={categoryAssets.length} />
                <StatChip label="USPTO" value="100%" accent />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =======================================================================
          SECTION 1: ASSETS
         ======================================================================= */}
      <section id="assets" className="scroll-mt-16 w-full">
        <AssetCollection
          assets={categoryAssets}
          onSelectAsset={handleSelectAsset}
          onExplore3D={handleExplore3D}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeCategory={catMeta.key}
          onCategoryChange={() => {}}
        />
      </section>

      {/* =======================================================================
          SECTION 2: STORY — CHRONOLOGICAL TIMELINE
         ======================================================================= */}
      <section
        id="story"
        className="scroll-mt-16 w-full py-20 sm:py-28 px-4 sm:px-8 border-t border-outline-variant/20 bg-gradient-to-b from-surface-container-lowest to-surface"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            kicker="Curatorial Narrative"
            title={`The Evolution of ${catMeta.shortName}`}
            subtitle={`Three watershed epochs that transformed ${catMeta.label.toLowerCase()} from workshop craft to industrial standard.`}
          />

          {/* Timeline */}
          <div className="relative mt-16">
            {/* Vertical spine */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-500/40 to-transparent" />

            <div className="space-y-12 sm:space-y-20">
              <TimelineCard
                index="I"
                era={catMeta.era}
                title="The Genesis Challenge"
                subtitle="The Impasse of Manual Labor"
                body={`Before the era of ${catMeta.era}, society faced critical limitations in mechanical speed, physical endurance, and geographical range. Pioneering workshops conducted relentless trials to overcome these physical constraints.`}
                align="left"
              />
              <TimelineCard
                index="II"
                era="Breakthrough"
                title="The Workshop Breakthrough"
                subtitle="Kinematic & Material Ingenuity"
                body="The arrival of calibrated steel, precision escapements, and electromagnetic theory enabled inventors to patent self-governing mechanisms that eliminated human error and established new scientific precedents."
                align="right"
              />
              <TimelineCard
                index="III"
                era="Legacy"
                title="The Modern Industrial Legacy"
                subtitle="Global Standard Transformation"
                body="From these foundational patents emerged the modern global infrastructure — standardized power grids, international telecommunications, and automated transportation that sustain modern civilization today."
                align="left"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =======================================================================
          SECTION 3: BOOKS — SHELF OF MONOGRAPHS
         ======================================================================= */}
      <section
        id="book"
        className="scroll-mt-16 w-full py-20 sm:py-28 px-4 sm:px-8 border-t border-outline-variant/20 bg-surface-container-low/50"
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            kicker="Archival Monographs"
            title="Patent Books & Research Volumes"
            subtitle="Certified USPTO archival entries and technical schematics recorded under Smithsonian archival standards."
            align="left"
          />

          {/* Book shelf */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryAssets.slice(0, 3).map((asset, idx) => (
              <BookCard
                key={asset.id}
                asset={asset}
                volume={idx + 1}
                onSelect={() => handleSelectAsset(asset)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =======================================================================
          SECTION 4: 3D
         ======================================================================= */}
      <section id="3d" className="scroll-mt-16 w-full border-t border-outline-variant/20">
        <SpatialGallery category={catMeta.key} onSelectAssetForDossier={handleSelectAsset} />
      </section>

      {/* =======================================================================
          SECTION 5: VIDEOS
         ======================================================================= */}
      <section id="videos" className="scroll-mt-16 w-full border-t border-outline-variant/20">
        <VideoGallery category={catMeta.key} />
      </section>

      <CuratorialDispatchSection />
    </div>
  );
}

/* ==========================================================================
   Sub-components
   ========================================================================== */

function StatChip({
  label,
  value,
  accent,
}: {
  label: string;
  value: number | string;
  accent?: boolean;
}) {
  return (
    <div
      className={`p-3 rounded-xl border text-center transition-all hover:-translate-y-0.5 ${
        accent
          ? 'bg-emerald-500/10 border-emerald-500/30'
          : 'bg-surface-container/70 border-outline-variant/30 hover:border-amber-500/40'
      }`}
    >
      <div
        className={`font-serif text-2xl font-bold leading-none mb-1 ${
          accent ? 'text-emerald-500' : 'text-amber-500'
        }`}
      >
        {value}
      </div>
      <div className="text-[9px] font-mono uppercase tracking-[0.15em] text-on-surface-variant">
        {label}
      </div>
    </div>
  );
}

function SectionHeader({
  kicker,
  title,
  subtitle,
  align = 'center',
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}) {
  return (
    <div className={align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}>
      <div
        className={`inline-flex items-center gap-2 mb-4 ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-amber-500" />
        <span className="font-mono text-[10px] font-bold tracking-[0.3em] text-amber-500 uppercase">
          {kicker}
        </span>
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-amber-500" />
      </div>
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-on-surface font-normal tracking-tight mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-sm sm:text-base text-on-surface-variant font-sans leading-relaxed ${
            align === 'center' ? 'max-w-2xl mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

function TimelineCard({
  index,
  era,
  title,
  subtitle,
  body,
  align,
}: {
  index: string;
  era: string;
  title: string;
  subtitle: string;
  body: string;
  align: 'left' | 'right';
}) {
  const isLeft = align === 'left';
  return (
    <div
      className={`relative flex flex-col sm:flex-row items-start gap-6 sm:gap-10 ${
        isLeft ? '' : 'sm:flex-row-reverse'
      }`}
    >
      {/* Content card */}
      <div className="flex-1 w-full pl-16 sm:pl-0">
        <div
          className={`group relative p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-amber-500/50 transition-all duration-300 hover:shadow-[0_10px_40px_-15px_rgba(251,191,36,0.35)] hover:-translate-y-1 ${
            isLeft ? 'sm:mr-auto sm:max-w-lg' : 'sm:ml-auto sm:max-w-lg'
          }`}
        >
          {/* Era badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 font-mono text-[10px] font-bold tracking-wider uppercase">
              {era}
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-amber-500/40 to-transparent" />
          </div>

          {/* Title row with roman numeral */}
          <div className="flex items-start gap-4 mb-3">
            <span className="font-serif italic text-5xl text-amber-500/30 leading-none shrink-0">
              {index}
            </span>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-on-surface font-normal leading-tight mb-1">
                {title}
              </h3>
              <p className="text-xs font-mono text-amber-500 tracking-wider uppercase">
                {subtitle}
              </p>
            </div>
          </div>

          {/* Body */}
          <p className="text-xs sm:text-sm text-on-surface-variant font-sans leading-relaxed">
            {body}
          </p>

          {/* Corner accent */}
          <Quote className="absolute top-4 right-4 w-8 h-8 text-amber-500/10 group-hover:text-amber-500/20 transition-colors" />
        </div>
      </div>

      {/* Timeline dot (on the spine) */}
      <div className="absolute left-6 sm:left-1/2 top-8 sm:top-10 -translate-x-1/2 flex items-center justify-center z-10">
        <span className="w-5 h-5 rounded-full bg-surface border-2 border-amber-500 shadow-[0_0_0_4px_rgba(251,191,36,0.15),0_0_20px_-4px_rgba(251,191,36,0.6)] flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
        </span>
      </div>

      {/* Spacer (opposite side of card) */}
      <div className="hidden sm:block flex-1" />
    </div>
  );
}

function BookCard({
  asset,
  volume,
  onSelect,
}: {
  asset: HistoricalAsset;
  volume: number;
  onSelect: () => void;
}) {
  return (
    <div
      onClick={onSelect}
      className="group relative cursor-pointer transition-transform duration-300 hover:-translate-y-1"
    >
      {/* Shelf line */}
      <div className="absolute -bottom-1 left-0 right-0 h-2 rounded-full bg-gradient-to-r from-transparent via-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative flex gap-4 p-4 rounded-2xl bg-surface-container border border-outline-variant/30 hover:border-amber-500/50 transition-all shadow-sm hover:shadow-[0_10px_30px_-10px_rgba(251,191,36,0.4)]">
        {/* Book spine (vertical) */}
        <div className="relative shrink-0 w-20 sm:w-24 aspect-[3/4] rounded-md bg-gradient-to-br from-amber-600 via-amber-500 to-amber-700 shadow-[inset_-6px_0_12px_-4px_rgba(0,0,0,0.4),2px_0_8px_-2px_rgba(0,0,0,0.3)] overflow-hidden">
          {/* Foil bands */}
          <div className="absolute top-2 left-0 right-0 h-px bg-amber-300/60" />
          <div className="absolute bottom-3 left-0 right-0 h-px bg-amber-300/60" />
          <div className="absolute top-3 left-2 w-1 bottom-4 bg-amber-300/40 rounded" />

          {/* Spine content */}
          <div className="absolute inset-0 p-2 flex flex-col items-center justify-between text-center">
            <span className="text-amber-100/80 text-[8px] font-mono tracking-[0.2em] uppercase">
              Vol
            </span>
            <span className="font-serif text-2xl text-amber-100 font-bold drop-shadow">
              {volume}
            </span>
            <Scroll className="w-3 h-3 text-amber-200/80" />
          </div>

          {/* Page edge */}
          <div className="absolute right-0 top-1 bottom-1 w-0.5 bg-gradient-to-b from-amber-100 via-white to-amber-100 opacity-60" />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between min-w-0 flex-1">
          <div>
            <div className="flex items-center justify-between text-[10px] font-mono text-on-surface-variant mb-2">
              <span className="text-amber-500 font-bold tracking-wider uppercase">
                Vol. {String(volume).padStart(2, '0')}
              </span>
              <span>{asset.patentDate}</span>
            </div>

            <h3 className="font-serif text-base sm:text-lg text-on-surface group-hover:text-amber-500 transition-colors leading-tight mb-1.5 line-clamp-2">
              {asset.officialTitle || asset.title}
            </h3>

            <p className="text-[11px] text-on-surface-variant font-sans leading-relaxed line-clamp-2 mb-2">
              {asset.desc}
            </p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-outline-variant/20">
            <span className="text-[9px] font-mono text-on-surface-variant truncate">
              {asset.patentNumber}
            </span>
            <ExternalLink className="w-3 h-3 text-amber-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
