import type { ApiResponse } from '@/types/common/response';
import type { TProjectListResponse } from '@/types/project/api';
import type { TProjectListResult, TReleasedProjectListResult } from '@/types/project/api-types';
import type { TGenerationsDTO, TPlatformName, TProjectDetailDTO, TProjectDTO } from '@/types/project/dto';

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
}): Promise<TProjectListResult> {
  const url = buildUrl('/api/projects/umc', {
    page,
    size,
    generation: generation !== 'ALL' ? generation : undefined,
    platformName: platformName !== 'ALL' ? platformName : undefined,
    searchTerm,
  });

  const { data } = await axiosInstance.get<ApiResponse<TProjectListResult>>(url);

  const result = data.result as TProjectListResult & { umcProjectList?: TProjectDTO[] };

  return {
    ...result,
    content: result.content ?? result.umcProjectList ?? [],
  };
}

export async function getAllProjects(): Promise<TProjectListResponse> {
  const url = '/api/projects';
  const { data } = await axiosInstance.get<TProjectListResponse>(url);

  return data;
}

export async function getProjectDetail({ id }: { id: number }) {
  const url = `/api/projects/${id}`;
  const { data } = await axiosInstance.get<ApiResponse<TProjectDetailDTO>>(url);

  return data.result;
}

export async function getReleasedProjectList({ page, size }: { page: number; size: number }) {
  const url = buildUrl('/api/projects/released', { page, size });
  const { data } = await axiosInstance.get<ApiResponse<TReleasedProjectListResult>>(url);

  const result = data.result as TReleasedProjectListResult & { releasedProjectDTOList?: TProjectDTO[] };

  return {
    ...result,
    content: result.content ?? result.releasedProjectDTOList ?? [],
  };
}

export async function getGenerations() {
  const { data } = await axiosInstance.get<ApiResponse<TGenerationsDTO>>(`/api/projects/generations`);

  return data.result;
}
