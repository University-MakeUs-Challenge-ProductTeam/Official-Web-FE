import { env } from '@/lib/env';

/**
 * Schema.org 구조화된 데이터 생성 유틸리티
 * SEO 최적화를 위한 JSON-LD 스키마 생성
 */

export const generateOrganizationSchema = () => {
  const siteUrl = env.siteUrl;
  const logoUrl = new URL('/images/nav_logo.png', siteUrl).toString();

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'UMC - University MakeUs Challenge',
    'alternateName': 'UMC',
    'url': siteUrl,
    'logo': logoUrl,
    'sameAs': ['https://instagram.com/uni_makeus_challenge'],
    'contactPoint': {
      '@type': 'ContactPoint',
      'email': 'umc.smu@gmail.com',
      'contactType': 'Customer Service',
    },
    'description': '대학생 연합 IT 벤처 창업 동아리, University MakeUs Challenge (UMC). 기획자, 디자이너, 개발자가 모여 세상을 바꾸는 도전을 시작합니다.',
  };
};

export const generateWebSiteSchema = () => {
  const siteUrl = env.siteUrl;

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'UMC - University MakeUs Challenge',
    'url': siteUrl,
    'description': '대학생 연합 IT 벤처 창업 동아리',
    'potentialAction': {
      '@type': 'SearchAction',
      'target': {
        '@type': 'EntryPoint',
        'urlTemplate': `${siteUrl}/project?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
};

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': items.map((item, index) => ({
    '@type': 'ListItem',
    'position': index + 1,
    'name': item.name,
    'item': item.url,
  })),
});

export const generateSoftwareApplicationSchema = (data: { category?: string; description: string; image?: string; name: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  'name': data.name,
  'description': data.description,
  ...(data.image && { image: data.image }),
  'applicationCategory': data.category || 'BusinessApplication',
  'offers': {
    '@type': 'Offer',
    'price': '0',
    'priceCurrency': 'KRW',
  },
  'operatingSystem': 'Web, iOS, Android',
});

export const generateAboutPageSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  'name': 'UMC 소개',
  'description': '대학생 개발 연합 동아리 University Make Us Challenge',
  'mainEntity': {
    '@type': 'Organization',
    'name': 'UMC',
    'description': 'University MakeUs Challenge - 대학생 연합 IT 벤처 창업 동아리',
    'url': env.siteUrl,
  },
});

export const generateEventSchema = (data: { description: string; endDate?: string; image?: string; name: string; startDate: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'Event',
  'name': data.name,
  'description': data.description,
  'startDate': data.startDate,
  ...(data.endDate && { endDate: data.endDate }),
  ...(data.image && { image: data.image }),
  'eventStatus': 'https://schema.org/EventScheduled',
  'eventAttendanceMode': 'https://schema.org/MixedEventAttendanceMode',
  'organizer': {
    '@type': 'Organization',
    'name': 'UMC',
    'url': env.siteUrl,
  },
  'location': {
    '@type': 'VirtualLocation',
    'url': `${env.siteUrl}/recruitment`,
  },
});
