import type { CommonResponse } from '@/shared/types/query/common';

export type TSponsorDTO = {
  applicationName: string;
  contactInfo: string;
  description: string;
  email: string;
  link: string;
  logoImage: string;
  organizationName: string;
};

export type TSponsorResult = {
  createdAt: Date;
  requestSponsorId: number;
  updatedAt: Date;
};

export type TPostSponsorResponse = CommonResponse<TSponsorResult>;
