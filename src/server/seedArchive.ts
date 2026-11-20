import { THEME_FAMILIES } from '@/data/taxonomy';
import {
  MOCK_HISTORICAL_ASSETS,
  MOCK_VIDEO_VIGNETTES,
} from '@/lib/constants';
import {
  ActivityLogEntry,
  AuthUser,
  Permission,
  Role,
} from '@/types/auth';
import { PortalPage } from '@/types/landing';
import { AssetCategoryRecord, ThemeRecord } from '@/types/taxonomy';
import { HistoricalAsset } from '@/types/asset';
import { AssetMediaRecord } from '@/types/media';
import { ExternalApiSource, ExternalSyncLog } from '@/types/sync';
import { hashPassword } from './cryptoAuth';

export interface StoredUserRecord extends Omit<AuthUser, 'roles' | 'permissions' | 'all_permissions'> {
  password_hash: string;
  role_ids: number[];
  direct_permissions: string[];
}

export interface LocalArchiveDatabase {
  users: StoredUserRecord[];
  roles: Array<Role & { permission_names: string[] }>;
  permissions: Permission[];
  revoked_token_jtis: string[];
  reset_tokens: Record<string, { token: string; expires_at: number }>;
  portal_pages: PortalPage[];
  themes: ThemeRecord[];
  categories: AssetCategoryRecord[];
  assets: HistoricalAsset[];
  media: AssetMediaRecord[];
  external_api_sources: ExternalApiSource[];
  external_sync_logs: ExternalSyncLog[];
  activity_log: ActivityLogEntry[];
}

const ALL_PERMISSION_DEFS: Array<{ name: string; module_group: string }> = [
  { name: 'portal-pages-view', module_group: 'LANDING_CMS' },
  { name: 'portal-pages-update', module_group: 'LANDING_CMS' },
  { name: 'landing-sections-view', module_group: 'LANDING_CMS' },
  { name: 'landing-sections-update', module_group: 'LANDING_CMS' },
  { name: 'themes-view-any', module_group: 'TAXONOMY' },
  { name: 'themes-update', module_group: 'TAXONOMY' },
  { name: 'asset-categories-view-any', module_group: 'TAXONOMY' },
  { name: 'asset-categories-create', module_group: 'TAXONOMY' },
  { name: 'asset-categories-update', module_group: 'TAXONOMY' },
  { name: 'assets-view-any', module_group: 'ASSETS' },
  { name: 'assets-view-restricted', module_group: 'ASSETS' },
  { name: 'assets-create', module_group: 'ASSETS' },
  { name: 'assets-update', module_group: 'ASSETS' },
  { name: 'asset-category-contexts-update', module_group: 'ASSETS' },
  { name: 'asset-3d-profiles-update', module_group: 'ASSETS' },
  { name: 'asset-certifications-create', module_group: 'ASSETS' },
  { name: 'asset-media-view-any', module_group: 'MULTIMEDIA' },
  { name: 'asset-media-create', module_group: 'MULTIMEDIA' },
  { name: 'asset-media-update', module_group: 'MULTIMEDIA' },
  { name: 'asset-media-stream', module_group: 'MULTIMEDIA' },
  { name: 'users-view-any', module_group: 'AUTH_RBAC' },
  { name: 'users-update', module_group: 'AUTH_RBAC' },
  { name: 'roles-update', module_group: 'AUTH_RBAC' },
];

