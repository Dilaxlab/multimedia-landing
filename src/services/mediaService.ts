import { VideoVignette, BlueprintMedia } from '@/types/media';
import { MOCK_VIDEO_VIGNETTES, MOCK_BLUEPRINTS } from '@/lib/constants';
import { apiFetch } from './api';

export const mediaService = {
  async getDocumentaries(): Promise<VideoVignette[]> {
    try {
      const data = await apiFetch<VideoVignette[]>('/documentaries');
      return data;
    } catch {
      return MOCK_VIDEO_VIGNETTES;
    }
  },

  async getBlueprints(): Promise<BlueprintMedia[]> {
    try {
      const data = await apiFetch<BlueprintMedia[]>('/blueprints');
      return data;
    } catch {
      return MOCK_BLUEPRINTS;
    }
  }
};
