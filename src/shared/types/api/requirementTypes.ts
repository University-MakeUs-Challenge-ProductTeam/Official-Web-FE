import type { TRecruitmentScheduleDTO, TRequirementPartDTO, TStaffDTOList } from '../recruitmentDto';

export type TRequeirementDataType = {
  instagramAccount: string;
  name: string;
  recruitmentScheduleDTO: TRecruitmentScheduleDTO;
  requirementPartDTOList: TRequirementPartDTO[];
  staffDTOList: TStaffDTOList[];
};
