import { NextResponse } from 'next/server';
import { getDb, requireAuth } from '@/server/localArchiveStore';
import { StoryPage, StoryPublication, StoryPublicationType } from '@/types/story';

interface RouteContext {
  params: Promise<{ slug?: string[] }>;
}

function buildPublicationsFromAssets(): StoryPublication[] {
  const db = getDb();
  const list: StoryPublication[] = [];

  for (const asset of db.assets) {
    if (asset.status && asset.status !== 'published') continue;

    const code = asset.asset_code || asset.id;
    const cover =
      asset.cover_image ||
      asset.primary_image ||
      asset.image ||
      '/images/bells_telephone_hq.jpg';
    const schematic = asset.schematicImage || cover;
    const primaryCtx = asset.asset_category_contexts?.[0];

    const pages: StoryPage[] = [
      {
        pageNumber: 1,
        heading: 'Chapter I · The Spark & Origins',
        body:
          primaryCtx?.story_act1_genesis ||
          asset.story ||
          asset.short_description ||
          asset.desc ||
          `Discover the historical origins of ${asset.name || asset.title}.`,
        imageUrl: cover,
        imageAltText: `${asset.name || asset.title} — archival front plate`,
      },
      {
        pageNumber: 2,
        heading: 'Chapter II · Inside the Mechanism',
        body:
          primaryCtx?.story_act2_mechanics ||
          asset.mechanics ||
          `Engineered by ${asset.inventor_name || asset.inventor || 'an archive pioneer'} (${asset.invented_year || asset.year || '19th Century'}), this apparatus transformed raw mechanical motion into repeatable precision.`,
        imageUrl: schematic,
        imageAltText: `${asset.name || asset.title} — technical schematic`,
      },
      {
        pageNumber: 3,
        heading: 'Chapter III · Enduring Legacy',
        body:
          primaryCtx?.story_act3_legacy ||
          asset.legacy ||
          asset.historical_significance ||
          `Preserved in the Heritage Archive (${asset.holding_institution || 'Historical Collection'}), ${asset.name || asset.title} remains a cornerstone of modern engineering history.`,
        imageUrl: cover,
        imageAltText: `${asset.name || asset.title} — legacy plate`,
      },
    ];

    const pubType: StoryPublicationType =
      list.length % 3 === 0
        ? 'storybook'
        : list.length % 3 === 1
          ? 'digital_book'
          : 'narrative';

    list.push({
      id: `pub-${code.toLowerCase()}`,
      assetId: asset.id,
      assetCode: code,
      assetName: asset.name || asset.title || 'Archival Invention',
      inventor: asset.inventor_name || asset.inventor || 'Archive Inventor',
      year: String(asset.invented_year || asset.year || ''),
      themeId: null,
      type: pubType,
      title: `${asset.name || asset.title}: Illustrated Invention Folio`,
      language: 'English',
      ageGroup: pubType === 'storybook' ? 'Ages 8–14' : pubType === 'digital_book' ? 'All Ages' : 'Ages 12+',
      coverUrl: cover,
      downloadUrl: null,
      pageCount: pages.length,
      excerpt: pages[0].body,
      pages,
      updatedAt: new Date().toISOString(),
    });
  }

  return list;
}

export async function GET(request: Request, context: RouteContext) {
  const auth = requireAuth(request);
  if (auth instanceof NextResponse) return auth;

  const { slug = [] } = await context.params;
  const all = buildPublicationsFromAssets();

  if (slug.length > 0) {
    const id = decodeURIComponent(slug[0]);
    const match = all.find(
      (p) => p.id.toLowerCase() === id.toLowerCase() || p.assetCode.toLowerCase() === id.toLowerCase()
    );
    if (!match) {
      return NextResponse.json({ message: 'Story publication not found.' }, { status: 404 });
    }
    return NextResponse.json(match);
  }

  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  const language = searchParams.get('language')?.toLowerCase();
  const ageGroup = searchParams.get('age_group')?.toLowerCase();
  const q = searchParams.get('q')?.trim().toLowerCase() || '';

  const filtered = all
    .filter((item) => {
      if (type && type !== 'all' && item.type !== type) return false;
      if (language && language !== 'all' && item.language.toLowerCase() !== language) return false;
      if (ageGroup && ageGroup !== 'all' && item.ageGroup.toLowerCase() !== ageGroup) return false;
      if (q) {
        const hay = `${item.title} ${item.assetName} ${item.assetCode} ${item.inventor || ''}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    })
    .map(({ pages: _pages, ...summary }) => summary);

  return NextResponse.json(filtered);
}
