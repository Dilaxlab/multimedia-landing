'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import HeroSectionThree from '@/components/sections/HeroSectionThree';
import WhatsInsideSection from '@/components/sections/WhatsInsideSection';
import ThemeFamiliesSection from '@/components/sections/ThemeFamiliesSection';
import TrendingInventionsSection from '@/components/sections/TrendingInventionsSection';
import VirtualMuseumPortalSection from '@/components/sections/VirtualMuseumPortalSection';

export default function HomePage() {
  const router = useRouter();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-surface selection:bg-primary/30">
      <HeroSectionThree
        onExploreCollection={() => scrollToSection('themes')}
        onWatchStories={() => scrollToSection('whats-inside')}
        onExploreAsset={(id, format) => {
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'instant' });
          }
          router.push(format ? `/inventions/${id}#${format}` : `/inventions/${id}`);
        }}
      />
      <WhatsInsideSection onExploreDisciplines={() => scrollToSection('themes')} />
      <ThemeFamiliesSection />
      <TrendingInventionsSection />
      <VirtualMuseumPortalSection />
    </div>
  );
}

