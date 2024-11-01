import type { TApiResponseType } from '../types/api/projectTypes';
import type { TActivitiesDTO } from '../types/recruitmentDto';

export async function getActivities() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/activities`);

  const data: TApiResponseType<TActivitiesDTO> = await res.json();
  return data.result;
}
