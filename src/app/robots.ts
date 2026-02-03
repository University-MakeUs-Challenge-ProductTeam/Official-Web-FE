import { env } from '@/lib/env';

import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = env.siteUrl;

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/privacy'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
