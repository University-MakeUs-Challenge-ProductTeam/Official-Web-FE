import type { TRecruitmentScheduleDTO, TRequirementPartDTO, TStaffDTOList } from '../recruitmentDto';

/**
 * 모집 요강 데이터 타입
 */
export type TRequirementData = {
  /** 인스타그램 계정 */
  instagramAccount: string;
  /** 이름 */
  name: string;
  /** 모집 일정 정보 */
  recruitmentScheduleDTO: TRecruitmentScheduleDTO;
  /** 모집 파트 리스트 */
  requirementPartDTOList: TRequirementPartDTO[];
  /** 스태프 리스트 */
  staffDTOList: TStaffDTOList[];
};

/**
 * @deprecated TRequeirementDataType 대신 TRequirementData를 사용하세요 (오타 수정)
 */
export type TRequeirementDataType = TRequirementData;
