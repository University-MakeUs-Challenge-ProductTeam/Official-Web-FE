import type { ApiResponse } from '@/types/api/projectTypes';
import type { TSponsorType } from '@/types/api/sponsor';
import type { TPostSponsorResponse, TSponsorApplicationDTO } from '@/types/dtos/sponsor';

import { axiosInstance } from '@/lib/api/axios-instance';

export const postSponsor = async ({
  applicationName,
  contactInfo,
  description,
  email,
  link,
  organizationName,
}: TSponsorApplicationDTO): Promise<TPostSponsorResponse> => {
  const url = '/api/sponsors/request';
  const { data } = await axiosInstance.post<TPostSponsorResponse>(url, {
    applicationName,
    contactInfo,
    description,
    email,
    link,
    organizationName,
  });

  return data;
};

export const getSponsor = async () => {
  const url = '/api/sponsors';
  const { data } = await axiosInstance.get<ApiResponse<TSponsorType>>(url);

  return data.result;
};
