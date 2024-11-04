import type { TcentralStaffDTO } from '../staffDto';

export type TCentralStaffType = {
  centralStaffList: TcentralStaffDTO[];
  hasNext: boolean;
  nextCursor: number;
};
