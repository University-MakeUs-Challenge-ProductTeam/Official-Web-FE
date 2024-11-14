'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Typography from '@/shared/components/Typography';
import { DEVELOPER_MAIL, INSTAGRAM_LINK, LINK_TREE } from '@/shared/constants/link';

function Footer() {
  return (
    <div className="z-50 flex w-full items-center bg-main-gray p-6">
      <div className="flex w-full flex-col items-center justify-center gap-x-2 gap-y-8 text-main-white md:ml-auto">
        <Image src="/images/UMC_LOGO.png" alt="UMC로고" width={50} height={50} className="transition-transform duration-300" />
        <div className="flex flex-row items-center gap-7">
          <Link target="_blank" href={INSTAGRAM_LINK}>
            <Typography size="text-sm" className="text-main-disable">
              공식 인스타그램
            </Typography>
          </Link>
          <Link target="_blank" href={LINK_TREE}>
            <Typography size="text-sm" className="text-main-disable">
              링크트리
            </Typography>
          </Link>
          <Link href={`mailto:${DEVELOPER_MAIL}`}>
            <Typography size="text-sm" className="text-main-disable">
              문의하기
            </Typography>
          </Link>
        </div>
        <div className="my-5 w-3/5 border-b-[0.5px] border-solid border-main-disable" />
        <Typography size="text-sm" className="text-xs text-main-disable">
          © 2024 UMC. All rights reserved.
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
