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

  if (slug.length === 0) {
    const { searchParams } = new URL(request.url);
    const themeSlug = searchParams.get('theme_slug');
    const parentTheme = themeSlug
      ? db.themes.find((t) => t.slug === themeSlug)
      : undefined;

    const list = db.categories
      .filter((c) => !parentTheme || c.theme_id === parentTheme.id)
      .sort((a, b) => a.global_number - b.global_number)
      .map((c) => ({
        ...c,
        assets_count: db.assets.filter((a) => a.category === c.code).length,
      }));

    return NextResponse.json(list);
  }

  const catSlug = decodeURIComponent(slug[0]);
  const category = db.categories.find(
    (c) => c.slug === catSlug || c.id === catSlug
  );
  if (!category) {
    return NextResponse.json({ message: 'Category not found' }, { status: 404 });
  }

  const parentTheme = db.themes.find((t) => t.id === category.theme_id);
  const siblings = parentTheme
    ? db.categories
        .filter((c) => c.theme_id === parentTheme.id)
        .sort((a, b) => a.category_slot - b.category_slot)
    : [];

  return NextResponse.json({
    ...category,
    theme: parentTheme ? { ...parentTheme, categories: siblings } : undefined,
  });
}
