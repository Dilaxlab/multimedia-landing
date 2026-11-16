'use client';

import React from 'react';
import { ExternalLink, Compass, Layers, Monitor } from 'lucide-react';
import { VIRTUAL_TOUR_MUSEUM_URL } from '@/lib/constants';

export default function VirtualMuseumPortalSection() {
  return (
    <section
      id="virtual-portal"
      className="scroll-mt-24 w-full bg-surface dark:bg-[#050505] border-t border-outline-variant/40 dark:border-white/10 py-12 sm:py-20 px-4 sm:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="border border-outline-variant/40 dark:border-white/10 bg-surface-container-lowest dark:bg-[#0b0b0e] overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left: Clear Explanation & Action */}
          <div className="lg:col-span-6 p-5 sm:p-10 lg:p-12 flex flex-col justify-between gap-7 sm:gap-8">
            <div>
              <h2 className="font-serif text-[clamp(26px,3.2vw,40px)] font-semibold tracking-[-0.02em] leading-[1.15] text-on-surface dark:text-white">
                Walk Through the 3D Museum
              </h2>

              <p className="mt-3 text-sm sm:text-base text-on-surface-variant dark:text-neutral-300 leading-relaxed max-w-xl">
                Beyond individual invention records, you can explore the complete collection inside our virtual 3D exhibition building and walk from hall to hall at your own pace.
              </p>

              <ul className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-outline-variant/30 dark:border-white/10 space-y-3 text-sm text-on-surface dark:text-neutral-200">
                <li className="flex items-start sm:items-center gap-3">
                  <Compass className="w-4 h-4 mt-0.5 sm:mt-0 text-[#8c5d12] dark:text-[#d4af37] shrink-0" />
                  <span>Walk freely between thematic wings and exhibition displays</span>
                </li>
                <li className="flex items-start sm:items-center gap-3">
                  <Layers className="w-4 h-4 mt-0.5 sm:mt-0 text-[#8c5d12] dark:text-[#d4af37] shrink-0" />
                  <span>Compare landmark machines side by side across 10 subject halls</span>
                </li>
                <li className="flex items-start sm:items-center gap-3">
                  <Monitor className="w-4 h-4 mt-0.5 sm:mt-0 text-[#8c5d12] dark:text-[#d4af37] shrink-0" />
                  <span>Opens directly in your browser with no extra downloads</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <a
                href={VIRTUAL_TOUR_MUSEUM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 min-h-[44px] px-6 py-3 bg-on-surface text-surface dark:bg-[#f5f3ee] dark:text-[#111114] text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <span>Launch 3D Museum</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <span className="text-xs font-mono text-on-surface-variant dark:text-neutral-400 text-center sm:text-left">
                Opens in new tab
              </span>
            </div>
          </div>

          {/* Right (Top on Mobile): Unobscured Light/Dark Exhibition Hall Photo */}
          <div className="order-first lg:order-last lg:col-span-6 border-b lg:border-b-0 lg:border-l border-outline-variant/40 dark:border-white/10 flex flex-col bg-neutral-100 dark:bg-[#09090b]">
            <div className="aspect-[16/9] sm:aspect-[16/10] lg:aspect-auto lg:flex-1 w-full overflow-hidden">
              <img
                src="/images/hero-museum-light.jpg"
                alt="Daylight museum gallery interior showing invention exhibition halls"
                className="w-full h-full object-cover dark:hidden"
                loading="lazy"
              />
              <img
                src="/images/hero-museum-dark.jpg"
                alt="Evening museum gallery interior showing illuminated exhibition halls"
                className="w-full h-full object-cover hidden dark:block"
                loading="lazy"
              />
            </div>

            <div className="px-4 sm:px-5 py-3 border-t border-outline-variant/30 dark:border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-on-surface-variant dark:text-neutral-400 bg-surface dark:bg-[#0b0b0e]">
              <span>3D Exhibition Hall Preview</span>
              <span>Interactive Virtual Tour</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
