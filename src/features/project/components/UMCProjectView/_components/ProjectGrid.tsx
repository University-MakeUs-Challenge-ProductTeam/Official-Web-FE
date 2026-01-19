import { motion } from 'framer-motion';

import type { TProjectDTO } from '@/types/projectDto';

import EmptyState from '@/components/ui/EmptyState';
import SkeletonLoader from '@/components/ui/SkeletonLoader';

import ProjectCard from '../../ProjectCard';

type TProjectGridProps = {
  currentPage: number;
  isLoading: boolean;
  projects: TProjectDTO[];
  selectedGeneration: number | 'ALL';
  selectedPlatform: string;
};

const ProjectGrid = ({ projects, isLoading, selectedGeneration, selectedPlatform, currentPage }: TProjectGridProps) => {
  if (isLoading) {
    return <SkeletonLoader variant="grid" columns={4} count={6} />;
  }

  if (projects.length === 0) {
    return <EmptyState message="No projects match your filters" />;
  }

  return (
    <motion.div
      key={`${selectedGeneration}-${selectedPlatform}-${currentPage}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
    >
      {projects.map((project, idx) => (
        <motion.div key={project.projectId} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}>
          <ProjectCard projectData={project} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectGrid;
