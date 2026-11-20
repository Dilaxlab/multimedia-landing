export type AssetMediaType =
  | 'image'
  | '3d_model'
  | 'video_30s'
  | 'video_edu'
  | 'audio_narration'
  | 'book'
  | 'plate_2d';

export type MediaAccessTier =
  | 'authenticated_viewer'
  | 'curator_only'
  | 'admin_only';

export type AssetAnchorSection = '2d' | '3d' | 'video' | 'story' | 'book';

export interface SignedUrlPayload {
  media_id: string;
  signed_url: string;
  secondary_signed_url?: string | null;
  expires_at: string;
  ttl_seconds: number;
  watermark_enabled: boolean;
  watermark_text?: string | null;
}

export interface AssetMediaRecord {
  id: string;
  asset_id: string;
  context_id?: string | null;
  theme_id?: string | null;
  type: AssetMediaType;
  file_type?: string | null;
  kind_label?: string | null;
  action_label?: string | null;
  asset_anchor: AssetAnchorSection;
  show_in_media_library: boolean;
  library_spotlight_rank?: number | null;
  duration_label?: string | null;
  title: string;
  description?: string | null;
  file_name?: string | null;
  file_path?: string | null;
  /** Intentionally withheld by server for restricted/member tiers until signed URL issued */
  file_url?: string | null;
  secondary_file_url?: string | null;
  mime_type?: string | null;
  file_size?: number | null;
  disk?: string;
  thumbnail_path?: string | null;
  alt_text: string;
  caption?: string | null;
  credit?: string | null;
  copyright?: string | null;
  license?: string | null;
  language_code?: string;
  duration_seconds?: number | null;
  transcript_text?: string | null;
  captions_vtt_json?: Array<{ start: number; end: number; textEn: string; textTa?: string }> | null;
  scenes_timeline_json?: Array<{ title: string; timeRange: string; description: string }> | null;
  viewer_preset_json?: Record<string, unknown> | null;
  hotspots_json?: Array<{ id: number; title: string; desc: string; pos: [number, number] }> | null;
  poly_count?: string | null;
  capture_method?: 'photogrammetry' | 'laser_scan' | 'ct_scan' | 'cad_reconstruction' | null;
  book_age_group?: 'all' | 'age_3_7' | 'age_8_14' | null;
  page_count?: number | null;
  book_pages_json?: Array<{ num: string; label: string; title: string; body: string; note?: string }> | null;
  plate_subtype?: 'blueprint' | 'plate' | 'poster' | 'photograph' | null;
  dpi_resolution?: number | null;
  narrator_name?: string | null;
  narrator_institution?: string | null;
  audio_format?: string | null;
  requires_auth: boolean;
  access_tier: MediaAccessTier;
  watermark_enabled: boolean;
  signed_url_ttl_seconds: number;
  is_primary: boolean;
  is_public: boolean;
  sort_order: number;
  status: string;

  // v6 External Source DB Provenance
  external_source_id?: string | null;
  external_media_uuid?: string | null;
  external_stream_source?: string | null;
  is_selected_for_portal?: boolean;

  // Embedded relation display summaries returned by API
  asset_code?: string;
  asset_name?: string;
  inventor_name?: string;
  year?: string;
  theme_slug?: string;
  theme_title?: string;
}

export interface VideoVignette {
  id: string;
  assetId: string;
  categoryId?: string;
  title: string;
  inventor: string;
  shortDesc: string;
  duration: string;
  totalSeconds: number;
  narrator: string;
  narratorInstitution: string;
  thumbnailUrl: string;
  videoUrl?: string | null;
  watermarkEnabled?: boolean;
  signedUrlTtlSeconds?: number;
  scenes: Array<{ title: string; timeRange: string; description: string }>;
}

export interface BlueprintMedia {
  id: string;
  title: string;
  type: '3D' | 'BLUEPRINT' | 'PLATE' | 'POSTER';
  typeLabel: string;
  format: string;
  imageUrl: string;
  accessionRef: string;
  date: string;
  watermarkEnabled?: boolean;
}
