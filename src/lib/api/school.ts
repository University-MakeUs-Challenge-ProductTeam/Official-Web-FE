import type { TApiResponseType } from '@/types/api/projectTypes';
import type { TSchoolListDataTypes } from '@/types/api/schoolTypes';

import { axiosInstance } from './axios-instance';

export async function getSchoolListData() {
  const { data } = await axiosInstance.get<TApiResponseType<TSchoolListDataTypes>>(`/api/schools`);

  return data.result;
}
