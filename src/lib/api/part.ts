import type { TCurriculumType } from '@/types/api/partTypes';
import type { ApiResponse } from '@/types/api/projectTypes';
import type { TProjectPart } from '@/types/projectDto';

import { axiosInstance } from './axios-instance';

import { buildUrl } from '@/lib/utils/url-builder';

export async function getPartCurriculums({ part }: { part: TProjectPart }) {
  const url = buildUrl('/api/parts/curriculum', { part });
  const { data } = await axiosInstance.get<ApiResponse<TCurriculumType>>(url);

  return data.result;
}
