import { useEffect, useState } from 'react';
import { SignedUrlPayload } from '@/types/media';
import { ApiError, apiFetch } from './api';

interface CachedSignedEntry {
  payload: SignedUrlPayload;
  expiresAtMs: number;
}

const signedCache = new Map<string, CachedSignedEntry>();

/** Refresh signed URLs 120s before 900s expiration to prevent mid-playback drop */
const REFRESH_BUFFER_MS = 120_000;

export const signedMediaService = {
  async requestSignedUrl(
    mediaId: string,
    forceRefresh = false
  ): Promise<SignedUrlPayload> {
    const cached = signedCache.get(mediaId);
    const now = Date.now();

    if (!forceRefresh && cached && now < cached.expiresAtMs - REFRESH_BUFFER_MS) {
      return cached.payload;
    }

    const payload = await apiFetch<SignedUrlPayload>(
      `/media/${encodeURIComponent(mediaId)}/signed-url`,
      { method: 'GET' }
    );

    const ttlSec = payload.ttl_seconds || 900;
    const expiresAtMs = payload.expires_at
      ? Date.parse(payload.expires_at) || now + ttlSec * 1000
      : now + ttlSec * 1000;

    signedCache.set(mediaId, { payload, expiresAtMs });
    return payload;
  },

  clearCache(): void {
    signedCache.clear();
  },
};

export function useSignedMediaUrl(mediaId: string | null | undefined) {
  const [data, setData] = useState<SignedUrlPayload | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | Error | null>(null);

  useEffect(() => {
    if (!mediaId) {
      setData(null);
      setError(null);
      return;
    }

    let cancelled = false;
    let refreshTimer: number | undefined;

    const load = async (force = false) => {
      setLoading(true);
      setError(null);
      try {
        const res = await signedMediaService.requestSignedUrl(mediaId, force);
        if (cancelled) return;
        setData(res);

        const ttlMs = (res.ttl_seconds || 900) * 1000;
        const nextRefreshIn = Math.max(30_000, ttlMs - REFRESH_BUFFER_MS);
        refreshTimer = window.setTimeout(() => {
          void load(true);
        }, nextRefreshIn);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err : new Error('Failed to obtain signed media stream URL.'));
          setData(null);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    void load(false);

    return () => {
      cancelled = true;
      if (refreshTimer) window.clearTimeout(refreshTimer);
    };
  }, [mediaId]);

  return { data, loading, error };
}
