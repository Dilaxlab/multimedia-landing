'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Home, Lightbulb, Boxes, Clapperboard, Layers } from 'lucide-react';
import TaxonomyModal from '@/components/common/TaxonomyModal';

type MobileTab = 'Home' | 'Inventions' | '3D Vault' | 'Stories' | 'Archive';

interface NavItem {
  name: MobileTab;
  label: string;
  targetId: string;
  icon: React.ReactNode;
  action?: () => void;
}

export default function MobileBottomNav() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<MobileTab>('Home');
  const [isTaxonomyOpen, setIsTaxonomyOpen] = useState<boolean>(false);

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
      name: 'Archive',
      label: 'Archive',
      targetId: 'collection',
      icon: <Layers className="w-5 h-5" />,
      action: () => setIsTaxonomyOpen(true),
    },
  ];

  useEffect(() => {
    if (pathname !== '/') return;

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const sections: { id: string; tab: MobileTab }[] = [
        { id: 'hero', tab: 'Home' },
        { id: 'collection', tab: 'Inventions' },
        { id: 'gallery3d', tab: '3D Vault' },
        { id: 'videos', tab: 'Stories' },
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

  const handleNavClick = (item: NavItem) => {
    setActiveTab(item.name);
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(8);
      } catch {
        // Safe fallback
      }
    }

    if (item.action) {
      item.action();
    }

    if (pathname !== '/') {
      router.push(`/#${item.targetId}`);
      return;
    }

    const el = document.getElementById(item.targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden dark:bg-[#0c0d12]/95 bg-[#faf8f4]/95 backdrop-blur-2xl border-t dark:border-primary/20 border-outline-variant/40 shadow-[0_-8px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_-8px_30px_rgba(0,0,0,0.9)] px-1 pt-2 pb-[max(0.75rem,calc(env(safe-area-inset-bottom)+0.35rem))] transition-all"
        aria-label="Mobile Navigation Bar"
      >
        <div className="grid grid-cols-5 w-full max-w-md mx-auto items-center">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.name;
            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="group relative flex flex-col items-center justify-center w-full py-0.5 select-none active:scale-95 transition-transform cursor-pointer"
              >
                {/* Active Pill Container around Icon */}
                <div
                  className={`flex items-center justify-center w-12 h-7 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-primary/20 text-primary shadow-sm'
                      : 'dark:text-neutral-400 text-neutral-600 dark:group-hover:text-neutral-200 group-hover:text-neutral-950'
                  }`}
                >
                  <span
                    className={`transition-transform duration-200 flex items-center justify-center ${
                      isActive ? 'scale-110 drop-shadow-sm' : ''
                    }`}
                  >
                    {item.icon}
                  </span>
                </div>

                {/* Label */}
                <span
                  className={`text-[10px] font-sans tracking-tight mt-1 leading-tight text-center whitespace-nowrap truncate max-w-full transition-colors ${
                    isActive ? 'font-bold text-primary' : 'font-medium dark:text-neutral-400 text-neutral-600'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* 64 Disciplines / Archive Taxonomy Modal */}
      <TaxonomyModal
        isOpen={isTaxonomyOpen}
        onClose={() => setIsTaxonomyOpen(false)}
        onSelectCategory={(category) => {
          setIsTaxonomyOpen(false);
          const el = document.getElementById('collection');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          const keyword = category
            ? category.toLowerCase().startsWith('test taxonomy')
              ? 'Test'
              : category.split(' ')[0]
            : '';
          window.dispatchEvent(new CustomEvent('heritage:filterCategory', { detail: keyword }));
        }}
      />
    </>
  );
}
