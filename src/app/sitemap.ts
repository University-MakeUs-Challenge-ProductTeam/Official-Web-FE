import { getProjectList } from '@/lib/api/project';
import { env } from '@/lib/env';

import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = env.siteUrl;

  // 정적 페이지
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/introduction`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/project`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/recruitment`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sponser`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sponser/apply`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ];

  // 동적 프로젝트 페이지
  try {
    const projectsData = await getProjectList({
      page: 0,
      size: 1000, // 모든 프로젝트 가져오기
      generation: 'ALL',
      platformName: 'ALL',
    });

    const projectPages: MetadataRoute.Sitemap = projectsData.content.map((project) => ({
      url: `${baseUrl}/project/${project.projectId}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    }));

    return [...staticPages, ...projectPages];
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Sitemap generation error:', error);
    return staticPages; // 에러 시 정적 페이지만 반환
  }
}
