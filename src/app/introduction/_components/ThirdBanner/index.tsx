'use client';

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getPartCurriculums } from '@/shared/api/part';
import Typography from '@/shared/components/Typography';
import { PART_NAME } from '@/shared/constants/Parts';
import { QUERY_KEYS } from '@/shared/constants/querykeys/project';
import type { TProjectPart } from '@/shared/types/projectDto';

function ThirdBanner() {
  const [selectedPart, setSelectedPart] = useState<TProjectPart>('AOS');
  const partList = Object.keys(PART_NAME) as Array<keyof typeof PART_NAME>;

  const { data } = useQuery({
    queryKey: [QUERY_KEYS.curriculum, selectedPart],
    queryFn: () => getPartCurriculums({ part: selectedPart }),
  });

  return (
    <div className="flex flex-col items-center gap-9">
      <Typography as="h3" size="title-sm" color="main-white" className="mt-2 text-[20px] font-bold sm:text-title-smd">
        파트별 커리큘럼
      </Typography>

      <div className="grid grid-cols-4 justify-around gap-10 sm:grid-flow-col">
        {partList.map((item) => (
          <Typography
            as="button"
            key={item}
            size="text-sm"
            className={`cursor-pointer pt-1 font-bold sm:text-text-lg ${selectedPart === item ? 'border-t-2 border-solid border-main-green font-bold text-main-green' : 'text-[#6D6D6D]'}`}
            onClick={() => setSelectedPart(item)}
          >
            {PART_NAME[item]}
          </Typography>
        ))}
      </div>

      <div className="flex w-full flex-1 flex-col gap-4 rounded-xl border border-solid border-[#3A3A3A] p-8">
        <div className="flex flex-row gap-3">
          <Typography size="text-sm" className="w-[70px] text-[#818181] sm:text-lg">
            요구역량
          </Typography>
          <Typography size="text-sm" className="flex-1 text-[#CFCFCF] sm:text-lg">
            {data?.requireSkill}
          </Typography>
        </div>
      </div>

      <div className="flex w-full flex-1 flex-col gap-4 rounded-xl border border-solid border-[#3A3A3A] p-8">
        {data?.activityPartCurriculumList.map((item, index) => (
          <div className="flex flex-row gap-3" key={item.curriculumId}>
            <Typography size="text-sm" className="w-[60px] text-[#818181] sm:text-lg">
              {index}주차
            </Typography>
            <Typography size="text-sm" className="flex-1 text-[#CFCFCF] sm:text-lg">
              {item.topic}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThirdBanner;
