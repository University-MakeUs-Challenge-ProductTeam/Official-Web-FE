'use client';

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

import { getCentralEvent } from '@/shared/api/event';
import Typography from '@/shared/components/Typography';
import { CENTRAL_EVENT_CONTENT } from '@/shared/constants/activityContent';
import { QUERY_KEYS } from '@/shared/constants/querykeys/project';
import type { TCentralEventDTO } from '@/shared/types/eventDtos';

function FourthBanner() {
  const [selectedEvent, setSelectedEvent] = useState<TCentralEventDTO>('UNION_OT');
  const eventList = Object.keys(CENTRAL_EVENT_CONTENT) as Array<keyof typeof CENTRAL_EVENT_CONTENT>;

  const { data } = useQuery({
    queryKey: [QUERY_KEYS.events, selectedEvent],
    queryFn: () => getCentralEvent({ eventType: selectedEvent }),
  });

  return (
    <div className="flex flex-col items-center gap-9">
      <Typography as="h3" size="title-smd" color="main-white">
        주요활동
      </Typography>

      <div className="mt-4 flex w-3/5 flex-row flex-wrap justify-around gap-10">
        {eventList.map((item) => (
          <Typography
            as="button"
            key={item}
            size="text-lg"
            className={`cursor-pointer ${selectedEvent === item ? 'border-t-2 border-solid border-main-green font-bold text-main-green' : 'text-[#6D6D6D]'}`}
            onClick={() => setSelectedEvent(item)}
          >
            {CENTRAL_EVENT_CONTENT[item]}
          </Typography>
        ))}
      </div>

      {data?.eventImageUrl ? (
        <Image
          className={`${data?.eventImageUrl && 'bg-neutral-800'} rounded-lg`}
          src={data?.eventImageUrl}
          width={2000}
          height={700}
          layout="contain"
          alt="EventImage"
        />
      ) : (
        <div className="h-[700px] w-full rounded-lg bg-neutral-800" />
      )}
      <Typography as="p" size="text-sm" className="w-full whitespace-pre-wrap text-[#B8B8B8]">
        {data?.description}
      </Typography>
    </div>
  );
}

export default FourthBanner;
