import type { TApiResponseType } from '../types/api/projectTypes';
import type { TCentralStaffType } from '../types/api/staff';
import type { TGenerationsDTO } from '../types/projectDto';

export async function getCentralStaff({ generation, cursor }: { cursor: number; generation: number | 'ALL' }) {
  let url = `/api/central-staffs?cursor=${cursor}&take=9`;
  if (generation !== 'ALL') url += `&generation=${generation}`;
  const res = await fetch(url);

  const data: TApiResponseType<TCentralStaffType> = await res.json();
  return data.result;
}

export async function getCentralStaffGenerations(): Promise<TGenerationsDTO> {
  const res = await fetch(`/api/central-staffs/generations`);

  const data: TApiResponseType<TGenerationsDTO> = await res.json();
  return data.result;
}
