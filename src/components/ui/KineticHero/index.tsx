'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FloatingShapes = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      {[...Array(20)].map((_, index) => (
        <motion.div
          key={index}
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            opacity: 0,
          }}
          animate={{
            y: [null, '-20%', '20%'],
            opacity: [0, 0.2, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: index * 0.2,
          }}
          className="absolute size-1 bg-main-green shadow-[0_0_10px_#52E560]"
        />
      ))}
    </div>
  );
};

const KineticHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0.6, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-dvh w-full overflow-hidden bg-black md:h-[130vh]">
      {/* Fluid Liquid Background Simulation */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute -left-1/4 -top-1/4 size-[150%] bg-[radial-gradient(circle_at_50%_50%,rgba(82,229,96,0.15),transparent_70%)] blur-[100px]"
        />
      </div>

      <div className="sticky top-0 flex h-screen min-h-[600px] w-full flex-col items-center justify-center overflow-hidden px-4">
        <motion.div
          style={{
            y: y1,
            opacity,
            willChange: 'transform, opacity',
          }}
          className="flex transform-gpu flex-col items-center"
        >
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center text-[15vw] font-black italic leading-[0.8] tracking-tighter text-white"
          >
            BREAK THE <br />
            <span className="text-main-green" style={{ textShadow: '0 0 40px rgba(82, 229, 96, 0.3)' }}>
              RULES
            </span>
          </motion.h1>
        </motion.div>

        <motion.div
          style={{
            y: y2,
            scale,
            opacity,
            willChange: 'transform, opacity',
          }}
          className="mt-10 flex transform-gpu flex-col items-center gap-4 text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="max-w-xl text-lg font-medium text-white/40 md:text-xl"
          >
            대학생들이 직접 서비스를 기획하고 개발하며 <br />
            세상에 없던 가치를 만들어내는 도전의 여정.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="mt-8 flex gap-4"
          >
            <button
              type="button"
              disabled
              className="group relative cursor-not-allowed overflow-hidden rounded-full bg-main-green/50 px-8 py-3 font-bold text-black/50"
            >
              WAITING FOR 10TH
              {/* <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20 transition-all group-hover:h-full" /> */}
            </button>
            <button
              type="button"
              className="rounded-full border border-white/20 bg-white/5 px-8 py-3 font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              LEARN MORE
            </button>
          </motion.div>
        </motion.div>

        {/* Floating geometric patterns */}
        <FloatingShapes />
      </div>
    </section>
  );
};
export default KineticHero;
