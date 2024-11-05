'use client';

import React from 'react';
import Link from 'next/link';

import Typography from '@/shared/components/Typography';

function Footer() {
  return (
    <div className="z-50 flex w-full items-center bg-main-gray p-6">
      <div className="flex w-full items-center justify-start gap-x-2 text-main-white md:ml-auto">
        <Link href="/">
          <Typography size="text-lg" className="text-main-disable">
            만든 사람들
          </Typography>
        </Link>
        <Link href="/">
          <Typography size="text-lg" className="text-main-disable">
            제안하기
          </Typography>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
