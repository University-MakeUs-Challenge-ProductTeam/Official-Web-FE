import { axiosInstance } from '@/shared/api/axios-instance';
import type { TPostSponsorResponse, TSponsorDTO } from '@/shared/types/dtos/sponsor';

export const postSponsor = async ({
  applicationName,
  contactInfo,
  description,
  email,
  link,
  logoImage,
  organizationName,
}: TSponsorDTO): Promise<TPostSponsorResponse> => {
  const { data } = await axiosInstance.post<TPostSponsorResponse>(`/api/sponsors/request`, {
    applicationName,
    contactInfo,
    description,
    email,
    link,
    logoImage,
    organizationName,
  });

  return data;
};
