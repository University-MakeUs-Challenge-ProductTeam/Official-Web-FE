'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

type TMobileMenuProps = {
  isOpen: boolean;
  navItems: Array<{ href: string; label: string }>;
  onClose: () => void;
  pathname: string;
};

export const MobileMenu = ({ isOpen, onClose, pathname, navItems }: TMobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[105] bg-black/95 backdrop-blur-xl md:hidden"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="모바일 메뉴"
        >
          <motion.nav
            id="mobile-menu"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="flex h-full flex-col items-center justify-center gap-8 px-6"
            onClick={(e) => e.stopPropagation()}
            aria-label="주요 메뉴"
          >
            {navItems.map((item, index) => (
              <motion.div key={item.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? 'page' : undefined}
                  className={`relative text-4xl font-black italic transition-colors ${
                    pathname === item.href ? 'text-main-green' : 'text-white/70 hover:text-white'
                  } `}
                >
                  {item.label}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="mobile-nav-underline"
                      className="absolute inset-x-0 -bottom-2 h-1 rounded-full bg-main-green shadow-[0_0_10px_#52E560]"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              </motion.div>
            ))}

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.1 }}
              type="button"
              disabled
              aria-disabled="true"
              className="mt-8 cursor-not-allowed rounded-full bg-main-green/70 px-8 py-4 opacity-70 grayscale-[0.5]"
            >
              <span className="text-sm font-black italic tracking-widest text-black/60">WAITING FOR 10TH</span>
            </motion.button>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
