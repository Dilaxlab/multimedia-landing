import type { AssetMediaRecord } from './media';

export type CategoryFilterType =
  | 'ALL'
  | 'ENERGY'
  | 'TELECOM'
  | 'DOMESTIC'
  | 'TIME'
  | 'WIND'
  | 'AERO'
  | 'COMPUTING'
  | 'STEAM'
  | 'PRINTING'
  | 'OPTICS'
  | 'CIVIL'
  | 'AGRICULTURE'
  | 'MARITIME'
  | 'LIGHTING'
  | 'METALLURGY'
  | 'TRANSIT'
  | 'MEDICAL'
  | 'PHOTOGRAPHY'
  | string;

export type AssetSensitivityLevel =
  | 'authenticated_member'
  | 'restricted_curator'
  | 'confidential';

export type AssetWorkflowStatus =
  | 'draft'
  | 'pending_review'
  | 'verified'
  | 'published'
  | 'archived'
  | 'inactive';

export interface ContextBlueprintSpec {
  id: string;
  context_id: string;
  figure_ref?: string | null;
  spec_label: string;
  spec_value: string;
  unit?: string | null;
  position: number;
}

export interface AssetCategoryContextRecord {
  id: string;
  category_id: string;
  asset_id: string;
  is_primary_context: boolean;
  display_order: number;
  contextual_title: string;
  contextual_badge?: string | null;
  contextual_summary: string;
  curator_quote?: string | null;
  curator_author?: string | null;
  story_act1_genesis: string;
  story_act2_mechanics: string;
  story_act3_legacy: string;
  educational_summary?: string | null;
  child_friendly_summary?: string | null;
  contextual_resonance?: string | null;
  contextual_cover_url?: string | null;
  contextual_cover_alt?: string | null;
  workflow_status: 'draft' | 'pending_review' | 'verified' | 'published';
  blueprint_specs?: ContextBlueprintSpec[];
}

export interface Asset3DComponentRecord {
  id: number;
  profile_id: number;
  name: string;
  component_type?: string | null;
  length_mm?: number | null;
  width_mm?: number | null;
  height_mm?: number | null;
  diameter_mm?: number | null;
  weight_g?: number | null;
  material?: string | null;
  position?: Record<string, number> | null;
  rotation?: Record<string, number> | null;
  confidence: 'exact' | 'high' | 'medium' | 'low' | 'estimated';
  is_measured: boolean;
  sort_order: number;
}

export interface Asset3DSpecRecord {
  id: number;
  profile_id: number;
  spec_data: Record<string, unknown>;
  exact_fields?: string[] | null;
  inferred_fields?: string[] | null;
  missing_data_alerts?: string[] | null;
  overall_confidence: number;
  curator_approved_version?: number | null;
  approval_status: 'pending' | 'approved' | 'rejected';
  approval_notes?: string | null;
  approval_date?: string | null;
}

export interface Asset3DProfileRecord {
  id: number;
  asset_id: string;
  overall_length_mm?: number | null;
  overall_width_mm?: number | null;
  overall_height_mm?: number | null;
  overall_weight_g?: number | null;
  primary_material?: string | null;
  materials?: string[] | null;
  labels_engravings?: string[] | null;
  moving_parts?: string[] | null;
  asset_type_template?: string | null;
  readiness_status:
    | 'not_ready'
    | 'draft_ready'
    | 'high_accuracy_ready'
    | 'review_required';
  readiness_score: number;
  curator_notes?: string | null;
  components?: Asset3DComponentRecord[];
  specs?: Asset3DSpecRecord[];
}

export interface HistoricalEventRecord {
  id: number;
  asset_id: string;
  event_type: string;
  title: string;
  event_date?: string | null;
  event_date_text?: string | null;
  location?: string | null;
  country?: string | null;
  short_description?: string | null;
  description?: string | null;
  historical_significance?: string | null;
  person_name?: string | null;
  organization_name?: string | null;
  is_verified: boolean;
  sort_order: number;
}

export interface HistoricalReferenceRecord {
  id: number;
  asset_id: string;
  reference_type: string;
  title: string;
  author?: string | null;
  publisher?: string | null;
  publication_name?: string | null;
  publication_date?: string | null;
  isbn?: string | null;
  doi?: string | null;
  citation?: string | null;
  source_url?: string | null;
  is_primary_source: boolean;
  is_verified: boolean;
}

export interface AssetCertificationRecord {
  id: number;
  user_id: number;
  asset_id: string;
  status: 'certified' | 'rejected' | 'pending';
  remarks?: string | null;
  certified_at?: string | null;
  created_at: string;
}

export interface HistoricalAsset {
  // Primary identifiers (mapped seamlessly from backend UUID or asset_code)
  id: string;
  uuid?: string;
  asset_code?: string;
  accession_number?: string | null;
  slug?: string;

  // Display fields used by museum plates & dossiers
  title: string;
  officialTitle?: string;
  name?: string;
  short_title?: string | null;
  inventor: string;
  inventor_name?: string;
  creator?: string;
  creator_name?: string | null;
  patent: string;
  patentNumber?: string;
  patent_number?: string | null;
  patentDate: string;
  creation_date?: string | null;
  creation_date_text?: string | null;
  year?: string;
  invented_year?: number | null;
  location: string;
  place_of_origin?: string | null;
  country_of_origin?: string | null;
  holding_institution?: string | null;

  // Taxonomy links
  primary_category_id?: string | null;
  category: CategoryFilterType;
  categoryLabel: string;
  badge: string;

  // Images & Dossier content
  image: string;
  thumbnail?: string;
  primary_image?: string | null;
  cover_image?: string | null;
  cover_alt_text?: string | null;
  short_description?: string | null;
  desc: string;
  description?: string;
  public_description?: string | null;
  educational_summary?: string | null;
  child_friendly_summary?: string | null;
  exhibition_label_text?: string | null;
  historical_significance?: string | null;

  // Physical / Engineering metadata
  polyCount: string;
  medium: string;
  primary_material?: string | null;
  resonance: string;
  era: string;
  period_era?: string | null;
  story: string;
  mechanics: string;
  legacy: string;
  modelType: string;
  schematicImage?: string;
  videoDuration?: string;
  model3dUrl?: string;
  videoUrl?: string;
  tags?: string[];
  tags_json?: string[];
  curatorQuote?: string;
  curatorAuthor?: string;
  blueprintLedger?: { item: string; spec: string; figureRef?: string }[];
  hotspots?: { id: number; title: string; desc: string; pos: [number, number] }[];

  // Security, workflow, v6 provenance & Master relations
  requires_auth?: boolean;
  sensitivity_level?: AssetSensitivityLevel;
  restricted_access_flag?: boolean;
  restricted_access_notes?: string | null;
  twin_completeness_score?: number;
  threed_readiness_score?: number;
  status?: AssetWorkflowStatus;
  is_featured?: boolean;
  is_verified?: boolean;
  external_source_id?: string | null;
  external_asset_uuid?: string | null;
  external_synced_at?: string | null;
  external_raw_snapshot?: Record<string, unknown> | null;
  sync_mode?: 'auto_sync' | 'locked_override' | 'manual_local';
  is_selected_for_portal?: boolean;
  asset_category_contexts?: AssetCategoryContextRecord[];
  active_context?: AssetCategoryContextRecord | null;
  asset_3d_profile?: Asset3DProfileRecord | null;
  historical_events?: HistoricalEventRecord[];
  historical_references?: HistoricalReferenceRecord[];
  asset_media?: AssetMediaRecord[];
  certifications?: AssetCertificationRecord[];
}
