import React from 'react';
import { notFound } from 'next/navigation';
import { MOCK_HISTORICAL_ASSETS } from '@/lib/constants';
import { assetService } from '@/services/assetService';
import DossierView from '@/components/sections/DossierView';
import {
  ShieldCheck,
  Calendar,
  User,
  MapPin,
  Box,
  ArrowLeft,
  CheckCircle2,
  Fingerprint,
  Landmark,
} from 'lucide-react';
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

      {/* pt-28 sm:pt-32 lg:pt-36 கொடுத்து ஹெடரில் இருந்து படத்தை கீழே தள்ளியுள்ளோம் */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-24">
        {/* Back Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-mono text-neutral-400 hover:text-amber-400 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Archive
        </Link>

        {/* Hero Section - Premium Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-16">
          {/* Left Column: Image with Premium Framing */}
          <div className="w-full lg:w-5/12">
            <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-[4/5] rounded-t-[2rem] rounded-b-xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
              {/* Inner Border for Museum Frame Effect */}
              <div className="absolute inset-3 border border-white/10 rounded-xl pointer-events-none z-10" />

              <img
                src={asset.image}
                alt={asset.title}
                className="w-full h-full object-cover object-center transition-transform duration-[1.5s] group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

              {/* Floating Badges */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-md bg-black/80 backdrop-blur-xl border border-amber-500/30 text-[11px] font-mono text-amber-300 flex items-center gap-2 shadow-lg">
                    <Calendar className="w-3.5 h-3.5" /> {asset.patentDate}
                  </span>
                  <span className="px-3 py-1.5 rounded-md bg-black/80 backdrop-blur-xl border border-white/10 text-[11px] font-mono text-neutral-300 flex items-center gap-2 shadow-lg">
                    <MapPin className="w-3.5 h-3.5 text-amber-500" /> {asset.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Curatorial Details */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            {/* Top Meta Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[10px] sm:text-[11px] uppercase tracking-widest font-semibold flex items-center gap-2">
                <Landmark className="w-3.5 h-3.5" />
                {asset.categoryLabel || 'Historical Asset'}
              </span>

              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                {asset.era}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4">
              {asset.officialTitle || asset.title}
            </h1>

            {/* Inventor Line */}
            <div className="flex items-center gap-2 text-base sm:text-lg text-neutral-400 mb-6 border-l-2 border-amber-500 pl-3">
              <User className="w-5 h-5 text-amber-500 shrink-0" />
              <span>
                Invented by <span className="text-white font-semibold">{asset.inventor}</span>
              </span>
            </div>

            {/* Description */}
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
              {asset.desc}
            </p>

            {/* Premium Metadata Ledger */}
            <div className="w-full bg-[#0c0c0e]/80 rounded-2xl border border-white/5 overflow-hidden shadow-2xl backdrop-blur-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/5">
                {/* Left Side of Ledger */}
                <div className="p-5 space-y-4 font-mono text-xs">
                  <div>
                    <span className="block text-neutral-500 mb-1 text-[10px] uppercase tracking-wider">
                      Workshop / Lab
                    </span>
                    <span className="text-neutral-200 text-sm">{asset.location}</span>
                  </div>
                  <div>
                    <span className="block text-neutral-500 mb-1 text-[10px] uppercase tracking-wider">
                      Patent Gazette
                    </span>
                    <span className="text-amber-400 font-semibold text-sm">{asset.patent}</span>
                  </div>
                </div>

                {/* Right Side of Ledger */}
                <div className="p-5 space-y-4 font-mono text-xs">
                  <div>
                    <span className="block text-neutral-500 mb-1 text-[10px] uppercase tracking-wider">
                      Materials
                    </span>
                    <span className="text-neutral-200 text-sm">
                      {asset.medium || 'Mixed Media'}
                    </span>
                  </div>
                  <div>
                    <span className="block text-neutral-500 mb-1 text-[10px] uppercase tracking-wider">
                      Digital Twin Status
                    </span>
                    <span className="text-emerald-400 flex items-center gap-1.5 font-semibold text-sm">
                      <CheckCircle2 className="w-4 h-4" />
                      Verified Geometry
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Bar of Ledger */}
              <div className="bg-white/[0.02] border-t border-white/5 p-3 flex justify-between items-center px-5">
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                  Authentication
                </span>
                <span className="text-[10px] font-mono text-amber-500 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> USPTO / Smithsonian Standards
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider - Museum Style */}
        <div className="flex items-center justify-center gap-6 mb-16 opacity-70">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-amber-500/30" />
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rotate-45 bg-amber-500/50" />
            <ShieldCheck className="w-6 h-6 text-amber-500" />
            <div className="w-1.5 h-1.5 rotate-45 bg-amber-500/50" />
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-amber-500/30" />
        </div>

        {/* Detailed Dossier View */}
        <div className="relative">
          <DossierView asset={asset} isStandalonePage={true} hideHeroBanner={true} />
        </div>
      </div>
    </main>
  );
}
