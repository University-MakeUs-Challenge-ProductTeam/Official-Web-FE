import type { TcentralStaffDTO } from '../staffDto';

export type TCentralStaffType = {
  centralStaffList: TcentralStaffDTO[];
  currentPage: number;
  hasNext: boolean;
  isFirst: boolean;
  pageSize: number;
  totalElements: number;
  totalPages: number;
};
