import type { TRequirementPartDTO } from '@/types/recruitmentDto';
import { PART_NAME } from '@/constants/Parts';

import Typography from '@/components/common/Typography';

interface IPartAndSkillProps {
  partSkillData?: TRequirementPartDTO[];
}

function PartAndSkill({ partSkillData }: IPartAndSkillProps) {
  return (
    <div className="group relative flex flex-1 flex-col gap-8 rounded-[40px] border border-white/5 bg-white/[0.02] p-6 backdrop-blur-3xl transition-all hover:border-[#52E560]/20 md:p-10">
      <div className="flex items-center justify-between">
        <Typography as="h3" className="text-xl font-black italic tracking-tighter text-white">
          PART & <span className="text-[#52E560]">CRITERIA</span>
        </Typography>
        <div className="flex gap-1">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="size-1 rounded-full bg-[#52E560]/20" />
          ))}
        </div>
      </div>

      <div className="space-y-8">
        {partSkillData?.map((item) => (
          <div className="group/item flex flex-col gap-3" key={item.part}>
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-[#52E560]/20 bg-[#52E560]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-[#52E560]">
                {PART_NAME[item.part]}
              </span>
            </div>
            <Typography className="text-lg font-black italic leading-relaxed tracking-tight text-white/80 transition-colors group-hover/item:text-white">
              {item.requireSkill}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PartAndSkill;
