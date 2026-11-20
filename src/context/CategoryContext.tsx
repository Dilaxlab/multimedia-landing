'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import { CategoryFilterType, HistoricalAsset } from '@/types/asset';
import { AssetCategoryRecord } from '@/types/taxonomy';
import { OFFICIAL_18_CATEGORIES, CategoryMeta } from '@/lib/constants';
import { assetService } from '@/services/assetService';
import { taxonomyService } from '@/services/taxonomyService';
import { useAuth } from './AuthContext';

const STORAGE_KEY = 'iaims_active_discipline';

interface CategoryContextValue {
  activeCategory: CategoryFilterType | null;
  hasSelected: boolean;
  isLocked: boolean;
  activeCategoryMeta: CategoryMeta | undefined;
  liveCategories: AssetCategoryRecord[];
  filteredAssets: HistoricalAsset[];
  isLoadingAssets: boolean;
  selectCategory: (category: CategoryFilterType, autoScroll?: boolean) => void;
  clearCategory: () => void;
  resetToDisciplines: () => void;
}

const CategoryContext = createContext<CategoryContextValue | undefined>(undefined);

export function CategoryProvider({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const [activeCategory, setActiveCategoryState] =
    useState<CategoryFilterType | null>(null);
  const [liveCategories, setLiveCategories] = useState<AssetCategoryRecord[]>([]);
  const [filteredAssets, setFilteredAssets] = useState<HistoricalAsset[]>([]);
  const [isLoadingAssets, setIsLoadingAssets] = useState(false);

  const isValidCategory = useCallback(
    (val: string | null): val is CategoryFilterType => {
      if (!val) return false;
      const upper = val.toUpperCase();
      if (upper === 'ALL') return false;
      return (
        OFFICIAL_18_CATEGORIES.some((c) => c.key === upper) ||
        liveCategories.some(
          (c) => c.code?.toUpperCase() === upper || c.slug === val
        )
      );
    },
    [liveCategories]
  );

  // Sync URL ?category=KEY or localStorage
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
    }
  }, [isValidCategory]);

  // Hydrate live Master v5 taxonomy categories only when authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      setLiveCategories([]);
      return;
    }

    let cancelled = false;
    taxonomyService
      .getCategories()
      .then((cats) => {
        if (!cancelled) setLiveCategories(cats);
      })
      .catch(() => {
        if (!cancelled) setLiveCategories([]);
      });

    return () => {
      cancelled = true;
    };
  }, [isAuthenticated]);

  // Fetch filtered assets cleanly from live Sanctum API (zero mock fallback)
  useEffect(() => {
    if (!isAuthenticated || !activeCategory || activeCategory === 'ALL') {
      setFilteredAssets([]);
      return;
    }

    let cancelled = false;
    setIsLoadingAssets(true);
    assetService
      .getAssets({ category: activeCategory })
      .then((assets) => {
        if (!cancelled) setFilteredAssets(assets);
      })
      .catch(() => {
        if (!cancelled) setFilteredAssets([]);
      })
      .finally(() => {
        if (!cancelled) setIsLoadingAssets(false);
      });

    return () => {
      cancelled = true;
    };
  }, [isAuthenticated, activeCategory]);

  const selectCategory = useCallback(
    (category: CategoryFilterType) => {
      if (category === 'ALL') return;
      setActiveCategoryState(category);
      try {
        localStorage.setItem(STORAGE_KEY, category);
        const url = new URL(window.location.href);
        url.searchParams.set('category', category);
        window.history.replaceState({}, '', url.toString());
      } catch {
        // Safe fallback
      }
    },
    []
  );

  const clearCategory = useCallback(() => {
    setActiveCategoryState(null);
    setFilteredAssets([]);
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
    const liveMatch = liveCategories.find(
      (c) =>
        c.code?.toUpperCase() === activeCategory.toUpperCase() ||
        c.slug === activeCategory
    );
    if (liveMatch) {
      return {
        key: (liveMatch.code || activeCategory) as CategoryFilterType,
        label: liveMatch.name,
        shortName: liveMatch.name,
        emoji: liveMatch.icon || '🏛️',
        icon: liveMatch.lucide_icon_name || 'Sparkles',
        era: '',
        desc: liveMatch.short_description || liveMatch.tagline,
        spotlightAssetId: '',
      };
    }
    return OFFICIAL_18_CATEGORIES.find((c) => c.key === activeCategory);
  }, [activeCategory, liveCategories]);

  const value = useMemo<CategoryContextValue>(
    () => ({
      activeCategory,
      hasSelected,
      isLocked,
      activeCategoryMeta,
      liveCategories,
      filteredAssets,
      isLoadingAssets,
      selectCategory,
      clearCategory,
      resetToDisciplines,
    }),
    [
      activeCategory,
      hasSelected,
      isLocked,
      activeCategoryMeta,
      liveCategories,
      filteredAssets,
      isLoadingAssets,
      selectCategory,
      clearCategory,
      resetToDisciplines,
    ]
  );

  return (
    <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>
  );
}

export function useCategory() {
  const ctx = useContext(CategoryContext);
  if (!ctx) {
    throw new Error('useCategory must be used within a CategoryProvider');
  }
  return ctx;
}
