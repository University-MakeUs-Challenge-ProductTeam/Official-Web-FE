import type { TCurriculumType } from '../types/api/partTypes';
import type { TApiResponseType } from '../types/api/projectTypes';
import type { TProjectPart } from '../types/projectDto';

export async function getPartCurriculums({ part }: { part: TProjectPart }) {
  const res = await fetch(`/api/parts/curriculum?part=${part}`);

  const data: TApiResponseType<TCurriculumType> = await res.json();
  return data.result;
}
