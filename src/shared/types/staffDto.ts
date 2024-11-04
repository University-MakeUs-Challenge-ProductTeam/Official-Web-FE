export type TprofileLinkDTO = {
  linkType: string;
  linkUrl: string;
  profileLinkId: number;
};

export type TcentralStaffDTO = {
  centralStaffId: number;
  generation: number;
  introduction: string;
  nickname: string;
  profileImageUrl: string;
  profileLinkList: TprofileLinkDTO[];
  role: string;
  school: string;
};
