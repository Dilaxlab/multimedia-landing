'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface FeaturedSpecimen {
  id: string;
  title: string;
  inventor: string;
  year: string;
  patentNumber: string;
  summary: string;
  image: string;
  imageAlt: string;
}

const FEATURED_SPECIMENS: FeaturedSpecimen[] = [
  {
    id: 'HA-101',
    title: 'Early Speaking Telephone',
    inventor: 'Alexander Graham Bell',
    year: '1876',
    patentNumber: 'Pat. #174,465',
    summary:
      'Captured intelligible electrical transmission of the human voice over copper wire.',
    image: '/images/raw_card_1_bell.jpg',
    imageAlt: 'Archival specimen photograph of Alexander Graham Bell Early Speaking Telephone',
  },
  {
    id: 'HA-102',
    title: 'Rotary Agitator Clothes Washer',
    inventor: 'Caroline J. Fleming',
    year: '1881',
    patentNumber: 'Pat. #249,002',
    summary:
      'Oscillating wooden agitator that cut heavy washday manual labor from hours to under one.',
    image: '/images/raw_card_2_washing.jpg',
    imageAlt: 'Archival specimen photograph of Caroline J. Fleming Rotary Agitator Clothes Washer',
  },
  {
    id: 'HA-103',
    title: 'Brush Wind Electric Turbine',
    inventor: 'Charles F. Brush',
    year: '1888',
    patentNumber: 'Pat. #433,651',
    summary:
      'Automated 56-foot cedar rotor with 144 blades charging 408 household storage batteries.',
    image: '/images/raw_card_3_windmill.jpg',
    imageAlt: 'Archival specimen photograph of Charles F. Brush Wind Electric Turbine',
  },
  {
    id: 'HA-104',
    title: 'Isochronous Pendulum Clock',
    inventor: 'Christiaan Huygens',
    year: '1657',
    patentNumber: 'Pat. #1657-NL01',
    summary:
      'Pendulum timekeeper using curved cycloidal cheeks so swing duration stayed uniform.',
    image: '/images/raw_card_4_astrolabe.jpg',
    imageAlt: 'Archival specimen photograph of Christiaan Huygens Isochronous Pendulum Clock',
  },
];

export default function TrendingInventionsSection() {
  return (
    <section
      id="trending"
      className="scroll-mt-24 w-full bg-surface-container-low/50 dark:bg-[#0b0b0e] border-t border-outline-variant/40 dark:border-white/10 py-12 sm:py-20 px-4 sm:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Clean Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 sm:pb-8 border-b border-outline-variant/40 dark:border-white/10 mb-8 sm:mb-10">
          <div className="max-w-2xl">
            <h2 className="font-serif text-[clamp(26px,3.2vw,40px)] font-semibold tracking-[-0.02em] leading-[1.15] text-on-surface dark:text-white">
              Featured Inventions
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-on-surface-variant dark:text-neutral-300 leading-relaxed">
              Four milestone patents from the collection. Open any record to study its 2D plate, story, book, 3D model, and video.
            </p>
          </div>
          <Link
            href="/#themes"
            className="min-h-[44px] inline-flex items-center gap-1.5 text-sm font-medium text-[#8c5d12] dark:text-[#d4af37] hover:underline shrink-0"
          >
            <span>View all 90 by theme</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4-Column Unobscured Specimen Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {FEATURED_SPECIMENS.map((item) => (
            <Link
              key={item.id}
              href={`/inventions/${item.id}`}
              className="group flex flex-col border border-outline-variant/40 dark:border-white/10 bg-surface dark:bg-[#111114] hover:border-[#8c5d12]/60 dark:hover:border-[#d4af37]/60 transition-colors overflow-hidden"
            >
              <div className="aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-neutral-200 dark:bg-neutral-900 border-b border-outline-variant/30 dark:border-white/10">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs font-mono text-on-surface-variant dark:text-neutral-400">
                    <span>{item.year}</span>
                    <span>{item.patentNumber}</span>
                  </div>

                  <h3 className="mt-2 font-serif text-lg font-semibold leading-snug text-on-surface dark:text-white group-hover:text-[#8c5d12] dark:group-hover:text-[#d4af37] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs font-medium text-on-surface-variant dark:text-neutral-400">
                    {item.inventor}
                  </p>

                  <p className="mt-2.5 text-sm text-on-surface-variant dark:text-neutral-300 leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-outline-variant/30 dark:border-white/10 flex items-center justify-between text-xs font-medium text-on-surface dark:text-neutral-200 group-hover:text-[#8c5d12] dark:group-hover:text-[#d4af37] transition-colors">
                  <span>Open 5-format record</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
