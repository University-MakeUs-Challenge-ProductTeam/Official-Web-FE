import '@/styles';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React from 'react';
import { Analytics } from '@vercel/analytics/react';
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
  title: {
    default: 'UMC - University MakeUs Challenge | Redefined',
    template: '%s - UMC',
  },
  description: '대학생 개발 연합 동아리 University Make Us Challenge - Next Gen UI',
  openGraph: {
    title: 'UMC - University MakeUs Challenge',
    description: '대학생 개발 연합 동아리 University Make Us Challenge',
    images: ['/nav_logo.png'],
    url: 'https://umc.makeus.in/',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (isMocking()) {
    await initMocking();
  }

  return (
    <html lang="ko" className={`${pretendard.variable} ${roboto.variable} scroll-smooth antialiased`} suppressHydrationWarning>
      <body className="min-h-screen bg-black font-pretendard text-white selection:bg-[#52E560] selection:text-black">
        <MSWProvider>
          <QueryProvider>
            <Preloader />
            <CustomCursor />
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
}
