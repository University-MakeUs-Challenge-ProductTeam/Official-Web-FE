import type { TActivityPartCurriculumDTO } from './dto';
import type { TProjectPart } from '../project/dto';

export type TCurriculum = {
  activityPartCurriculumList: TActivityPartCurriculumDTO[];
  partId: number;
  partName: TProjectPart;
  requireSkill: string;
};
