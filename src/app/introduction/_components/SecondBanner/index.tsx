'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';

import SchoolSlider from './_components/SchoolSlider';

import { getShcoolListData } from '@/shared/api/shcool';
import Typography from '@/shared/components/Typography';
import { QUERY_KEYS } from '@/shared/constants/querykeys/project';

function SecondBanner() {
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.shcools],
    queryFn: () => getShcoolListData(),
  });

  const sliderIndex = data?.participateSchoolList ? Math.ceil(data.participateSchoolList.length / 2) : 13;

  console.log(data?.participateSchoolList.slice(0, sliderIndex));

  return (
    <div className="flex flex-col items-center">
      <Typography as="h3" size="title-sm" color="main-white" className="text-[20px] font-bold sm:text-title-smd">
        UMC는
      </Typography>
      <div className="flex flex-row">
        <Typography as="h3" size="title-sm" color="main-green" className="mt-3 text-[20px] font-bold sm:text-title-smd">
          {data?.totalSchoolCount}
        </Typography>
        <Typography as="h3" size="title-sm" color="main-white" className="mt-3 text-[20px] font-bold sm:text-title-smd">
          개의 학교와 함께합니다.
        </Typography>
      </div>

      <div className="mt-12 w-full">
        <SchoolSlider schoolList={data?.participateSchoolList.slice(0, sliderIndex)} />
      </div>
      <div className="mt-3 w-full">
        <SchoolSlider schoolList={data?.participateSchoolList.slice(sliderIndex, data?.participateSchoolList.length)} />
      </div>
    </div>
  );
}

export default SecondBanner;
