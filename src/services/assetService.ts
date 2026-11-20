import {
  Asset3DProfileRecord,
  AssetCategoryContextRecord,
  AssetCertificationRecord,
  CategoryFilterType,
  HistoricalAsset,
} from '@/types/asset';
import { apiFetch } from './api';

/**
 * Normalizes Laravel Master v5 `assets` JSON (camelCase or snake_case + nested context/media/3D)
 * into a unified HistoricalAsset consumed across Dossier and Gallery components.
 */
export function normalizeHistoricalAsset(raw: Partial<HistoricalAsset> & Record<string, unknown>): HistoricalAsset {
  const primaryCtx =
    raw.active_context ||
    (Array.isArray(raw.asset_category_contexts)
      ? raw.asset_category_contexts.find((c) => c.is_primary_context) ||
        raw.asset_category_contexts[0]
      : undefined);

  const blueprintSpecs = primaryCtx?.blueprint_specs?.length
    ? primaryCtx.blueprint_specs.map((spec) => ({
        item: spec.spec_label,
        spec: spec.unit ? `${spec.spec_value} ${spec.unit}` : spec.spec_value,
        figureRef: spec.figure_ref || undefined,
      }))
    : (raw.blueprintLedger as HistoricalAsset['blueprintLedger']) || [];

  const plateMedia = Array.isArray(raw.asset_media)
    ? raw.asset_media.find((m) => m.type === 'plate_2d' || m.type === 'image')
    : undefined;

  const yearStr =
    raw.year ||
    (raw.invented_year ? String(raw.invented_year) : undefined) ||
    (typeof raw.creation_date_text === 'string' ? raw.creation_date_text : undefined) ||
    '';

  const idValue =
    (typeof raw.asset_code === 'string' && raw.asset_code) ||
    (typeof raw.id === 'string' && raw.id) ||
    '';

  const patentNumber =
    raw.patentNumber ||
    (typeof raw.patent_number === 'string' ? raw.patent_number : '') ||
    '';

  return {
    ...(raw as unknown as HistoricalAsset),
    id: idValue,
    uuid: typeof raw.id === 'string' ? raw.id : raw.uuid,
    asset_code: typeof raw.asset_code === 'string' ? raw.asset_code : idValue,
    title:
      (primaryCtx?.contextual_title as string | undefined) ||
      (raw.name as string | undefined) ||
      (raw.title as string | undefined) ||
      'Untitled Invention',
    officialTitle:
      (raw.officialTitle as string | undefined) ||
      (raw.alternate_title as string | undefined) ||
      (raw.name as string | undefined),
    inventor:
      (raw.inventor as string | undefined) ||
      (raw.inventor_name as string | undefined) ||
      'Archive Inventor',
    creator:
      (raw.creator as string | undefined) ||
      (raw.creator_name as string | undefined) ||
      (raw.inventor_name as string | undefined),
    patent:
      (raw.patent as string | undefined) ||
      (patentNumber ? `Pat. ${patentNumber}` : ''),
    patentNumber,
    patentDate:
      (raw.patentDate as string | undefined) ||
      (raw.creation_date_text as string | undefined) ||
      (raw.creation_date as string | undefined) ||
      yearStr,
    year: yearStr,
    location:
      (raw.location as string | undefined) ||
      (raw.place_of_origin as string | undefined) ||
      (raw.country_of_origin as string | undefined) ||
      'Archival Collection',
    category: ((raw.category as string | undefined) || 'ENERGY') as CategoryFilterType,
    categoryLabel:
      (raw.categoryLabel as string | undefined) ||
      (raw.category as string | undefined) ||
      'Archival Discipline',
    badge:
      (primaryCtx?.contextual_badge as string | undefined) ||
      (raw.badge as string | undefined) ||
      (raw.holding_institution as string | undefined) ||
      'Heritage Archive',
    image:
      (primaryCtx?.contextual_cover_url as string | undefined) ||
      (raw.primary_image as string | undefined) ||
      (raw.cover_image as string | undefined) ||
      (raw.image as string | undefined) ||
      '/images/bells_telephone_hq.jpg',
    thumbnail:
      (raw.thumbnail as string | undefined) ||
      (raw.cover_image as string | undefined) ||
      (raw.primary_image as string | undefined) ||
      (raw.image as string | undefined),
    desc:
      (primaryCtx?.contextual_summary as string | undefined) ||
      (raw.short_description as string | undefined) ||
      (raw.public_description as string | undefined) ||
      (raw.desc as string | undefined) ||
      '',
    description:
      (raw.description as string | undefined) ||
      (raw.public_description as string | undefined) ||
      (raw.desc as string | undefined),
    polyCount:
      (raw.polyCount as string | undefined) ||
      (raw.asset_3d_profile?.readiness_score
        ? `Readiness ${raw.asset_3d_profile.readiness_score}%`
        : 'Master Twin Geometry'),
    medium:
      (raw.medium as string | undefined) ||
      (raw.primary_material as string | undefined) ||
      'Mixed Archival Materials',
    resonance:
      (primaryCtx?.contextual_resonance as string | undefined) ||
      (raw.resonance as string | undefined) ||
      'Verified Historical Twin',
    era:
      (raw.era as string | undefined) ||
      (raw.period_era as string | undefined) ||
      yearStr,
    story:
      (primaryCtx?.story_act1_genesis as string | undefined) ||
      (raw.story as string | undefined) ||
      (raw.historical_significance as string | undefined) ||
      '',
    mechanics:
      (primaryCtx?.story_act2_mechanics as string | undefined) ||
      (raw.mechanics as string | undefined) ||
      '',
    legacy:
      (primaryCtx?.story_act3_legacy as string | undefined) ||
      (raw.legacy as string | undefined) ||
      '',
    curatorQuote:
      (primaryCtx?.curator_quote as string | undefined) ||
      (raw.curatorQuote as string | undefined),
    curatorAuthor:
      (primaryCtx?.curator_author as string | undefined) ||
      (raw.curatorAuthor as string | undefined),
    tags:
      (raw.tags as string[] | undefined) ||
      (raw.tags_json as string[] | undefined) ||
      [],
    blueprintLedger: blueprintSpecs,
    hotspots:
      plateMedia?.hotspots_json ||
      (raw.hotspots as HistoricalAsset['hotspots']) ||
      [],
  };
}

