'use client';

import { useQuery } from '@tanstack/react-query';
import { AnimatePresence, motion } from 'framer-motion';

import Pagination from '@/components/ui/Pagination';

import ProjectFilters from './_components/ProjectFilters';
import ProjectGrid from './_components/ProjectGrid';

import { useProjectFilters } from '@/features/project/hooks/use-project-filters';
import { useProjectPagination } from '@/features/project/hooks/use-project-pagination';
import { projectListQueryOptions } from '@/lib/query';

const UMCProjectView = () => {
  const { selectedGeneration, selectedPlatform, searchTerm, debouncedSearchTerm, setSelectedGeneration, setSelectedPlatform, setSearchTerm } =
    useProjectFilters();

  const { page, pageGroup, pageSize, pagesPerGroup, handlePageChange } = useProjectPagination({
    totalItems: 0,
    pageSize: 12,
    pagesPerGroup: 5,
  });

  const { data: projectData, isLoading } = useQuery(
    projectListQueryOptions({
      page,
      size: pageSize,
      generation: selectedGeneration,
      platformName: selectedPlatform,
      searchTerm: debouncedSearchTerm,
    }),
  );

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
        <span className="text-xs font-bold uppercase tracking-widest text-main-green">Showcase</span>
        <h2 className="mt-4 text-4xl font-black italic tracking-tighter text-white md:text-6xl">
          EXPLORE <span className="text-white/20">PROJECTS</span>
        </h2>
      </motion.div>

      <ProjectFilters
        selectedGeneration={selectedGeneration}
        selectedPlatform={selectedPlatform}
        searchTerm={searchTerm}
        onGenerationChange={setSelectedGeneration}
        onPlatformChange={setSelectedPlatform}
        onSearchChange={setSearchTerm}
      />

      <AnimatePresence mode="wait">
        <ProjectGrid
          projects={projectData?.umcProjectList || []}
          isLoading={isLoading}
          selectedGeneration={selectedGeneration}
          selectedPlatform={String(selectedPlatform)}
          currentPage={page}
        />
      </AnimatePresence>

      {totalPages > 1 && (
        <Pagination currentPage={page} totalPages={totalPages} pageGroup={pageGroup} pagesPerGroup={pagesPerGroup} onPageChange={handlePageChange} />
      )}
    </div>
  );
};

export default UMCProjectView;
