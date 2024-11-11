import '@/shared/styles';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React from 'react';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';

import Footer from '@/shared/components/Footer';
import { MSWProvider } from '@/shared/components/MSWProvider';
import Navbar from '@/shared/components/Navbar';
import { QueryProvider } from '@/shared/components/QueryProvider';
import { isMocking } from '@/shared/constants/constants';
import { initMocking } from '@/shared/mocks';

const pretendard = localFont({
  src: '../../src/app/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'UMC - University MakeUs Challenge',
  description: '대학생 개발 연합 동아리 University Make Us Challenge',
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
    <html lang="ko" className={`${pretendard.variable} ${roboto.variable} scroll-pt-14 antialiased`} suppressHydrationWarning>
      <body className="min-h-screen bg-black font-pretendard">
        <MSWProvider>
          <QueryProvider>
            <div className="relative flex min-h-dvh flex-col">
              <Navbar />
              <main className="flex-1 pt-28">{children}</main>
              <Footer />
            </div>
          </QueryProvider>
        </MSWProvider>
      </body>
    </html>
  );
}
