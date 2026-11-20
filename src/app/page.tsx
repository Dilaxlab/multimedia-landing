'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import HeroSectionThree, {
  HeroThreeCard,
  HeroThreeOutputType,
} from '@/components/sections/HeroSectionThree';
import WhatsInsideSection from '@/components/sections/WhatsInsideSection';
import ThemeFamiliesSection from '@/components/sections/ThemeFamiliesSection';
import TrendingInventionsSection, {
  FeaturedSpecimen,
} from '@/components/sections/TrendingInventionsSection';
import AuthUnlockGate from '@/components/common/AuthUnlockGate';
import { useAuth } from '@/context/AuthContext';
import { landingService } from '@/services/landingService';
import { taxonomyService } from '@/services/taxonomyService';
import { ApiError } from '@/services/api';
import {
  LandingSection,
  LandingSectionItem,
  LandingSectionKey,
  LandingTeaserPayload,
  MinAccessTier,
  PortalPage,
} from '@/types/landing';
import { ThemeRecord } from '@/types/taxonomy';

function mapHeroItemsToColumns(items: LandingSectionItem[]): HeroThreeCard[][] | undefined {
  const visible = items
    .filter((i) => i.slot_role === 'hero_marquee_card' && i.is_visible)
    .sort((a, b) => a.display_order - b.display_order);

  if (visible.length === 0) return undefined;

  const cols: HeroThreeCard[][] = [[], [], []];
  visible.forEach((item, idx) => {
    const asset = item.asset;
    const outputType: HeroThreeOutputType = item.output_type || '3d';
    const card: HeroThreeCard = {
      id: item.id,
      assetId: asset?.asset_code || asset?.id || item.asset_id || 'HA-101',
      title: item.override_title || asset?.title || asset?.name || 'Archival Plate',
      inventor: item.override_subtitle || asset?.inventor || asset?.inventor_name || '',
      patent: item.override_badge || asset?.patentNumber || asset?.patent_number || '',
      year: asset?.year || (asset?.invented_year ? String(asset.invented_year) : ''),
      outputType,
      src:
        item.override_image_url ||
        asset?.cover_image ||
        asset?.primary_image ||
        asset?.image ||
        '/images/bells_telephone_hq.jpg',
      alt: item.override_title || asset?.title || 'Archival specimen card',
    };
    cols[idx % 3].push(card);
  });

  return cols.filter((col) => col.length > 0);
}

function mapFeaturedSpecimens(items: LandingSectionItem[]): FeaturedSpecimen[] {
  return items
    .filter((i) => i.slot_role === 'featured_specimen' && i.is_visible && i.asset)
    .sort((a, b) => a.display_order - b.display_order)
    .map((item) => {
      const a = item.asset!;
      return {
        id: a.asset_code || a.id,
        title: item.override_title || a.title || a.name || 'Untitled Patent',
        inventor: a.inventor || a.inventor_name || '',
        year: a.year || (a.invented_year ? String(a.invented_year) : ''),
        patentNumber: a.patentNumber || a.patent_number || a.patent || '',
        summary: item.override_subtitle || a.short_description || a.desc || '',
        image:
          item.override_image_url ||
          a.cover_image ||
          a.primary_image ||
          a.image ||
          '/images/bells_telephone_hq.jpg',
        imageAlt: a.cover_alt_text || a.title || 'Featured archival specimen',
      };
    });
}

