import type { TActivityPartCurriculumDTO } from '../partDtos';
import type { TProjectPart } from '../projectDto';

export type TCurriculumType = {
  activityPartCurriculumList: TActivityPartCurriculumDTO[];
  partId: number;
  partName: TProjectPart;
  requireSkill: string;
};
