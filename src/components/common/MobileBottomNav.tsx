'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  ArrowLeft,
  BookOpen,
  Compass,
  FolderKanban,
  Home,
  Layers,
  Package,
} from 'lucide-react';
import { useCategory } from '@/context/CategoryContext';
import {
  LAST_CATEGORY_STORAGE_KEY,
  resolveRouteContext,
} from '@/lib/routeContext';

export default function MobileBottomNav() {
  const pathname = usePathname() || '/';
  const router = useRouter();
  const { activeCategory } = useCategory();
  const [lastCategorySlug, setLastCategorySlug] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(LAST_CATEGORY_STORAGE_KEY);
      if (saved) setLastCategorySlug(saved);
    } catch {
      // ignore storage unavailable
    }
  }, [pathname]);

  const routeCtx = useMemo(
    () => resolveRouteContext(pathname, lastCategorySlug, activeCategory),
    [pathname, lastCategorySlug, activeCategory]
  );

  const handleHomeAnchor = (sectionId: string, fallbackHref: string) => {
    if (routeCtx.isHome) {
      if (sectionId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      router.push(fallbackHref);
    }
  };

  const handleContextTabClick = () => {
    if (routeCtx.stage === 'home') {
      handleHomeAnchor('themes', '/#themes');
      return;
    }
    if (routeCtx.stage === 'theme') {
      const el = document.getElementById('categories');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (routeCtx.activeTheme) {
        router.push(`/themes/${routeCtx.activeTheme.slug}#categories`);
      }
      return;
    }
    if (routeCtx.stage === 'category') {
      const el = document.getElementById('assets');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }
    router.push(routeCtx.parentCategoryHref);
  };

  const middleTab = useMemo(() => {
    if (routeCtx.stage === 'theme') {
      return { label: 'Categories', Icon: FolderKanban };
    }
    if (routeCtx.stage === 'category') {
      return { label: 'Assets', Icon: Package };
    }
    if (routeCtx.stage === 'asset') {
      return {
        label: routeCtx.parentCategoryTitle,
        Icon: ArrowLeft,
      };
    }
    return { label: 'Themes', Icon: Compass };
  }, [routeCtx.stage, routeCtx.parentCategoryTitle]);

  const MiddleIcon = middleTab.Icon;

  return (
    <nav
      aria-label="Mobile navigation"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-outline-variant/45 dark:border-white/[0.1] bg-surface/95 dark:bg-[#09090b]/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)]"
    >
      <div className="grid grid-cols-4 h-14 max-w-lg mx-auto">
        {/* Slot 1: Home */}
        <Link
          href="/"
          onClick={(e) => {
            if (routeCtx.isHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className={`flex flex-col items-center justify-center gap-1 h-full border-t-2 transition-colors ${
            routeCtx.isHome
              ? 'border-[#8c5d12] dark:border-[#d4af37] text-on-surface dark:text-white font-medium'
              : 'border-transparent text-on-surface-variant dark:text-neutral-400 hover:text-on-surface dark:hover:text-white'
          }`}
        >
          <Home className="w-4 h-4" />
          <span className="text-[11px] leading-none">Home</span>
        </Link>

        {/* Slot 2: Formats */}
        <button
          type="button"
          onClick={() => handleHomeAnchor('whats-inside', '/#whats-inside')}
          className="flex flex-col items-center justify-center gap-1 h-full border-t-2 border-transparent text-on-surface-variant dark:text-neutral-400 hover:text-on-surface dark:hover:text-white transition-colors cursor-pointer"
        >
          <Layers className="w-4 h-4" />
          <span className="text-[11px] leading-none">Formats</span>
        </button>

        {/* Slot 3: Progressive Context Tab (Themes -> Categories -> Assets -> Back) */}
        <button
          type="button"
          onClick={handleContextTabClick}
          className={`flex flex-col items-center justify-center gap-1 h-full px-1 border-t-2 transition-colors cursor-pointer ${
            !routeCtx.isHome
              ? 'border-[#8c5d12] dark:border-[#d4af37] bg-[#8c5d12]/[0.06] dark:bg-[#d4af37]/[0.08] text-[#8c5d12] dark:text-[#d4af37] font-medium'
              : 'border-transparent bg-[#8c5d12]/[0.04] dark:bg-[#d4af37]/[0.05] text-[#8c5d12] dark:text-[#d4af37] font-medium'
          }`}
        >
          <MiddleIcon className="w-4 h-4 shrink-0" />
          <span className="text-[11px] leading-none truncate max-w-[78px]">
            {middleTab.label}
          </span>
        </button>

        {/* Slot 4: Featured */}
        <button
          type="button"
          onClick={() => handleHomeAnchor('trending', '/#trending')}
          className="flex flex-col items-center justify-center gap-1 h-full border-t-2 border-transparent text-on-surface-variant dark:text-neutral-400 hover:text-on-surface dark:hover:text-white transition-colors cursor-pointer"
        >
          <BookOpen className="w-4 h-4" />
          <span className="text-[11px] leading-none">Featured</span>
        </button>
      </div>
    </nav>
  );
}
