import React from 'react';
import Link from 'next/link';

import Typography from '@/shared/components/Typography';

function ThirdBanner() {
  return (
    <div className="mt-20 flex flex-row flex-wrap items-center justify-between gap-5">
      <Typography as="h1" size="title-smd" className="mr-5 text-[#ECECEC]">
        UMC가 틀을 깨고 나아가기 위해서는
        <br />
        후원자님의 도움이 필요해요.
      </Typography>
      <Link
        href="/sponser/apply"
        className="flex h-[50px] items-center justify-center rounded-[100px] border-2 border-solid border-main-green bg-[#1F1F1F] px-[24px] text-text-sm font-bold text-main-green transition-colors duration-500 hover:bg-main-green hover:text-[#1F1F1F]"
      >
        후원하러 가기
      </Link>
    </div>
  );
}

export default ThirdBanner;
