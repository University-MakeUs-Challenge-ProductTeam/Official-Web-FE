'use client';

import { useEffect, useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import GenerationDropdown from '../GenerationDropdown';
import type { OPlatform } from '../PlatformDropdown';
import PlatformDropdown from '../PlatformDropdown';
import ProjectCard from '../ProjectCard';

import { getProjectList } from '@/shared/api/project';

function UMCProjectView() {
  const [selectedGeneration, setSelectedGeneration] = useState<number | 'ALL'>('ALL');
  const [selectedPlatform, setSelectedPlatform] = useState<keyof typeof OPlatform>('ALL');
  const [cursor, setCursor] = useState(1);
  const [previousCursors, setPreviousCursors] = useState<number[]>([]);

  const {
    // isLoading,
    // isError,
    // error,
    data: projectData,
    hasNextPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
  } = useInfiniteQuery({
    queryKey: ['projects', cursor, selectedGeneration, selectedPlatform],
    queryFn: ({ pageParam }) => getProjectList({ cursor: pageParam, generation: selectedGeneration, platformName: selectedPlatform }),
    initialPageParam: cursor,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  const handleNext = () => {
    if (projectData && projectData?.pages.length > 0) {
      const lastPage = projectData.pages[projectData.pages.length - 1];
      const { nextCursor } = lastPage;
      setPreviousCursors([...previousCursors, cursor]);
      setCursor(nextCursor);
    }
  };

  const handlePrevious = () => {
    if (previousCursors.length > 0) {
      const lastCursor = previousCursors.pop();
      setPreviousCursors(previousCursors);
      if (!lastCursor) {
        setCursor(1);
      }
    }
  };

  useEffect(() => {
    setCursor(1);
    setPreviousCursors([]);
  }, [selectedGeneration, selectedPlatform]);

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

      <div className="flex gap-10 self-center">
        <button
          type="button"
          onClick={handlePrevious}
          disabled={previousCursors.length === 0 || isFetchingPreviousPage}
          className={previousCursors.length > 0 ? 'text-white' : 'text-neutral-500'}
        >
          이전
        </button>
        <button type="button" onClick={handleNext} disabled={!hasNextPage || isFetchingNextPage} className={hasNextPage ? 'text-white' : 'text-neutral-500'}>
          다음
        </button>
      </div>
    </div>
  );
}

export default UMCProjectView;
