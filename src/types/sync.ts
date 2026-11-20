export type SyncMode = 'auto_sync' | 'locked_override' | 'manual_local';

export type UpstreamAuthType = 'sanctum_bearer' | 'api_key' | 'oauth2';

export interface ExternalApiSource {
  id: string;
  source_key: string;
  name: string;
  base_url: string;
  auth_type: UpstreamAuthType;
  credentials_env_key: string;
  sync_status: 'connected' | 'idle' | 'syncing' | 'error';
  last_synced_at?: string | null;
  available_endpoints: string[];
}

export interface ExternalSyncLog {
  id: string;
  source_id: string;
  source_name?: string;
  triggered_by_email: string;
  endpoint_called: string;
  filter_payload_json?: Record<string, unknown> | null;
  records_fetched: number;
  records_imported: number;
  records_updated: number;
  status: 'success' | 'partial' | 'failed';
  error_message?: string | null;
  started_at: string;
  finished_at?: string | null;
}

export interface UpstreamDiffField {
  field: string;
  portal_value: string;
  upstream_value: string;
}

export interface UpstreamAssetPreview {
  external_asset_uuid: string;
  asset_code: string;
  title: string;
  category: string;
  era: string;
  image: string;
  description: string;
  /** Nested upstream relations flattened during Portal import */
  inventor: { name: string; nationality?: string };
  patent: { number: string; filed_date?: string };
  museum: { name: string; location?: string };
  media_count: number;
  already_imported: boolean;
  portal_asset_id?: string | null;
  sync_mode?: SyncMode | null;
  is_selected_for_portal?: boolean;
  diff_fields?: UpstreamDiffField[];
  raw_snapshot: Record<string, unknown>;
}

export interface UpstreamMediaPreview {
  external_media_uuid: string;
  external_asset_uuid: string;
  asset_code: string;
  title: string;
  type: 'image' | '3d_model' | 'video_30s' | 'video_edu' | 'audio_narration' | 'book' | 'plate_2d';
  file_url: string;
  thumbnail_path: string;
  duration_label?: string;
  already_imported: boolean;
  portal_media_id?: string | null;
  is_selected_for_portal?: boolean;
  raw_snapshot: Record<string, unknown>;
}

export interface UpstreamFetchResponse {
  source: ExternalApiSource;
  endpoint: string;
  mode: 'live_upstream_proxy' | 'simulated_master_db';
  assets: UpstreamAssetPreview[];
  media: UpstreamMediaPreview[];
}

export interface UpstreamImportResult {
  log: ExternalSyncLog;
  imported_assets: number;
  updated_assets: number;
  imported_media: number;
  skipped_locked: number;
}
