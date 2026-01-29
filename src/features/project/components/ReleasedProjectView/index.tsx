'use client';

import { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import { AnimatePresence, motion } from 'framer-motion';

import Typography from '@/components/common/Typography';

import ProjectCard from '../ProjectCard';

import { releasedProjectQueryOptions } from '@/lib/query';

const ReleasedProjectView = () => {
  const [page, setPage] = useState(0);
  const pageSize = 6;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const pagesPerGroup = 5;

  const { data: projectData, isLoading } = useQuery(releasedProjectQueryOptions(page, pageSize));
  const totalPages = projectData?.totalPages || 1;

  return (
    <div className="flex flex-col border-t border-white/5 py-40">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        style={{ willChange: 'transform, opacity' }}
        className="mb-12 transform-gpu text-right"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-main-green">Live Now</span>
        <h2 className="mt-4 text-4xl font-black italic tracking-tighter text-white md:text-6xl">
          RELEASED <span className="text-white/20">PRODUCTS</span>
        </h2>
      </motion.div>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <div className="grid grid-cols-1 gap-10 2xl:grid-cols-2">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="h-48 animate-pulse rounded-4xl bg-white/5" />
            ))}
          </div>
        ) : projectData?.releasedProjectDTOList.length === 0 ? (
          <div className="flex h-[300px] w-full items-center justify-center rounded-4xl border border-white/5 bg-white/5">
            <Typography size="text-sm" className="font-bold uppercase italic tracking-widest text-white/20">
              No released projects yet
            </Typography>
          </div>
        ) : (
          <motion.div key={page} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="grid grid-cols-1 gap-8 2xl:grid-cols-2">
            {projectData?.releasedProjectDTOList.map((project, idx) => (
              <motion.div key={project.projectId} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }}>
                <ProjectCard projectData={project} type="released" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {totalPages > 1 && (
        <div className="mt-20 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setPage(Math.max(page - 1, 0))}
            disabled={page === 0}
            className="rounded-full bg-white/5 p-3 text-main-green transition-colors hover:bg-main-green/10 disabled:opacity-20"
          >
            <FaAngleLeft />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                type="button"
                className={`size-10 rounded-full text-sm font-black italic transition-all ${
                  index === page ? 'bg-[#52E560] text-black shadow-[0_0_15px_#52E560]' : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white'
                } `}
                onClick={() => setPage(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setPage(Math.min(page + 1, totalPages - 1))}
            disabled={page === totalPages - 1}
            className="rounded-full bg-white/5 p-3 text-main-green transition-colors hover:bg-main-green/10 disabled:opacity-20"
          >
            <FaAngleRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default ReleasedProjectView;
