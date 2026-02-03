import type { TProjectListDTO } from './list-dto';
import type { ApiResponse } from '../common/response';

/**
 * 프로젝트 리스트 응답 타입
 */
export type TProjectListResponse = ApiResponse<{ projectList: TProjectListDTO[] }>;
