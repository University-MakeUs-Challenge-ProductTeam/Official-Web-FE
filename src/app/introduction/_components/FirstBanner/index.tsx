import React from 'react';

import Typography from '@/shared/components/Typography';
import { INTRODUCTION_CONTENT } from '@/shared/constants/introductionContent';

function FirstBanner() {
  return (
    <div className="flex flex-col items-center">
      <Typography size="title-sm" color="main-white" className="text-[20px] font-bold sm:text-title-smd">
        UMC는
      </Typography>
      <Typography size="title-sm" color="main-green" className="mt-2 text-[20px] font-bold sm:text-title-smd">
        기존의 틀을 깨부시며 성장합니다.
      </Typography>
      <div className="mt-48 flex w-full flex-row justify-around">
        {INTRODUCTION_CONTENT.map(({ title, content }) => (
          <div className="flex flex-col items-center" key={title}>
            <Typography size="title-sm" className="font-bold text-[#979797]">
              {title}
            </Typography>
            <Typography size="title-sm" color="main-green" className="mt-2 text-[20px] font-bold sm:text-title-smd">
              {content}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FirstBanner;
