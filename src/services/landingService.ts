import {
  LandingSection,
  LandingSectionItem,
  LandingTeaserPayload,
  PortalPage,
  PortalPageKey,
} from '@/types/landing';
import { apiFetch } from './api';

export const landingService = {
  /**
   * Public guest-safe teaser shell when portal_pages.auth_mode = teaser_with_auth_unlock.
   * Returns blurred headlines & counts only — zero file URLs or restricted metadata.
   */
  async getLandingTeaser(
    pageKey: PortalPageKey = 'landing_home'
  ): Promise<LandingTeaserPayload> {
    return apiFetch<LandingTeaserPayload>(
      `/portal/landing-teaser?page_key=${encodeURIComponent(pageKey)}`,
      {
        method: 'GET',
        skipUnauthorizedEvent: true,
      }
    );
  },

  /**
   * Authenticated CMS page payload with ordered sections and bound landing_section_items.
   */
  async getPortalPage(
    pageKey: PortalPageKey = 'landing_home',
    token?: string | null
  ): Promise<PortalPage> {
    return apiFetch<PortalPage>(`/portal/pages/${encodeURIComponent(pageKey)}`, {
      method: 'GET',
      token,
    });
  },

  // --- Admin LANDING_CMS Endpoints ---
  async getAdminPortalPages(): Promise<PortalPage[]> {
    return apiFetch<PortalPage[]>('/admin/landing/pages');
  },

  async updatePortalPage(
    pageId: string,
    payload: Partial<
      Pick<
        PortalPage,
        | 'title'
        | 'description'
        | 'auth_mode'
        | 'requires_auth'
        | 'is_published'
        | 'seo_title'
        | 'seo_description'
      >
    >
  ): Promise<PortalPage> {
    return apiFetch<PortalPage>(`/admin/landing/pages/${encodeURIComponent(pageId)}`, {
      method: 'PATCH',
      body: JSON.stringify(payload),
    });
  },

  async updateLandingSection(
    sectionId: string,
    payload: Partial<LandingSection>
  ): Promise<LandingSection> {
    return apiFetch<LandingSection>(
      `/admin/landing/sections/${encodeURIComponent(sectionId)}`,
      {
        method: 'PATCH',
        body: JSON.stringify(payload),
      }
    );
  },

  async reorderLandingSections(
    pageId: string,
    orderedSectionIds: string[]
  ): Promise<void> {
    await apiFetch<void>(
      `/admin/landing/pages/${encodeURIComponent(pageId)}/reorder`,
      {
        method: 'POST',
        body: JSON.stringify({ section_ids: orderedSectionIds }),
      }
    );
  },

  async upsertSectionItem(
    sectionId: string,
    payload: Partial<LandingSectionItem> & {
      slot_role: LandingSectionItem['slot_role'];
      target_type: LandingSectionItem['target_type'];
    }
  ): Promise<LandingSectionItem> {
    const endpoint = payload.id
      ? `/admin/landing/items/${encodeURIComponent(payload.id)}`
      : `/admin/landing/sections/${encodeURIComponent(sectionId)}/items`;
    const method = payload.id ? 'PATCH' : 'POST';

    return apiFetch<LandingSectionItem>(endpoint, {
      method,
      body: JSON.stringify(payload),
    });
  },

  async deleteSectionItem(itemId: string): Promise<void> {
    await apiFetch<void>(`/admin/landing/items/${encodeURIComponent(itemId)}`, {
      method: 'DELETE',
    });
  },
};
