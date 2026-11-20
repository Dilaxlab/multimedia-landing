import { NextResponse } from 'next/server';
import {
  getDb,
  requireAuth,
  resolveSectionItemTargets,
} from '@/server/localArchiveStore';
import { LandingTeaserPayload, PortalPageKey } from '@/types/landing';

interface RouteContext {
  params: Promise<{ slug?: string[] }>;
}

export async function GET(request: Request, context: RouteContext) {
  const { slug = [] } = await context.params;
  const db = getDb();

  // Public Guest-Safe Teaser (`GET /api/portal/landing-teaser`)
  if (slug[0] === 'landing-teaser') {
    const { searchParams } = new URL(request.url);
    const pageKey = (searchParams.get('page_key') || 'landing_home') as PortalPageKey;
    const page =
      db.portal_pages.find((p) => p.page_key === pageKey) || db.portal_pages[0];

    const payload: LandingTeaserPayload = {
      page_key: page.page_key,
      title: page.title,
      description: page.description,
      auth_mode: page.auth_mode,
      requires_auth: page.requires_auth,
      stats: {
        themes_count: db.themes.length,
        categories_count: db.categories.length,
        assets_count: db.assets.length,
        media_count: db.media.length,
      },
      sections: page.sections
        .filter(
          (s) =>
            s.is_enabled &&
            (s as { guest_access?: string }).guest_access !== 'hidden'
        )
        .sort((a, b) => a.sort_order - b.sort_order)
        .map((s) => ({
          section_key: s.section_key,
          eyebrow: s.eyebrow,
          title_line_1: s.title_line_1,
          title_line_2: s.title_line_2,
          subtitle: s.subtitle,
          primary_cta_label: s.primary_cta_label,
          secondary_cta_label: s.secondary_cta_label,
          is_enabled: s.is_enabled,
          sort_order: s.sort_order,
          teaser_card_count: s.items?.length || 4,
        })),
    };

    return NextResponse.json(payload);
  }

  // Authenticated Full Portal Page (`GET /api/portal/pages/[pageKey]`)
  if (slug[0] === 'pages' && slug[1]) {
    const auth = requireAuth(request);
    if (auth instanceof NextResponse) return auth;

    const page = db.portal_pages.find((p) => p.page_key === slug[1]);
    if (!page) {
      return NextResponse.json({ message: 'Portal page not found' }, { status: 404 });
    }

    const hydrated = {
      ...page,
      sections: page.sections.map((sec) => ({
        ...sec,
        items: (sec.items || [])
          .filter(
            (item) =>
              (item as { audience?: string }).audience !== 'guest_only'
          )
          .map((item) => resolveSectionItemTargets(db, item)),
      })),
    };

    return NextResponse.json(hydrated);
  }

  return NextResponse.json({ message: 'Not found' }, { status: 404 });
}
