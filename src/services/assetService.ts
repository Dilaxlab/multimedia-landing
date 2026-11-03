import { HistoricalAsset, CategoryFilterType } from '@/types/asset';
import { MOCK_HISTORICAL_ASSETS } from '@/lib/constants';
import { apiFetch } from './api';

export const assetService = {
  async getAssets(): Promise<HistoricalAsset[]> {
    try {
      const data = await apiFetch<HistoricalAsset[]>('/assets');
      return data;
    } catch {
      // Fallback to verified local curated archive
      return MOCK_HISTORICAL_ASSETS;
    }
  },

  async getAssetById(id: string): Promise<HistoricalAsset | null> {
    try {
      const data = await apiFetch<HistoricalAsset>(`/assets/${id}`);
      return data;
    } catch {
      if (!id) return MOCK_HISTORICAL_ASSETS[0];
      const match = MOCK_HISTORICAL_ASSETS.find(a => a.id.toLowerCase() === id.toLowerCase());
      return match || MOCK_HISTORICAL_ASSETS[0];
    }
  },

  async filterByCategory(category: CategoryFilterType): Promise<HistoricalAsset[]> {
    const assets = await this.getAssets();
    if (category === 'ALL') return assets;
    return assets.filter(a => a.category === category);
  },

  async searchAssets(query: string): Promise<HistoricalAsset[]> {
    const assets = await this.getAssets();
    const q = query.toLowerCase().trim();
    if (!q) return assets;
    return assets.filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.inventor.toLowerCase().includes(q) ||
      a.patent.toLowerCase().includes(q) ||
      a.desc.toLowerCase().includes(q)
    );
  }
};
