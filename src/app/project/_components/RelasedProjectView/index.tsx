'use client';

import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import ProjectCard from '../ProjectCard';

import { getReleasedProjectList } from '@/shared/api/project';

function ReleasedProjectView() {
  const {
    data: projectData,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['projects', 0],
    queryFn: ({ pageParam }) => getReleasedProjectList({ cursor: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  return (
    <div className="flex flex-col gap-6 p-3">
      <h1 className="text-title-smd text-[#ECECEC]">실출시된 프로젝트</h1>
      <div className="mx-auto grid w-full grid-cols-1 place-items-center gap-x-7 gap-y-10 lg:grid-cols-2 xl:grid-cols-3">
        {projectData?.pages.map((page) => page.umcProjectList.map((project) => <ProjectCard key={project.projectId} projectData={project} type="released" />))}
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

export default ReleasedProjectView;
