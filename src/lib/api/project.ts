import type { ApiResponse, TProjectListResultType, TReleasedProjectListResultType } from '@/types/api/projectTypes';
import type { TGenerationsDTO, TPlatformName, TProjectDetailDTO } from '@/types/projectDto';

import { axiosInstance } from './axios-instance';

import { buildUrl } from '@/lib/utils/url-builder';

export async function getProjectList({
  page,
  generation,
  platformName,
  searchTerm,
  size = 9,
}: {
  generation?: number | 'ALL';
  page: number;
  platformName?: TPlatformName | 'ALL';
  searchTerm?: string;
  size?: number;
}): Promise<TProjectListResultType> {
  const url = buildUrl('/api/projects/umc', {
    page,
    size,
    generation: generation !== 'ALL' ? generation : undefined,
    platformName: platformName !== 'ALL' ? platformName : undefined,
    searchTerm,
  });

  const { data } = await axiosInstance.get<ApiResponse<TProjectListResultType>>(url);

  return data.result;
}

export async function getProjectDetail({ id }: { id: number }) {
  const url = `/api/projects/${id}`;
  const { data } = await axiosInstance.get<ApiResponse<TProjectDetailDTO>>(url);

  return data.result;
}

export async function getReleasedProjectList({ page, size }: { page: number; size: number }) {
  const url = buildUrl('/api/projects/released', { page, size });
  const { data } = await axiosInstance.get<ApiResponse<TReleasedProjectListResultType>>(url);

  return data.result;
}

export async function getGenerations() {
  const { data } = await axiosInstance.get<ApiResponse<TGenerationsDTO>>(`/api/projects/generations`);

  return data.result;
}
