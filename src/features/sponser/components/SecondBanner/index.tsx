'use client';

import Typography from '@/components/common/Typography';

import { sponsorListQueryOptions } from '@/lib/query';

import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const SecondBanner = () => {
  const { data, isLoading } = useQuery(sponsorListQueryOptions());

  if (isLoading) {
    return (
      <div className="flex flex-col border-t border-white/5 py-40">
        <div className="mb-20 space-y-4">
          <div className="h-4 w-24 animate-pulse rounded-lg bg-white/5" />
          <div className="h-12 w-96 animate-pulse rounded-lg bg-white/5" />
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="h-64 animate-pulse rounded-4xl bg-white/5" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col border-t border-white/5 py-40">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        style={{ willChange: 'transform, opacity' }}
        className="mb-20 transform-gpu"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-main-green">Network</span>
        <h2 className="mt-4 text-4xl font-black italic tracking-tighter text-white md:text-6xl">
          PROACTIVE <span className="text-white/20">SPONSORS</span>
        </h2>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {data?.sponsorList
          .filter((item) => item.title !== '칼리지스' && item.sponsorId !== 4)
          .map((item, idx) => (
            <motion.div
              key={item.sponsorId}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              style={{ willChange: 'transform, opacity' }}
              className="group relative flex transform-gpu flex-col gap-8 rounded-4xl border border-white/5 bg-white/5 p-10 backdrop-blur-3xl transition-all hover:border-main-green/30"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="relative size-24 overflow-hidden rounded-2xl bg-white p-2">
                  <Image src={item.logoUrl} fill alt={item.title} className="object-contain p-2" />
                </div>
                <div className="space-y-1">
                  <Typography size="title-sm" className="text-2xl font-black italic tracking-tighter text-white transition-colors group-hover:text-main-green">
                    {item.title}
                  </Typography>
                  <div className="h-px w-10 bg-main-green opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </div>

              <p className="font-medium leading-relaxed text-white/60">{item.description}</p>

              <Link
                href={item.url}
                target="_blank"
                className="mt-auto self-end text-xs font-black uppercase italic tracking-widest text-main-green opacity-40 transition-opacity hover:opacity-100"
              >
                Visit Website —
              </Link>
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
};

export default SecondBanner;
