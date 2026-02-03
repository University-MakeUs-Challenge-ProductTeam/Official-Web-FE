export type TSponsorItemDTO = {
  description: string;
  logoUrl: string;
  sponsorId: number;
  title: string;
  url: string;
};

export type TSponsorListData = {
  sponsorList: TSponsorItemDTO[];
};
