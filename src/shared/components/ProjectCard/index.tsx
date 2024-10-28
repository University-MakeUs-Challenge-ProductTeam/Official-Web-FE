import React from 'react';
import { cva } from 'class-variance-authority';
import Image from 'next/image';

import Typography from '../Typography';

import { PLATFORM_NAME } from '@/shared/constants/Platforms';
import type { TProectDetailDTO } from '@/shared/types/projectDto';
import cn from '@/shared/utils/style';

const ProjectCardVariants = cva('flex w-full gap-[8px] border-solid border-[0.5px] border-[#3A3A3A] bg-[#1B1B1B] rounded-xl p-6 cursor-pointer', {
  variants: {
    type: {
      default: 'flex-col max-w-[450px] min-h-[450px]',
      released: 'flex-row gap-[24px] max-w-[750px] h-[245px] ',
    },
  },
  defaultVariants: {
    type: 'default',
  },
});

interface IProjectCardProps {
  projectData: TProectDetailDTO;
}

/**
 * ProjectCard 컴포넌트
 * @description 프로젝트 페이지에서 사용되는 프로젝트 카드입니다.
 * @param projectData 프로젝트의 세부 정보를 설정합니다.
 */
function ProjectCard({ projectData }: IProjectCardProps) {
  const { projectLandingImageUrl, projectName, isReleased, platFormNameList, description } = projectData;

  return (
    <div className={cn(ProjectCardVariants({ type: isReleased ? 'released' : 'default' }))}>
      <div className={cn('relative size-full', isReleased && 'max-w-[195px]')}>
        <Image fill src={projectLandingImageUrl} alt="ProjectImage" className="rounded-[14px]" />
      </div>
      {!isReleased && <h5 className="mt-1 text-main-disable">{PLATFORM_NAME[platFormNameList[0]]}</h5>}
      <div className="flex flex-1 flex-col gap-[8px]">
        <Typography as="h1" size="title-smd" className="text-[#ECECEC]">
          {projectName}
        </Typography>
        <Typography as="p" size="text-lg" className="line-clamp-2 text-[#CFCFCF]">
          {description}
        </Typography>
        <div className="h-20 w-full bg-red-600">{}</div>
      </div>
    </div>
  );
}

export default ProjectCard;
