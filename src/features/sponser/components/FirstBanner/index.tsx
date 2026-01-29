'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import Typography from '@/components/common/Typography';

const mainSponsors = [
  { id: 1, name: '컴공선배', path: '/images/컴공선배.jpg' },
  { id: 2, name: '그릿지', path: '/images/그릿지.png' },
  { id: 3, name: '소프트스퀘어드', path: '/images/소프트스퀘어드.png' },
];

const FirstBanner = () => {
  return (
    <div className="flex flex-col items-center py-40">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ willChange: 'transform, opacity' }}
        className="mb-32 transform-gpu text-center"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-main-green">Partners</span>
        <h1 className="mt-4 text-3xl font-black italic tracking-tighter text-white md:text-7xl">
          BREAKING <span className="text-main-green">BOUNDARIES</span> <br />
          <span className="text-white/20">TOGETHER</span>
        </h1>
        <p className="mt-6 text-lg font-medium text-white/40">UMC 챌린저들의 도전을 함께 응원하는 파트너사들을 소개합니다.</p>
      </motion.div>

      <div className="flex flex-col gap-10 md:flex-row md:gap-20">
        {mainSponsors.map((value, index) => (
          <motion.div
            key={value.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, type: 'spring' }}
            viewport={{ once: true }}
            style={{ willChange: 'transform, opacity' }}
            className="group flex transform-gpu flex-col items-center"
          >
            <div className="relative size-[200px] overflow-hidden rounded-full border border-white/5 bg-white/5 p-4 shadow-[0_0_0_0_rgba(82,229,96,0)] backdrop-blur-3xl transition-all hover:border-main-green hover:shadow-[0_0_40px_rgba(82,229,96,0.2)] md:size-[250px]">
              <div className="relative size-full overflow-hidden rounded-full bg-white grayscale transition-all duration-500 group-hover:grayscale-0">
                <Image src={value.path} fill sizes="250px" alt={value.name} className="object-contain p-8" />
              </div>
            </div>

            <Typography size="text-lg" className="mt-8 font-black italic tracking-tighter text-white/40 transition-colors group-hover:text-white">
              {value.name}
            </Typography>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FirstBanner;
