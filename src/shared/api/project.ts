import type { TPlatformName } from '../types/projectDto';

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

// export async function getProjectDetail() {
//   const res = await fetch('');
// }

// export async function getReleasedProjectList() {
//   const res = await fetch('');
// }
