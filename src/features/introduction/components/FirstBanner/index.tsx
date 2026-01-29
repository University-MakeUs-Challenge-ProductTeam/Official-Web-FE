'use client';

import { useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { animate, motion, useInView } from 'framer-motion';

import Typography from '@/components/common/Typography';

import { projectListQueryOptions } from '@/lib/query';

const Counter = ({ from, to }: { from: number; to: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return undefined;

    const node = ref.current;

    const controls = animate(from, to, {
      duration: 2.5,
      ease: [0.16, 1, 0.3, 1], // easeOut
      onUpdate(value) {
        if (node) node.textContent = Math.floor(value).toString();
      },
    });

    return () => controls.stop();
  }, [from, to, inView]);

  return <span ref={ref}>{from}</span>;
};

const FirstBanner = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const { data: projectData } = useQuery(projectListQueryOptions({ page: 0, size: 1, generation: 'ALL', platformName: 'ALL' }));

  // Ideally, these would also be fetched from an API
  const STATS = [
    { title: '활동멤버', count: 999, suffix: '+' },
    { title: '프로젝트', count: 432, suffix: '' },
    { title: '스터디', count: 765, suffix: '' },
  ];

  return (
    <div className="flex flex-col items-center overflow-hidden pb-20 pt-32 md:pt-40">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <Typography size="title-sm" color="main-white" className="text-[20px] font-black uppercase italic tracking-tighter opacity-50 sm:text-5xl">
          WE ARE
        </Typography>
        <Typography size="title-sm" color="main-green" className="mt-4 text-[32px] font-black uppercase italic leading-tight tracking-tighter sm:text-7xl">
          BREAKING <br /> THE BOUNDARIES
        </Typography>
      </motion.div>

      <div className="mt-32 flex w-full flex-wrap justify-center gap-8">
        {STATS.map(({ title, count, suffix }, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative flex w-full min-w-[280px] max-w-[320px] cursor-default flex-col items-center rounded-4xl border border-white/5 bg-white/5 p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all hover:border-main-green/30"
            key={title}
          >
            <div className="absolute inset-0 -z-10 rounded-[inherit] bg-gradient-to-b from-main-green/0 to-main-green/5 opacity-0 transition-opacity group-hover:opacity-100" />

            <Typography size="title-sm" className="text-xs font-bold uppercase tracking-widest text-white/40">
              {title}
            </Typography>
            <div
              className="mt-2 flex min-h-16 items-baseline justify-center text-6xl font-black italic tracking-tighter text-main-green"
              style={{ textShadow: '0 0 30px rgba(82,229,96,0.3)' }}
            >
              <span className="inline-block tabular-nums">{count > 0 ? <Counter from={0} to={count} /> : '-'}</span>
              <span className="ml-0.5 text-4xl">{suffix}</span>
            </div>

            {/* Decorative element */}
            <div className="mt-8 h-px w-12 bg-white/10 transition-all group-hover:w-20 group-hover:bg-main-green" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FirstBanner;
