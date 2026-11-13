'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import HeroSection from '@/components/sections/HeroSection';
import WhatsInsideSection from '@/components/sections/WhatsInsideSection';
import ThemeFamiliesSection from '@/components/sections/ThemeFamiliesSection';
import TrendingInventionsSection from '@/components/sections/TrendingInventionsSection';
import VirtualMuseumPortalSection from '@/components/sections/VirtualMuseumPortalSection';

export default function HomePage() {
  const router = useRouter();

  const scrollToThemes = () => {
    const el = document.getElementById('themes');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-surface selection:bg-primary/30">
      {/* =========================================================================
          SECTION 1: HERO SECTION
         ========================================================================= */}
      <HeroSection
        onExploreCollection={scrollToThemes}
        onWatchStories={scrollToThemes}
        onExploreAsset={(id) => {
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'instant' });
          }
          router.push(`/inventions/${id}`);
        }}
      />

      {/* =========================================================================
          SECTION 2: WHAT'S INSIDE THE ARCHIVE (4 Interactive Bento Feature Cards)
         ========================================================================= */}
      <WhatsInsideSection onExploreDisciplines={scrollToThemes} />

      {/* =========================================================================
          SECTION 3: 10 THEME FAMILIES (Page 1 -> Page 2 Funnel)
         ========================================================================= */}
      <ThemeFamiliesSection />

      {/* =========================================================================
          SECTION 4: MOST EXPLORED & TRENDING INVENTIONS (Quick Start Gateway)
         ========================================================================= */}
      <TrendingInventionsSection />

      {/* =========================================================================
          SECTION 5: DIRECT VIRTUAL MUSEUM GATEWAY & INSTITUTIONAL TRUST STRIP
         ========================================================================= */}
      <VirtualMuseumPortalSection />
    </div>
  );
}

