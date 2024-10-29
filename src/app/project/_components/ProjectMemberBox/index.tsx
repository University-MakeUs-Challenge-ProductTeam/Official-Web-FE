import React from 'react';

import Typography from '@/shared/components/Typography';
import { PART_NAME } from '@/shared/constants/Parts';
import type { TProjectMemberDTO } from '@/shared/types/projectDto';

interface IProjectMemberBoxProps {
  projectMember: TProjectMemberDTO[];
}

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

function ProjectMemberBox({ projectMember }: IProjectMemberBoxProps) {
  const formattedMembers = getFormattedProjectMembers(projectMember);

  return (
    <div className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#3A3A3A] bg-[#1B1B1B] p-8">
      <Typography size="title-sm" className="text-[#9D9D9D]">
        팀원
      </Typography>
      {formattedMembers.map(({ part, members }) => (
        <div key={part} className="flex flex-row gap-3">
          <Typography size="text-lg" className="w-[70px] text-[#818181]">
            {part}
          </Typography>
          <Typography size="text-lg" className="flex-1 whitespace-pre-wrap text-[#CFCFCF]">
            {members}
          </Typography>
        </div>
      ))}
    </div>
  );
}

export default ProjectMemberBox;
