import type { TPlatformName, TProectDetailDTO } from '../types/projectDto';

import type { TApiResponseType, TProjectListResultType } from '@/shared/types/api/projectTypes';

export async function getProjectList({
  cursor,
  generation,
  platformName,
}: {
  cursor: number;
  generation?: number | 'ALL';
  platformName?: TPlatformName | 'ALL';
}): Promise<TProjectListResultType> {
  let url = `/api/projects/umc?cursor=${cursor}&take=10`;
  if (generation !== 'ALL') {
    url += `&generation=${generation}`;
  } else if (platformName !== 'ALL') {
    url += `&platformName=${platformName}`;
  }
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