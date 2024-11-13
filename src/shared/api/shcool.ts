import { axiosInstance } from './axios-instance';
import type { TApiResponseType } from '../types/api/projectTypes';
import type { TSchoolListDataTypes } from '../types/api/schoolTypes';

export async function getShcoolListData() {
  const { data } = await axiosInstance.get<TApiResponseType<TSchoolListDataTypes>>(`/api/schools`);

  return data.result;
}
