import type { PaginatedResponse } from '../common/response';
import type { TCentralStaffDTO } from '../staffDto';

/**
 * 중앙 스태프 리스트 응답 타입
 */
export type TCentralStaffListData = PaginatedResponse<TCentralStaffDTO> & {
  /** @deprecated content 필드를 사용하세요 */
  centralStaffList: TCentralStaffDTO[];
};

/**
 * @deprecated TCentralStaffType 대신 TCentralStaffListData를 사용하세요
 */
export type TCentralStaffType = TCentralStaffListData;
