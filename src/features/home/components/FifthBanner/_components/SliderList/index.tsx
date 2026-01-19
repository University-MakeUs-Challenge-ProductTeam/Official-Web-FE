'use client';

import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';

import useGetAllProjects from '@/hooks/queries/useGetAllProjects';

import Slider from '@/features/home/components/FifthBanner/_components/Slider';

const SliderList = () => {
  const { data: projects } = useGetAllProjects();
  return (
    <Slider>
      {projects?.result?.projectList.map((project, index) => (
        <SwiperSlide key={index}>
          <div className="size-[128px]">
            <Image
              className="rounded-lg"
              src={project?.projectLandingImageUrl ?? '/images/logo.png'}
              alt={`${project?.projectName} 사진`}
              fill
              priority
              loading="eager"
            />
          </div>
        </SwiperSlide>
      ))}
    </Slider>
  );
};

export default SliderList;
