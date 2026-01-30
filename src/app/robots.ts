import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://umc.it.kr';

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
