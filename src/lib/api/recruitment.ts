import type { ApiResponse } from '@/types/common/response';
import type { TRequirementData } from '@/types/recruitment/api';
import type { TActivitiesDTO } from '@/types/recruitment/dto';

import { axiosInstance } from './axios-instance';
import { buildUrl } from '@/lib/utils/url-builder';

export async function getActivities() {
  const url = '/api/activities';
  const { data } = await axiosInstance.get<ApiResponse<TActivitiesDTO>>(url);

  return data.result;
}

export async function getRequirements({ schoolName }: { schoolName: string }) {
  const url = buildUrl('/api/requirements', { schoolName });
  const { data } = await axiosInstance.get<ApiResponse<TRequirementData>>(url);

  return data.result;
}
