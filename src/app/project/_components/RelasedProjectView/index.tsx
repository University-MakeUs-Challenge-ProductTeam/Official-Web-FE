'use client';

import { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';

import ProjectCard from '../ProjectCard';

import { getReleasedProjectList } from '@/shared/api/project';
import Typography from '@/shared/components/Typography';
import { QUERY_KEYS } from '@/shared/constants/querykeys/project';

function ReleasedProjectView() {
  const [pageGroup, setPageGroup] = useState(0);
  const [page, setPage] = useState(0);

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
    queryKey: [QUERY_KEYS.projects, page],
    queryFn: () => getReleasedProjectList({ page, size: pageSize }),
  });
  const totalPages = projectData?.totalPages || 1;

  if (projectData?.releasedProjectDTOList.length === 0) {
    return (
      <div className="flex flex-col gap-6 p-3">
        <h1 className="text-title-smd text-[#ECECEC]">실출시된 프로젝트</h1>
        <div className="flex h-[300px] w-full items-center justify-center">
          <Typography size="text-sm" color="neutral-500">
            프로젝트가 없습니다.
          </Typography>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 p-3">
      <h1 className="text-title-smd text-[#ECECEC]">실출시된 프로젝트</h1>
      <div className="mx-auto grid w-full grid-cols-1 place-items-center gap-x-7 gap-y-10 lg:grid-cols-2 xl:grid-cols-3">
        {projectData?.releasedProjectDTOList.map((project) => <ProjectCard key={project.projectId} projectData={project} type="released" />)}
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

export default ReleasedProjectView;
