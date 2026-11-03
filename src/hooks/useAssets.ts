'use client';

import { useState, useEffect, useMemo } from 'react';
import { HistoricalAsset, CategoryFilterType } from '@/types/asset';
import { assetService } from '@/services/assetService';

export function useAssets() {
  const [assets, setAssets] = useState<HistoricalAsset[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilterType>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    assetService.getAssets()
      .then(data => {
        if (isMounted) {
          setAssets(data);
          setLoading(false);
        }
      })
      .catch(err => {
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => { isMounted = false; };
  }, []);

  const filteredAssets = useMemo(() => {
    return assets.filter(item => {
      const matchCategory = selectedCategory === 'ALL' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch = !q ||
        item.title.toLowerCase().includes(q) ||
        item.inventor.toLowerCase().includes(q) ||
        item.patent.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q);

      return matchCategory && matchSearch;
    });
  }, [assets, selectedCategory, searchQuery]);

  return {
    assets: filteredAssets,
    allCount: assets.length,
    loading,
    error,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
  };
}
