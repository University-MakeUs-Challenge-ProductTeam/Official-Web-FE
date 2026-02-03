import type { TProjectPart } from '../project/dto';

export type TActivity = '활동기간' | '모집기간' | '연합 OT' | '학교 OT' | '동아리 회비' | '프로젝트 참가비';
export type TShcoolScheduleType = '서류 접수' | '1차 합격자 발표' | '면접 평가' | '최종 합격자 발표';
export type TStaffRoleType =
  | '회장'
  | '부회장'
  | 'Web 파트장'
  | 'Android 파트장'
  | 'iOS 파트장'
  | 'Node.js 파트장'
  | 'Spring 파트장'
  | 'Plan 파트장'
  | 'Design 파트장'
  | '교육팀장'
  | '운영팀장'
  | '홍보팀장'
  | '기획팀장'
  | '교내 운영진';

export type TRequirementPartDTO = {
  part: TProjectPart;
  requireSkill: string;
};

export type TStaffDTOList = {
  name: string;
  nickname: string;
  role: TStaffRoleType;
};

export type TRecruitmentScheduleDTO = {
  finalResultDate: string;
  firstResultDate: string;
  interviewEndDate: string;
  interviewStartDate: string;
  schoolOTDate: string;
  submissionEnd: string;
  submissionStart: string;
};

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
