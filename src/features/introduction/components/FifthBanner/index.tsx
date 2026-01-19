'use client';

import { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import { AnimatePresence, motion } from 'framer-motion';

import { QUERY_KEYS } from '@/constants/querykeys/project';

import Typography from '@/components/common/Typography';

import StaffProfile from './_components/StaffProfile';

import StaffGenerationDropdown from '@/features/project/components/StaffGenerationDropdown';
import { getCentralStaff } from '@/lib/api/staff';

function FifthBanner() {
  const [selectedGeneration, setSelectedGeneration] = useState<number | 'ALL'>('ALL');
  const [pageGroup, setPageGroup] = useState(0);
  const [page, setPage] = useState(0);

  const pageSize = 9;
  const pagesPerGroup = 5;
  const startPage = pageGroup * pagesPerGroup;

  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.staffs, selectedGeneration, page],
    queryFn: () => getCentralStaff({ page, size: pageSize, generation: selectedGeneration }),
  });
  const totalPages = data?.totalPages || 1;

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    if (newPage < startPage) {
      setPageGroup(pageGroup - 1);
    } else if (newPage >= startPage + pagesPerGroup) {
      setPageGroup(pageGroup + 1);
    }
  };

  return (
    <div className="flex flex-col overflow-hidden py-40">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ willChange: 'transform, opacity' }}
        className="mb-24 transform-gpu text-center"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-[#52E560]">Visionaries</span>
        <h2 className="mt-4 text-4xl font-black italic leading-[0.8] tracking-tighter text-white md:text-7xl">
          CENTRAL <span className="text-white/20">STAFF</span>
        </h2>
        <p className="mx-auto mt-8 max-w-lg font-medium leading-relaxed text-white/40">
          UMC의 방향성을 제시하고 건강한 생태계를 만들어가는 <br />
          중앙 운영진들을 소개합니다.
        </p>
      </motion.div>

      <div className="relative z-50 mb-16 flex justify-center">
        <div className="group relative overflow-visible rounded-full p-px">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#52E560] to-transparent opacity-20 transition-all duration-500 group-hover:via-[#52E560]/50" />
          <div className="relative">
            <StaffGenerationDropdown selected={selectedGeneration} setSelected={setSelectedGeneration} />
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="h-64 animate-pulse rounded-4xl bg-white/5" />
            ))}
          </div>
        ) : data?.centralStaffList.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex h-[200px] w-full items-center justify-center rounded-4xl border border-white/5 bg-white/5"
          >
            <Typography size="text-sm" className="font-bold uppercase italic tracking-widest text-white/20">
              No staff found for this generation
            </Typography>
          </motion.div>
        ) : (
          <motion.div
            key={`${selectedGeneration}-${page}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="mx-auto grid w-full grid-cols-1 place-items-center gap-10 lg:grid-cols-2 xl:grid-cols-3"
          >
            {data?.centralStaffList.map((item, index) => (
              <motion.div
                key={item.centralStaffId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="w-full"
              >
                <StaffProfile profileData={item} />
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
            {Array.from({ length: Math.min(pagesPerGroup, totalPages - startPage) }, (_, index) => {
              const pageIndex = startPage + index;
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

export default FifthBanner;
