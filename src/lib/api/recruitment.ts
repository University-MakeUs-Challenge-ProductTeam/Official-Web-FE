import type { TApiResponseType } from '@/types/api/projectTypes';
import type { TRequeirementDataType } from '@/types/api/requirementTypes';
import type { TActivitiesDTO } from '@/types/recruitmentDto';

import { axiosInstance } from './axios-instance';

export async function getActivities() {
  const { data } = await axiosInstance.get<TApiResponseType<TActivitiesDTO>>(`/api/activities`);

  return data.result;
}

export async function getRequirements({ schoolName }: { schoolName: string }) {
  const { data } = await axiosInstance.get<TApiResponseType<TRequeirementDataType>>(`/api/requirements?schoolName=${schoolName}`);

  return data.result;
}
