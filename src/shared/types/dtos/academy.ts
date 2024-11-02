export const EventType = {
  '교내 OT': 'SCHOOL_OT',
  '교내 해커톤': 'SCHOOL_HACKATHON',
  '너디너리 데모데이': 'NEORDINARY_DEMO_DAY',
  '너디너리 해커톤': 'NEORDINARY_HACKATHON',
  '데모데이': 'UMC_DEMO_DAY',
  '아이디어톤': 'IDEATHON',
  '연합 OT': 'UNION_OT',
  '연합 네트워킹 데이': 'UNION_NETWORKING_DAY',
  '코어데이': 'CORE_DAY',
  '해커톤': 'UMC_HACKATHON',
} as const;

export type EventList = (typeof EventType)[keyof typeof EventType];
export type EventKRList = keyof typeof EventType;

export type TMainActivityDTO = {
  description: string;
  eventImageUrl: string;
  eventType: EventList;
  id: number;
};
