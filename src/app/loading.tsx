'use client';

import Typography from '@/components/common/Typography';

import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="relative flex flex-col items-center gap-6">
        {/* Animated Logo Placeholder */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-8xl font-black italic tracking-tighter text-main-green"
          style={{ textShadow: '0 0 40px rgba(82, 229, 96, 0.6)' }}
        >
          UMC
        </motion.div>

        {/* Loading Dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: 'easeInOut',
              }}
              className="size-2 rounded-full bg-main-green"
            />
          ))}
        </div>

        {/* Loading Text */}
        <Typography className="text-sm font-medium uppercase tracking-widest text-white/40">Loading</Typography>

        {/* Background Glow */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-1/2 top-1/2 -z-10 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-main-green/20 blur-[120px]"
        />
      </div>
    </div>
  );
};

export default Loading;
