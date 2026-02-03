import type { ApiResponse } from '../common/response';

export type TSponsorApplicationDTO = {
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

export type TPostSponsorResponse = ApiResponse<TSponsorResult>;
