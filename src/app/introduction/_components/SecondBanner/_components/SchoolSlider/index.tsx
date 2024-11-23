'use client';

import React from 'react';
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';

import Slider from '@/app/_components/FifthBanner/_components/Slider';
import Typography from '@/shared/components/Typography';
import type { TShcoolDataDTO } from '@/shared/types/schoolDto';

interface ISchoolSliderProps {
  schoolList?: TShcoolDataDTO[];
}

function SchoolSlider({ schoolList }: ISchoolSliderProps) {
  return (
    <Slider>
      {schoolList?.map((item) => (
        <SwiperSlide key={item.participateSchoolId}>
          <div className="flex min-h-[50px] flex-row items-center justify-center gap-1 whitespace-nowrap rounded-3xl border-2 border-solid border-[#303030] bg-[#1F1F1F] py-3">
            {item.logoImageUrl && <Image src={item.logoImageUrl} width={20} height={10} alt="ShoolLogo" />}

            <Typography size="text-sm" className="text-[13px] font-bold text-[#A7A7A7]">
              {item.schoolName}
            </Typography>
          </div>
        </SwiperSlide>
      ))}
    </Slider>
  );
}

export default SchoolSlider;
