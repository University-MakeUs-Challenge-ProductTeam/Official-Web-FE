import type { MainActivityResponse } from '@/types/api/academy';
import type { TProjectListResponse } from '@/types/api/project';
import type { EventList } from '@/types/dtos/academy';

import { axiosInstance } from '@/lib/api/axios-instance';

export const getMajorActivity = async ({ eventType }: { eventType: EventList }): Promise<MainActivityResponse> => {
  const { data } = await axiosInstance.get<MainActivityResponse>(`/api/v1/central-events?eventType=${eventType}`);

  return data;
};

export const getAllProject = async (): Promise<TProjectListResponse> => {
  const { data } = await axiosInstance.get<TProjectListResponse>(`/api/projects`);

  return data;
};
