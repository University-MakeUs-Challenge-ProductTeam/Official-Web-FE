import type { TSchoolDataDTO } from '@/types/school/dto';

import Typography from '@/components/common/Typography';

import { motion } from 'framer-motion';
import Image from 'next/image';

type TSchoolSliderProps = {
  reverse?: boolean;
  schoolList?: TSchoolDataDTO[];
  speed?: number;
};

const SchoolSlider = ({
  schoolList = [],
  reverse = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  speed = 20,
}: TSchoolSliderProps) => {
  // Duration calculation for consistent speed
  // The 'speed' prop here is treated as "seconds for one full cycle" relative to content
  // Adjustable multiplier
  const duration = schoolList.length * 2 || 20;

  return (
    <div className="flex w-full select-none overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex w-max min-w-full shrink-0 items-center justify-around gap-4 px-2"
        animate={{
          x: reverse ? ['-50%', '0%'] : ['0%', '-50%'],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {/* Render items twice for seamless loop */}
        {[...schoolList, ...schoolList].map((item, index) => (
          <div
            key={`${item.participateSchoolId}-${index}`}
            className="group flex min-h-[60px] flex-row items-center justify-center gap-3 whitespace-nowrap rounded-full border border-white/5 bg-white/5 px-6 py-3 backdrop-blur-xl transition-all hover:border-main-green/30 hover:bg-main-green/5"
          >
            {item.logoImageUrl && (
              <div className="relative size-6 opacity-50 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0">
                <Image src={item.logoImageUrl} fill className="object-contain" alt="SchoolLogo" />
              </div>
            )}

            <Typography size="text-sm" className="text-sm font-black italic tracking-tighter text-white/40 transition-colors group-hover:text-main-green">
              {item.schoolName}
            </Typography>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SchoolSlider;
