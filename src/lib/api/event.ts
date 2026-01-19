import type { TCentralEventType } from '@/types/api/event';
import type { ApiResponse } from '@/types/api/projectTypes';
import type { TCentralEventDTO } from '@/types/eventDtos';

import { axiosInstance } from './axios-instance';

import { buildUrl } from '@/lib/utils/url-builder';

export async function getCentralEvent({ eventType }: { eventType: TCentralEventDTO }) {
  const url = buildUrl('/api/v1/central-events', { eventType });
  const { data } = await axiosInstance.get<ApiResponse<TCentralEventType>>(url);

  return data.result;
}
