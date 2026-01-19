import type { TSchoolDataDTO } from '../schoolDto';

/**
 * 학교 리스트 응답 데이터 타입
 */
export type TSchoolListData = {
  /** 참여 학교 리스트 */
  participateSchoolList: TSchoolDataDTO[];
  /** 총 학교 수 */
  totalSchoolCount: number;
};

/**
 * @deprecated TSchoolListDataTypes 대신 TSchoolListData를 사용하세요
 */
export type TSchoolListDataTypes = TSchoolListData;
