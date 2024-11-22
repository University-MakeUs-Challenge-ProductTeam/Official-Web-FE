'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';

import { getSponsor } from '@/shared/api/sponsor';
import Typography from '@/shared/components/Typography';
import { QUERY_KEYS } from '@/shared/constants/querykeys/project';

function SecondBanner() {
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.sponsors],
    queryFn: () => getSponsor(),
  });

  return (
    <div className="my-2 flex flex-col items-center gap-20 sm:items-start">
      {data?.sponsorList.map((item) => (
        <div key={item.sponsorId} className={`flex flex-col gap-5 sm:flex-row ${item.sponsorId % 2 === 0 && 'sm:ml-auto'}`}>
          <div className="relative size-[200px]">
            <Image src={item.logoUrl} fill alt="SponsorLogo" className="rounded-xl" />
          </div>
          <div className="flex max-w-[300px] flex-col gap-2">
            <Typography size="title-smd" className="text-[#ECECEC]">
              {item.title}
            </Typography>
            <Typography size="text-sm" className="text-[#9D9D9D]">
              {item.description}
            </Typography>
            <Link href={item.url} className="ml-auto mt-auto">
              <Typography size="text-sm" className="text-[#9D9D9D]">
                {item.title} 바로가기 {'>'}
              </Typography>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SecondBanner;
