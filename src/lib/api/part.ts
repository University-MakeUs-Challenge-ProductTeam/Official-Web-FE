import type { ApiResponse } from '@/types/common/response';
import type { TCurriculum } from '@/types/part/api';
import type { TProjectPart } from '@/types/project/dto';

import { axiosInstance } from './axios-instance';
import { buildUrl } from '@/lib/utils/url-builder';

export async function getPartCurriculums({ part }: { part: TProjectPart }) {
  const url = buildUrl('/api/parts/curriculum', { part });
  const { data } = await axiosInstance.get<ApiResponse<TCurriculum>>(url);

  return data.result;
}
