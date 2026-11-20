import { NextResponse } from 'next/server';
import { getDb, requireAuth } from '@/server/localArchiveStore';
import { VideoVignette } from '@/types/media';

export async function GET(request: Request) {
  const auth = requireAuth(request);
  if (auth instanceof NextResponse) return auth;

  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const db = getDb();

  const videos = db.media.filter(
    (m) => m.type === 'video_30s' || m.type === 'video_edu'
  );

  const mapped: VideoVignette[] = videos
    .map((m) => {
      const asset = db.assets.find((a) => a.id === m.asset_id);
      return {
        id: m.id,
        assetId: asset?.id || m.asset_id,
        categoryId: asset?.category,
        title: m.title,
        inventor: m.inventor_name || asset?.inventor || 'Archive Inventor',
        shortDesc: m.description || asset?.desc || '',
        duration: m.duration_label || '0:30',
        totalSeconds: m.duration_seconds || 30,
        narrator: m.narrator_name || 'Heritage Archive',
        narratorInstitution: m.narrator_institution || 'Heritage Archive',
        thumbnailUrl: m.thumbnail_path || asset?.image || '/images/bells_telephone_hq.jpg',
        watermarkEnabled: m.watermark_enabled,
        signedUrlTtlSeconds: m.signed_url_ttl_seconds,
        scenes:
          m.scenes_timeline_json && m.scenes_timeline_json.length > 0
            ? m.scenes_timeline_json
            : [
                {
                  title: 'Workshop Origin',
                  timeRange: '00:00 - 00:10',
                  description: asset?.story || m.description || m.title,
                },
                {
                  title: 'Mechanical Principle',
                  timeRange: '00:10 - 00:20',
                  description: asset?.mechanics || m.title,
                },
                {
                  title: 'Historical Impact',
                  timeRange: '00:20 - 00:30',
                  description: asset?.legacy || m.title,
                },
              ],
      };
    })
    .filter((v) => !category || category === 'ALL' || v.categoryId === category);

  return NextResponse.json(mapped);
}
