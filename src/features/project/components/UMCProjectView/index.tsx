'use client';

import { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import { useQuery } from '@tanstack/react-query';
import { AnimatePresence, motion } from 'framer-motion';

import useDebounce from '@/hooks/useDebounce';

import Typography from '@/components/common/Typography';

import type { OPlatform } from '../PlatformDropdown';
import PlatformDropdown from '../PlatformDropdown';
import ProjectCard from '../ProjectCard';
import ProjectGenerationDropdown from '../ProjectGenerationDropdown';

import { getProjectList } from '@/lib/api/project';

function UMCProjectView() {
  const [selectedGeneration, setSelectedGeneration] = useState<number | 'ALL'>('ALL');
  const [selectedPlatform, setSelectedPlatform] = useState<keyof typeof OPlatform>('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [pageGroup, setPageGroup] = useState(0);
  const [page, setPage] = useState(0);
  const debouncedSearchTerm = useDebounce(searchTerm, 400);

  const pageSize = 12;
  const pagesPerGroup = 5;
  const startPage = pageGroup * pagesPerGroup;

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    if (newPage < startPage) {
      setPageGroup(pageGroup - 1);
    } else if (newPage >= startPage + pagesPerGroup) {
      setPageGroup(pageGroup + 1);
    }
  };

  const { data: projectData, isLoading } = useQuery({
    queryKey: ['projects', page, selectedGeneration, selectedPlatform, debouncedSearchTerm],
    queryFn: () => getProjectList({ page, size: pageSize, generation: selectedGeneration, platformName: selectedPlatform, searchTerm: debouncedSearchTerm }),
  });
  const totalPages = projectData?.totalPages || 1;

  return (
    <div className="flex flex-col py-20">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        style={{ willChange: 'transform, opacity' }}
        className="mb-12 transform-gpu"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-[#52E560]">Showcase</span>
        <h2 className="mt-4 text-4xl font-black italic tracking-tighter text-white md:text-6xl">
          EXPLORE <span className="text-white/20">PROJECTS</span>
        </h2>
      </motion.div>

      <div className="sticky top-24 z-50 mb-16 bg-black/80 pb-4 backdrop-blur-sm">
        <div className="group relative flex h-12 flex-wrap items-center gap-4 overflow-visible rounded-full border border-white/5 bg-black/40 px-6 py-4 backdrop-blur-3xl transition-all hover:border-[#52E560]/20">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#52E560]/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

          <div className="relative flex w-full flex-wrap items-center gap-4">
            <ProjectGenerationDropdown selected={selectedGeneration} setSelected={setSelectedGeneration} />
            <div className="hidden h-6 w-px bg-white/10 md:block" />
            <PlatformDropdown selected={selectedPlatform} setSelected={setSelectedPlatform} />
            <div className="hidden h-6 w-px bg-white/10 md:block" />

            <div className="flex min-w-[200px] flex-1 items-center gap-3 px-4">
              <IoIosSearch size={18} className="text-[#52E560] opacity-50 transition-opacity group-hover:opacity-100" />
              <input
                className="w-full bg-transparent text-xs font-black uppercase italic tracking-widest text-white outline-none placeholder:text-white/20"
                placeholder="Search Projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-64 animate-pulse rounded-4xl bg-white/5" />
            ))}
          </div>
        ) : projectData?.umcProjectList.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex h-[300px] w-full items-center justify-center rounded-4xl border border-white/5 bg-white/5"
          >
            <Typography size="text-sm" className="font-bold uppercase italic tracking-widest text-white/20">
              No projects match your filters
            </Typography>
          </motion.div>
        ) : (
          <motion.div
            key={`${selectedGeneration}-${selectedPlatform}-${page}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
          >
            {projectData?.umcProjectList.map((project, idx) => (
              <motion.div key={project.projectId} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}>
                <ProjectCard projectData={project} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {totalPages > 1 && (
        <div className="mt-20 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => handlePageChange(Math.max(page - 1, 0))}
            disabled={page === 0}
            className="rounded-full bg-white/5 p-3 text-[#52E560] transition-colors hover:bg-[#52E560]/10 disabled:opacity-20"
          >
            <FaAngleLeft />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: Math.min(pagesPerGroup, totalPages - startPage) }, (_, i) => {
              const pageIndex = startPage + i;
              return (
                <button
                  key={pageIndex}
                  type="button"
                  className={`size-10 rounded-full text-sm font-black italic transition-all ${
                    pageIndex === page ? 'bg-[#52E560] text-black shadow-[0_0_15px_#52E560]' : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white'
                  } `}
                  onClick={() => handlePageChange(pageIndex)}
                >
                  {pageIndex + 1}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setPage(Math.min(page + 1, totalPages - 1))}
            disabled={page === totalPages - 1}
            className="rounded-full bg-white/5 p-3 text-[#52E560] transition-colors hover:bg-[#52E560]/10 disabled:opacity-20"
          >
            <FaAngleRight />
          </button>
        </div>
      )}
    </div>
  );
}

export default UMCProjectView;
