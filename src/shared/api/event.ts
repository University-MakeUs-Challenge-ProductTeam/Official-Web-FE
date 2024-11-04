import type { TCentralEventType } from '../types/api/event';
import type { TApiResponseType } from '../types/api/projectTypes';
import type { TCentralEventDTO } from '../types/eventDtos';

export async function getCentralEvent({ eventType }: { eventType: TCentralEventDTO }) {
  const res = await fetch(`/api/v1/central-events?eventType=${eventType}`);

  const data: TApiResponseType<TCentralEventType> = await res.json();
  return data.result;
}
