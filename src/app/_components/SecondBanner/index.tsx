'use client';

import { motion } from 'framer-motion';

import Button from '@/shared/components/Button';
import Flex from '@/shared/components/Flex';
import Spacing from '@/shared/components/Spacing';
import Typography from '@/shared/components/Typography';

const textVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
    },
  }),
};

const subTextVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
    },
  }),
};

function SecondBanner() {
  const text = 'Break The Rules!';
  const koreanText1 = 'UMC는 세상의 틀을 깰';
  const koreanText2 = '챌린저를 기다리고 있어요';

  return (
    <>
      <div className="text-center font-roboto text-[75px] font-bold md:text-[100px] lg:text-[150px]">
        {text.split('').map((char, index) => (
          <motion.span key={index} custom={index} initial="hidden" animate="visible" variants={textVariants} className="inline-block">
            <Typography color="main-disable" className="text-center font-roboto text-[50px] font-bold md:text-[100px] lg:text-[150px]">
              {char === ' ' ? '\u00A0' : char}
            </Typography>
          </motion.span>
        ))}
      </div>
      <Spacing direction="vertical" size={40} />
      <Flex direction="column" justify="center" align="center">
        <div className="text-center">
          {koreanText1.split('').map((char, index) => (
            <motion.span key={index} custom={index} initial="hidden" animate="visible" variants={subTextVariants} className="inline-block">
              <Typography size="title-md" color="main-white">
                {char === ' ' ? '\u00A0' : char}
              </Typography>
            </motion.span>
          ))}
        </div>
        <div className="text-center">
          {koreanText2.split('').map((char, index) => (
            <motion.span key={index} custom={index} initial="hidden" animate="visible" variants={subTextVariants} className="inline-block">
              <Typography size="title-md" color="main-white">
                {char === ' ' ? '\u00A0' : char}
              </Typography>
            </motion.span>
          ))}
        </div>
        <Spacing direction="vertical" size={40} />
        <div className="w-60">
          <Button variant="outline" className="rounded-4xl">
            <Typography size="text-md" color="main-green">
              7번째 여정에 참여하기
            </Typography>
          </Button>
        </div>
      </Flex>
    </>
  );
}

export default SecondBanner;
