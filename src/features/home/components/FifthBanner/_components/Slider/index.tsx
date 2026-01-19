import 'swiper/css';

import type { ReactNode } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper } from 'swiper/react';

interface ISliderProps {
  children: ReactNode;
  reverse?: boolean;
  speed?: number;
}

function Slider({ children, reverse = false, speed = 2000 }: ISliderProps) {
  return (
    <Swiper
      slidesPerView="auto"
      centeredSlides
      spaceBetween={16}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: reverse,
      }}
      allowTouchMove={false}
      modules={[Autoplay]}
      loop
      loopAdditionalSlides={5}
      speed={speed} // Linear continous speed
      className="!ease-linear"
      breakpoints={{
        1024: { slidesPerView: 7 },
        768: { slidesPerView: 5 },
        640: { slidesPerView: 3 },
        380: { slidesPerView: 2 },
      }}
    >
      {children}
    </Swiper>
  );
}

export default Slider;
