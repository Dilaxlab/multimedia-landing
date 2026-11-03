'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Home, Lightbulb, Boxes, Clapperboard, Layers } from 'lucide-react';

type MobileTab = 'Home' | 'Inventions' | '3D Vault' | 'Stories' | 'Media';

interface NavItem {
  name: MobileTab;
  label: string;
  targetId: string;
  icon: React.ReactNode;
}

const NAV_ITEMS: NavItem[] = [
  {
    name: 'Home',
    label: 'Home',
    targetId: 'hero',
    icon: <Home className="w-5 h-5" />,
  },
  {
    name: 'Inventions',
    label: 'Explore',
    targetId: 'collection',
    icon: <Lightbulb className="w-5 h-5" />,
  },
  {
    name: '3D Vault',
    label: '3D Models',
    targetId: 'gallery3d',
    icon: <Boxes className="w-5 h-5" />,
  },
  {
    name: 'Stories',
    label: 'Stories',
    targetId: 'videos',
    icon: <Clapperboard className="w-5 h-5" />,
  },
  {
    name: 'Media',
    label: 'Archive',
    targetId: 'multimedia',
    icon: <Layers className="w-5 h-5" />,
  },
];

export default function MobileBottomNav() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<MobileTab>('Home');

  useEffect(() => {
    if (pathname !== '/') return;

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const sections: { id: string; tab: MobileTab }[] = [
        { id: 'hero', tab: 'Home' },
        { id: 'collection', tab: 'Inventions' },
        { id: 'gallery3d', tab: '3D Vault' },
        { id: 'videos', tab: 'Stories' },
        { id: 'multimedia', tab: 'Media' },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveTab(sections[i].tab);
            return;
          }
        }
      }
      setActiveTab('Home');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleNavClick = (targetId: string, tabName: MobileTab) => {
    setActiveTab(tabName);
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(8);
      } catch {
        // Safe fallback
      }
    }

    if (pathname !== '/') {
      router.push(`/#${targetId}`);
      return;
    }

    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0c0d12]/95 backdrop-blur-2xl border-t border-[rgba(212,175,55,0.25)] shadow-[0_-8px_30px_rgba(0,0,0,0.9)] px-2 pt-1.5 pb-[max(0.6rem,env(safe-area-inset-bottom))] transition-all"
      aria-label="Mobile Navigation Bar"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {NAV_ITEMS.map((item) => {
          const isActive = activeTab === item.name;
          return (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.targetId, item.name)}
              className={`relative flex flex-col items-center justify-center flex-1 min-h-[48px] py-1 px-1 rounded-xl transition-all duration-200 cursor-pointer active:scale-90 select-none ${
                isActive ? 'text-[#d4af37]' : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              {/* Active Glow Accent Bar */}
              {isActive && (
                <span className="absolute -top-1.5 w-7 h-1 rounded-full bg-gradient-to-r from-amber-400 to-[#d4af37] shadow-[0_0_10px_rgba(212,175,55,0.8)] animate-pulse" />
              )}

              <span
                className={`transition-transform duration-200 ${
                  isActive ? 'scale-110 drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]' : ''
                }`}
              >
                {item.icon}
              </span>

              <span
                className={`text-[10px] font-mono tracking-tight mt-1 transition-colors ${
                  isActive ? 'font-bold text-[#d4af37]' : 'font-medium text-neutral-400'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
