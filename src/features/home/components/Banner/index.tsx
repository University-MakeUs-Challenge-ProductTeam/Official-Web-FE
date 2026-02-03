'use client';

import Flex from '@/components/common/Flex';
import Typography from '@/components/common/Typography';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Banner = () => {
  return (
    <Flex justify="center" align="center" className="relative h-[600px] overflow-hidden px-10">
      <div className="pointer-events-none absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_10%_20%,white_1.5px,transparent_0),radial-gradient(circle_at_80%_25%,white_1.2px,transparent_0),radial-gradient(circle_at_50%_60%,white_1px,transparent_0),radial-gradient(circle_at_30%_80%,white_2px,transparent_0),radial-gradient(circle_at_90%_10%,white_1.8px,transparent_0),radial-gradient(circle_at_20%_50%,white_1px,transparent_0),radial-gradient(circle_at_60%_90%,white_1.3px,transparent_0),radial-gradient(circle_at_15%_70%,white_1.7px,transparent_0),radial-gradient(circle_at_70%_40%,white_1px,transparent_0),radial-gradient(circle_at_40%_30%,white_1.5px,transparent_0),radial-gradient(circle_at_90%_60%,white_2px,transparent_0),radial-gradient(circle_at_25%_90%,white_1.2px,transparent_0),radial-gradient(circle_at_10%_90%,white_1px,transparent_0),radial-gradient(circle_at_75%_15%,white_1.8px,transparent_0),radial-gradient(circle_at_85%_85%,white_1.5px,transparent_0),radial-gradient(circle_at_50%_10%,white_1.3px,transparent_0),radial-gradient(circle_at_60%_30%,white_1px,transparent_0),radial-gradient(circle_at_90%_20%,white_1.5px,transparent_0)] before:opacity-80 before:content-['']" />

      <Flex direction="column" className="hidden lg:flex lg:flex-col">
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Typography color="main-white" size="title-xl">
            BREAK
          </Typography>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <Typography color="main-white" size="title-xl">
            THE
          </Typography>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <Typography color="main-white" size="title-xl">
            RULES
          </Typography>
        </motion.div>
      </Flex>

      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}>
        <Image src="/images/UMC_LOGO.png" alt="UMC로고" width={500} height={500} className="transition-transform duration-300" />
      </motion.div>

      <Flex direction="column" className="hidden text-right lg:flex lg:flex-col">
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Typography color="main-white" size="title-xl">
            BREAK
          </Typography>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <Typography color="main-white" size="title-xl">
            THE
          </Typography>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <Typography color="main-white" size="title-xl">
            RULES
          </Typography>
        </motion.div>
      </Flex>
    </Flex>
  );
};

export default Banner;
