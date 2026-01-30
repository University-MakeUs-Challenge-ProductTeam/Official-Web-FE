'use client';

import { FaAndroid, FaApple } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import type { TProjectDTO } from '@/types/projectDto';
import { PLATFORM_NAME } from '@/constants/Platforms';

import Typography from '@/components/common/Typography';

import cn from '@/lib/utils/style';

const ProjectCardVariants = cva(
  'group relative flex w-full mx-auto gap-6 border border-white/5 bg-white/5 backdrop-blur-3xl rounded-[32px] p-6 cursor-pointer overflow-hidden transition-all hover:border-main-green/30 hover:bg-main-green/5',
  {
    variants: {
      type: {
        default: 'flex-col max-w-[400px]',
        released: 'flex-col gap-6 max-w-[750px] sm:flex-row items-center',
      },
    },
    defaultVariants: {
      type: 'default',
    },
  },
);

type TProjectCardProps = {
  projectData: TProjectDTO;
  type?: 'released' | 'default';
};

const ProjectCard = ({ projectData, type = 'default' }: TProjectCardProps) => {
  const router = useRouter();
  const { projectId, projectName, platFormNameList, slogan } = projectData;
  const projectImage = type === 'released' ? projectData.projectLogoImageUrl : projectData.projectLandingImageUrl;

  return (
    <motion.div
      whileHover={{ y: typeof window !== 'undefined' && window.innerWidth > 768 ? -10 : 0 }}
      whileTap={{ scale: 0.98 }}
      className={cn(ProjectCardVariants({ type }))}
      onClick={() => router.push(`/project/${projectId}`)}
    >
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-main-green to-transparent opacity-0 blur-[1px] transition-all duration-500 group-hover:opacity-60" />
      <div className="absolute right-0 top-0 -mr-20 -mt-20 size-40 rounded-full bg-main-green opacity-0 blur-[80px] transition-opacity group-hover:opacity-10" />

      <div className={cn('relative overflow-hidden rounded-2xl border border-white/10', type === 'default' ? 'aspect-video w-full' : 'h-32 w-32 shrink-0')}>
        {projectImage ? (
          <Image
            fill
            src={projectImage}
            alt={projectName}
            sizes={type === 'default' ? '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px' : '128px'}
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex size-full items-center justify-center bg-white/5">
            <span className="font-bold italic text-white/10">UMC</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3">
        {type === 'default' && (
          <span className="text-[10px] font-black uppercase tracking-widest text-main-green opacity-50">
            {platFormNameList.map((item) => PLATFORM_NAME[item]).join(' · ')}
          </span>
        )}

        <div className="space-y-1">
          <Typography as="h1" className="text-2xl font-black italic leading-none tracking-tighter text-white transition-colors group-hover:text-main-green">
            {projectName}
          </Typography>
          <Typography as="p" size="text-sm" className="line-clamp-2 font-medium leading-normal text-white/40">
            {slogan}
          </Typography>
        </div>

        {type === 'released' && (
          <div className="flex gap-2 pt-2">
            {platFormNameList.map((item, index) => {
              const Icon = item === 'WEB' ? TbWorld : item === 'AOS' ? FaAndroid : FaApple;
              return (
                <div
                  key={index}
                  className="flex size-10 items-center justify-center rounded-full border border-white/5 bg-white/5 text-white/40 transition-all group-hover:border-main-green/30 group-hover:text-main-green"
                >
                  <Icon size={18} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
