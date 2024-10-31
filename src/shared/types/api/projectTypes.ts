import type { TProjectDTO } from '../projectDto';

export type TApiResponseType<T = unknown> = {
  code: string;
  isSuccess: boolean;
  message: string;
  result: T;
};

export type TProjectListResultType = {
  hasNext: boolean;
  nextCursor: number;
  umcProjectList: TProjectDTO[];
};
