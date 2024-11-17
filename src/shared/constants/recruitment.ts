import type { TShcoolScheduleType, TStaffRoleType } from '../types/recruitmentDto';

export const SCHEDULE_CONTENT: { label: TShcoolScheduleType }[] = [
  { label: '서류 접수' },
  { label: '1차 합격자 발표' },
  { label: '면접 평가' },
  { label: '최종 합격자 발표' },
];

export const STAFF_ROLE_CONTENT: { label: TStaffRoleType }[] = [
  { label: '회장' },
  { label: '부회장' },
  { label: 'Web 파트장' },
  { label: 'iOS 파트장' },
  { label: 'Android 파트장' },
  { label: 'Node.js 파트장' },
  { label: 'Spring 파트장' },
  { label: 'Design 파트장' },
  { label: 'Plan 파트장' },
  { label: '교육팀장' },
  { label: '운영팀장' },
  { label: '홍보팀장' },
  { label: '기획팀장' },
  { label: '교내 운영진' },
];
