import type { ApiResponse } from '@/types/common/response';
import type { TCentralEvent } from '@/types/event/api';
import type { TCentralEventDTO } from '@/types/event/dto';

import { axiosInstance } from './axios-instance';
import { buildUrl } from '@/lib/utils/url-builder';

export async function getCentralEvent({ eventType }: { eventType: TCentralEventDTO }) {
  const url = buildUrl('/api/v1/central-events', { eventType });
  const { data } = await axiosInstance.get<ApiResponse<TCentralEvent>>(url);

  return data.result;
}
