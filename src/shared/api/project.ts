import { axiosInstance } from './axios-instance';
import type { TGenerationsDTO, TPlatformName, TProectDetailDTO } from '../types/projectDto';

import type { TApiResponseType, TProjectListResultType, TReleasedProjectListResultType } from '@/shared/types/api/projectTypes';

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
  let url = `/api/projects/umc?page=${page}&size=${size}`;
  if (generation !== 'ALL') url += `&generation=${generation}`;
  if (platformName !== 'ALL') url += `&platformName=${platformName}`;
  if (searchTerm) url += `&searchTerm=${searchTerm}`;

  const { data } = await axiosInstance.get<TApiResponseType<TProjectListResultType>>(url);

  return data.result;
}

export async function getProjectDetail({ id }: { id: number }) {
  const { data } = await axiosInstance.get<TApiResponseType<TProectDetailDTO>>(`/api/projects/${id}`);

  return data.result;
}

export async function getReleasedProjectList({ page, size }: { page: number; size: number }) {
  const { data } = await axiosInstance.get<TApiResponseType<TReleasedProjectListResultType>>(`/api/projects/released?page=${page}&size=${size}`);

  return data.result;
}

export async function getGenerations() {
  const { data } = await axiosInstance.get<TApiResponseType<TGenerationsDTO>>(`/api/projects/generations`);

  return data.result;
}
