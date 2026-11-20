import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import {
  createSignedMediaToken,
  verifySignedMediaToken,
} from '@/server/cryptoAuth';
import {
  getDb,
  requireAuth,
  requirePermission,
  userHasPermission,
} from '@/server/localArchiveStore';

interface RouteContext {
  params: Promise<{ slug?: string[] }>;
}

const MIME_MAP: Record<string, string> = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.glb': 'model/gltf-binary',
  '.gltf': 'model/gltf+json',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.pdf': 'application/pdf',
};

export async function GET(request: Request, context: RouteContext) {
  const { slug = [] } = await context.params;
  const db = getDb();

  // 1. Stream Verified 900s Signed Media (`GET /api/media/stream?token=...`)
  if (slug[0] === 'stream') {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');
    const claims = verifySignedMediaToken(token);
    if (!claims) {
      return NextResponse.json(
        { message: 'Signed stream URL invalid or expired (900s TTL).' },
        { status: 403 }
      );
    }

    const target = claims.targetPath || '/images/bells_telephone_hq.jpg';
    if (target.startsWith('http://') || target.startsWith('https://')) {
      return NextResponse.redirect(target, 302);
    }

    const publicDir = path.resolve(process.cwd(), 'public');
    const cleanRel = target.replace(/^\/+/, '');
    const resolvedPath = path.resolve(publicDir, cleanRel);
    if (!resolvedPath.startsWith(publicDir + path.sep)) {
      return NextResponse.json({ message: 'Forbidden path' }, { status: 403 });
    }

    if (!fs.existsSync(resolvedPath)) {
      return NextResponse.json({ message: 'Media asset file not found' }, { status: 404 });
    }

    const ext = path.extname(resolvedPath).toLowerCase();
    const mime = MIME_MAP[ext] || 'application/octet-stream';
    const bytes = fs.readFileSync(resolvedPath);

    return new NextResponse(bytes, {
      status: 200,
      headers: {
        'Content-Type': mime,
        'Cache-Control': 'private, max-age=300',
      },
    });
  }

  // 2. Mint 900s Signed URL (`GET /api/media/[id]/signed-url`)
  if (slug.length === 2 && slug[1] === 'signed-url') {
    const auth = requirePermission(request, 'asset-media-stream');
    if (auth instanceof NextResponse) return auth;

    const mediaId = decodeURIComponent(slug[0]);
    const item = db.media.find((m) => m.id === mediaId);
    if (!item) {
      return NextResponse.json({ message: 'Media record not found' }, { status: 404 });
    }

    const isStaff =
      userHasPermission(auth.user, 'assets-view-restricted') ||
      auth.user.clearance_level !== 'authenticated_member';

    if (item.access_tier === 'admin_only' && auth.user.clearance_level !== 'admin') {
      return NextResponse.json(
        { message: 'Admin clearance required to stream this asset.' },
        { status: 403 }
      );
    }
    if (item.access_tier === 'curator_only' && !isStaff) {
      return NextResponse.json(
        { message: 'Curator clearance required (`curator_only`).' },
        { status: 403 }
      );
    }

    const ttl = item.signed_url_ttl_seconds || 900;
    const token = createSignedMediaToken(
      {
        mediaId: item.id,
        userId: auth.user.id,
        targetPath: item.file_path || item.thumbnail_path || '/images/bells_telephone_hq.jpg',
      },
      ttl
    );

    return NextResponse.json({
      media_id: item.id,
      signed_url: `/api/media/stream?token=${encodeURIComponent(token)}`,
      expires_at: new Date(Date.now() + ttl * 1000).toISOString(),
      ttl_seconds: ttl,
      watermark_enabled: item.watermark_enabled,
      watermark_text: `${auth.user.email} · ${auth.user.clearance_level}`,
    });
  }

  // 3. List Media Catalog (`GET /api/media`) — withhold raw `file_url` until signed!
  const auth = requireAuth(request);
  if (auth instanceof NextResponse) return auth;

  const isStaff =
    userHasPermission(auth.user, 'assets-view-restricted') ||
    auth.user.clearance_level !== 'authenticated_member';

  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  const themeSlug = searchParams.get('theme_slug');
  const q = (searchParams.get('q') || '').trim().toLowerCase();
  const showInLib = searchParams.get('show_in_media_library');
  const assetId = searchParams.get('asset_id');

  const rows = db.media
    .filter((m) => {
      if (!isStaff && m.access_tier !== 'authenticated_viewer') return false;
      if (type && m.type !== type) return false;
      if (themeSlug && m.theme_slug !== themeSlug) return false;
      if (assetId && m.asset_id !== assetId && m.asset_code !== assetId) return false;
      if (showInLib === 'true' && !m.show_in_media_library) return false;
      if (q) {
        return (
          m.title.toLowerCase().includes(q) ||
          (m.asset_name || '').toLowerCase().includes(q) ||
          (m.inventor_name || '').toLowerCase().includes(q) ||
          (m.asset_code || '').toLowerCase().includes(q)
        );
      }
      return true;
    })
    .map(({ file_url: _omit, ...safe }) => safe);

  return NextResponse.json(rows);
}
