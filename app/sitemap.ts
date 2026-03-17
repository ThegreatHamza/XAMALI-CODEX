import type { MetadataRoute } from 'next';

const locales = ['en', 'fr', 'ar'];
const routes = ['', '/about', '/jobs', '/workers', '/contact', '/faq', '/privacy', '/terms'];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `https://xamali.com/${locale}${route}`,
      lastModified: new Date()
    }))
  );
}
