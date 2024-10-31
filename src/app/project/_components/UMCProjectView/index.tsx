'use client';

import { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import GenerationDropdown from '../GenerationDropdown';
import type { OPlatform } from '../PlatformDropdown';
import PlatformDropdown from '../PlatformDropdown';
import ProjectCard from '../ProjectCard';

import { getProjectList } from '@/shared/api/project';

function UMCProjectView() {
  const [selectedGeneration, setSelectedGeneration] = useState<number | 'ALL'>('ALL');
  const [selectedPlatform, setSelectedPlatform] = useState<keyof typeof OPlatform>('ALL');

  const {
    data: projectData,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['projects', 0, selectedGeneration, selectedPlatform],
    queryFn: ({ pageParam }) => getProjectList({ cursor: pageParam, generation: selectedGeneration, platformName: selectedPlatform }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  return (
    <div className="flex flex-col gap-6 p-3">
      <h1 className="text-title-smd text-[#ECECEC]">UMC 프로젝트 살펴보기</h1>
      <div className="flex flex-row gap-5">
        <GenerationDropdown selected={selectedGeneration} setSelected={setSelectedGeneration} />
        <PlatformDropdown selected={selectedPlatform} setSelected={setSelectedPlatform} />
      </div>
      <div className="mx-auto grid w-full grid-cols-1 place-items-center gap-x-7 gap-y-10 lg:grid-cols-3">
        {projectData?.pages.map((page) => page.umcProjectList.map((project) => <ProjectCard key={project.projectId} projectData={project} />))}
      </div>

      {hasNextPage && (
        <button
          type="button"
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className="self-center text-text-sm text-white hover:text-neutral-500"
        >
          {!isFetchingNextPage && '더 불러오기'}
        </button>
      )}
    </div>
  );
}

export default UMCProjectView;
