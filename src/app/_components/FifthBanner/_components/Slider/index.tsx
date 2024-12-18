import 'swiper/css';

import type { ReactNode } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper } from 'swiper/react';

function Slider({ children }: { children: ReactNode }) {
  return (
    <Swiper
      slidesPerView={10}
      centeredSlides
      spaceBetween={10}
      autoplay={{ delay: 0, disableOnInteraction: false }}
      modules={[Autoplay]}
      loop
      loopAdditionalSlides={1}
      speed={2000}
      breakpoints={{
        1024: {
          slidesPerView: 9,
        },
        768: {
          slidesPerView: 7,
        },
        640: {
          slidesPerView: 5,
        },
        380: {
          slidesPerView: 3,
        },
        240: {
          slidesPerView: 2,
        },
      }}
    >
      {children}
    </Swiper>
  );
}

export default Slider;
