import type { TActivity } from '../types/recruitmentDto';

export const ACTIVITY_CONTENT: { label: TActivity }[] = [
  { label: '활동기간' },
  { label: '모집기간' },
  { label: '연합 OT' },
  { label: '학교 OT' },
  { label: '동아리 회비' },
  { label: '프로젝트 참가비' },
];

export const CENTRAL_EVENT_CONTENT = {
  UNION_OT: '연합 OT',
  SCHOOL_OT: '학교 OT',
  CORE_DAY: 'Core Day',
  UNION_NETWORKING_DAY: '연합 네트워킹 데이',
  IDEATHON: '아이디어톤',
  NEORDINARY_HACKATHON: '너디너리 해커톤',
  PM_DAY: 'PM 데이',
  UMC_HACKATHON: 'UMC 해커톤',
  SCHOOL_HACKATHON: '학교별 해커톤',
  UMC_DEMO_DAY: 'UMC 데모데이',
  NEORDINARY_DEMO_DAY: '너디너리 데모데이',
};
