import type { TCentralEventDTO } from './dto';

export type TCentralEvent = {
  description: string;
  eventImageUrl: string;
  eventType: TCentralEventDTO;
  id: number;
};
