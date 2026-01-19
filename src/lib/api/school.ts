import type { ApiResponse } from '@/types/api/projectTypes';
import type { TSchoolListData } from '@/types/api/schoolTypes';

import { axiosInstance } from './axios-instance';

export async function getSchoolListData() {
  const url = '/api/schools';
  const { data } = await axiosInstance.get<ApiResponse<TSchoolListData>>(url);

  return data.result;
}
