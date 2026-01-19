import type { ApiResponse } from '@/types/api/projectTypes';
import type { TCentralStaffType } from '@/types/api/staff';
import type { TGenerationsDTO } from '@/types/projectDto';

import { axiosInstance } from './axios-instance';

import { buildUrl } from '@/lib/utils/url-builder';

export async function getCentralStaff({ generation, page, size = 9 }: { generation: number | 'ALL'; page: number; size: number }) {
  const url = buildUrl('/api/central-staffs', {
    page,
    size,
    generation: generation !== 'ALL' ? generation : undefined,
  });
  const { data } = await axiosInstance.get<ApiResponse<TCentralStaffType>>(url);

  return data.result;
}

export async function getCentralStaffGenerations(): Promise<TGenerationsDTO> {
  const url = '/api/central-staffs/generations';
  const { data } = await axiosInstance.get<ApiResponse<TGenerationsDTO>>(url);

  return data.result;
}
