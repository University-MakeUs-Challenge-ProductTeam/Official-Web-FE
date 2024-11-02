'use client';

import { useState } from 'react';
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
            variant={selectedEventType === EventType[eventKey] ? 'outline' : 'disabled'} // Change variant based on selection
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
      <div className="w-4/5 rounded-md bg-[#323232] p-8">
        {isPending ? (
          <FourthBannerSkeleton />
        ) : (
          <>
            <Typography size="text-lg" color="main-white">
              {activities?.result.description}
            </Typography>
            {activities?.result.eventImageUrl ? (
              <Image
                src={activities?.result.eventImageUrl}
                alt={`${activities?.result.eventType} 이미지`}
                layout="responsive"
                width={1000}
                height={500}
                className="mt-10 rounded-xl"
              />
            ) : null}
          </>
        )}
      </div>
    </Flex>
  );
}

function FourthBannerSkeleton() {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="mb-4 h-8 w-full animate-pulse rounded-md bg-slate-300" />
      <div className="h-[600px] w-full animate-pulse rounded-md bg-slate-300" />
    </div>
  );
}

export default FourthBanner;
