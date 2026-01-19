import type { TActivityPartCurriculumDTO } from '../partDtos';
import type { TProjectPart } from '../projectDto';

/**
 * 파트별 커리큘럼 응답 타입
 */
export type TCurriculum = {
  /** 활동 파트 커리큘럼 리스트 */
  activityPartCurriculumList: TActivityPartCurriculumDTO[];
  /** 파트 ID */
  partId: number;
  /** 파트 이름 */
  partName: TProjectPart;
  /** 필요 스킬 */
  requireSkill: string;
};

/**
 * @deprecated TCurriculumType 대신 TCurriculum을 사용하세요
 */
export type TCurriculumType = TCurriculum;
