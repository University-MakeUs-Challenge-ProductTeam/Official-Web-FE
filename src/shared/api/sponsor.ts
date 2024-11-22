import type { TApiResponseType } from '../types/api/projectTypes';
import type { TSponsorType } from '../types/api/sponsor';

import { axiosInstance } from '@/shared/api/axios-instance';
import type { TPostSponsorResponse, TSponsorDTO } from '@/shared/types/dtos/sponsor';

export const postSponsor = async ({ applicationName, contactInfo, description, email, link, organizationName }: TSponsorDTO): Promise<TPostSponsorResponse> => {
  const { data } = await axiosInstance.post<TPostSponsorResponse>(`/api/sponsors/request`, {
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
  const { data } = await axiosInstance.get<TApiResponseType<TSponsorType>>(`/api/sponsors`);

  return data.result;
};
