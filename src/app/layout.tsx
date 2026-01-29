import '@/styles';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React from 'react';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';

import { isMocking } from '@/constants/constants';

import { MSWProvider } from '@/components/common/MSWProvider';
import { QueryProvider } from '@/components/common/QueryProvider';
import RedesignFooter from '@/components/layout/Footer';
import RedesignNavbar from '@/components/layout/Navbar';
import CustomCursor from '@/components/ui/CustomCursor';
// Redesign Components
import Preloader from '@/components/ui/Preloader';

import { initMocking } from '@/lib/mocks';

const pretendard = localFont({
  src: '../../src/app/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://umc.makeus.in'),
  title: {
    default: 'UMC - University MakeUs Challenge',
    template: '%s | UMC',
  },
  description: '대학생 연합 IT 벤처 창업 동아리, University MakeUs Challenge (UMC). 기획자, 디자이너, 개발자가 모여 세상을 바꾸는 도전을 시작합니다.',
  keywords: [
    'UMC',
    'University MakeUs Challenge',
    '대학생 동아리',
    '코딩 동아리',
    '앱 개발',
    '웹 개발',
    'IT 창업',
    '기획',
    '디자인',
    'iOS',
    'Android',
    'Web',
    'Server',
  ],
  authors: [{ name: 'UMC-Official' }],
  creator: 'UMC',
  publisher: 'UMC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/images/nav_logo.png',
    shortcut: '/images/nav_logo.png',
    apple: '/images/nav_logo.png',
  },
  openGraph: {
    title: 'UMC - University MakeUs Challenge',
    description: '대학생 연합 IT 벤처 창업 동아리 UMC. 당신의 도전을 현실로 만들어보세요.',
    url: 'https://umc.makeus.in/',
    siteName: 'UMC - University MakeUs Challenge',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UMC - University MakeUs Challenge',
    description: '대학생 연합 IT 벤처 창업 동아리 UMC. 새로운 세대의 혁신을 이끌어갈 당신을 기다립니다.',
    creator: '@umc_makeus',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  if (isMocking()) {
    await initMocking();
  }

  return (
    <html lang="ko" className={`${pretendard.variable} ${roboto.variable} scroll-smooth antialiased`} suppressHydrationWarning>
      <body className="min-h-screen bg-black font-pretendard text-white selection:bg-main-green selection:text-black">
        <Preloader />
        <CustomCursor />
        <MSWProvider>
          <QueryProvider>
            <div className="relative flex min-h-screen flex-col">
              <RedesignNavbar />
              <main className="flex-1">{children}</main>
              <RedesignFooter />
            </div>
          </QueryProvider>
        </MSWProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
