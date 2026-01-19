import type { TProjectListDTO } from '@/types/dtos/project';
import type { CommonResponse } from '@/types/query/common';

export type TProjectListResponse = CommonResponse<{ projectList: TProjectListDTO[] }>;