export default function HomePage() {
  const router = useRouter();
  const { isAuthenticated, isLoading: authLoading, hasRole, hasClearance } = useAuth();

  const [portalPage, setPortalPage] = useState<PortalPage | null>(null);
  const [teaserPayload, setTeaserPayload] = useState<LandingTeaserPayload | null>(null);
  const [liveThemes, setLiveThemes] = useState<ThemeRecord[]>([]);
  const [apiError, setApiError] = useState<unknown>(null);

  useEffect(() => {
    if (authLoading) return;
    let cancelled = false;

    async function loadLanding() {
      setApiError(null);
      if (isAuthenticated) {
        try {
          const [pageData, themesData] = await Promise.all([
            landingService.getPortalPage('landing_home'),
            taxonomyService.getThemes().catch(() => [] as ThemeRecord[]),
          ]);
          if (cancelled) return;
          setPortalPage(pageData);
          setLiveThemes(themesData);
          setTeaserPayload(null);
        } catch (err) {
          if (cancelled) return;
          setApiError(err);
          setPortalPage(null);
        }
      } else {
        setPortalPage(null);
        setLiveThemes([]);
        try {
          const teaser = await landingService.getLandingTeaser('landing_home');
          if (cancelled) return;
          if (teaser.auth_mode === 'require_login') {
            router.replace('/login?next=/');
            return;
          }
          setTeaserPayload(teaser);
        } catch (err) {
          if (cancelled) return;
          setApiError(err);
        }
      }
    }

    void loadLanding();
    return () => {
      cancelled = true;
    };
  }, [authLoading, isAuthenticated, router]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const canViewTier = (tier: MinAccessTier): boolean => {
    if (tier === 'authenticated_viewer') return isAuthenticated;
    if (tier === 'curator_only') {
      return isAuthenticated && (hasClearance('restricted_curator') || hasRole(['Content Curator', 'Admin', 'Super Admin']));
    }
    if (tier === 'admin_only') {
      return isAuthenticated && (hasClearance('admin') || hasRole(['Admin', 'Super Admin']));
    }
    return false;
  };

  const orderedSections = useMemo(() => {
    if (portalPage?.sections?.length) {
      return [...portalPage.sections]
        .filter((s) => s.is_enabled && (!s.requires_auth || canViewTier(s.min_access_tier)))
        .sort((a, b) => a.sort_order - b.sort_order);
    }

    if (teaserPayload?.sections?.length) {
      return [...teaserPayload.sections]
        .filter((s) => s.is_enabled)
        .sort((a, b) => a.sort_order - b.sort_order)
        .map((s) => ({
          id: s.section_key,
          page_id: teaserPayload.page_key,
          section_key: s.section_key,
          eyebrow: s.eyebrow,
          title_line_1: s.title_line_1,
          title_line_2: s.title_line_2,
          subtitle: s.subtitle,
          primary_cta_label: s.primary_cta_label,
          secondary_cta_label: s.secondary_cta_label,
          requires_auth: true,
          min_access_tier: 'authenticated_viewer' as MinAccessTier,
          is_enabled: s.is_enabled,
          sort_order: s.sort_order,
          items: [],
          teaserCount: s.teaser_card_count,
        }));
    }

    // Default safe teaser skeleton order (strictly locked when unauthenticated)
    const fallbackOrder: LandingSectionKey[] = [
      'hero_stage',
      'whats_inside_formats',
      'theme_directory',
      'featured_inventions',
    ];
    return fallbackOrder.map((key, idx) => ({
      id: key,
      page_id: 'landing_home',
      section_key: key,
      eyebrow: '',
      title_line_1: '',
      title_line_2: '',
      subtitle: '',
      requires_auth: true,
      min_access_tier: 'authenticated_viewer' as MinAccessTier,
      is_enabled: true,
      sort_order: idx + 1,
      items: [],
    }));
  }, [portalPage, teaserPayload, isAuthenticated]);

  const isLockedTeaser = !isAuthenticated;

  const renderSection = (section: LandingSection & { teaserCount?: number }) => {
    switch (section.section_key) {
      case 'hero_stage': {
        const heroColumns = section.items?.length
          ? mapHeroItemsToColumns(section.items)
          : undefined;
        return (
          <HeroSectionThree
            key={section.id}
            eyebrow={section.eyebrow || undefined}
            titleLine1={section.title_line_1 || undefined}
            titleLine2={section.title_line_2 || undefined}
            subtitle={section.subtitle || undefined}
            primaryCtaLabel={section.primary_cta_label || undefined}
            secondaryCtaLabel={section.secondary_cta_label || undefined}
            columns={heroColumns}
            lockedTeaser={isLockedTeaser}
            onExploreCollection={() => scrollToSection('themes')}
            onWatchStories={() => scrollToSection('whats-inside')}
            onExploreAsset={(id, format) => {
              if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0, behavior: 'instant' });
              }
              router.push(format ? `/inventions/${id}#${format}` : `/inventions/${id}`);
            }}
          />
        );
      }

      case 'whats_inside_formats':
        return (
          <WhatsInsideSection
            key={section.id}
            title={section.title_line_1 || undefined}
            subtitle={section.subtitle || undefined}
            onExploreDisciplines={() => scrollToSection('themes')}
          />
        );

      case 'theme_directory':
        return (
          <ThemeFamiliesSection
            key={section.id}
            title={section.title_line_1 || undefined}
            subtitle={section.subtitle || undefined}
            liveThemes={liveThemes}
            lockedTeaser={isLockedTeaser}
          />
        );

      case 'featured_inventions': {
        const specimens = section.items?.length
          ? mapFeaturedSpecimens(section.items)
          : [];
        return (
          <TrendingInventionsSection
            key={section.id}
            title={section.title_line_1 || undefined}
            subtitle={section.subtitle || undefined}
            specimens={specimens}
            lockedTeaser={isLockedTeaser}
            teaserCount={section.teaserCount || 4}
          />
        );
      }

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-surface selection:bg-primary/30">

      {!authLoading && isLockedTeaser && (
        <div className="w-full px-4 sm:px-8 pt-6 bg-surface dark:bg-[#09090b]">
          <div className="max-w-7xl mx-auto">
            <AuthUnlockGate
              compact
              nextPath="/"
              error={
                apiError instanceof ApiError && apiError.code === 'FORBIDDEN'
                  ? apiError
                  : undefined
              }
              title="Heritage Archive · Guest Preview"
              description="You are viewing the public preview of the collection. Sign in with a member or curator account to open full 10×5 thematic dossiers, interactive 3D patent models, illustrated books, and licensed media streams."
            />
          </div>
        </div>
      )}

      {isAuthenticated && apiError ? (
        <div className="px-4 sm:px-8">
          <AuthUnlockGate nextPath="/" error={apiError} />
        </div>
      ) : null}

      {orderedSections.map(renderSection)}
    </div>
  );
}
