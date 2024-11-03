import type { TApiResponseType } from '../types/api/projectTypes';
import type { TSchoolListDataTypes } from '../types/api/schoolTypes';

export async function getShcoolListData() {
  const res = await fetch(`/api/schools/list`);

  const data: TApiResponseType<TSchoolListDataTypes> = await res.json();
  return data.result;
}
