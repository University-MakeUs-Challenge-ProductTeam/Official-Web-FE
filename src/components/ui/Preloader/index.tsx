'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const words = ['UNIVERSITY', 'MAKEUS', 'CHALLENGE', 'UMC'];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    if (index === words.length) {
      setTimeout(() => setComplete(true), 500);
      return undefined;
    }

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 600);

    return () => clearTimeout(timer);
  }, [index]);

  // Body overflow 제어 - Preloader 표시 중에는 스크롤 방지
  useEffect(() => {
    if (!complete) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [complete]);

  return (
    <AnimatePresence mode="wait">
      {!complete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5 },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              {index < words.length && (
                <motion.div
                  key={words[index]}
                  initial={{ y: 40, opacity: 0, rotateX: -90 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  exit={{ y: -40, opacity: 0, rotateX: 90 }}
                  transition={{ duration: 0.4, ease: 'circOut' }}
                  className="text-6xl font-black italic tracking-tighter text-[#52E560] md:text-8xl"
                  style={{ textShadow: '0 0 20px rgba(82, 229, 96, 0.5)' }}
                >
                  {words[index]}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Background Glow */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute left-1/2 top-1/2 -z-10 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#52E560] blur-[120px]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
