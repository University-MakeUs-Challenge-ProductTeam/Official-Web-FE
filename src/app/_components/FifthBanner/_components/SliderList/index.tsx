'use client';

import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';

import Slider from '@/app/_components/FifthBanner/_components/Slider';
import useGetAllProjects from '@/shared/hooks/queries/useGetAllProjects';

function SliderList() {
  const { data: projects } = useGetAllProjects();
  return (
    <Slider>
      {projects?.result?.projectList.map((project, idx) => (
        <SwiperSlide key={idx}>
          <Image
            className="rounded-lg"
            src={project?.projectLandingImageUrl ?? '/images/logo.png'}
            alt={`${project?.projectName} 사진`}
            width={128}
            height={128}
            priority
            loading="eager"
          />
        </SwiperSlide>
      ))}
    </Slider>
  );
}

export default SliderList;
