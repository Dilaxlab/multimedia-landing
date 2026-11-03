'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Landmark } from 'lucide-react';

export default function Footer() {
  const [utcTime, setUtcTime] = useState<string>('00:00');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hrs = String(now.getUTCHours()).padStart(2, '0');
      const mins = String(now.getUTCMinutes()).padStart(2, '0');
      setUtcTime(`${hrs}:${mins}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-surface-container-lowest shadow-[0_-4px_24px_rgba(0,0,0,0.4)] border-t border-primary/20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Col 1: Brand & Mission */}
          <div className="flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-sm mb-space-xs">
              <div className="w-7 h-7 rounded-lg bg-surface-container-high flex items-center justify-center">
                <Landmark className="w-4 h-4 text-primary" />
              </div>
              <span className="font-headline-sm text-headline-sm uppercase text-on-surface">Heritage Archive</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              Nocturnal digital sanctuary dedicated to the forensic preservation, 3D photogrammetry, and cinematic curation of global cultural antiquities and technological inventions.
            </p>
            <div className="flex items-center gap-space-xs mt-space-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-label-sm text-label-sm text-primary uppercase">Vault Network Synchronized</span>
            </div>
          </div>

          {/* Col 2: Collections */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-label-lg text-label-lg uppercase tracking-wider text-primary">Curatorial Collections</span>
            <ul className="flex flex-col gap-space-xs">
              <li className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer">
                <Link href="/#collection">Telecommunications & Acoustic Wire</Link>
              </li>
              <li className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer">
                <Link href="/#collection">Domestic Mechanical Inventions</Link>
              </li>
              <li className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer">
                <Link href="/#collection">Wind Engines & Aquifer Pumps</Link>
              </li>
              <li className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer">
                <Link href="/#collection">Horological Gears & Astrolabes</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Scholarly Infrastructure */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-label-lg text-label-lg uppercase tracking-wider text-primary">Scholarly Infrastructure</span>
            <ul className="flex flex-col gap-space-xs">
              <li className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer">
                IAMS Archival Protocols
              </li>
              <li className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer">
                Photogrammetric Point Cloud API
              </li>
              <li className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer">
                Institutional Access Grants
              </li>
              <li className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer">
                Provenance Forensic Logs
              </li>
            </ul>
          </div>

          {/* Col 4: Preservation Controls */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-label-lg text-label-lg uppercase tracking-wider text-primary">Preservation Controls</span>
            <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-sm border border-primary/15">
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md uppercase text-on-surface">Nocturne Mode</span>
                <span className="font-label-sm text-label-sm text-primary px-space-xs py-0.5 rounded bg-surface-container-high">0.5 Lux</span>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                Display calibration matched to museum vitrine anti-reflective luminescence standards.
              </p>
              <div className="flex items-center justify-between pt-space-xs">
                <span className="font-label-sm text-label-sm text-on-surface-variant">Catalog Badge</span>
                <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-primary-container text-on-primary-container font-bold">IAMS-8K COMPLIANT</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md bg-surface-container-low/40 rounded-xl px-space-lg py-space-md border border-primary/10">
          <div className="flex flex-wrap items-center gap-space-md">
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              © 2025 Heritage Archive Consortium. All Rights Reserved.
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant cursor-pointer hover:text-on-surface transition-colors">
              Curatorial Ethics
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant cursor-pointer hover:text-on-surface transition-colors">
              Open Metadata License
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant cursor-pointer hover:text-on-surface transition-colors">
              Security & Provenance
            </span>
          </div>
          <div className="flex items-center gap-space-sm">
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Archival Sync: UTC {utcTime}
            </span>
            <div className="w-2 h-2 rounded-full bg-secondary" />
          </div>
        </div>

      </div>
    </footer>
  );
}
