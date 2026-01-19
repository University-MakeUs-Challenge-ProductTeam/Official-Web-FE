import { useEffect, useState } from 'react';
import { useScroll } from 'framer-motion';

interface IUseNavbarScrollReturn {
  isScrolled: boolean;
}

export const useNavbarScroll = (threshold: number = 50): IUseNavbarScrollReturn => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsScrolled(latest > threshold);
    });
    return () => unsubscribe();
  }, [scrollY, threshold]);

  return { isScrolled };
};
