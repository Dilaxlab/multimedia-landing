/**
 * Base fetch API wrapper prepared for external IAMS (Interactive Asset Metadata Standard) REST API integration.
 */
export async function apiFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const isMockMode = process.env.NEXT_PUBLIC_USE_LOCAL_MOCK !== 'false';
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  // In local mock mode or if no external API host is configured, do not trigger external DNS requests
  if (isMockMode || !baseUrl) {
    throw new Error('LocalMockModeActive');
  }

  const url = `${baseUrl}${endpoint}`;

  const defaultHeaders = {
    'Content-Type': 'application/json',
    'X-IAMS-Client-Version': process.env.NEXT_PUBLIC_IAMS_VERSION || '2.4',
    'Accept': 'application/json',
  };

  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    });

    if (!res.ok) {
      throw new Error(`IAMS API Error: ${res.status} ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.warn(`[IAMS API client] Fallback to verified local mock cache for ${endpoint}`);
    throw error;
  }
}
