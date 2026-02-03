import type { TCentralStaffDTO } from './dto';
import type { PaginatedResponse } from '../common/response';

export type TCentralStaffListData = PaginatedResponse<TCentralStaffDTO> & {
  centralStaffList: TCentralStaffDTO[];
};
