import type { TProjectDTO } from './dto';
import type { PaginatedResponse } from '../common/response';

/**
 * UMC 프로젝트 리스트 응답 타입
 */
export type TProjectListResult = PaginatedResponse<TProjectDTO> & {
  content: TProjectDTO[];
};

/**
 * 출시된 프로젝트 리스트 응답 타입
 */
export type TReleasedProjectListResult = PaginatedResponse<TProjectDTO> & {
  content: TProjectDTO[];
};
