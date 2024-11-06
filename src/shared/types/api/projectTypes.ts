import type { TProjectDTO } from '../projectDto';

export type TApiResponseType<T = unknown> = {
  code: string;
  isSuccess: boolean;
  message: string;
  result: T;
};

export type TProjectListResultType = {
  currentPage: number;
  hasNext: boolean;
  isFirst: boolean;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  umcProjectList: TProjectDTO[];
};

export type TGenerationsDTO = {
  generationList: number[];
};
