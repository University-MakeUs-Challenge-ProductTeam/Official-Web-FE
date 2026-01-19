'use client';

import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { QUERY_KEYS } from '@/constants/querykeys/project';

import { getSchoolListData } from '@/lib/api/school';

const UniversityMarquee = () => {
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.schools],
    queryFn: () => getSchoolListData(),
  });

  const schoolList = data?.participateSchoolList || [];

  return (
    <section className="relative overflow-hidden bg-black py-40">
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto mb-20 px-6 text-center">
        <h2 className="text-3xl font-black italic tracking-tighter text-white sm:text-5xl">
          JOINED BY <span className="text-main-green">TOP UNIVERSITIES</span>
        </h2>
        <p className="mt-4 font-medium text-white/40">현재 {data?.totalSchoolCount || 0}개의 학교가 UMC와 함께하고 있습니다.</p>
      </div>

      <div className="group flex overflow-hidden">
        <motion.div
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex gap-20 whitespace-nowrap px-10"
        >
          {[...schoolList, ...schoolList].map((univ, index) => (
            <div key={`${univ.participateSchoolId}-${index}`} className="group/item flex items-center gap-4 grayscale transition-all hover:grayscale-0">
              <div className="relative flex size-16 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 p-3 transition-colors group-hover/item:border-main-green/50">
                {univ.logoImageUrl ? (
                  <Image src={univ.logoImageUrl} alt={univ.schoolName} fill sizes="64px" className="object-contain p-2" />
                ) : (
                  <span className="text-[10px] font-black italic text-white/50 group-hover/item:text-main-green">{univ.schoolName.substring(0, 1)}</span>
                )}
              </div>
              <span className="text-2xl font-black italic tracking-tighter text-white/20 transition-all group-hover/item:scale-110 group-hover/item:text-white">
                {univ.schoolName}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default UniversityMarquee;
