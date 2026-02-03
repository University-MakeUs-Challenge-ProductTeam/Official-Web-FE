import type { MainActivityResponse } from '@/types/academy/api';
import type { EventList } from '@/types/academy/event';

import { axiosInstance } from '@/lib/api/axios-instance';
import { buildUrl } from '@/lib/utils/url-builder';

export const getMainActivity = async ({ eventType }: { eventType: EventList }): Promise<MainActivityResponse> => {
  const url = buildUrl('/api/v1/central-events', { eventType });
  const { data } = await axiosInstance.get<MainActivityResponse>(url);

  return data;
};
