import type { CommonResponse } from '@/types/query/common';

export type TSponsorDTO = {
  applicationName: string;
  contactInfo: string;
  description: string;
  email: string;
  link: string;
  organizationName: string;
};

export type TSponsorResult = {
  createdAt: Date;
  requestSponsorId: number;
  updatedAt: Date;
};

export type TPostSponsorResponse = CommonResponse<TSponsorResult>;
