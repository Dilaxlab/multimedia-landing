import { NextResponse } from 'next/server';
import {
  getDb,
  requireAuth,
  userHasPermission,
} from '@/server/localArchiveStore';

interface RouteContext {
  params: Promise<{ slug?: string[] }>;
}

export async function GET(request: Request, context: RouteContext) {
  const auth = requireAuth(request);
  if (auth instanceof NextResponse) return auth;

  const canViewRestricted = userHasPermission(
    auth.user,
    'assets-view-restricted'
  );
  const db = getDb();
  const { slug = [] } = await context.params;

  if (slug.length === 0) {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const themeSlug = searchParams.get('theme_slug');
    const categorySlug = searchParams.get('category_slug');
    const themeId = searchParams.get('theme_id');
    const categoryId = searchParams.get('category_id');
    const q = (searchParams.get('q') || '').trim().toLowerCase();
    const status = searchParams.get('status');

    let rows = db.assets.filter(
      (a) =>
        canViewRestricted ||
        !a.sensitivity_level ||
        a.sensitivity_level === 'authenticated_member'
    );

    if (category && category !== 'ALL') {
      rows = rows.filter(
        (a) => a.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (categorySlug || categoryId) {
      const matchedCat = db.categories.find(
        (c) =>
          (categorySlug && c.slug === categorySlug) ||
          (categoryId && c.id === categoryId)
      );
      if (matchedCat) {
        rows = rows.filter(
          (a) =>
            a.primary_category_id === matchedCat.id ||
            (matchedCat.code && a.category === matchedCat.code) ||
            Boolean(
              a.asset_category_contexts?.some(
                (ctx) => ctx.category_id === matchedCat.id
              )
            )
        );
      }
    }

    if (themeSlug || themeId) {
      const matchedTheme = db.themes.find(
        (t) =>
          (themeSlug && t.slug === themeSlug) || (themeId && t.id === themeId)
      );
      if (matchedTheme) {
        const themeCats = db.categories.filter(
          (c) => c.theme_id === matchedTheme.id
        );
        const themeCatIds = new Set(themeCats.map((c) => c.id));
        const themeCodes = new Set(themeCats.map((c) => c.code));
        rows = rows.filter(
          (a) =>
            (a.primary_category_id && themeCatIds.has(a.primary_category_id)) ||
            themeCodes.has(a.category) ||
            Boolean(
              a.asset_category_contexts?.some((ctx) =>
                themeCatIds.has(ctx.category_id)
              )
            )
        );
      }
    }

    if (status) {
      rows = rows.filter((a) => (a.status || 'published') === status);
    }

    if (q) {
      rows = rows.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.inventor.toLowerCase().includes(q) ||
          a.id.toLowerCase().includes(q) ||
          a.patent.toLowerCase().includes(q) ||
          a.desc.toLowerCase().includes(q)
      );
    }

    return NextResponse.json(rows);
  }

  const assetKey = decodeURIComponent(slug[0]).toLowerCase();
  const asset = db.assets.find(
    (a) =>
      a.id.toLowerCase() === assetKey ||
      a.asset_code?.toLowerCase() === assetKey ||
      a.uuid?.toLowerCase() === assetKey
  );

  if (!asset) {
    return NextResponse.json({ message: 'Asset not found' }, { status: 404 });
  }

  if (
    !canViewRestricted &&
    asset.sensitivity_level &&
    asset.sensitivity_level !== 'authenticated_member'
  ) {
    return NextResponse.json(
      {
        message:
          'Clearance Restricted (403): This archival dossier requires Content Curator or Admin clearance.',
      },
      { status: 403 }
    );
  }

  const attachedMedia = db.media
    .filter((m) => m.asset_id === asset.id)
    .map(({ file_url: _omit, ...safeMedia }) => safeMedia);

  return NextResponse.json({
    ...asset,
    asset_media: attachedMedia,
  });
}
