import type { TRequirementPartDTO } from '@/types/recruitment/dto';
import { PART_NAME } from '@/constants/Parts';

import Typography from '@/components/common/Typography';

type TPartAndSkillProps = {
  partSkillData?: TRequirementPartDTO[];
};

const PartAndSkill = ({ partSkillData }: TPartAndSkillProps) => {
  return (
    <div className="group relative flex flex-1 flex-col gap-8 rounded-[40px] border border-white/5 bg-white/[0.02] p-6 backdrop-blur-3xl transition-all hover:border-main-green/20 md:p-10">
      <div className="flex items-center justify-between">
        <Typography as="h3" className="text-xl font-black italic tracking-tighter text-white">
          PART & <span className="text-main-green">CRITERIA</span>
        </Typography>
        <div className="flex gap-1">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="size-1 rounded-full bg-main-green/20" />
          ))}
        </div>
      </div>

      <div className="space-y-8">
        {partSkillData?.map((item) => (
          <div className="group/item flex flex-col gap-3" key={item.part}>
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-main-green/20 bg-main-green/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-main-green">
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
};

export default PartAndSkill;
