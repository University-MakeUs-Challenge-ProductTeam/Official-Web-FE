'use client';

import { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

import type { OPlatform } from '../PlatformDropdown';
import PlatformDropdown from '../PlatformDropdown';
import ProjectCard from '../ProjectCard';
import ProjectGenerationDropdown from '../ProjectGenerationDropdown';

import { getProjectList } from '@/shared/api/project';
import Typography from '@/shared/components/Typography';
import useDebounce from '@/shared/hooks/useDebounce';

function UMCProjectView() {
  const [selectedGeneration, setSelectedGeneration] = useState<number | 'ALL'>('ALL');
  const [selectedPlatform, setSelectedPlatform] = useState<keyof typeof OPlatform>('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [pageGroup, setPageGroup] = useState(0);
  const [page, setPage] = useState(0);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const pageSize = 9; // 가져올 아이템 개수
  const pagesPerGroup = 5; // 숫자로 보여줄 페이지 단위
  const startPage = pageGroup * pagesPerGroup;

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    if (newPage < startPage) {
      setPageGroup(pageGroup - 1);
    } else if (newPage >= startPage + pagesPerGroup) {
      setPageGroup(pageGroup + 1);
    }
  };

  const { data: projectData } = useQuery({
    queryKey: ['projects', page, selectedGeneration, selectedPlatform, debouncedSearchTerm],
    queryFn: () => getProjectList({ page, size: pageSize, generation: selectedGeneration, platformName: selectedPlatform, searchTerm: debouncedSearchTerm }),
    placeholderData: keepPreviousData,
  });
  const totalPages = projectData?.totalPages || 1;

  if (projectData?.umcProjectList.length === 0) {
    return (
      <div className="flex flex-col gap-6 p-3">
        <h1 className="text-title-smd text-[#ECECEC]">UMC 프로젝트 살펴보기</h1>
        <div className="flex flex-row gap-5">
          <ProjectGenerationDropdown selected={selectedGeneration} setSelected={setSelectedGeneration} />
          <PlatformDropdown selected={selectedPlatform} setSelected={setSelectedPlatform} />
          <div className="flex min-w-[280px] flex-row items-center gap-2 rounded-[116px] border border-solid border-[#3A3A3A] bg-[#2F2F2F] px-[24px] py-[12px]">
            <input
              className="flex flex-1 border-none bg-transparent text-[#818181] outline-none placeholder:text-current"
              placeholder="프로젝트 제목을 입력해주세요"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IoIosSearch size={20} color="#818181" className="flex" />
          </div>
        </div>
        <div className="flex h-[300px] w-full items-center justify-center">
          <Typography size="text-sm" color="neutral-500">
            해당되는 프로젝트가 없습니다.
          </Typography>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 p-3">
      <h1 className="text-title-smd text-[#ECECEC]">UMC 프로젝트 살펴보기</h1>
      <div className="flex flex-row flex-wrap gap-5">
        <ProjectGenerationDropdown selected={selectedGeneration} setSelected={setSelectedGeneration} />
        <PlatformDropdown selected={selectedPlatform} setSelected={setSelectedPlatform} />
        <div className="flex min-w-[280px] flex-row items-center gap-2 rounded-[116px] border border-solid border-[#3A3A3A] bg-[#2F2F2F] px-[24px] py-[12px]">
          <input
            className="flex flex-1 border-none bg-transparent text-[#818181] outline-none placeholder:text-current"
            placeholder="프로젝트 제목을 입력해주세요"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <IoIosSearch size={20} color="#818181" className="flex" />
        </div>
      </div>
      <div className="mx-auto grid min-h-[500px] w-full grid-cols-1 place-items-center gap-x-7 gap-y-10 lg:grid-cols-3">
        {projectData?.umcProjectList.map((project) => <ProjectCard key={project.projectId} projectData={project} />)}
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
    </div>
  );
}

export default UMCProjectView;
