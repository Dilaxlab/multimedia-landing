import React from 'react';
import { notFound } from 'next/navigation';
import { MOCK_HISTORICAL_ASSETS } from '@/lib/constants';
import { assetService } from '@/services/assetService';
import DossierView from '@/components/sections/DossierView';
import { ShieldCheck, Calendar, User, MapPin, Box, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface InventionPageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return MOCK_HISTORICAL_ASSETS.map((asset) => ({
    id: asset.id,
  }));
}

export async function generateMetadata({ params }: InventionPageProps) {
  const { id } = await params;
  const asset = await assetService.getAssetById(id);
  if (!asset) {
    return { title: 'Invention Not Found - IAIMS Heritage Archive' };
  }
  return {
    title: `${asset.officialTitle || asset.title} (${asset.inventor}) – IAIMS Heritage Archive`,
    description: `${asset.title}: ${asset.desc}. Verified patent ${asset.patent} under USPTO / Smithsonian Standards.`,
    openGraph: {
      title: `${asset.title} – IAIMS Digital Museum Dossier`,
      description: asset.desc,
      images: [
        {
          url: asset.image,
          width: 1200,
          height: 630,
          alt: asset.title,
        },
      ],
    },
  };
}

export default async function InventionPage({ params }: InventionPageProps) {
  const { id } = await params;
  const asset = await assetService.getAssetById(id);

  if (!asset) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] text-neutral-200 selection:bg-amber-500/30">
      {/* Background Ambience (Matches Home Page) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(212,175,55,0.05)_0%,_transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(140,109,59,0.03)_0%,_transparent_70%)] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#d4af37_1px,_transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-24">
        {/* Hero Section - Split Layout (Responsive) */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 mb-10 lg:mb-16">
          {/* Left Column: Image (Spans 5 columns on desktop) */}
          <div className="w-full lg:w-5/12 flex flex-col gap-6">
            <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800/50 shadow-2xl group">
              {/* Image */}
              <img
                src={asset.image}
                alt={asset.title}
                className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Cinematic Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

              {/* Floating Badge (Bottom Left of Image) */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] sm:text-xs font-mono text-neutral-300 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" /> {asset.patentDate}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] sm:text-xs font-mono text-neutral-300 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" /> {asset.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Title & Meta Info (Spans 7 columns on desktop) */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            {/* Category / Tag */}
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[2px] w-8 bg-amber-400" />
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-amber-400">
                {asset.badge || 'Historical Asset'}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
              {asset.officialTitle || asset.title}
            </h1>

            {/* Inventor */}
            <div className="flex items-center gap-2 text-base sm:text-lg text-neutral-300 mb-6">
              <User className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" />
              <span className="truncate">
                Invented by <span className="text-white font-semibold">{asset.inventor}</span>
              </span>
            </div>

            {/* Description */}
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
              {asset.desc}
            </p>

            {/* Meta Grid (Patent, Classification, Dimensions) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-6 border-t border-neutral-800">
              <div>
                <p className="text-[10px] font-mono uppercase text-neutral-500 mb-1">Patent ID</p>
                <p className="text-sm font-semibold text-white truncate">{asset.patent}</p>
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase text-neutral-500 mb-1">Discipline</p>
                <p className="text-sm font-semibold text-white truncate">
                  {asset.category || 'Engineering'}
                </p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-[10px] font-mono uppercase text-neutral-500 mb-1">Format</p>
                <p className="text-sm font-semibold text-white flex items-center gap-1.5">
                  <Box className="w-4 h-4 text-amber-500" /> 3D Model
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider - Museum Style */}
        <div className="flex items-center justify-center gap-4 mb-10 opacity-50">
          <div className="h-[1px] w-full max-w-[200px] bg-gradient-to-r from-transparent to-amber-500/50" />
          <ShieldCheck className="w-6 h-6 text-amber-500" />
          <div className="h-[1px] w-full max-w-[200px] bg-gradient-to-l from-transparent to-amber-500/50" />
        </div>

        {/* Detailed Dossier View (The rest of the page content) */}
        <div className="relative">
          <DossierView asset={asset} isStandalonePage={true} hideHeroBanner={true} />
        </div>
      </div>
    </main>
  );
}
