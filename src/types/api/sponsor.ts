export type TSponsorDTO = {
  description: string;
  logoUrl: string;
  sponsorId: number;
  title: string;
  url: string;
};

export type TSponsorType = {
  sponsorList: TSponsorDTO[];
};
