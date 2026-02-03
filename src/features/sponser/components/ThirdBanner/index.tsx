'use client';

import Typography from '@/components/common/Typography';

import { motion } from 'framer-motion';
import Link from 'next/link';

const ThirdBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{ willChange: 'transform, opacity' }}
      className="relative mt-40 transform-gpu overflow-hidden rounded-[40px] bg-gradient-to-br from-main-green to-main-green p-12 md:p-24"
    >
      <div className="absolute right-0 top-0 -mr-20 -mt-20 size-[400px] rounded-full bg-white/20 blur-[100px]" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 size-[300px] rounded-full bg-black/20 blur-[100px]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <Typography as="h2" className="text-4xl font-black italic leading-[0.9] tracking-tighter text-black md:text-6xl">
          FUEL OUR <br /> <span className="opacity-40">REVOLUTION</span>
        </Typography>

        <p className="mt-8 max-w-2xl text-lg font-bold text-black/60 md:text-xl">
          UMC가 세상의 틀을 깨고 더 큰 가치를 창출할 수 있도록
          <br className="hidden md:block" />
          함께 성장할 파트너를 기다립니다.
        </p>

        <Link
          href="/sponser/apply"
          className="group relative mt-12 flex h-20 items-center justify-center overflow-hidden rounded-full bg-black px-12 text-xl font-black italic tracking-tighter text-main-green transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,0,0,0.3)]"
        >
          <span className="relative z-10">BECOME A PARTNER</span>
          <motion.div className="absolute inset-0 bg-white/10" initial={{ x: '-100%' }} whileHover={{ x: '100%' }} transition={{ duration: 0.5 }} />
        </Link>
      </div>
    </motion.div>
  );
};

export default ThirdBanner;
