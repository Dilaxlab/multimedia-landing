'use client';

import React from 'react';
import Link from 'next/link';
import { THEME_FAMILIES } from '@/data/taxonomy';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-outline-variant/40 dark:border-white/10 bg-surface-container-low/70 dark:bg-[#08080a] pt-12 sm:pt-14 pb-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-outline-variant/30 dark:border-white/10">
          {/* Archive Overview */}
          <div className="lg:col-span-4 space-y-3">
            <Link
              href="/"
              className="font-serif text-xl font-semibold tracking-tight text-on-surface dark:text-white inline-block"
            >
              Heritage Archive
            </Link>
            <p className="text-sm text-on-surface-variant dark:text-neutral-400 leading-relaxed max-w-sm">
              A cross-platform classification and multimedia framework built for 1,000 historical patent models and artifacts across 10 theme families, 50 categories, and 150 promotional taglines.
            </p>
          </div>

          {/* Home Page Sections */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-on-surface dark:text-neutral-200">
              On This Site
            </h3>
            <ul className="space-y-1 text-sm text-on-surface-variant dark:text-neutral-400">
              <li>
                <Link href="/#whats-inside" className="inline-block py-1.5 hover:text-on-surface dark:hover:text-white transition-colors">
                  5 Reusable Formats
                </Link>
              </li>
              <li>
                <Link href="/#themes" className="inline-block py-1.5 hover:text-on-surface dark:hover:text-white transition-colors">
                  10 Theme Families
                </Link>
              </li>
              <li>
                <Link href="/#trending" className="inline-block py-1.5 hover:text-on-surface dark:hover:text-white transition-colors">
                  Milestone Patent Models
                </Link>
              </li>
              <li>
                <Link href="/media" className="inline-block py-1.5 hover:text-on-surface dark:hover:text-white transition-colors">
                  Media Library
                </Link>
              </li>
            </ul>
          </div>

          {/* Theme Wings (5 Featured from Taxonomy) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-on-surface dark:text-neutral-200">
              Theme Wings
            </h3>
            <ul className="space-y-1 text-sm text-on-surface-variant dark:text-neutral-400">
              {THEME_FAMILIES.slice(0, 5).map((theme) => (
                <li key={theme.slug}>
                  <Link
                    href={`/themes/${theme.slug}`}
                    className="inline-block py-1.5 hover:text-on-surface dark:hover:text-white transition-colors"
                  >
                    {theme.number}. {theme.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sample Records & External Tour */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-on-surface dark:text-neutral-200">
              Sample Records
            </h3>
            <ul className="space-y-1 text-sm text-on-surface-variant dark:text-neutral-400">
              <li>
                <Link href="/inventions/HA-101" className="inline-block py-1.5 hover:text-on-surface dark:hover:text-white transition-colors">
                  Early Speaking Telephone (1876)
                </Link>
              </li>
              <li>
                <Link href="/inventions/HA-102" className="inline-block py-1.5 hover:text-on-surface dark:hover:text-white transition-colors">
                  Rotary Agitator Clothes Washer (1881)
                </Link>
              </li>
              <li>
                <Link href="/inventions/HA-103" className="inline-block py-1.5 hover:text-on-surface dark:hover:text-white transition-colors">
                  Brush Wind Electric Turbine (1888)
                </Link>
              </li>
              <li>
                <Link href="/inventions/HA-104" className="inline-block py-1.5 hover:text-on-surface dark:hover:text-white transition-colors">
                  Isochronous Pendulum Clock (1657)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Honest Metadata */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-on-surface-variant dark:text-neutral-500">
          <p>© {currentYear} Heritage Archive · Linkay Technologies Inc. | Linkay Ventures Inc.</p>
          <p className="font-mono">1,000 Target Artifacts · 10 Themes · 50 Categories · 150 Taglines · 4 Channels</p>
        </div>
      </div>
    </footer>
  );
}
