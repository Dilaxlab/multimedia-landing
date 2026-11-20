import {
  AssetMediaRecord,
  AssetMediaType,
  BlueprintMedia,
  VideoVignette,
} from '@/types/media';
import { apiFetch } from './api';

export const mediaService = {
  /**
   * Fetch /media items filtered by 7 Master v5 formats, theme, search, and spotlight status.
   * Never falls back to mock data when unauthenticated or on 401/403.
   */
  async getMediaLibraryItems(
    params: {
      type?: 'all' | AssetMediaType;
      theme_slug?: string;
      q?: string;
      show_in_media_library?: boolean;
      asset_id?: string;
    } = {},
    token?: string | null
  ): Promise<AssetMediaRecord[]> {
    const sp = new URLSearchParams();
    if (params.type && params.type !== 'all') sp.set('type', params.type);
    if (params.theme_slug && params.theme_slug !== 'all') sp.set('theme_slug', params.theme_slug);
    if (params.q) sp.set('q', params.q);
    if (params.asset_id) sp.set('asset_id', params.asset_id);
    if (params.show_in_media_library !== undefined) {
      sp.set('show_in_media_library', String(params.show_in_media_library));
    }

    const suffix = sp.toString() ? `?${sp.toString()}` : '';
    return apiFetch<AssetMediaRecord[]>(`/media${suffix}`, { token });
  },

  async getDocumentaries(categoryId?: string): Promise<VideoVignette[]> {
    const suffix = categoryId
      ? `?type=video_30s,video_edu&category=${encodeURIComponent(categoryId)}`
      : '?type=video_30s,video_edu';
    return apiFetch<VideoVignette[]>(`/documentaries${suffix}`);
  },

  async getBlueprints(): Promise<BlueprintMedia[]> {
    return apiFetch<BlueprintMedia[]>('/blueprints');
  },

  // --- Admin 7-Format Media Studio Endpoints ---
  async createMedia(payload: Partial<AssetMediaRecord>): Promise<AssetMediaRecord> {
    return apiFetch<AssetMediaRecord>('/admin/media', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  async updateMedia(
    id: string,
    payload: Partial<AssetMediaRecord>
  ): Promise<AssetMediaRecord> {
    return apiFetch<AssetMediaRecord>(`/admin/media/${encodeURIComponent(id)}`, {
      method: 'PATCH',
      body: JSON.stringify(payload),
    });
  },

  async deleteMedia(id: string): Promise<void> {
    await apiFetch<void>(`/admin/media/${encodeURIComponent(id)}`, {
      method: 'DELETE',
    });
  },

  async uploadMediaFile(formData: FormData): Promise<{
    file_path: string;
    thumbnail_path?: string;
    mime_type: string;
    file_size: number;
  }> {
    return apiFetch('/admin/media/upload', {
      method: 'POST',
      body: formData,
    });
  },
};