export function buildInitialDatabase(): LocalArchiveDatabase {
  const permissions: Permission[] = ALL_PERMISSION_DEFS.map((p, idx) => ({
    id: idx + 1,
    name: p.name,
    module_group: p.module_group,
    guard_name: 'web',
  }));

  const allPermNames = permissions.map((p) => p.name);

  const roles: Array<Role & { permission_names: string[] }> = [
    {
      id: 1,
      name: 'Viewer',
      guard_name: 'web',
      description: 'Default authenticated portal user with 900s signed member streams.',
      is_system: true,
      permission_names: [
        'portal-pages-view',
        'landing-sections-view',
        'themes-view-any',
        'asset-categories-view-any',
        'assets-view-any',
        'asset-media-view-any',
        'asset-media-stream',
      ],
    },
    {
      id: 2,
      name: 'Content Curator',
      guard_name: 'web',
      description: 'Edits assets, multi-category contexts, 3D readiness profiles, and 7-format media.',
      is_system: true,
      permission_names: [
        'portal-pages-view',
        'landing-sections-view',
        'themes-view-any',
        'asset-categories-view-any',
        'assets-view-any',
        'assets-view-restricted',
        'assets-create',
        'assets-update',
        'asset-category-contexts-update',
        'asset-3d-profiles-update',
        'asset-certifications-create',
        'asset-media-view-any',
        'asset-media-create',
        'asset-media-update',
        'asset-media-stream',
      ],
    },
    {
      id: 4,
      name: 'Admin',
      guard_name: 'web',
      description: 'Manages Landing CMS, Taxonomy, Restricted Assets, and QA Certifications.',
      is_system: true,
      permission_names: allPermNames.filter((n) => n !== 'roles-update'),
    },
    {
      id: 5,
      name: 'Super Admin',
      guard_name: 'web',
      description: 'Holds full RBAC, security policy matrix, user clearance, and audit log authority.',
      is_system: true,
      permission_names: allPermNames,
    },
  ];

  const nowIso = new Date().toISOString();

  const users: StoredUserRecord[] = [
    {
      id: 1,
      name: 'Dr. Aris Thorne (Super Admin)',
      email: 'admin@heritagearchive.org',
      is_active: true,
      must_verify_email: false,
      clearance_level: 'admin',
      institution_name: 'Heritage Archive Consortium',
      department_title: 'Chief Systems Archivist',
      password_hash: hashPassword('Admin@123'),
      role_ids: [5],
      direct_permissions: [],
    },
    {
      id: 2,
      name: 'Dr. Elena Vance (Curator)',
      email: 'curator@heritagearchive.org',
      is_active: true,
      must_verify_email: false,
      clearance_level: 'restricted_curator',
      institution_name: 'Smithsonian Partner Vault',
      department_title: 'Senior Mechanical Curator',
      password_hash: hashPassword('Curator@123'),
      role_ids: [2],
      direct_permissions: [],
    },
    {
      id: 4,
      name: 'Alex Rivera (Member Viewer)',
      email: 'viewer@heritagearchive.org',
      is_active: true,
      must_verify_email: false,
      clearance_level: 'authenticated_member',
      institution_name: 'Public Research Fellow',
      department_title: 'Member Access',
      password_hash: hashPassword('Viewer@123'),
      role_ids: [1],
      direct_permissions: [],
    },
  ];

  // Seed 10x5 Taxonomy
  const themes: ThemeRecord[] = [];
  const categories: AssetCategoryRecord[] = [];

  THEME_FAMILIES.forEach((tf, tIdx) => {
    const themeId = `theme-${tf.number}`;
    themes.push({
      id: themeId,
      theme_slot: tIdx + 1,
      slug: tf.slug,
      title: tf.title,
      category_range: tf.categoryRange,
      description: tf.description,
      emoji: tf.emoji,
      accent_gradient: tf.accentColor,
      diorama_image_url: `/images/themes/${tf.slug}.jpg`,
      diorama_alt_text: `${tf.title} museum exhibition plate`,
      requires_auth: true,
      is_public: false,
      status: 'published',
      attributes: [
        {
          id: `ta-${tf.number}-1`,
          theme_id: themeId,
          attr_key: 'wing_code',
          attr_label: 'Exhibition Wing',
          attr_value: `Wing ${tf.number}`,
          value_type: 'text',
          is_public: true,
          position: 1,
        },
      ],
    });

    tf.categories.forEach((cat, cIdx) => {
      const catId = `cat-${cat.number}`;
      categories.push({
        id: catId,
        theme_id: themeId,
        category_slot: cIdx + 1,
        global_number: Number(cat.number),
        name: cat.title,
        slug: cat.slug,
        code: cat.legacyCategoryKeys[0] || cat.slug.toUpperCase(),
        quote: cat.quote,
        tagline: cat.tagline,
        short_description: cat.tagline,
        image: `/images/themes/${tf.slug}.jpg`,
        icon: cat.emoji,
        requires_auth: true,
        is_public: false,
        status: 'published',
        sort_order: Number(cat.number),
        attributes: [
          {
            id: `ca-${cat.number}-1`,
            category_id: catId,
            attr_key: 'primary_discipline',
            attr_label: 'Discipline Key',
            attr_value: cat.legacyCategoryKeys[0] || 'GENERAL',
            value_type: 'badge',
            is_public: true,
            position: 1,
          },
        ],
      });
    });
  });

  // Seed Canonical Assets (90 inventions) with contexts, 3D profiles, events, references
  const featuredIds = new Set(['HA-101', 'HA-102', 'HA-103', 'HA-104']);
  const assets: HistoricalAsset[] = MOCK_HISTORICAL_ASSETS.map((src, idx) => {
    const primaryCat = categories.find((c) => c.code === src.category) || categories[0];
    const contextId = `ctx-${src.id}`;
    return {
      ...src,
      uuid: src.id,
      asset_code: src.id,
      slug: src.id.toLowerCase(),
      name: src.title,
      short_description: src.desc,
      inventor_name: src.inventor,
      patent_number: src.patentNumber || src.patent,
      period_era: src.era,
      place_of_origin: src.location,
      primary_material: src.medium,
      primary_category_id: primaryCat?.id || null,
      primary_image: src.image,
      cover_image: src.image,
      educational_summary: `Engineering Overview: ${src.mechanics || src.desc}`,
      child_friendly_summary: `Did you know? ${src.inventor} built ${src.title} (${src.year || ''}) so people could solve everyday work faster!`,
      requires_auth: true,
      sensitivity_level: idx % 15 === 0 ? 'restricted_curator' : 'authenticated_member',
      restricted_access_flag: idx % 15 === 0,
      twin_completeness_score: 92,
      threed_readiness_score: 88,
      status: 'published',
      is_featured: featuredIds.has(src.id),
      is_verified: true,
      asset_category_contexts: [
        {
          id: contextId,
          category_id: primaryCat?.id || 'cat-01',
          asset_id: src.id,
          is_primary_context: true,
          display_order: 1,
          contextual_title: src.officialTitle || src.title,
          contextual_badge: src.badge,
          contextual_summary: src.desc,
          curator_quote: src.curatorQuote,
          curator_author: src.curatorAuthor,
          story_act1_genesis: src.story || src.desc,
          story_act2_mechanics: src.mechanics || src.desc,
          story_act3_legacy: src.legacy || src.desc,
          educational_summary: src.mechanics,
          child_friendly_summary: src.story,
          contextual_resonance: src.resonance,
          contextual_cover_url: src.image,
          workflow_status: 'published',
          blueprint_specs: (src.blueprintLedger || []).map((row, sIdx) => ({
            id: `bps-${src.id}-${sIdx + 1}`,
            context_id: contextId,
            figure_ref: `Fig. ${sIdx + 1}`,
            spec_label: row.item,
            spec_value: row.spec,
            position: sIdx + 1,
          })),
        },
      ],
      asset_3d_profile: {
        id: idx + 1,
        asset_id: src.id,
        primary_material: src.medium,
        readiness_status: 'high_accuracy_ready',
        readiness_score: 90,
        curator_notes: `Verified procedural & CAD twin alignment for ${src.title}.`,
        components: [
          {
            id: idx * 2 + 1,
            profile_id: idx + 1,
            name: 'Primary Structural Assembly',
            material: src.medium.split('•')[0]?.trim() || 'Brass',
            confidence: 'exact',
            is_measured: true,
            sort_order: 1,
          },
          {
            id: idx * 2 + 2,
            profile_id: idx + 1,
            name: 'Patented Actuation Linkage',
            material: 'Hardened Alloy Steel',
            confidence: 'high',
            is_measured: true,
            sort_order: 2,
          },
        ],
      },
      historical_events: [
        {
          id: idx + 1,
          asset_id: src.id,
          event_type: 'Patent Grant',
          title: `Formal Patent Registration (${src.patentNumber || src.patent})`,
          event_date_text: src.patentDate || src.year || '19th Century',
          location: src.location,
          short_description: `${src.inventor} registered the working mechanism in ${src.location}.`,
          is_verified: true,
          sort_order: 1,
        },
      ],
      historical_references: [
        {
          id: idx + 1,
          asset_id: src.id,
          reference_type: 'Patent Filing Dossier',
          title: `${src.officialTitle || src.title} — Primary Specification`,
          author: src.inventor,
          publisher: src.badge || 'Patent Office Registry',
          is_primary_source: true,
          is_verified: true,
        },
      ],
    };
  });

  // Seed 7-Format Asset Media items (at least 36 items visible on /media + plates for each asset)
  const media: AssetMediaRecord[] = [];
  const mediaFormats: Array<{
    type: AssetMediaRecord['type'];
    kind_label: string;
    action_label: string;
    anchor: AssetMediaRecord['asset_anchor'];
    duration?: string;
  }> = [
    { type: '3d_model', kind_label: '3D Model', action_label: 'Open 3D', anchor: '3d' },
    { type: 'plate_2d', kind_label: '2D Plate', action_label: 'Inspect plate', anchor: '2d' },
    { type: 'image', kind_label: 'Image', action_label: 'View image', anchor: '2d' },
    { type: 'video_30s', kind_label: '30-Second Video', action_label: 'Play video', anchor: 'video', duration: '0:30' },
    { type: 'video_edu', kind_label: 'Educational Video', action_label: 'Watch film', anchor: 'video', duration: '1:45' },
    { type: 'audio_narration', kind_label: 'Audio', action_label: 'Listen', anchor: 'story', duration: '1:20' },
    { type: 'book', kind_label: 'Archival Book', action_label: 'Read folio', anchor: 'book' },
  ];

  // Ensure every theme has curated media entries across the 7 formats
  assets.slice(0, 36).forEach((asset, idx) => {
    const fmt = mediaFormats[idx % mediaFormats.length];
    const matchingTheme =
      themes.find((t) =>
        categories.some(
          (c) => c.theme_id === t.id && c.code === asset.category
        )
      ) || themes[idx % themes.length];
    const matchingVid = MOCK_VIDEO_VIGNETTES.find((v) => v.assetId === asset.id);

    media.push({
      id: `media-${String(idx + 1).padStart(3, '0')}`,
      asset_id: asset.id,
      theme_id: matchingTheme.id,
      type: fmt.type,
      kind_label: fmt.kind_label,
      action_label: fmt.action_label,
      asset_anchor: fmt.anchor,
      show_in_media_library: true,
      library_spotlight_rank: idx + 1,
      duration_label: fmt.duration,
      duration_seconds: fmt.type === 'video_edu' ? 105 : fmt.type === 'video_30s' ? 30 : fmt.type === 'audio_narration' ? 80 : null,
      title: `${asset.title} — ${fmt.kind_label}`,
      description: asset.desc,
      file_path: asset.image,
      thumbnail_path: asset.image,
      alt_text: `${asset.title} archival ${fmt.kind_label}`,
      transcript_text: `${asset.title} by ${asset.inventor}. ${asset.story} ${asset.mechanics}`,
      scenes_timeline_json: matchingVid?.scenes || null,
      viewer_preset_json: { modelType: asset.modelType },
      hotspots_json: asset.hotspots || null,
      poly_count: asset.polyCount,
      book_age_group: 'all',
      page_count: 3,
      book_pages_json: [
        {
          num: '01',
          label: 'Historical Background',
          title: `Origins of ${asset.title}`,
          body: asset.story || asset.desc,
        },
        {
          num: '02',
          label: 'Operating Principle',
          title: 'How the Mechanism Works',
          body: asset.mechanics || asset.desc,
        },
        {
          num: '03',
          label: 'Historical Impact',
          title: 'Lasting Legacy',
          body: asset.legacy || asset.desc,
        },
      ],
      narrator_name: matchingVid?.narrator || 'Dr. Elena Vance',
      narrator_institution: matchingVid?.narratorInstitution || 'Heritage Archive',
      requires_auth: true,
      access_tier: idx % 10 === 0 ? 'curator_only' : 'authenticated_viewer',
      watermark_enabled: true,
      signed_url_ttl_seconds: 900,
      is_primary: true,
      is_public: false,
      sort_order: idx + 1,
      status: 'active',
      asset_code: asset.id,
      asset_name: asset.title,
      inventor_name: asset.inventor,
      year: asset.year,
      theme_slug: matchingTheme.slug,
      theme_title: matchingTheme.title,
    });
  });

  // Portal Pages (`landing_home` + `media_library`)
  const heroItems = assets.slice(0, 15).map((a, idx) => ({
    id: `lsi-hero-${idx + 1}`,
    section_id: 'sec-hero',
    slot_role: 'hero_marquee_card' as const,
    target_type: 'asset' as const,
    asset_id: a.id,
    output_type: (['video', '3d', 'book', '2d', 'story'] as const)[idx % 5],
    display_order: idx + 1,
    is_visible: true,
  }));

  const featuredItems = ['HA-101', 'HA-102', 'HA-103', 'HA-104'].map((id, idx) => ({
    id: `lsi-feat-${idx + 1}`,
    section_id: 'sec-featured',
    slot_role: 'featured_specimen' as const,
    target_type: 'asset' as const,
    asset_id: id,
    display_order: idx + 1,
    is_visible: true,
  }));

  const collageItems = media.slice(0, 5).map((m, idx) => ({
    id: `lsi-col-${idx + 1}`,
    section_id: 'sec-media-collage',
    slot_role: 'hero_collage_tile' as const,
    target_type: 'asset_media' as const,
    media_id: m.id,
    override_badge: m.kind_label || m.type,
    display_order: idx + 1,
    is_visible: true,
  }));

  const portal_pages: PortalPage[] = [
    {
      id: 'page-landing-home',
      page_key: 'landing_home',
      route_path: '/',
      title: 'Heritage Archive — Home Portal',
      description: 'Controlled by LANDING_CMS (portal_pages + landing_sections).',
      auth_mode: 'teaser_with_auth_unlock',
      requires_auth: true,
      is_published: true,
      sections: [
        {
          id: 'sec-hero',
          page_id: 'page-landing-home',
          section_key: 'hero_stage',
          eyebrow: 'Heritage × Innovation × Commerce',
          title_line_1: '1,000 Patent Models.',
          title_line_2: 'Many Ways to Tell Every Story.',
          subtitle:
            'Turn rare physical patent models and historical artifacts into 3D reconstructions, archival plates, narrated stories, films, and illustrated books across 10 themes and 50 categories.',
          primary_cta_label: 'Explore 10 Theme Families',
          secondary_cta_label: 'See the 5 Media Formats',
          requires_auth: false,
          min_access_tier: 'authenticated_viewer',
          is_enabled: true,
          sort_order: 1,
          items: heroItems,
        },
        {
          id: 'sec-formats',
          page_id: 'page-landing-home',
          section_key: 'whats_inside_formats',
          title_line_1: 'One Authoritative Record. Five Reusable Formats.',
          subtitle:
            'Every historical patent model carries one persistent IAMIS asset ID linked to five curated formats, ready for museum halls, classrooms, and collector editions.',
          requires_auth: false,
          min_access_tier: 'authenticated_viewer',
          is_enabled: true,
          sort_order: 2,
          items: [],
        },
        {
          id: 'sec-themes',
          page_id: 'page-landing-home',
          section_key: 'theme_directory',
          title_line_1: '10 Theme Families. 50 Thematic Categories.',
          subtitle:
            'Built as a flexible many-to-many classification system. Start with any theme family, explore its five curated categories and promotional taglines, and inspect linked patent records.',
          requires_auth: true,
          min_access_tier: 'authenticated_viewer',
          is_enabled: true,
          sort_order: 3,
          items: [],
        },
        {
          id: 'sec-featured',
          page_id: 'page-landing-home',
          section_key: 'featured_inventions',
          title_line_1: 'Milestone Patent Models',
          subtitle:
            'Study landmark inventions that activate multiple thematic collections. Open any specimen to inspect its 2D plate, 3D model, narrated story, illustrated book, and video.',
          requires_auth: true,
          min_access_tier: 'authenticated_viewer',
          is_enabled: true,
          sort_order: 4,
          items: featuredItems,
        },
      ],
    },
    {
      id: 'page-media-library',
      page_key: 'media_library',
      route_path: '/media',
      title: 'The Media Library',
      auth_mode: 'require_login',
      requires_auth: true,
      is_published: true,
      sections: [
        {
          id: 'sec-media-collage',
          page_id: 'page-media-library',
          section_key: 'media_hero_collage',
          eyebrow: 'Shared Multimedia Content Factory',
          title_line_1: 'One Archive. Five Ways to Experience History.',
          subtitle:
            'Inspect restored 2D patent plates, interactive 3D models, short motion films, illustrated books, and narrated stories linked to every registered artifact.',
          primary_cta_label: 'Browse the Media Library',
          requires_auth: true,
          min_access_tier: 'authenticated_viewer',
          is_enabled: true,
          sort_order: 1,
          items: collageItems,
        },
      ],
    },
  ];

  const external_api_sources: ExternalApiSource[] = [
    {
      id: 'src-iams-master',
      source_key: 'iams_master_db',
      name: 'IAMS Master Backend API (e-commerce-admin-backend)',
      base_url:
        process.env.UPSTREAM_MASTER_API_URL || 'http://127.0.0.1:8000/api',
      auth_type: 'sanctum_bearer',
      credentials_env_key: 'UPSTREAM_MASTER_API_TOKEN',
      sync_status: 'connected',
      last_synced_at: null,
      available_endpoints: [
        '/assets/all',
        '/asset-media/all',
        '/historical-events/all',
        '/museums/all',
      ],
    },
  ];

  return {
    users,
    roles,
    permissions,
    revoked_token_jtis: [],
    reset_tokens: {},
    portal_pages,
    themes,
    categories,
    assets,
    media,
    external_api_sources,
    external_sync_logs: [],
    activity_log: [
      {
        id: 1,
        log_name: 'system',
        description: `Master v5 Archive initialized (${themes.length} themes, ${categories.length} categories, ${assets.length} assets, ${media.length} media items).`,
        event: 'SEED',
        causer_id: 1,
        causer: { id: 1, name: users[0].name, email: users[0].email },
        created_at: nowIso,
      },
    ],
  };
}
