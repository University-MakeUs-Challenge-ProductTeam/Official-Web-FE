'use client';

import React from 'react';
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
          <div className="flex justify-center whitespace-nowrap rounded-3xl border-2 border-solid border-[#303030] bg-[#1F1F1F] py-3">
            <Typography size="text-sm" className="font-bold text-[#A7A7A7]">
              {item.schoolName}
            </Typography>
          </div>
        </SwiperSlide>
      ))}
    </Slider>
  );
}

export default SchoolSlider;
