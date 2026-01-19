export type TPlatformName = 'IOS' | 'AOS' | 'WEB';
export type TProjectPart = 'PLAN' | 'DESIGN' | 'SPRING' | 'NODE' | 'AOS' | 'IOS' | 'WEB';

export type TProjectMemberDTO = {
  name: string;
  nickname: string;
  part: TProjectPart;
  projectMemberId: number;
};

export type TProectDetailDTO = {
  description: string;
  endDate: string;
  generation: number;
  isReleased: boolean;
  platFormNameList: TPlatformName[];
  projectId: number;
  projectLandingImageUrl: string;
  projectLogoImageUrl: string;
  projectMemberDTOList: TProjectMemberDTO[];
  projectName: string;
  projectSchoolList: string[];
  slogan: string;
  startDate: string;
};

export type TProjectDTO = {
  platFormNameList: TPlatformName[];
  projectId: number;
  projectLandingImageUrl?: string;
  projectLogoImageUrl?: string;
  projectName: string;
  slogan: string;
};

export type TGenerationsDTO = {
  generationList: number[];
};
