'use client';

import Slider from '@/features/home/components/FifthBanner/_components/Slider';
import useAllProjectsQuery from '@/features/project/hooks/useAllProjectsQuery';

import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';

const SliderList = () => {
  const { data: projectList } = useAllProjectsQuery();
  return (
    <Slider>
      {projectList?.result?.projectList.map((project, index) => (
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
