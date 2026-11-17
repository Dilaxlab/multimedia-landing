import {
  ALL_50_CATEGORIES,
  CategoryClassification,
  getCategoryBySlug,
  getThemeBySlug,
  ThemeFamily,
} from '@/data/taxonomy';
import {
  MOCK_HISTORICAL_ASSETS,
  OFFICIAL_18_CATEGORIES,
} from '@/lib/constants';
import { HistoricalAsset } from '@/types/asset';

export type FunnelStage = 'home' | 'theme' | 'category' | 'asset' | 'media';

export const LAST_CATEGORY_STORAGE_KEY = 'ha_last_category_slug';

export interface RouteContext {
  stage: FunnelStage;
  isHome: boolean;
  activeTheme?: ThemeFamily;
  activeCategory?: CategoryClassification;
  legacyCategory?: (typeof OFFICIAL_18_CATEGORIES)[number];
  activeAsset?: HistoricalAsset;
  parentCategoryHref: string;
  parentCategoryTitle: string;
  backFallbackHref: string;
}

/**
 * Resolves the active 4-stage funnel state (Home -> Theme -> Category -> Asset)
 * from the current pathname, persisted session category, and active discipline key.
 */
export function resolveRouteContext(
  pathname: string,
  lastCategorySlug: string | null,
  activeLegacyKey: string
): RouteContext {
  const cleanPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  const segments = cleanPath.split('/').filter(Boolean);

  if (segments[0] === 'themes' && segments[1]) {
    const activeTheme = getThemeBySlug(decodeURIComponent(segments[1]));
    return {
      stage: 'theme',
      isHome: false,
      activeTheme,
      parentCategoryHref: '/#themes',
      parentCategoryTitle: activeTheme?.title ?? 'Themes',
      backFallbackHref: '/#themes',
    };
  }

  if (segments[0] === 'categories' && segments[1]) {
    const slug = decodeURIComponent(segments[1]);
    const match = getCategoryBySlug(slug);
    const activeCategory = match?.category;
    const activeTheme = match?.theme;
    return {
      stage: 'category',
      isHome: false,
      activeTheme,
      activeCategory,
      parentCategoryHref: '#assets',
      parentCategoryTitle: activeCategory?.title ?? 'Category Assets',
      backFallbackHref: activeTheme
        ? `/themes/${activeTheme.slug}#categories`
        : '/#themes',
    };
  }

  if (segments[0] === 'category' && segments[1]) {
    const key = decodeURIComponent(segments[1]);
    const legacyCategory = OFFICIAL_18_CATEGORIES.find(
      (c) => c.key.toLowerCase() === key.toLowerCase()
    );
    const activeCategory = legacyCategory
      ? ALL_50_CATEGORIES.find((c) =>
          c.legacyCategoryKeys.includes(legacyCategory.key)
        )
      : undefined;
    const activeTheme = activeCategory
      ? getThemeBySlug(activeCategory.themeSlug)
      : undefined;
    return {
      stage: 'category',
      isHome: false,
      activeTheme,
      activeCategory,
      legacyCategory,
      parentCategoryHref: '#assets',
      parentCategoryTitle:
        legacyCategory?.label ?? activeCategory?.title ?? 'Category',
      backFallbackHref: activeTheme
        ? `/themes/${activeTheme.slug}#categories`
        : '/#themes',
    };
  }

  if (segments[0] === 'inventions' && segments[1]) {
    const assetId = decodeURIComponent(segments[1]);
    const activeAsset = MOCK_HISTORICAL_ASSETS.find(
      (a) => a.id.toLowerCase() === assetId.toLowerCase()
    );

    const sessionMatch = lastCategorySlug
      ? getCategoryBySlug(lastCategorySlug)
      : undefined;
    const sessionCategory = sessionMatch?.category;
    const sessionMatchesAsset =
      Boolean(sessionCategory) &&
      (!activeAsset ||
        sessionCategory!.legacyCategoryKeys.includes(activeAsset.category));

    const fallbackCategory = activeAsset
      ? ALL_50_CATEGORIES.find(
          (c) => c.legacyCategoryKeys[0] === activeAsset.category
        ) ??
        ALL_50_CATEGORIES.find((c) =>
          c.legacyCategoryKeys.includes(activeAsset.category)
        )
      : undefined;

    const resolvedCategory = sessionMatchesAsset
      ? sessionCategory
      : fallbackCategory;

    const legacyCategory = activeAsset
      ? OFFICIAL_18_CATEGORIES.find((c) => c.key === activeAsset.category)
      : activeLegacyKey && activeLegacyKey !== 'ALL'
        ? OFFICIAL_18_CATEGORIES.find((c) => c.key === activeLegacyKey)
        : undefined;

    const activeTheme =
      sessionMatchesAsset && sessionMatch?.theme
        ? sessionMatch.theme
        : resolvedCategory
          ? getThemeBySlug(resolvedCategory.themeSlug)
          : undefined;

    const parentCategoryHref = resolvedCategory
      ? `/categories/${resolvedCategory.slug}`
      : legacyCategory
        ? `/category/${legacyCategory.key}`
        : '/#themes';

    const parentCategoryTitle =
      resolvedCategory?.title ?? legacyCategory?.label ?? 'Collection';

    return {
      stage: 'asset',
      isHome: false,
      activeTheme,
      activeCategory: resolvedCategory,
      legacyCategory,
      activeAsset,
      parentCategoryHref,
      parentCategoryTitle,
      backFallbackHref: parentCategoryHref,
    };
  }

  if (segments[0] === 'media') {
    return {
      stage: 'media',
      isHome: false,
      parentCategoryHref: '/media',
      parentCategoryTitle: 'Media Library',
      backFallbackHref: '/',
    };
  }

  return {
    stage: 'home',
    isHome: cleanPath === '/',
    parentCategoryHref: '/#themes',
    parentCategoryTitle: 'Themes',
    backFallbackHref: '/',
  };
}
