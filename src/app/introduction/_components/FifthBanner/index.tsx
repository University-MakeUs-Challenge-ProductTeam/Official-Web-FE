'use client';

import { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';

import StaffProfile from './_components/StaffProfile';

import StaffGenerationDropdown from '@/app/project/_components/StaffGenerationDropdown';
import { getCentralStaff } from '@/shared/api/staff';
import Typography from '@/shared/components/Typography';
import { QUERY_KEYS } from '@/shared/constants/querykeys/project';

function FifthBanner() {
  const [selectedGeneration, setSelectedGeneration] = useState<number | 'ALL'>('ALL');
  const [pageGroup, setPageGroup] = useState(0);
  const [page, setPage] = useState(0);

  const pageSize = 9; // 가져올 아이템 개수
  const pagesPerGroup = 5; // 숫자로 보여줄 페이지 단위
  const startPage = pageGroup * pagesPerGroup;

  const { data } = useQuery({
    queryKey: [QUERY_KEYS.staffs, selectedGeneration, page],
    queryFn: () => getCentralStaff({ page, size: pageSize, generation: selectedGeneration }),
  });
  const totalPages = data?.totalPages || 1;

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    if (newPage < startPage) {
      setPageGroup(pageGroup - 1);
    } else if (newPage >= startPage + pagesPerGroup) {
      setPageGroup(pageGroup + 1);
    }
  };

  return (
    <div className="mb-20 flex flex-col items-center gap-9">
      <Typography as="h3" size="title-smd" color="main-white">
        운영진 소개
      </Typography>

      <div className="self-start">
        <StaffGenerationDropdown selected={selectedGeneration} setSelected={setSelectedGeneration} />
      </div>

      {data?.centralStaffList.length === 0 ? (
        <div className="flex h-[200px] w-full items-center justify-center">
          <Typography size="text-sm" color="neutral-500">
            운영진 정보가 없습니다.
          </Typography>
        </div>
      ) : (
        <>
          <div className="mx-auto grid w-full grid-cols-1 place-items-center gap-x-7 gap-y-20 lg:grid-cols-2 xl:grid-cols-3">
            {data?.centralStaffList.map((item) => <StaffProfile profileData={item} key={item.centralStaffId} />)}
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            <button type="button" onClick={() => handlePageChange(Math.max(page - 1, 0))} disabled={page === 0}>
              <FaAngleLeft color={page === 0 ? '#1d1d1d' : '#3A3A3A'} />
            </button>

            {Array.from({ length: Math.min(pagesPerGroup, totalPages - startPage) }, (_, i) => {
              const pageIndex = startPage + i;
              return (
                <button key={pageIndex} type="button" className="mx-3" onClick={() => handlePageChange(pageIndex)} disabled={pageIndex >= totalPages}>
                  <Typography size="text-sm" className={pageIndex === page ? 'font-bold text-main-green' : 'text-[#3A3A3A]'}>
                    {pageIndex + 1}
                  </Typography>
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => setPageGroup((prev) => (startPage + pagesPerGroup < totalPages ? prev + 1 : prev))}
              disabled={startPage + pagesPerGroup >= totalPages}
            >
              <FaAngleRight color={startPage + pagesPerGroup >= totalPages ? '#1d1d1d' : '#3A3A3A'} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default FifthBanner;
