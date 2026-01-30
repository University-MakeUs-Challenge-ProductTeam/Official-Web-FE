import { motion } from 'framer-motion';

import type { TProjectDetailDTO } from '@/types/projectDto';
import { PLATFORM_NAME } from '@/constants/Platforms';

import Typography from '@/components/common/Typography';

import { formatDateRange } from '@/lib/utils/date';

type TProjectContentBoxProps = {
  projectData: TProjectDetailDTO;
};

const ProjectContentBox = ({ projectData }: TProjectContentBoxProps) => {
  const { generation, projectSchoolList, startDate, endDate, platFormNameList, isReleased } = projectData;

  const projectPeriod = formatDateRange(startDate, endDate);
  const platformList = platFormNameList.map((item) => PLATFORM_NAME[item]);

  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      className="flex flex-1 flex-col gap-6 rounded-[32px] border border-white/5 bg-white/5 p-8 backdrop-blur-3xl transition-all hover:border-main-green/30 hover:bg-main-green/5"
    >
      <div className="space-y-2">
        <Typography className="text-xs font-bold uppercase tracking-widest text-main-green">DETAILS</Typography>
        <Typography className="text-2xl font-black italic tracking-tighter text-white">
          PROJECT <span className="text-white/20">INFO</span>
        </Typography>
      </div>

      <div className="mt-4 flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Typography className="w-20 text-xs font-black uppercase tracking-widest text-white/30">기수</Typography>
          <Typography className="text-lg font-bold text-white">{generation}기</Typography>
        </div>
        <div className="h-px bg-white/5" />

        <div className="flex items-start gap-4">
          <Typography className="w-20 pt-1 text-xs font-black uppercase tracking-widest text-white/30">참여학교</Typography>
          <div className="flex flex-1 flex-wrap gap-2">
            {projectSchoolList.map((school) => (
              <span key={school} className="rounded-full border border-white/5 bg-white/10 px-3 py-1 text-xs font-bold text-white/80">
                {school}
              </span>
            ))}
          </div>
        </div>
        <div className="h-px bg-white/5" />

        <div className="flex items-center gap-4">
          <Typography className="w-20 text-xs font-black uppercase tracking-widest text-white/30">기간</Typography>
          <Typography className="font-medium text-white">{projectPeriod}</Typography>
        </div>
        <div className="h-px bg-white/5" />

        <div className="flex items-start gap-4">
          <Typography className="w-20 pt-1 text-xs font-black uppercase tracking-widest text-white/30">플랫폼</Typography>
          <div className="flex flex-1 flex-wrap gap-2">
            {platformList.map((platform) => (
              <span key={platform} className="rounded-full border border-main-green/30 bg-main-green/10 px-3 py-1 text-xs font-bold text-main-green">
                {platform}
              </span>
            ))}
          </div>
        </div>
        <div className="h-px bg-white/5" />

        <div className="flex items-center gap-4">
          <Typography className="w-20 text-xs font-black uppercase tracking-widest text-white/30">출시여부</Typography>
          <Typography className={`text-sm font-black uppercase tracking-wider ${isReleased ? 'text-main-green' : 'text-white/40'}`}>
            {isReleased ? 'RELEASED' : 'COMING SOON'}
          </Typography>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectContentBox;
