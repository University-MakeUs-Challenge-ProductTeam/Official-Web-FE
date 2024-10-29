import React from 'react';
import { FaAndroid, FaApple } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import { cva } from 'class-variance-authority';
import Image from 'next/image';

import Typography from '../../../../shared/components/Typography';

import { PLATFORM_NAME } from '@/shared/constants/Platforms';
import type { TProectDetailDTO } from '@/shared/types/projectDto';
import cn from '@/shared/utils/style';

const ProjectCardVariants = cva(
  'flex hover:bg-neutral-800 w-full gap-[8px] border-solid border-[0.5px] border-[#3A3A3A] bg-[#1B1B1B] rounded-xl p-6 cursor-pointer',
  {
    variants: {
      type: {
        default: 'flex-col max-w-[400px] min-h-[380px]',
        released: 'flex-col gap-[24px] max-w-[750px] sm:flex-row',
      },
    },
    defaultVariants: {
      type: 'default',
    },
  },
);

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
      <div className={cn('relative size-full min-h-[195px] min-w-[195px]', isReleased && 'sm:max-w-[195px]')}>
        <Image fill src={projectLandingImageUrl} alt="ProjectImage" className="rounded-[14px]" />
      </div>
      {!isReleased && <h5 className="mt-1 text-main-disable">{platFormNameList.map((item) => PLATFORM_NAME[item]).join(' | ')}</h5>}
      <div className="flex flex-1 flex-col gap-[8px]">
        <Typography as="h1" size="title-smd" className="line-clamp-1 text-[#ECECEC]">
          {projectName}
        </Typography>
        <Typography as="p" size="text-lg" className="line-clamp-2 text-[#CFCFCF]">
          {description}
        </Typography>
        {isReleased && (
          <div className="flex w-full flex-1 flex-row items-end gap-4">
            {platFormNameList.map((item, idx) => {
              if (item === 'WEB') {
                return (
                  <div key={idx} className="flex size-[48px] flex-col items-center justify-center rounded-full border border-solid border-[#9D9D9D]">
                    <TbWorld size={26} color="#9D9D9D" />
                  </div>
                );
              }
              if (item === 'AOS') {
                return (
                  <div key={idx} className="flex size-[48px] flex-col items-center justify-center rounded-full border border-solid border-[#9D9D9D]">
                    <FaAndroid size={26} color="#9D9D9D" />
                  </div>
                );
              }
              if (item === 'IOS') {
                return (
                  <div key={idx} className="flex size-[48px] flex-col items-center justify-center rounded-full border border-solid border-[#9D9D9D]">
                    <FaApple size={26} color="#9D9D9D" />
                  </div>
                );
              }
              return null;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
