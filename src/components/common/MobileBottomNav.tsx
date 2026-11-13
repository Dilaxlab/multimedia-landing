'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  Home,
  Layers,
  BookOpen,
  Boxes,
  Film,
  FileText,
  ArrowLeft,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { useCategory } from '@/context/CategoryContext';
import { MOCK_HISTORICAL_ASSETS, OFFICIAL_18_CATEGORIES } from '@/lib/constants';

interface MobileNavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  action: () => void;
}

export default function MobileBottomNav() {
  const router = useRouter();
  const pathname = usePathname();
  const { activeCategoryMeta } = useCategory();
  const [activeId, setActiveId] = useState<string>('hero');

  const isHome = pathname === '/';
  const isTheme = pathname.startsWith('/themes/');
  const isCategory = pathname.startsWith('/categories/') || pathname.startsWith('/category/');
  const isAsset = pathname.startsWith('/inventions/');

  const categorySlug = pathname.startsWith('/category/')
    ? pathname.split('/category/')[1]?.split('/')[0]?.split('?')[0]?.toUpperCase()
    : null;
  const currentCategoryMeta = categorySlug
    ? OFFICIAL_18_CATEGORIES.find((c) => c.key === categorySlug) || activeCategoryMeta
    : activeCategoryMeta;

  const assetId = isAsset
    ? pathname.split('/inventions/')[1]?.split('?')[0]?.split('#')[0]
    : null;
  const currentAsset = assetId
    ? MOCK_HISTORICAL_ASSETS.find(
        (a) => a.id.toLowerCase() === assetId.toLowerCase()
      )
    : null;

  const scrollTo = (id: string) => {
    if (isHome && id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveId('hero');
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveId(id);
    }
  };

  // Scroll spy for mobile bottom nav
  useEffect(() => {
    let sectionIds: string[] = [];
    if (isHome) sectionIds = ['hero', 'whats-inside', 'themes', 'trending', 'virtual-portal'];
    else if (isTheme) sectionIds = ['overview', 'categories', 'highlights'];
    else if (isCategory) sectionIds = ['assets', 'story', 'book', '3d', 'videos'];
    else if (isAsset) sectionIds = ['story', 'book', '3d', 'video'];

    if (sectionIds.length === 0) return;

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && scrollPos >= el.offsetTop) {
          setActiveId(sectionIds[i]);
          return;
        }
      }
      setActiveId(sectionIds[0]);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome, isTheme, isCategory, isAsset, pathname]);

  // Build items based on active page
  let navItems: MobileNavItem[] = [];

  if (isHome) {
    navItems = [
      {
        id: 'hero',
        label: 'Home',
        icon: <Home className="w-4 h-4" />,
        action: () => scrollTo('hero'),
      },
      {
        id: 'whats-inside',
        label: 'Inside',
        icon: <Sparkles className="w-4 h-4" />,
        action: () => scrollTo('whats-inside'),
      },
      {
        id: 'themes',
        label: 'Themes',
        icon: <Layers className="w-4 h-4" />,
        action: () => scrollTo('themes'),
      },
      {
        id: 'trending',
        label: 'Trending',
        icon: <TrendingUp className="w-4 h-4" />,
        action: () => scrollTo('trending'),
      },
    ];
  } else if (isTheme) {
    navItems = [
      {
        id: 'home',
        label: 'Home',
        icon: <Home className="w-4 h-4" />,
        action: () => router.push('/'),
      },
      {
        id: 'overview',
        label: 'Overview',
        icon: <Sparkles className="w-4 h-4" />,
        action: () => scrollTo('overview'),
      },
      {
        id: 'categories',
        label: 'Categories',
        icon: <Layers className="w-4 h-4" />,
        action: () => scrollTo('categories'),
      },
      {
        id: 'highlights',
        label: 'Highlights',
        icon: <TrendingUp className="w-4 h-4" />,
        action: () => scrollTo('highlights'),
      },
    ];
  } else if (isCategory) {
    navItems = [
      {
        id: 'home',
        label: 'Home',
        icon: <Home className="w-4 h-4" />,
        action: () => router.push('/'),
      },
      {
        id: 'assets',
        label: 'Assets',
        icon: <Layers className="w-4 h-4" />,
        action: () => scrollTo('assets'),
      },
      {
        id: 'story',
        label: 'Story',
        icon: <BookOpen className="w-4 h-4" />,
        action: () => scrollTo('story'),
      },
      {
        id: 'book',
        label: 'Books',
        icon: <FileText className="w-4 h-4" />,
        action: () => scrollTo('book'),
      },
      {
        id: '3d',
        label: '3D Vault',
        icon: <Boxes className="w-4 h-4" />,
        action: () => scrollTo('3d'),
      },
      {
        id: 'videos',
        label: 'Videos',
        icon: <Film className="w-4 h-4" />,
        action: () => scrollTo('videos'),
      },
    ];
  } else if (isAsset) {
    navItems = [
      {
        id: 'home',
        label: 'Home',
        icon: <Home className="w-4 h-4" />,
        action: () => router.push('/'),
      },
      {
        id: 'story',
        label: 'Story',
        icon: <BookOpen className="w-4 h-4" />,
        action: () => scrollTo('story'),
      },
      {
        id: 'book',
        label: 'Books',
        icon: <FileText className="w-4 h-4" />,
        action: () => scrollTo('book'),
      },
      {
        id: '3d',
        label: '3D Model',
        icon: <Boxes className="w-4 h-4" />,
        action: () => scrollTo('3d'),
      },
      {
        id: 'video',
        label: 'Video Reel',
        icon: <Film className="w-4 h-4" />,
        action: () => scrollTo('video'),
      },
    ];
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-surface-container-high/95 backdrop-blur-xl border-t border-outline-variant/30 px-2 py-1.5 shadow-2xl">
      <div className="flex items-center justify-around gap-1 overflow-x-auto scrollbar-none py-0.5">
        {navItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              onClick={item.action}
              className={`flex flex-col items-center justify-center min-w-[56px] min-h-[44px] px-2 py-1 rounded-xl transition-all ${
                isActive
                  ? 'text-amber-400 font-bold bg-amber-500/10'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <div className={isActive ? 'text-amber-400 scale-110 transition-transform' : ''}>
                {item.icon}
              </div>
              <span className="text-[10px] font-mono mt-0.5">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
