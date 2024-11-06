import type { TGenerationsDTO, TPlatformName, TProectDetailDTO } from '../types/projectDto';

import type { TApiResponseType, TProjectListResultType } from '@/shared/types/api/projectTypes';

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

  const res = await fetch(url);

  const data: TApiResponseType<TProjectListResultType> = await res.json();
  return data.result;
}

export async function getProjectDetail({ id }: { id: number }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/projects/${id}`);

  const data: TApiResponseType<TProectDetailDTO> = await res.json();
  return data.result;
}

export async function getReleasedProjectList({ cursor }: { cursor: number }) {
  const res = await fetch(`/api/projects/umc?cursor=${cursor}&take=10`);

  const data: TApiResponseType<TProjectListResultType> = await res.json();
  return data.result;
}

export async function getGenerations() {
  const res = await fetch(`/api/projects/generations`);

  const data: TApiResponseType<TGenerationsDTO> = await res.json();
  return data.result;
}
