import { NextResponse } from 'next/server';
import { getDb, requireAuth } from '@/server/localArchiveStore';
import { BlueprintMedia } from '@/types/media';

export async function GET(request: Request) {
  const auth = requireAuth(request);
  if (auth instanceof NextResponse) return auth;

  const db = getDb();
  const plates = db.media.filter(
    (m) => m.type === 'plate_2d' || m.type === 'image' || m.type === '3d_model'
  );

  const mapped: BlueprintMedia[] = plates.slice(0, 12).map((m) => ({
    id: m.id,
    title: m.title,
    type: m.type === '3d_model' ? '3D' : m.type === 'plate_2d' ? 'BLUEPRINT' : 'PLATE',
    typeLabel: m.kind_label || m.type,
    format: m.audio_format || 'Archival Plate',
    imageUrl: m.thumbnail_path || '/images/bells_telephone_hq.jpg',
    accessionRef: m.asset_code || m.asset_id,
    date: m.year || '19th Century',
    watermarkEnabled: m.watermark_enabled,
  }));

  return NextResponse.json(mapped);
}
