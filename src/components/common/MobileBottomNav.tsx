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
    label: '3D Vault',
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
      window.location.href = `/#${targetId}`;
      return;
    }

    const el = document.getElementById(targetId);
    if (el) {
      const navOffset = 60;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
    } else {
      const fallbackId = targetId === 'multimedia' ? 'collection' : 'hero';
      const fallbackEl = document.getElementById(fallbackId);
      if (fallbackEl) {
        fallbackEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0c0d12]/95 backdrop-blur-2xl border-t border-[rgba(212,175,55,0.22)] shadow-[0_-8px_30px_rgba(0,0,0,0.9)] px-1 pt-2 pb-[max(0.75rem,calc(env(safe-area-inset-bottom)+0.35rem))] transition-all touch-manipulation"
      aria-label="Mobile Navigation Bar"
    >
      <div className="grid grid-cols-5 w-full max-w-md mx-auto items-center">
        {NAV_ITEMS.map((item) => {
          const isActive = activeTab === item.name;
          return (
            <button
              key={item.name}
              type="button"
              onClick={() => handleNavClick(item.targetId, item.name)}
              className="group relative flex flex-col items-center justify-center w-full py-0.5 select-none active:scale-95 transition-transform cursor-pointer touch-manipulation"
            >
              {/* Active Pill Container around Icon */}
              <div
                className={`flex items-center justify-center w-12 h-7 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-amber-400/20 text-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.3)]'
                    : 'text-neutral-400 group-hover:text-neutral-200'
                }`}
              >
                <span
                  className={`transition-transform duration-200 flex items-center justify-center ${
                    isActive ? 'scale-110 drop-shadow-[0_0_6px_rgba(212,175,55,0.7)]' : ''
                  }`}
                >
                  {item.icon}
                </span>
              </div>

              {/* Label */}
              <span
                className={`text-[10px] font-sans tracking-tight mt-1 leading-tight text-center whitespace-nowrap truncate max-w-full transition-colors ${
                  isActive ? 'font-bold text-amber-400' : 'font-medium text-neutral-400'
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
