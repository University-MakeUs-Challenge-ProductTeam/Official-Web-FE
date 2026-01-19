import type { TCentralStaffDTO } from '../staffDto';

export type TCentralStaffType = {
  centralStaffList: TCentralStaffDTO[];
  currentPage: number;
  hasNext: boolean;
  isFirst: boolean;
  pageSize: number;
  totalElements: number;
  totalPages: number;
};
