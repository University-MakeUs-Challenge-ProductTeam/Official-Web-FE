import type { ApiResponse, PaginatedResponse } from '../common/response';
import type { TProjectDTO } from '../projectDto';

export type { ApiResponse, PaginatedResponse };

/**
 * @deprecated TApiResponseType 대신 공통 타입 ApiResponse<T>를 사용하세요
 */
export type TApiResponseType<T = unknown> = ApiResponse<T>;

/**
 * UMC 프로젝트 리스트 응답 타입
 */
export type TProjectListResult = PaginatedResponse<TProjectDTO> & {
  /** @deprecated content 필드를 사용하세요 */
  umcProjectList: TProjectDTO[];
};

/**
 * 출시된 프로젝트 리스트 응답 타입
 */
export type TReleasedProjectListResult = PaginatedResponse<TProjectDTO> & {
  /** @deprecated content 필드를 사용하세요 */
  releasedProjectDTOList: TProjectDTO[];
};

/**
 * @deprecated TProjectListResultType 대신 TProjectListResult를 사용하세요
 */
export type TProjectListResultType = TProjectListResult;

/**
 * @deprecated TReleasedProjectListResultType 대신 TReleasedProjectListResult를 사용하세요
 */
export type TReleasedProjectListResultType = TReleasedProjectListResult;
