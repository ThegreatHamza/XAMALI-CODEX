import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, locales } from './lib/i18n/config';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/_next') || pathname.includes('.')) return NextResponse.next();

  const hasLocale = locales.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`));
  if (hasLocale) return NextResponse.next();

  const localeCookie = request.cookies.get('xamali-locale')?.value;
  const preferred = locales.includes(localeCookie as (typeof locales)[number]) ? localeCookie : defaultLocale;
  return NextResponse.redirect(new URL(`/${preferred}${pathname}`, request.url));
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)']
};
