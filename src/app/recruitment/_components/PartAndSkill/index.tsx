import React from 'react';

import Typography from '@/shared/components/Typography';
import { PART_NAME } from '@/shared/constants/Parts';
import type { TRequirementPartDTO } from '@/shared/types/recruitmentDto';

interface IPartAndSkillProps {
  partSkillData?: TRequirementPartDTO[];
}

function PartAndSkill({ partSkillData }: IPartAndSkillProps) {
  return (
    <div className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#3A3A3A] bg-[#1B1B1B] p-8">
      <Typography as="h3" size="title-sm" className="font-bold text-[#9D9D9D]">
        모집파트 및 필수 역량
      </Typography>
      {partSkillData?.map((item) => (
        <div className="flex flex-row gap-3" key={item.part}>
          <Typography size="text-lg" className="text-[#818181]">
            {PART_NAME[item.part]}
          </Typography>
          <Typography size="text-lg" className="flex-1 text-[#CFCFCF]">
            {item.requireSkill}
          </Typography>
        </div>
      ))}
    </div>
  );
}

export default PartAndSkill;
