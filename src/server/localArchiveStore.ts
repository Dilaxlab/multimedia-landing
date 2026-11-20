import fs from 'fs';
import path from 'path';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { AuthUser, ClearanceLevel } from '@/types/auth';
import { LandingSectionItem } from '@/types/landing';
import {
  extractBearerFromRequest,
  verifySanctumToken,
} from './cryptoAuth';
import {
  buildInitialDatabase,
  LocalArchiveDatabase,
  StoredUserRecord,
} from './seedArchive';

const STORE_PATH = path.join(process.cwd(), 'db', 'heritage-local-store.json');

const globalForArchive = globalThis as unknown as {
  __heritageArchiveDb?: LocalArchiveDatabase;
  __heritageArchiveDbMtime?: number;
};

function ensureDbLoaded(): LocalArchiveDatabase {
  let diskMtime = 0;
  try {
    if (fs.existsSync(STORE_PATH)) {
      diskMtime = fs.statSync(STORE_PATH).mtimeMs;
    }
  } catch {
    diskMtime = 0;
  }

  if (
    globalForArchive.__heritageArchiveDb &&
    (diskMtime === 0 || globalForArchive.__heritageArchiveDbMtime === diskMtime)
  ) {
    return globalForArchive.__heritageArchiveDb;
  }

  try {
    if (fs.existsSync(STORE_PATH)) {
      const raw = fs.readFileSync(STORE_PATH, 'utf8');
      const parsed = JSON.parse(raw) as LocalArchiveDatabase;
      if (parsed && Array.isArray(parsed.assets) && Array.isArray(parsed.users)) {
        if (!Array.isArray(parsed.external_api_sources) || !Array.isArray(parsed.external_sync_logs)) {
          const seeded = buildInitialDatabase();
          if (!Array.isArray(parsed.external_api_sources)) {
            parsed.external_api_sources = seeded.external_api_sources;
          }
          if (!Array.isArray(parsed.external_sync_logs)) {
            parsed.external_sync_logs = seeded.external_sync_logs;
          }
        }
        globalForArchive.__heritageArchiveDb = parsed;
        globalForArchive.__heritageArchiveDbMtime = diskMtime;
        return parsed;
      }
    }
  } catch {
    // Re-seed if local cache file is corrupt or unreadable
  }

  const seeded = buildInitialDatabase();
  globalForArchive.__heritageArchiveDb = seeded;
  persistDb(seeded);
  return seeded;
}

export function getDb(): LocalArchiveDatabase {
  return ensureDbLoaded();
}

export function persistDb(db: LocalArchiveDatabase): void {
  globalForArchive.__heritageArchiveDb = db;
  try {
    const dir = path.dirname(STORE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(STORE_PATH, JSON.stringify(db, null, 2), 'utf8');
    globalForArchive.__heritageArchiveDbMtime = fs.statSync(STORE_PATH).mtimeMs;
  } catch {
    // Graceful fallback to in-memory persistence if disk is read-only
  }
}

export function appendAuditLog(
  db: LocalArchiveDatabase,
  entry: {
    log_name: string;
    description: string;
    subject_type?: string;
    subject_id?: string;
    event: string;
    causer?: AuthUser | null;
  }
): void {
  const nextId = (db.activity_log[0]?.id || db.activity_log.length) + 1;
  db.activity_log.unshift({
    id: nextId,
    log_name: entry.log_name,
    description: entry.description,
    subject_type: entry.subject_type || null,
    subject_id: entry.subject_id || null,
    event: entry.event,
    causer_id: entry.causer?.id || null,
    causer: entry.causer
      ? { id: entry.causer.id, name: entry.causer.name, email: entry.causer.email }
      : null,
    created_at: new Date().toISOString(),
  });
  if (db.activity_log.length > 200) {
    db.activity_log.length = 200;
  }
}

export function hydratePublicUser(
  db: LocalArchiveDatabase,
  record: StoredUserRecord
): AuthUser {
  const userRoles = db.roles.filter((r) => record.role_ids.includes(r.id));
  const permSet = new Set<string>(record.direct_permissions || []);
  userRoles.forEach((r) => r.permission_names.forEach((p) => permSet.add(p)));

  const { password_hash: _ph, role_ids: _rids, direct_permissions: _dp, ...safe } =
    record;
  return {
    ...safe,
    roles: userRoles.map((r) => ({
      id: r.id,
      name: r.name,
      description: r.description,
      is_system: r.is_system,
      permissions: db.permissions.filter((p) => r.permission_names.includes(p.name)),
    })),
    all_permissions: Array.from(permSet),
  };
}

export function resolveAuthenticatedUser(
  request: Request | NextRequest
): { user: AuthUser; jti: string } | null {
  const token = extractBearerFromRequest(request);
  const claims = verifySanctumToken(token);
  if (!claims) return null;

  const db = getDb();
  if (db.revoked_token_jtis.includes(claims.jti)) return null;

  const record = db.users.find((u) => u.id === claims.userId && u.is_active);
  if (!record) return null;

  return { user: hydratePublicUser(db, record), jti: claims.jti };
}

export function requireAuth(
  request: Request | NextRequest
): { user: AuthUser; jti: string } | NextResponse {
  const resolved = resolveAuthenticatedUser(request);
  if (!resolved) {
    return NextResponse.json(
      { message: 'Unauthenticated. Sign in with your Archive Sanctum credentials.' },
      { status: 401 }
    );
  }
  return resolved;
}

const CLEARANCE_RANK: Record<ClearanceLevel, number> = {
  authenticated_member: 1,
  restricted_curator: 2,
  admin: 3,
};

export function userHasClearance(
  user: AuthUser,
  required: ClearanceLevel
): boolean {
  return (
    (CLEARANCE_RANK[user.clearance_level] || 0) >=
    (CLEARANCE_RANK[required] || 0)
  );
}

export function userHasPermission(user: AuthUser, perm: string): boolean {
  const roleNames = user.roles.map((r) => (typeof r === 'string' ? r : r.name));
  if (roleNames.includes('Super Admin')) return true;
  return (user.all_permissions || []).includes(perm);
}

export function requirePermission(
  request: Request | NextRequest,
  perm: string
): { user: AuthUser; jti: string } | NextResponse {
  const auth = requireAuth(request);
  if (auth instanceof NextResponse) return auth;
  if (!userHasPermission(auth.user, perm)) {
    return NextResponse.json(
      {
        message: `Forbidden (403). Missing required permission: ${perm}`,
      },
      { status: 403 }
    );
  }
  return auth;
}

/** Resolve foreign targets cleanly on `landing_section_items` */
export function resolveSectionItemTargets(
  db: LocalArchiveDatabase,
  item: LandingSectionItem
): LandingSectionItem {
  if (item.target_type === 'asset' && item.asset_id) {
    const asset = db.assets.find(
      (a) => a.id === item.asset_id || a.asset_code === item.asset_id
    );
    return { ...item, asset: asset || null };
  }
  if (item.target_type === 'asset_media' && item.media_id) {
    const media = db.media.find((m) => m.id === item.media_id);
    return { ...item, media: media || null };
  }
  if (item.target_type === 'theme' && item.theme_id) {
    const theme = db.themes.find((t) => t.id === item.theme_id);
    return { ...item, theme: theme || null };
  }
  if (item.target_type === 'asset_category' && item.asset_category_id) {
    const cat = db.categories.find((c) => c.id === item.asset_category_id);
    return { ...item, asset_category: cat || null };
  }
  return item;
}
