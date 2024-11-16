export const EventType = {
<<<<<<< HEAD
=======
  '교내 OT': 'SCHOOL_OT',
  '교내 해커톤': 'SCHOOL_HACKATHON',
  '너디너리 데모데이': 'NEORDINARY_DEMO_DAY',
  'PM 데이': 'PM_DAY',
  '데모데이': 'UMC_DEMO_DAY',
  '너디너리 해커톤': 'NEORDINARY_HACKATHON',
>>>>>>> 4418acd (feature/#37 추가 요구사항 반영  (#40))
  '연합 OT': 'UNION_OT',
  '학교 OT': 'SCHOOL_OT',
  'Core Day': 'CORE_DAY',
  '연합 네트워킹 데이': 'UNION_NETWORKING_DAY',
  '너디너리 해커톤': 'NEORDINARY_HACKATHON',
  'PM 데이': 'PM_DAY',
  'UMC 해커톤': 'UMC_HACKATHON',
  '교내 해커톤': 'SCHOOL_HACKATHON',
  '데모데이': 'UMC_DEMO_DAY',
  '너디너리 데모데이': 'NEORDINARY_DEMO_DAY',
} as const;

export type EventList = (typeof EventType)[keyof typeof EventType];
export type EventKRList = keyof typeof EventType;

export type TMainActivityDTO = {
  description: string;
  eventImageUrl: string;
  eventType: EventList;
  id: number;
};
