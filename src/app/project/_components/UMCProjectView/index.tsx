'use client';

import { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { useInfiniteQuery } from '@tanstack/react-query';

import GenerationDropdown from '../GenerationDropdown';
import type { OPlatform } from '../PlatformDropdown';
import PlatformDropdown from '../PlatformDropdown';
import ProjectCard from '../ProjectCard';

import { getProjectList } from '@/shared/api/project';
import Typography from '@/shared/components/Typography';
import useDebounce from '@/shared/hooks/useDebounce';

function UMCProjectView() {
  const [selectedGeneration, setSelectedGeneration] = useState<number | 'ALL'>('ALL');
  const [selectedPlatform, setSelectedPlatform] = useState<keyof typeof OPlatform>('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const {
    data: projectData,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['projects', selectedGeneration, selectedPlatform, debouncedSearchTerm],
    queryFn: ({ pageParam }) =>
      getProjectList({ cursor: pageParam, generation: selectedGeneration, platformName: selectedPlatform, searchTerm: debouncedSearchTerm }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  if (projectData?.pages[0].umcProjectList.length === 0) {
    return (
      <div className="flex flex-col gap-6 p-3">
        <h1 className="text-title-smd text-[#ECECEC]">UMC 프로젝트 살펴보기</h1>
        <div className="flex flex-row gap-5">
          <GenerationDropdown selected={selectedGeneration} setSelected={setSelectedGeneration} />
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
        <GenerationDropdown selected={selectedGeneration} setSelected={setSelectedGeneration} />
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
        {projectData?.pages.map((page) => page.umcProjectList.map((project) => <ProjectCard key={project.projectId} projectData={project} />))}
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

export default UMCProjectView;
