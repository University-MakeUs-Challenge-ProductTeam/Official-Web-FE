import type { TApiResponseType } from '../types/api/projectTypes';
import type { TRequeirementDataType } from '../types/api/requirementTypes';
import type { TActivitiesDTO } from '../types/recruitmentDto';

export async function getActivities() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/activities`);

  const data: TApiResponseType<TActivitiesDTO> = await res.json();
  return data.result;
}

export async function getRequirements({ schoolName }: { schoolName: string }) {
  const res = await fetch(`/api/requirements?schoolName=${schoolName}`);

  const data: TApiResponseType<TRequeirementDataType> = await res.json();
  return data.result;
}
