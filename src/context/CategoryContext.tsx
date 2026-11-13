'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { CategoryFilterType, HistoricalAsset } from '@/types/asset';
import { OFFICIAL_18_CATEGORIES, CategoryMeta, MOCK_HISTORICAL_ASSETS } from '@/lib/constants';

const STORAGE_KEY = 'iaims_active_discipline';

interface CategoryContextValue {
  activeCategory: CategoryFilterType | null;
  hasSelected: boolean;
  isLocked: boolean;
  activeCategoryMeta: CategoryMeta | undefined;
  filteredAssets: HistoricalAsset[];
  selectCategory: (category: CategoryFilterType, autoScroll?: boolean) => void;
  clearCategory: () => void;
  resetToDisciplines: () => void;
}

const CategoryContext = createContext<CategoryContextValue | undefined>(undefined);

export function CategoryProvider({ children }: { children: React.ReactNode }) {
  const [activeCategory, setActiveCategoryState] = useState<CategoryFilterType | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  // Validate if a string is one of the official 18 category keys (STRICT: NO 'ALL')
  const isValidCategory = useCallback((val: string | null): val is CategoryFilterType => {
    if (!val) return false;
    const upper = val.toUpperCase();
    if (upper === 'ALL') return false; // Strictly disabled
    return OFFICIAL_18_CATEGORIES.some((c) => c.key === upper);
  }, []);

  // Initialize from URL ?category=KEY or localStorage
  useEffect(() => {
    try {
      const searchParams = new URLSearchParams(window.location.search);
      const urlCategory = searchParams.get('category');

      if (urlCategory && isValidCategory(urlCategory)) {
        const canonicalKey = urlCategory.toUpperCase() as CategoryFilterType;
        setActiveCategoryState(canonicalKey);
        localStorage.setItem(STORAGE_KEY, canonicalKey);
      } else {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored && isValidCategory(stored)) {
          setActiveCategoryState(stored as CategoryFilterType);
        }
      }
    } catch {
      // Safe fallback
    } finally {
      setIsHydrated(true);
    }
  }, [isValidCategory]);

  const selectCategory = useCallback((category: CategoryFilterType, autoScroll: boolean = false) => {
    if (category === 'ALL') return; // Strictly ignore ALL
    setActiveCategoryState(category);
    try {
      localStorage.setItem(STORAGE_KEY, category);
      const url = new URL(window.location.href);
      url.searchParams.set('category', category);
      window.history.replaceState({}, '', url.toString());
    } catch {
      // Safe fallback
    }
  }, []);

  const clearCategory = useCallback(() => {
    setActiveCategoryState(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
      const url = new URL(window.location.href);
      url.searchParams.delete('category');
      window.history.replaceState({}, '', url.toString());
    } catch {
      // Safe fallback
    }
  }, []);

  const resetToDisciplines = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.location.pathname === '/') {
        const el = document.getElementById('themes');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else window.location.href = '/#themes';
      } else {
        window.location.href = '/#themes';
      }
    }
  }, []);

  const hasSelected = activeCategory !== null;
  const isLocked = !hasSelected;

  const activeCategoryMeta = useMemo(() => {
    if (!activeCategory || activeCategory === 'ALL') return undefined;
    return OFFICIAL_18_CATEGORIES.find((c) => c.key === activeCategory);
  }, [activeCategory]);

  // Strictly filter assets: ONLY the 5 assets belonging to the active category
  const filteredAssets = useMemo(() => {
    if (!activeCategory || activeCategory === 'ALL') return [];
    return MOCK_HISTORICAL_ASSETS.filter((a) => a.category === activeCategory);
  }, [activeCategory]);

  const value = useMemo(
    () => ({
      activeCategory,
      hasSelected,
      isLocked,
      activeCategoryMeta,
      filteredAssets,
      selectCategory,
      clearCategory,
      resetToDisciplines,
    }),
    [
      activeCategory,
      hasSelected,
      isLocked,
      activeCategoryMeta,
      filteredAssets,
      selectCategory,
      clearCategory,
      resetToDisciplines,
    ]
  );

  return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>;
}

export function useCategory(): CategoryContextValue {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error('useCategory must be used within a CategoryProvider');
  }
  return context;
}
