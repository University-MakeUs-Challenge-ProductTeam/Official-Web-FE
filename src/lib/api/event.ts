import type { TCentralEventType } from '@/types/api/event';
import type { TApiResponseType } from '@/types/api/projectTypes';
import type { TCentralEventDTO } from '@/types/eventDtos';

import { axiosInstance } from './axios-instance';

export async function getCentralEvent({ eventType }: { eventType: TCentralEventDTO }) {
  const { data } = await axiosInstance.get<TApiResponseType<TCentralEventType>>(`/api/v1/central-events?eventType=${eventType}`);

  return data.result;
}
