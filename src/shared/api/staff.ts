import { axiosInstance } from './axios-instance';
import type { TApiResponseType } from '../types/api/projectTypes';
import type { TCentralStaffType } from '../types/api/staff';
import type { TGenerationsDTO } from '../types/projectDto';

export async function getCentralStaff({ generation, page, size = 9 }: { generation: number | 'ALL'; page: number; size: number }) {
  let url = `/api/central-staffs?page=${page}&size=${size}`;
  if (generation !== 'ALL') url += `&generation=${generation}`;
  const { data } = await axiosInstance.get<TApiResponseType<TCentralStaffType>>(url);

  return data.result;
}

export async function getCentralStaffGenerations(): Promise<TGenerationsDTO> {
  const { data } = await axiosInstance.get<TApiResponseType<TGenerationsDTO>>(`/api/central-staffs/generations`);

  return data.result;
}