export const assetService = {
  /**
   * Fetch authenticated assets. Does NOT fall back to mock arrays on 401/403/errors
   * so restricted data stays gated behind Sanctum authentication.
   */
  async getAssets(
    params: {
      category?: string;
      theme_slug?: string;
      category_slug?: string;
      theme_id?: string;
      category_id?: string;
      q?: string;
      status?: string;
    } = {},
    token?: string | null
  ): Promise<HistoricalAsset[]> {
    const sp = new URLSearchParams();
    if (params.category && params.category !== 'ALL') sp.set('category', params.category);
    if (params.theme_slug) sp.set('theme_slug', params.theme_slug);
    if (params.category_slug) sp.set('category_slug', params.category_slug);
    if (params.theme_id) sp.set('theme_id', params.theme_id);
    if (params.category_id) sp.set('category_id', params.category_id);
    if (params.q) sp.set('q', params.q);
    if (params.status) sp.set('status', params.status);

    const suffix = sp.toString() ? `?${sp.toString()}` : '';
    const rows = await apiFetch<Array<Partial<HistoricalAsset> & Record<string, unknown>>>(
      `/assets${suffix}`,
      { token }
    );
    return rows.map(normalizeHistoricalAsset);
  },

  async getAssetById(
    id: string,
    contextCategorySlug?: string,
    token?: string | null
  ): Promise<HistoricalAsset> {
    const query = contextCategorySlug
      ? `?category_slug=${encodeURIComponent(contextCategorySlug)}`
      : '';
    const raw = await apiFetch<Partial<HistoricalAsset> & Record<string, unknown>>(
      `/assets/${encodeURIComponent(id)}${query}`,
      { token }
    );
    return normalizeHistoricalAsset(raw);
  },

  async filterByCategory(category: CategoryFilterType): Promise<HistoricalAsset[]> {
    return this.getAssets({ category });
  },

  async searchAssets(query: string): Promise<HistoricalAsset[]> {
    return this.getAssets({ q: query });
  },

  // --- Admin Curatorial & Certification Endpoints ---
  async createAsset(payload: Partial<HistoricalAsset>): Promise<HistoricalAsset> {
    const raw = await apiFetch<Partial<HistoricalAsset> & Record<string, unknown>>(
      '/admin/assets',
      {
        method: 'POST',
        body: JSON.stringify(payload),
      }
    );
    return normalizeHistoricalAsset(raw);
  },

  async updateAsset(
    id: string,
    payload: Partial<HistoricalAsset>
  ): Promise<HistoricalAsset> {
    const raw = await apiFetch<Partial<HistoricalAsset> & Record<string, unknown>>(
      `/admin/assets/${encodeURIComponent(id)}`,
      {
        method: 'PATCH',
        body: JSON.stringify(payload),
      }
    );
    return normalizeHistoricalAsset(raw);
  },

  async deleteAsset(id: string): Promise<void> {
    await apiFetch<void>(`/admin/assets/${encodeURIComponent(id)}`, {
      method: 'DELETE',
    });
  },

  async upsertCategoryContext(
    assetId: string,
    payload: Partial<AssetCategoryContextRecord>
  ): Promise<AssetCategoryContextRecord> {
    const endpoint = payload.id
      ? `/admin/contexts/${encodeURIComponent(payload.id)}`
      : `/admin/assets/${encodeURIComponent(assetId)}/contexts`;
    return apiFetch<AssetCategoryContextRecord>(endpoint, {
      method: payload.id ? 'PATCH' : 'POST',
      body: JSON.stringify(payload),
    });
  },

  async deleteCategoryContext(
    assetId: string,
    contextId: string
  ): Promise<void> {
    await apiFetch<void>(
      `/admin/assets/${encodeURIComponent(assetId)}/contexts/${encodeURIComponent(contextId)}`,
      { method: 'DELETE' }
    );
  },

  async update3DProfile(
    assetId: string,
    payload: Partial<Asset3DProfileRecord>
  ): Promise<Asset3DProfileRecord> {
    return apiFetch<Asset3DProfileRecord>(
      `/admin/assets/${encodeURIComponent(assetId)}/3d-profile`,
      {
        method: 'PUT',
        body: JSON.stringify(payload),
      }
    );
  },

  async certifyAsset(
    assetId: string,
    payload: { status: 'certified' | 'rejected' | 'pending'; remarks?: string }
  ): Promise<AssetCertificationRecord> {
    return apiFetch<AssetCertificationRecord>(
      `/admin/assets/${encodeURIComponent(assetId)}/certify`,
      {
        method: 'POST',
        body: JSON.stringify(payload),
      }
    );
  },
};
