import { StoryPublication, StoryPublicationType } from '@/types/story';
import { apiFetch } from './api';

export const storyService = {
  async getStories(
    params: {
      asset_id?: string;
      theme_id?: string;
      type?: 'all' | StoryPublicationType;
      language?: string;
      age_group?: string;
      q?: string;
    } = {},
    token?: string | null
  ): Promise<StoryPublication[]> {
    const sp = new URLSearchParams();
    if (params.asset_id) sp.set('asset_id', params.asset_id);
    if (params.theme_id) sp.set('theme_id', params.theme_id);
    if (params.type && params.type !== 'all') sp.set('type', params.type);
    if (params.language && params.language !== 'all') sp.set('language', params.language);
    if (params.age_group && params.age_group !== 'all') sp.set('age_group', params.age_group);
    if (params.q) sp.set('q', params.q);

    const suffix = sp.toString() ? `?${sp.toString()}` : '';
    return apiFetch<StoryPublication[]>(`/stories${suffix}`, {
      token,
      skipUnauthorizedEvent: true,
    });
  },

  async getStoryById(id: string, token?: string | null): Promise<StoryPublication> {
    return apiFetch<StoryPublication>(`/stories/${encodeURIComponent(id)}`, {
      token,
      skipUnauthorizedEvent: true,
    });
  },
};
