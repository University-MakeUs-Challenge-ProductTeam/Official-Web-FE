import type { TCurriculumType } from '@/types/api/partTypes';
import type { TApiResponseType } from '@/types/api/projectTypes';
import type { TProjectPart } from '@/types/projectDto';

import { axiosInstance } from './axios-instance';

export async function getPartCurriculums({ part }: { part: TProjectPart }) {
  const { data } = await axiosInstance.get<TApiResponseType<TCurriculumType>>(`/api/parts/curriculum?part=${part}`);

  return data.result;
}
