import type { MainActivityResponse } from '@/types/api/academy';
import type { TProjectListResponse } from '@/types/api/project';
import type { EventList } from '@/types/dtos/academy';

import { axiosInstance } from '@/lib/api/axios-instance';
import { buildUrl } from '@/lib/utils/url-builder';

export const getMajorActivity = async ({ eventType }: { eventType: EventList }): Promise<MainActivityResponse> => {
  const url = buildUrl('/api/v1/central-events', { eventType });
  const { data } = await axiosInstance.get<MainActivityResponse>(url);

  return data;
};

export const getAllProject = async (): Promise<TProjectListResponse> => {
  const url = '/api/projects';
  const { data } = await axiosInstance.get<TProjectListResponse>(url);

  return data;
};
