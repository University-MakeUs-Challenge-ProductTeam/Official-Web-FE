'use client';

import { useState } from 'react';

import type { TProjectPart } from '@/types/project/dto';
import { PART_NAME } from '@/constants/Parts';

import { getPartCurriculums } from '@/lib/api/part';
import { queryKeys } from '@/lib/query';

import { useQuery } from '@tanstack/react-query';
import { AnimatePresence, motion } from 'framer-motion';

const RedesignCurriculum = () => {
  const [selectedPart, setSelectedPart] = useState<TProjectPart>('WEB');
  const partList = Object.keys(PART_NAME) as Array<keyof typeof PART_NAME>;

  const { data, isLoading } = useQuery({
    queryKey: queryKeys.introduction.curriculum(selectedPart),
    queryFn: () => getPartCurriculums({ part: selectedPart }),
  });

  return (
    <section className="overflow-hidden bg-black px-6 py-40">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ willChange: 'transform, opacity' }}
          className="mb-20 transform-gpu text-center"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-main-green">Curriculum</span>
          <h2 className="mt-4 text-4xl font-black italic tracking-tighter text-white md:text-6xl">
            PRO GRADE <span className="text-white/20">GROWTH</span>
          </h2>
        </motion.div>

        {/* Custom Tabs */}
        <div className="relative mb-16 px-4">
          <div className="flex gap-2 overflow-x-auto pb-4 md:flex-wrap md:justify-center md:gap-4 md:overflow-visible md:pb-0 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-main-green/50 [&::-webkit-scrollbar-thumb]:hover:bg-main-green [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar]:h-1.5">
            {partList.map((item) => (
              <button
                type="button"
                key={item}
                onClick={() => setSelectedPart(item)}
                className={`relative shrink-0 px-6 py-2 text-xs font-bold uppercase tracking-wider transition-all md:text-sm ${selectedPart === item ? 'text-main-green' : 'text-white/40 hover:text-white/60'} `}
              >
                {PART_NAME[item]}
                {selectedPart === item && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 -z-10 rounded-full border border-main-green/30 bg-main-green/10 shadow-[0_0_15px_rgba(82,229,96,0.1)]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Scroll Hint */}
          <div className="pointer-events-none absolute right-0 top-0 flex h-10 w-16 items-center justify-end bg-gradient-to-l from-black via-black/80 to-transparent md:hidden">
            <motion.div animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }} className="mr-2 flex items-center gap-1">
              <div className="h-px w-3 bg-main-green/60" />
              <div className="size-0 border-y-[3px] border-l-[5px] border-y-transparent border-l-main-green/60" />
            </motion.div>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            {!isLoading ? (
              <motion.div
                key={selectedPart}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: 'circOut' }}
                className="grid gap-10 md:grid-cols-2"
              >
                <div className="space-y-8">
                  <div className="rounded-4xl border border-white/10 bg-white/5 p-10 backdrop-blur-3xl">
                    <h3 className="mb-4 text-3xl font-black italic text-white">{PART_NAME[selectedPart]} Part</h3>
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-main-green">Requirements</h4>
                      <p className="leading-relaxed text-white/60">{data?.requireSkill || '공통 역량이 요구됩니다.'}</p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-4xl bg-main-green p-10 text-black">
                    <h4 className="mb-2 text-sm font-black uppercase tracking-widest opacity-40">Goal</h4>
                    <p className="text-2xl font-black italic leading-tight">
                      단순한 코딩이 아닌,
                      <br />
                      실무 프로세스를 경험합니다.
                    </p>
                    <div className="absolute -bottom-10 -right-10 text-[120px] font-black italic opacity-10">UMC</div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-10 backdrop-blur-3xl">
                  <h4 className="mb-8 text-sm font-black uppercase tracking-widest text-main-green">Weekly Schedule</h4>

                  <div className="scrollbar-hide max-h-[600px] touch-pan-y space-y-4 overflow-y-auto overscroll-contain pb-20 pr-4">
                    {data?.activityPartCurriculumList.map((item, index) => (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        key={item.curriculumId}
                        className="group/item flex w-full items-start gap-4 rounded-2xl border border-transparent p-4 text-left transition-all hover:border-white/10 hover:bg-white/5"
                      >
                        <span className="mt-1 w-10 shrink-0 text-xs font-black italic text-main-green opacity-50 transition-opacity group-hover/item:opacity-100">
                          {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </span>
                        <p className="text-sm font-medium leading-relaxed text-white/80 transition-colors group-hover/item:text-white">{item.topic}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Scroll Indicator Gradient */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-32 items-end justify-center bg-gradient-to-t from-black via-black/80 to-transparent pb-8">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-2">
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Scroll Down</span>
                      <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="h-4 w-px bg-main-green" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="grid gap-10 md:grid-cols-2">
                <div className="h-[500px] animate-pulse rounded-4xl bg-white/5" />
                <div className="h-[500px] animate-pulse rounded-4xl bg-white/5" />
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default RedesignCurriculum;
