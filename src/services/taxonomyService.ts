import {
  AssetCategoryRecord,
  CategoryAttribute,
  ThemeAttribute,
  ThemeRecord,
} from '@/types/taxonomy';
import { apiFetch } from './api';

export const taxonomyService = {
  async getThemes(token?: string | null): Promise<ThemeRecord[]> {
    return apiFetch<ThemeRecord[]>('/themes', { token });
  },

  async getThemeBySlug(slug: string, token?: string | null): Promise<ThemeRecord> {
    return apiFetch<ThemeRecord>(`/themes/${encodeURIComponent(slug)}`, {
      token,
    });
  },

  async getCategories(
    themeSlug?: string,
    token?: string | null
  ): Promise<AssetCategoryRecord[]> {
    const query = themeSlug ? `?theme_slug=${encodeURIComponent(themeSlug)}` : '';
    return apiFetch<AssetCategoryRecord[]>(`/categories${query}`, { token });
  },

  async getCategoryBySlug(
    slug: string,
    token?: string | null
  ): Promise<AssetCategoryRecord> {
    return apiFetch<AssetCategoryRecord>(`/categories/${encodeURIComponent(slug)}`, {
      token,
    });
  },

  // --- Admin 10x5 Taxonomy Endpoints ---
  async updateTheme(
    id: string,
    payload: Partial<ThemeRecord>
  ): Promise<ThemeRecord> {
    return apiFetch<ThemeRecord>(`/admin/themes/${encodeURIComponent(id)}`, {
      method: 'PATCH',
      body: JSON.stringify(payload),
    });
  },

  async upsertThemeAttribute(
    themeId: string,
    payload: Partial<ThemeAttribute>
  ): Promise<ThemeAttribute> {
    return apiFetch<ThemeAttribute>(
      `/admin/themes/${encodeURIComponent(themeId)}/attributes`,
      {
        method: 'POST',
        body: JSON.stringify(payload),
      }
    );
  },

  async createCategory(
    payload: Partial<AssetCategoryRecord>
  ): Promise<AssetCategoryRecord> {
    return apiFetch<AssetCategoryRecord>('/admin/categories', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  async updateCategory(
    id: string,
    payload: Partial<AssetCategoryRecord>
  ): Promise<AssetCategoryRecord> {
    return apiFetch<AssetCategoryRecord>(`/admin/categories/${encodeURIComponent(id)}`, {
      method: 'PATCH',
      body: JSON.stringify(payload),
    });
  },

  async upsertCategoryAttribute(
    categoryId: string,
    payload: Partial<CategoryAttribute>
  ): Promise<CategoryAttribute> {
    return apiFetch<CategoryAttribute>(
      `/admin/categories/${encodeURIComponent(categoryId)}/attributes`,
      {
        method: 'POST',
        body: JSON.stringify(payload),
      }
    );
  },
};
