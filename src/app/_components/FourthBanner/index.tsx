'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import Button from '@/shared/components/Button';
import Flex from '@/shared/components/Flex';
import Spacing from '@/shared/components/Spacing';
import Typography from '@/shared/components/Typography';
import useGetMainActivity from '@/shared/hooks/queries/useGetMainActivity';
import type { EventKRList, EventList } from '@/shared/types/dtos/academy';
import { EventType } from '@/shared/types/dtos/academy';

function FourthBanner() {
  const [selectedEventType, setSelectedEventType] = useState<EventList>('SCHOOL_OT');
  const { data: activities, isPending } = useGetMainActivity({ eventType: selectedEventType });
  const eventKeys = Object.keys(EventType) as EventKRList[];

  const handleEventTypeClick = (eventKey: EventKRList) => {
    const eventValue = EventType[eventKey];
    setSelectedEventType(eventValue);
  };

  return (
    <Flex direction="column" justify="center" align="center">
      <Typography size="title-sm" color="main-disable">
        주요활동
      </Typography>
      <Spacing direction="vertical" size={10} />
      <Typography size="title-smd" color="main-white">
        UMC는 끊임없이
      </Typography>
      <Typography size="title-smd" color="main-white">
        소통하고 성장합니다.
      </Typography>
      <Spacing direction="vertical" size={128} />
      <Flex direction="row" justify="center" align="center" className="w-[90%] flex-wrap gap-4">
        {eventKeys.map((eventKey) => (
          <Button
            key={eventKey}
            variant={selectedEventType === EventType[eventKey] ? 'outline' : 'disabled'}
            onClick={() => handleEventTypeClick(eventKey)}
            className="min-w-[100px] flex-1 text-center"
          >
            <Typography size="caption" color={selectedEventType === EventType[eventKey] ? 'main-green' : 'main-disable'}>
              {eventKey}
            </Typography>
          </Button>
        ))}
      </Flex>
      <Spacing direction="vertical" size={42} />
      <div className="mb-10 w-4/5 rounded">
        {isPending ? (
          <FourthBannerSkeleton />
        ) : activities?.result.eventImageUrl ? (
          <>
            <Image
              className="rounded-lg bg-neutral-800"
              src={activities.result.eventImageUrl}
              width={2000}
              height={700}
              layout="contain"
              alt={`${activities.result.eventType}의 이미지`}
            />
            <Typography as="p" size="text-sm" className="mt-5 w-full whitespace-pre-wrap text-[#B8B8B8]">
              {activities.result.description}
            </Typography>
          </>
        ) : (
          <div className="h-[700px] w-full rounded-lg bg-neutral-800" />
        )}
      </div>
    </Flex>
  );
}

function FourthBannerSkeleton() {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="h-[600px] w-full animate-pulse rounded-md bg-slate-300" />
      <div className="mt-5 h-20 w-full animate-pulse rounded-md bg-slate-300" />
    </div>
  );
}

export default FourthBanner;
