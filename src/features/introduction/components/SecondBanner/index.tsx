'use client';

import { useEffect, useRef } from 'react';

import Typography from '@/components/common/Typography';

import SchoolSlider from './_components/SchoolSlider';
import { schoolListQueryOptions } from '@/lib/query';

import { useQuery } from '@tanstack/react-query';
import { animate, motion } from 'framer-motion';

const Counter = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(currentValue) {
        if (ref.current) ref.current.textContent = Math.floor(currentValue).toString();
      },
    });
    return () => controls.stop();
  }, [value]);

  return <span ref={ref}>0</span>;
};

const SecondBanner = () => {
  const { data, isLoading } = useQuery(schoolListQueryOptions());

  const totalSchools = data?.totalSchoolCount || 0;
  const sliderIndex = data?.participateSchoolList ? Math.ceil(data.participateSchoolList.length / 2) : 0;

  if (isLoading) {
    return (
      <div className="flex flex-col items-center py-20">
        <div className="mb-20 text-center">
          <div className="mx-auto h-6 w-48 animate-pulse rounded-lg bg-surface-800" />
          <div className="mx-auto mt-4 h-24 w-96 animate-pulse rounded-lg bg-surface-800" />
        </div>
        <div className="w-full space-y-6">
          <div className="flex gap-4 overflow-hidden">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="h-[60px] w-48 shrink-0 animate-pulse rounded-full bg-surface-800" />
            ))}
          </div>
          <div className="flex gap-4 overflow-hidden">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="h-[60px] w-48 shrink-0 animate-pulse rounded-full bg-surface-800" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        style={{ willChange: 'transform, opacity' }}
        className="mb-20 transform-gpu text-center"
      >
        <Typography as="h3" size="title-sm" color="main-white" className="text-xl font-black uppercase italic tracking-tighter opacity-40">
          Expanding Network
        </Typography>
        <div className="mt-2 flex items-center justify-center gap-4">
          <Typography
            as="h3"
            size="title-xl"
            color="main-green"
            className="text-6xl font-black italic tracking-tighter sm:text-8xl"
            style={{ textShadow: '0 0 30px rgba(82,229,96,0.3)' }}
          >
            <Counter value={totalSchools} />
          </Typography>
          <Typography as="h3" size="title-sm" color="main-white" className="text-3xl font-black italic tracking-tighter">
            UNIVERSITIES <br /> <span className="text-white/20">CONNECTED</span>
          </Typography>
        </div>
      </motion.div>

      <div className="w-full space-y-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 z-10 w-40 bg-gradient-to-r from-black to-transparent" />
          <div className="absolute inset-y-0 right-0 z-10 w-40 bg-gradient-to-l from-black to-transparent" />
          <SchoolSlider schoolList={data?.participateSchoolList.slice(0, sliderIndex)} speed={3000} />
          <div className="mt-6">
            <SchoolSlider schoolList={data?.participateSchoolList.slice(sliderIndex)} reverse speed={4000} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondBanner;
