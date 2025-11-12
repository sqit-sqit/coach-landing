import type { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://flow-xr.com';

const locales = ['en', 'pl'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const paths = [
    '',
    'bogoban',
    'systemic-constellations',
    'privacy-policy',
    'terms-of-use',
    'auth/login',
    'auth/signup',
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const p of paths) {
      const url = p ? `${baseUrl}/${locale}/${p}` : `${baseUrl}/${locale}`;
      const alternates: Record<string, string> = {};
      for (const alt of locales) {
        alternates[alt] = p ? `${baseUrl}/${alt}/${p}` : `${baseUrl}/${alt}`;
      }
      entries.push({
        url,
        lastModified,
        changeFrequency: 'weekly',
        priority: p === '' ? 1 : 0.8,
        alternates: { languages: alternates },
      });
    }
  }

  return entries;
}



