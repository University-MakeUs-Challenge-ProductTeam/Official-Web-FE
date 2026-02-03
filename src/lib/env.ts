export const env = {
  apiBaseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  siteUrl: process.env.NEXT_PUBLIC_URL || 'https://umc.it.kr',
  mocking: process.env.NEXT_PUBLIC_MOCKING ?? 'false',
  isDev: process.env.NODE_ENV === 'development',
};
