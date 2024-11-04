import type { TCentralEventDTO } from '../eventDtos';

export type TCentralEventType = {
  description: string;
  eventImageUrl: string;
  eventType: TCentralEventDTO;
  id: number;
};
