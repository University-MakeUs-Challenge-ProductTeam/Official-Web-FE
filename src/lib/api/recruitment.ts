import type { ApiResponse } from '@/types/api/projectTypes';
import type { TRequeirementDataType } from '@/types/api/requirementTypes';
import type { TActivitiesDTO } from '@/types/recruitmentDto';

import { axiosInstance } from './axios-instance';

import { buildUrl } from '@/lib/utils/url-builder';

export async function getActivities() {
  const url = '/api/activities';
  const { data } = await axiosInstance.get<ApiResponse<TActivitiesDTO>>(url);

  return data.result;
}

export async function getRequirements({ schoolName }: { schoolName: string }) {
  const url = buildUrl('/api/requirements', { schoolName });
  const { data } = await axiosInstance.get<ApiResponse<TRequeirementDataType>>(url);

  return data.result;
}
