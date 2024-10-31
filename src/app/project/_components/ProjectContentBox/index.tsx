import React from 'react';

import Typography from '@/shared/components/Typography';
import { PLATFORM_NAME } from '@/shared/constants/Platforms';
import type { TProectDetailDTO } from '@/shared/types/projectDto';
import { formatDateRange } from '@/shared/utils/date';

interface IProjectContentBoxProps {
  projectData: TProectDetailDTO;
}

function ProjectContentBox({ projectData }: IProjectContentBoxProps) {
  const { generation, projectSchoolList, startDate, endDate, platFormNameList, isReleased } = projectData;

  const projectPeriod = formatDateRange(startDate, endDate);
  const platformList = platFormNameList.map((item) => PLATFORM_NAME[item]);

  return (
    <div className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#3A3A3A] bg-[#1B1B1B] p-8">
      <Typography size="title-sm" className="text-[#9D9D9D]">
        프로젝트 상세
      </Typography>
      <div className="flex flex-row gap-3">
        <Typography size="text-lg" className="w-[70px] text-[#818181]">
          기수
        </Typography>
        <Typography size="text-lg" className="flex-1 text-[#CFCFCF]">
          {generation}기
        </Typography>
      </div>
      <div className="flex flex-row gap-3">
        <Typography size="text-lg" className="w-[70px] text-[#818181]">
          참여학교
        </Typography>
        <div className="flex max-w-[calc(100%-80px)] grow flex-wrap gap-2">
          {projectSchoolList.map((school) => (
            <Typography key={school} size="text-lg" className="text-[#CFCFCF]">
              {school}
            </Typography>
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <Typography size="text-lg" className="w-[70px] text-[#818181]">
          기간
        </Typography>
        <Typography size="text-lg" className="flex-1 text-[#CFCFCF]">
          {projectPeriod}
        </Typography>
      </div>
      <div className="flex flex-row gap-3">
        <Typography size="text-lg" className="w-[70px] text-[#818181]">
          플랫폼
        </Typography>
        <Typography size="text-lg" className="flex-1 text-[#CFCFCF]">
          {platformList.join(', ')}
        </Typography>
      </div>
      <div className="flex flex-row gap-3">
        <Typography size="text-lg" className="w-[70px] text-[#818181]">
          출시여부
        </Typography>
        <Typography size="text-lg" className="flex-1 text-[#CFCFCF]">
          {isReleased ? '출시 완료' : '출시 예정'}
        </Typography>
      </div>
    </div>
  );
}

export default ProjectContentBox;
