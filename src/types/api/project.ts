import type { ApiResponse } from '@/types/common/response';
import type { TProjectListDTO } from '@/types/dtos/project';

/**
 * 프로젝트 리스트 응답 타입
 */
export type TProjectListResponse = ApiResponse<{ projectList: TProjectListDTO[] }>;
