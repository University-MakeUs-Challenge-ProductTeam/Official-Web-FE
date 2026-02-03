'use client';

import type { TProjectMemberDTO } from '@/types/project/dto';
import { PART_NAME } from '@/constants/Parts';

import Typography from '@/components/common/Typography';

import { motion } from 'framer-motion';

type TProjectMemberBoxProps = {
  projectMember: TProjectMemberDTO[];
};

const getFormattedProjectMembers = (projectMembers: TProjectMemberDTO[]) => {
  const partMemberMap = new Map<string, string>();

  projectMembers.forEach(({ part, nickname, name }) => {
    const memberDisplay = `${nickname}/${name}`;
    const mappedPart = PART_NAME[part as keyof typeof PART_NAME] || part;
    if (partMemberMap.has(mappedPart)) {
      partMemberMap.set(mappedPart, `${partMemberMap.get(mappedPart)} ${memberDisplay}`);
    } else {
      partMemberMap.set(mappedPart, memberDisplay);
    }
  });

  return Array.from(partMemberMap, ([part, members]) => ({ part, members }));
};

const ProjectMemberBox = ({ projectMember }: TProjectMemberBoxProps) => {
  const formattedMembers = getFormattedProjectMembers(projectMember);

  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      className="flex flex-1 flex-col gap-6 rounded-[32px] border border-white/5 bg-white/5 p-8 backdrop-blur-3xl transition-all hover:border-main-green/30 hover:bg-main-green/5"
    >
      <div className="space-y-2">
        <Typography className="text-xs font-bold uppercase tracking-widest text-main-green">MAKERS</Typography>
        <Typography className="text-2xl font-black italic tracking-tighter text-white">
          TEAM <span className="text-white/20">MEMBERS</span>
        </Typography>
      </div>

      <div className="mt-2 flex flex-col gap-4">
        {formattedMembers.map(({ part, members }) => (
          <motion.div
            key={part}
            whileTap={{ scale: 0.98 }}
            className="flex flex-col gap-2 rounded-2xl border border-white/5 bg-white/5 p-4 transition-all hover:border-main-green/20"
          >
            <Typography className="text-xs font-black uppercase tracking-widest text-main-green">{part}</Typography>
            <Typography className="whitespace-pre-wrap text-lg font-medium leading-relaxed text-white/80">{members}</Typography>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectMemberBox;
