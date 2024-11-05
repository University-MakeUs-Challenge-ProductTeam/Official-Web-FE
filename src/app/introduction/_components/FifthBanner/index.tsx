'use client';

import { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import StaffProfile from './_components/StaffProfile';

import StaffGenerationDropdown from '@/app/project/_components/StaffGenerationDropdown';
import { getCentralStaff } from '@/shared/api/staff';
import Typography from '@/shared/components/Typography';
import { QUERY_KEYS } from '@/shared/constants/querykeys/project';

function FifthBanner() {
  const [selectedGeneration, setSelectedGeneration] = useState<number | 'ALL'>('ALL');

  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.staffs, selectedGeneration],
    queryFn: ({ pageParam }) => getCentralStaff({ generation: selectedGeneration, cursor: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  return (
    <div className="mb-20 flex flex-col items-center gap-9">
      <Typography as="h3" size="title-smd" color="main-white">
        운영진 소개
      </Typography>

      <div className="self-start">
        <StaffGenerationDropdown selected={selectedGeneration} setSelected={setSelectedGeneration} />
      </div>

      <div className="mx-auto grid w-full grid-cols-1 place-items-center gap-x-7 gap-y-20 lg:grid-cols-2 xl:grid-cols-3">
        {data?.pages.map((page) => page.centralStaffList.map((item) => <StaffProfile profileData={item} key={item.centralStaffId} />))}
      </div>

      {hasNextPage && (
        <button
          type="button"
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className="self-center border-b py-2 text-text-sm text-white hover:border-neutral-500 hover:text-neutral-500"
        >
          {!isFetchingNextPage && '더 불러오기'}
        </button>
      )}
    </div>
  );
}

export default FifthBanner;
