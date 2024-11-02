import { axiosInstance } from '@/shared/api/axios-instance';
import type { MainActivityResponse } from '@/shared/types/api/academy';
import type { TProjectListResponse } from '@/shared/types/api/project';
import type { EventList } from '@/shared/types/dtos/academy';

export const getMajorActivity = async ({ eventType }: { eventType: EventList }): Promise<MainActivityResponse> => {
  const { data } = await axiosInstance.get<MainActivityResponse>(`/api/v1/central-events?eventType=${eventType}`);

  return data;
};

export const getAllProject = async (): Promise<TProjectListResponse> => {
  const { data } = await axiosInstance.get<TProjectListResponse>(`/api/projects/total`);

  return data;
};
