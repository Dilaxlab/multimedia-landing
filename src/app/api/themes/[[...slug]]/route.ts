import { NextResponse } from 'next/server';
import { getDb, requireAuth } from '@/server/localArchiveStore';

interface RouteContext {
  params: Promise<{ slug?: string[] }>;
}

export async function GET(request: Request, context: RouteContext) {
  const auth = requireAuth(request);
  if (auth instanceof NextResponse) return auth;

  const { slug = [] } = await context.params;
  const db = getDb();

  const attachCategories = (themeId: string) =>
    db.categories
      .filter((c) => c.theme_id === themeId)
      .sort((a, b) => a.category_slot - b.category_slot)
      .map((c) => ({
        ...c,
        assets_count: db.assets.filter((a) => a.category === c.code).length,
      }));

  if (slug.length === 0) {
    const sorted = [...db.themes]
      .sort((a, b) => a.theme_slot - b.theme_slot)
      .map((t) => ({
        ...t,
        categories: attachCategories(t.id),
      }));
    return NextResponse.json(sorted);
  }

  const themeSlug = decodeURIComponent(slug[0]);
  const match = db.themes.find((t) => t.slug === themeSlug || t.id === themeSlug);
  if (!match) {
    return NextResponse.json({ message: 'Theme not found' }, { status: 404 });
  }

  return NextResponse.json({
    ...match,
    categories: attachCategories(match.id),
  });
}
