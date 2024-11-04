import type { TApiResponseType } from '../types/api/projectTypes';
import type { TCentralStaffType } from '../types/api/staff';

export async function getCentralStaff({ generation, cursor }: { cursor: number; generation: number | 'ALL' }) {
  let url = `/api/central-staff?cursor=${cursor}&take=9`;
  if (generation !== 'ALL') url += `&generation=${generation}`;
  const res = await fetch(url);

  const data: TApiResponseType<TCentralStaffType> = await res.json();
  return data.result;
}
