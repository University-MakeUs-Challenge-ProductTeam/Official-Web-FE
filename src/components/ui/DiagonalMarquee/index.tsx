'use client';

import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

const getStyleClasses = (style: 'filled' | 'outline' | 'faint') => {
  switch (style) {
    case 'filled':
      return 'text-main-green drop-shadow-[0_0_20px_rgba(82,229,96,0.4)]';
    case 'outline':
      return 'text-transparent stroke-white stroke-2';
    case 'faint':
      return 'text-transparent stroke-white/20 stroke-1';
    default:
      return '';
  }
};

const MarqueeRow = ({
  text,
  direction,
  speed,
  styleVariant,
}: {
  direction: 'left' | 'right';
  speed: number;
  styleVariant: 'filled' | 'outline' | 'faint';
  text: string;
}) => {
  const defaultText = `${text} — ${text} — ${text} — ${text} — `; // Repeat enough to fill visual width

  return (
    <div className="flex w-[200vw] select-none overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          duration: speed,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        <span className={`mx-4 text-[10vw] font-black italic tracking-tighter ${getStyleClasses(styleVariant)}`}>{defaultText}</span>
        <span className={`mx-4 text-[10vw] font-black italic tracking-tighter ${getStyleClasses(styleVariant)}`}>{defaultText}</span>
      </motion.div>
    </div>
  );
};

const DiagonalMarquee = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const rotate = -5;
  // Adjust transform to be reactive to scroll for entrance/exit
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative flex h-[80vh] w-full max-w-[100vw] items-center justify-center overflow-hidden bg-black py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(82,229,96,0.05),transparent_70%)] blur-[100px]" />

      <motion.div style={{ y, opacity, rotate }} className="relative z-10 flex scale-110 flex-col items-center justify-center gap-4">
        {/* Row 1: Outline / Right to Left */}
        <MarqueeRow text="BREAK THE RULES" direction="left" speed={25} styleVariant="outline" />

        {/* Row 2: Neon Filled / Left to Right (CENTERPIECE) */}
        <MarqueeRow text="BREAK THE RULES" direction="right" speed={20} styleVariant="filled" />

        {/* Row 3: Outline / Right to Left */}
        <MarqueeRow text="BREAK THE RULES" direction="left" speed={30} styleVariant="outline" />

        {/* Row 4: Fainter Outline / Left to Right */}
        <MarqueeRow text="BREAK THE RULES" direction="right" speed={35} styleVariant="faint" />
      </motion.div>
    </section>
  );
};
export default DiagonalMarquee;
