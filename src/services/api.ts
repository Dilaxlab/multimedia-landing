export type ApiErrorCode =
  | 'UNAUTHENTICATED'
  | 'FORBIDDEN'
  | 'NOT_FOUND'
  | 'VALIDATION'
  | 'CONFIG_ERROR'
  | 'NETWORK_ERROR'
  | 'SERVER_ERROR';

export class ApiError extends Error {
  readonly status: number;
  readonly code: ApiErrorCode;
  readonly errors?: Record<string, string[]>;

  constructor(
    status: number,
    code: ApiErrorCode,
    message: string,
    errors?: Record<string, string[]>
  ) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
    this.errors = errors;
  }
}

export const AUTH_TOKEN_STORAGE_KEY = 'ha_sanctum_token';
export const AUTH_SESSION_COOKIE_NAME = 'ha_auth_session';
export const AUTH_TOKEN_COOKIE_NAME = 'ha_sanctum_token';

type UnauthorizedListener = () => void;
const unauthorizedListeners = new Set<UnauthorizedListener>();

export function onUnauthorizedResponse(listener: UnauthorizedListener): () => void {
  unauthorizedListeners.add(listener);
  return () => unauthorizedListeners.delete(listener);
}

function notifyUnauthorized(): void {
  unauthorizedListeners.forEach((fn) => {
    try {
      fn();
    } catch {
      // ignore listener errors
    }
  });
}

export function getStoredToken(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return (
      window.localStorage.getItem(AUTH_TOKEN_STORAGE_KEY) ||
      window.sessionStorage.getItem(AUTH_TOKEN_STORAGE_KEY)
    );
  } catch {
    return null;
  }
}

export function setStoredToken(token: string | null, remember = true): void {
  if (typeof window === 'undefined') return;
  try {
    if (!token) {
      window.localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
      window.sessionStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
      document.cookie = `${AUTH_SESSION_COOKIE_NAME}=; path=/; max-age=0; SameSite=Lax`;
      document.cookie = `${AUTH_TOKEN_COOKIE_NAME}=; path=/; max-age=0; SameSite=Lax`;
      return;
    }

    if (remember) {
      window.localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, token);
      window.sessionStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
    } else {
      window.sessionStorage.setItem(AUTH_TOKEN_STORAGE_KEY, token);
      window.localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
    }

    const maxAge = remember ? 60 * 60 * 24 * 7 : 60 * 60 * 8;
    const secureFlag = window.location.protocol === 'https:' ? '; Secure' : '';
    document.cookie = `${AUTH_SESSION_COOKIE_NAME}=1; path=/; max-age=${maxAge}; SameSite=Lax${secureFlag}`;
    document.cookie = `${AUTH_TOKEN_COOKIE_NAME}=${encodeURIComponent(token)}; path=/; max-age=${maxAge}; SameSite=Lax${secureFlag}`;
  } catch {
    // ignore storage errors
  }
}

export function isLocalMockEnabled(): boolean {
  return process.env.NEXT_PUBLIC_USE_LOCAL_MOCK === 'true';
}

export function getApiBaseUrl(): string {
  return (process.env.NEXT_PUBLIC_API_BASE_URL || '').replace(/\/+$/, '');
}

export function unwrapApiData<T>(payload: unknown): T {
  if (
    payload &&
    typeof payload === 'object' &&
    'data' in payload &&
    Object.keys(payload).length <= 3
  ) {
    return (payload as { data: T }).data;
  }
  return payload as T;
}

export interface ApiFetchOptions extends RequestInit {
  /** Override token explicitly (useful in Server Components passing cookie token) */
  token?: string | null;
  /** Skip broadcasting global 401 session clear (e.g. initial silent getMe probe) */
  skipUnauthorizedEvent?: boolean;
}

/**
 * Authenticated Sanctum API wrapper aligned with Heritage Archive Master v5 ERD.
 * Never falls back to mock datasets on 401/403/network errors when live mode is active.
 */
export async function apiFetch<T>(
  endpoint: string,
  options: ApiFetchOptions = {}
): Promise<T> {
  if (isLocalMockEnabled()) {
    throw new ApiError(
      503,
      'CONFIG_ERROR',
      'Local mock mode is enabled; live Master v5 API requests are disabled.'
    );
  }

  const baseUrl = getApiBaseUrl();
  if (!baseUrl) {
    throw new ApiError(
      500,
      'CONFIG_ERROR',
      'NEXT_PUBLIC_API_BASE_URL is not configured in .env.local.'
    );
  }

  const normalizedPath = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const url = `${baseUrl}${normalizedPath}`;

  const token = options.token !== undefined ? options.token : getStoredToken();
  const isFormData =
    typeof FormData !== 'undefined' && options.body instanceof FormData;

  const headers = new Headers(options.headers);
  if (!headers.has('Accept')) {
    headers.set('Accept', 'application/json');
  }
  if (!isFormData && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }
  if (!headers.has('X-IAMS-Client-Version')) {
    headers.set(
      'X-IAMS-Client-Version',
      process.env.NEXT_PUBLIC_IAMS_VERSION || '2.4'
    );
  }
  if (token && !headers.has('Authorization')) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  let res: Response;
  try {
    const { token: _t, skipUnauthorizedEvent: _s, ...fetchInit } = options;
    res = await fetch(url, {
      ...fetchInit,
      headers,
      credentials: fetchInit.credentials ?? 'include',
    });
  } catch (err) {
    throw new ApiError(
      0,
      'NETWORK_ERROR',
      err instanceof Error
        ? `Unable to reach Archive API (${err.message}).`
        : 'Unable to reach Archive API.'
    );
  }

  let parsedBody: Record<string, unknown> | null = null;
  const contentType = res.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    try {
      parsedBody = await res.json();
    } catch {
      parsedBody = null;
    }
  }

  if (!res.ok) {
    const serverMessage =
      (parsedBody?.message as string | undefined) ||
      `Archive API error (${res.status} ${res.statusText})`;
    const fieldErrors = parsedBody?.errors as
      | Record<string, string[]>
      | undefined;

    if (res.status === 401) {
      if (!options.skipUnauthorizedEvent) {
        setStoredToken(null);
        notifyUnauthorized();
      }
      throw new ApiError(401, 'UNAUTHENTICATED', serverMessage);
    }

    if (res.status === 403) {
      throw new ApiError(403, 'FORBIDDEN', serverMessage);
    }

    if (res.status === 404) {
      throw new ApiError(404, 'NOT_FOUND', serverMessage);
    }

    if (res.status === 422) {
      throw new ApiError(422, 'VALIDATION', serverMessage, fieldErrors);
    }

    throw new ApiError(res.status, 'SERVER_ERROR', serverMessage, fieldErrors);
  }

  if (res.status === 204 || parsedBody === null) {
    return undefined as T;
  }

  return unwrapApiData<T>(parsedBody);
}
