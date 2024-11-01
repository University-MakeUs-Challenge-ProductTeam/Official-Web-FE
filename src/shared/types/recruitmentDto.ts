export type TActivity = '활동기간' | '모집기간' | '연합 & 학교 OT' | '연합 OT' | '학교 OT' | '동아리 회비' | '프로젝트 참가비';

export type TActivitiesDTO = {
  activityEndDate: string;
  activityInfoId: number;
  activityStartDate: string;
  clubFee: number;
  generation: number;
  projectFee: number;
  projectPaybackFee: number;
  unionOTDate: string;
};
