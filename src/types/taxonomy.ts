export type AttributeValueType = 'text' | 'number' | 'color' | 'badge' | 'url' | 'json';

export interface ThemeAttribute {
  id: string;
  theme_id: string;
  attr_key: string;
  attr_label: string;
  attr_value: string;
  value_type: AttributeValueType;
  is_public: boolean;
  position: number;
}

export interface CategoryAttribute {
  id: string;
  category_id: string;
  attr_key: string;
  attr_label: string;
  attr_value: string;
  value_type: AttributeValueType;
  is_public: boolean;
  position: number;
}

export interface AssetCategoryRecord {
  id: string;
  theme_id: string;
  parent_id?: string | null;
  category_slot: number; // 1..5
  global_number: number; // 1..50
  name: string;
  slug: string;
  code?: string | null;
  quote: string;
  tagline: string;
  short_description?: string | null;
  description?: string | null;
  epoch_timeline_json?: Array<{ year: string; title: string; detail: string }> | null;
  image?: string | null;
  icon?: string | null;
  lucide_icon_name?: string | null;
  cover_alt_text?: string | null;
  requires_auth: boolean;
  is_public: boolean;
  status: 'active' | 'published' | 'inactive' | 'archived';
  sort_order: number;
  seo_title?: string | null;
  seo_description?: string | null;
  assets_count?: number;
  attributes?: CategoryAttribute[];
  theme?: ThemeRecord;
}

export interface ThemeRecord {
  id: string;
  theme_slot: number; // 1..10
  slug: string;
  title: string;
  category_range: string;
  description: string;
  emoji?: string | null;
  accent_gradient: string;
  diorama_image_url: string;
  diorama_alt_text: string;
  seo_title?: string | null;
  seo_description?: string | null;
  requires_auth: boolean;
  is_public: boolean;
  status: 'draft' | 'active' | 'published' | 'archived';
  categories?: AssetCategoryRecord[];
  attributes?: ThemeAttribute[];
}
