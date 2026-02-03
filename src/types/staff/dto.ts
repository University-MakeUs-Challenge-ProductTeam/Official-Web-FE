export type TProfileLinkDTO = {
  linkType: string;
  linkUrl: string;
  profileLinkId: number;
};

export type TCentralStaffDTO = {
  centralStaffId: number;
  generation: number;
  introduction: string;
  nickname: string;
  profileImageUrl: string;
  profileLinkList: TProfileLinkDTO[];
  role: string;
  school: string;
};
