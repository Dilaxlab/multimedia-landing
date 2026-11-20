import type { AssetCategoryRecord, ThemeRecord } from './taxonomy';
import type { HistoricalAsset } from './asset';
import type { AssetMediaRecord } from './media';

export type PortalPageKey = 'landing_home' | 'media_library';

export type PortalAuthMode =
  | 'mixed_public_and_auth'
  | 'require_login'
  | 'teaser_with_auth_unlock';

export type SectionGuestAccess = 'hidden' | 'public_view' | 'locked_teaser';
export type SectionAuthAccess = 'unlocked_full' | 'role_restricted';
export type ItemAudience = 'both' | 'guest_only' | 'authenticated_only';

export type LandingSectionKey =
  | 'hero_stage'
  | 'whats_inside_formats'
  | 'theme_directory'
  | 'featured_inventions'
  | 'media_hero_collage'
  | 'media_archive_grid';

export type MinAccessTier =
  | 'authenticated_viewer'
  | 'curator_only'
  | 'admin_only';

export type SlotRole =
  | 'hero_marquee_card'
  | 'hero_collage_tile'
  | 'format_bento_card'
  | 'featured_specimen';

export type LandingTargetType =
  | 'asset'
  | 'asset_media'
  | 'theme'
  | 'asset_category';

export type LandingOutputType = 'video' | '3d' | 'book' | '2d' | 'story';

export interface LandingSectionItem {
  id: string;
  section_id: string;
  slot_role: SlotRole;
  target_type: LandingTargetType;
  audience?: ItemAudience;
  asset_id?: string | null;
  media_id?: string | null;
  theme_id?: string | null;
  asset_category_id?: string | null;
  override_title?: string | null;
  override_subtitle?: string | null;
  override_badge?: string | null;
  override_image_url?: string | null;
  output_type?: LandingOutputType | null;
  display_order: number;
  is_visible: boolean;
  asset?: HistoricalAsset | null;
  media?: AssetMediaRecord | null;
  theme?: ThemeRecord | null;
  asset_category?: AssetCategoryRecord | null;
}

export interface LandingSection {
  id: string;
  page_id: string;
  section_key: LandingSectionKey;
  eyebrow?: string | null;
  title_line_1: string;
  title_line_2?: string | null;
  subtitle?: string | null;
  primary_cta_label?: string | null;
  primary_cta_href?: string | null;
  secondary_cta_label?: string | null;
  secondary_cta_href?: string | null;
  display_config_json?: Record<string, unknown> | null;
  guest_access?: SectionGuestAccess;
  auth_access?: SectionAuthAccess;
  requires_auth: boolean;
  min_access_tier: MinAccessTier;
  is_enabled: boolean;
  sort_order: number;
  items?: LandingSectionItem[];
}

export interface PortalPage {
  id: string;
  page_key: PortalPageKey;
  route_path: string;
  title: string;
  description?: string | null;
  auth_mode: PortalAuthMode;
  requires_auth: boolean;
  is_published: boolean;
  seo_title?: string | null;
  seo_description?: string | null;
  sections: LandingSection[];
}

/** Safe guest teaser response: blurred headlines & counts only, zero raw media paths */
export interface LandingTeaserPayload {
  page_key: PortalPageKey;
  title: string;
  description?: string | null;
  auth_mode: PortalAuthMode;
  requires_auth: boolean;
  stats?: {
    themes_count: number;
    categories_count: number;
    assets_count: number;
    media_count: number;
  };
  sections: Array<{
    section_key: LandingSectionKey;
    eyebrow?: string | null;
    title_line_1: string;
    title_line_2?: string | null;
    subtitle?: string | null;
    primary_cta_label?: string | null;
    secondary_cta_label?: string | null;
    is_enabled: boolean;
    sort_order: number;
    teaser_card_count: number;
    teaser_labels?: string[];
  }>;
}
