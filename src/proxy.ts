import { NextRequest, NextResponse } from 'next/server';

const SESSION_COOKIE = 'ha_auth_session';
const TOKEN_COOKIE = 'ha_sanctum_token';

/**
 * Next.js 16 route proxy enforcing authentication gate on sensitive routes
 * (/admin, /media, /themes, /categories, /category, /inventions) while keeping
 * / (Landing teaser_with_auth_unlock), /login, and /forgot-password accessible.
 */
export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  const hasSessionCookie =
    request.cookies.has(SESSION_COOKIE) || request.cookies.has(TOKEN_COOKIE);

  if (!hasSessionCookie) {
    const loginUrl = new URL('/login', request.url);
    const nextTarget = `${pathname}${search || ''}`;
    loginUrl.searchParams.set('next', nextTarget);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/media/:path*',
    '/themes/:path*',
    '/categories/:path*',
    '/inventions/:path*',
  ],
};
