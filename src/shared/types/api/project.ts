import type { TProjectListDTO } from '@/shared/types/dtos/project';
import type { CommonResponse } from '@/shared/types/query/common';

export type TProjectListResponse = CommonResponse<{ projectList: TProjectListDTO[] }>;
