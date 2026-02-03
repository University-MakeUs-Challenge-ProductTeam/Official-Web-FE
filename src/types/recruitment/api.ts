import type { TRecruitmentScheduleDTO, TRequirementPartDTO, TStaffDTOList } from './dto';

export type TRequirementData = {
  instagramAccount: string;
  name: string;
  recruitmentScheduleDTO: TRecruitmentScheduleDTO;
  requirementPartDTOList: TRequirementPartDTO[];
  staffDTOList: TStaffDTOList[];
};
