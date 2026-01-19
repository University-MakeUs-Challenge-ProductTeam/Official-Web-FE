'use client';

import { useEffect, useLayoutEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const words = ['UNIVERSITY', 'MAKEUS', 'CHALLENGE', 'UMC'];

const Preloader = () => {
  const [index, setIndex] = useState(0);
  const [complete, setComplete] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    setIsMounted(true);
    // Force reset on mount to ensure animation plays if intended
    setIndex(0);
    setComplete(false);

    // Check session storage to prevent playing on every single refresh if desired,
    // but the user's request implies they WANT to see it.
    // We will ensure it plays reliability.
    const hasVisited = sessionStorage.getItem('umc_intro_shown');
    if (hasVisited) {
      // If we want to skip on subsequent visits:
      // setComplete(true);
      // But for now, let's allow it to play to fix the "doesn't play" issue,
      // or maybe the user IS experiencing the session skip and thinks it's a bug?
      // Based on "Requires refresh to work", likely it's failing to trigger nicely.
      // Let's NOT skip it for now to ensure they see it.
    }
  }, []);

  useEffect(() => {
    if (index === words.length) {
      const timeout = setTimeout(() => {
        setComplete(true);
        sessionStorage.setItem('umc_intro_shown', 'true');
      }, 800);
      return () => clearTimeout(timeout);
    }

    const duration = index === 0 ? 800 : 500; // Increased first word duration

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, duration);

    return () => clearTimeout(timer);
  }, [index]);

  // Prevent scroll during preloader
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

  if (!isMounted) return null;

  return (
    <AnimatePresence mode="wait">
      {!complete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: 'easeInOut' },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          <div className="relative flex flex-col items-center justify-center">
            {/* Main Text Animation */}
            <div className="relative h-24 overflow-hidden md:h-32">
              <AnimatePresence mode="wait">
                {index < words.length && (
                  <motion.div
                    key={words[index]}
                    initial={{ y: 50, opacity: 0, filter: 'blur(10px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    exit={{ y: -50, opacity: 0, filter: 'blur(10px)' }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="whitespace-nowrap text-6xl font-black italic tracking-tighter text-main-green md:text-8xl"
                    style={{ textShadow: '0 0 30px rgba(82, 229, 96, 0.4)' }}
                  >
                    {words[index]}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Background Glow - Intensified */}
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-1/2 top-1/2 -z-10 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-main-green/20 blur-[100px]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
