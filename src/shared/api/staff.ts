import type { TApiResponseType } from '../types/api/projectTypes';
import type { TCentralStaffType } from '../types/api/staff';
import type { TGenerationsDTO } from '../types/projectDto';

export async function getCentralStaff({ generation, page, size = 9 }: { generation: number | 'ALL'; page: number; size: number }) {
  let url = `/api/central-staffs?page=${page}&size=${size}`;
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
