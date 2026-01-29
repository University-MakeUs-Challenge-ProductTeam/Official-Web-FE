'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

import type { TCentralEventDTO } from '@/types/eventDtos';
import { CENTRAL_EVENT_CONTENT } from '@/constants/activityContent';

import Typography from '@/components/common/Typography';

import { centralEventQueryOptions } from '@/lib/query';

const FourthBanner = () => {
  const [selectedEvent, setSelectedEvent] = useState<TCentralEventDTO>('UNION_OT');
  const eventList = Object.keys(CENTRAL_EVENT_CONTENT) as Array<keyof typeof CENTRAL_EVENT_CONTENT>;

  const { data, isLoading } = useQuery(centralEventQueryOptions(selectedEvent));

  return (
    <div className="flex flex-col items-center overflow-hidden py-40">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ willChange: 'transform, opacity' }}
        className="mb-20 transform-gpu text-center"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-main-green">Events</span>
        <h2 className="mt-4 text-4xl font-black italic tracking-tighter text-white md:text-6xl">
          MAJOR <span className="text-white/20">ACTIVITIES</span>
        </h2>
      </motion.div>

      <div className="scrollbar-hide mb-16 flex w-full snap-x snap-mandatory overflow-x-auto px-6 md:justify-center md:px-0">
        <div className="flex gap-2 md:gap-4">
          {eventList.map((item) => (
            <button
              type="button"
              key={item}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedEvent(item);
              }}
              className={`relative shrink-0 snap-center whitespace-nowrap px-6 py-2 text-xs font-bold uppercase tracking-wider transition-all md:text-sm ${
                selectedEvent === item ? 'text-main-green' : 'text-white/40 hover:text-white/60'
              } `}
            >
              {CENTRAL_EVENT_CONTENT[item]}
              {selectedEvent === item && (
                <motion.div
                  layoutId="active-event-pill"
                  className="absolute inset-0 -z-10 rounded-full border border-main-green/30 bg-main-green/10 shadow-[0_0_15px_rgba(82,229,96,0.1)]"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="relative min-h-[400px] w-full max-w-6xl">
        <AnimatePresence mode="wait">
          {!isLoading ? (
            <motion.div
              key={selectedEvent}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="grid items-center gap-10 lg:grid-cols-2"
            >
              <div className="relative aspect-video overflow-hidden rounded-4xl border border-white/10 shadow-2xl">
                {data?.eventImageUrl ? (
                  <Image className="object-cover transition-transform duration-700 hover:scale-110" src={data?.eventImageUrl} fill alt="EventImage" />
                ) : (
                  <div className="flex size-full items-center justify-center bg-white/5">
                    <span className="text-5xl font-black italic tracking-tighter text-white/10">NO IMAGE</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="space-y-6">
                <Typography
                  size="title-sm"
                  className="text-2xl font-black italic tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] md:text-4xl"
                >
                  {CENTRAL_EVENT_CONTENT[selectedEvent]}
                </Typography>
                <div className="h-px w-20 bg-main-green" />
                <Typography as="p" size="text-sm" className="whitespace-pre-wrap text-sm font-medium leading-loose tracking-tight text-white/80 md:text-lg">
                  {data?.description}
                </Typography>
              </div>
            </motion.div>
          ) : (
            <div className="grid animate-pulse items-center gap-10 lg:grid-cols-2">
              <div className="aspect-video rounded-4xl bg-white/5" />
              <div className="space-y-6">
                <div className="h-10 w-64 rounded bg-white/5" />
                <div className="h-32 w-full rounded bg-white/5" />
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FourthBanner;
