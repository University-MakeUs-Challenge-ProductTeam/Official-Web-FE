import type { ApiResponse } from '@/types/common/response';
import type { TSchoolListData } from '@/types/school/api';

import { axiosInstance } from './axios-instance';

export async function getSchoolListData() {
  const url = '/api/schools';
  const { data } = await axiosInstance.get<ApiResponse<TSchoolListData>>(url);

  return data.result;
}
