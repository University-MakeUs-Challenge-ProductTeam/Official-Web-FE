/**
 * 공통 API 응답 타입 정의
 */

/**
 * 표준 API 응답 래퍼
 * @template T - 실제 응답 데이터의 타입
 */
export type ApiResponse<T = unknown> = {
  /** 응답 코드 */
  code: string;
  /** 성공 여부 */
  isSuccess: boolean;
  /** 응답 메시지 */
  message: string;
  /** 실제 응답 데이터 */
  result: T;
};

/**
 * 페이지네이션 메타데이터
 */
export type PaginationMeta = {
  /** 현재 페이지 번호 (0-based) */
  currentPage: number;
  /** 다음 페이지 존재 여부 */
  hasNext: boolean;
  /** 첫 페이지 여부 */
  isFirst: boolean;
  /** 페이지당 항목 수 */
  pageSize: number;
  /** 전체 항목 수 */
  totalElements: number;
  /** 전체 페이지 수 */
  totalPages: number;
};

/**
 * 페이지네이션이 포함된 리스트 응답
 * @template T - 리스트 항목의 타입
 */
export type PaginatedResponse<T> = PaginationMeta & {
  /** 항목 리스트 */
  content: T[];
};
