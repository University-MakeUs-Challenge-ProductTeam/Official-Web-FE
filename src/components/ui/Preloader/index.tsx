'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

import { usePreloaderStore } from '@/store/usePreloaderStore';

const words = ['UNIVERSITY', 'MAKEUS', 'CHALLENGE', 'UMC'];

const Preloader = () => {
  const pathname = usePathname();
  const setIsLoading = usePreloaderStore((state) => state.setIsLoading);
  const [index, setIndex] = useState(0);
  const [complete, setComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Initialize on mount
  useEffect(() => {
    const hasShown = sessionStorage.getItem('umc_intro_shown');
    const isHomePage = pathname === '/';

    if (isHomePage && !hasShown) {
      // Show preloader on home page first visit
      setIsVisible(true);
      setIsLoading(true);
      setIndex(0);
      setComplete(false);
    } else {
      // Don't show preloader
      setIsVisible(false);
      setComplete(true);
      setIsLoading(false);
    }
  }, [pathname, setIsLoading]);

  // Animate through words
  useEffect(() => {
    if (!isVisible || complete) {
      return undefined;
    }

    if (index === words.length) {
      const timeout = setTimeout(() => {
        setComplete(true);
        setIsLoading(false);
        sessionStorage.setItem('umc_intro_shown', 'true');
      }, 800);
      return () => clearTimeout(timeout);
    }

    const duration = index === 0 ? 800 : 500;

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, duration);

    return () => clearTimeout(timer);
  }, [index, setIsLoading, isVisible, complete]);

  // Prevent scroll during preloader
  useEffect(() => {
    if (isVisible && !complete) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [complete, isVisible]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && !complete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: 'easeInOut' },
          }}
          className="fixed inset-0 z-[50000] flex items-center justify-center bg-black"
        >
          <div className="relative flex flex-col items-center justify-center">
            {/* Main Text Animation */}
            <div className="relative flex h-48 items-center justify-center overflow-visible md:h-72">
              <AnimatePresence mode="wait">
                {index < words.length && (
                  <motion.div
                    key={words[index]}
                    initial={{ y: 50, opacity: 0, filter: 'blur(10px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    exit={{ y: -50, opacity: 0, filter: 'blur(10px)' }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full text-center text-[12vw] font-black italic leading-normal tracking-tighter text-main-green md:text-8xl"
                    style={{ textShadow: '0 0 40px rgba(82, 229, 96, 0.6)' }}
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
