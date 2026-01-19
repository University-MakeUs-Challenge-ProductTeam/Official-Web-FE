import type { TCentralEventDTO } from '../eventDtos';

/**
 * 중앙 이벤트 응답 타입
 */
export type TCentralEvent = {
  /** 이벤트 설명 */
  description: string;
  /** 이벤트 이미지 URL */
  eventImageUrl: string;
  /** 이벤트 타입 */
  eventType: TCentralEventDTO;
  /** 이벤트 ID */
  id: number;
};

/**
 * @deprecated TCentralEventType 대신 TCentralEvent를 사용하세요
 */
export type TCentralEventType = TCentralEvent;
