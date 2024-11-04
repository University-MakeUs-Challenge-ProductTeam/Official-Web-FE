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

  return (
    <div className="flex flex-col items-center">
      <Typography as="h3" size="title-smd" color="main-white">
        UMC는
      </Typography>
      <div className="flex flex-row">
        <Typography as="h3" size="title-smd" color="main-green">
          {data?.totalSchoolCount}
        </Typography>
        <Typography as="h3" size="title-smd" color="main-white">
          개의 학교와 함께합니다.
        </Typography>
      </div>

      <div className="mt-12 w-full">
        <SchoolSlider schoolList={data?.participateSchoolList} />
      </div>
    </div>
  );
}

export default SecondBanner;
