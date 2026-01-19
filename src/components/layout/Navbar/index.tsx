'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useNavbarScroll } from '@/hooks/use-navbar-scroll';

import { MobileMenu } from './MobileMenu';

const NAV_ITEMS = [
  { label: '소개', href: '/introduction' },
  { label: '프로젝트', href: '/project' },
  { label: '후원사', href: '/sponser' },
  { label: '모집안내', href: '/recruitment' },
];

const RedesignNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { isScrolled } = useNavbarScroll(50);

  // 페이지 전환 시 모바일 메뉴 닫기
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // 모바일 메뉴 열릴 때 스크롤 방지
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav initial={false} className="fixed inset-x-0 top-0 z-[100] flex justify-center p-6">
        <div
          className={`flex w-full max-w-7xl items-center justify-between gap-4 rounded-full px-6 py-3 transition-all duration-300 md:w-auto md:gap-8 md:px-8 ${
            isScrolled ? 'border border-white/10 bg-black/40 shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-xl' : 'bg-transparent'
          } `}
        >
          <Link href="/" className="group flex items-center gap-2">
            <div className="size-6 rounded-sm bg-main-green shadow-[0_0_10px_#52E560]" />
            <span className="text-xl font-black italic tracking-tighter text-white">UMC</span>
          </Link>

          {/* Desktop Menu */}
          <nav aria-label="주요 메뉴" className="hidden items-center gap-6 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? 'page' : undefined}
                className={`relative text-sm font-medium transition-colors ${pathname === item.href ? 'text-main-green' : 'text-white/70 hover:text-white'} `}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div layoutId="nav-underline" className="absolute inset-x-0 -bottom-1 h-0.5 bg-main-green shadow-[0_0_5px_#52E560]" />
                )}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            disabled
            className="group relative hidden cursor-not-allowed overflow-hidden rounded-full bg-main-green/70 px-6 py-2 opacity-70 grayscale-[0.5] md:block"
          >
            <span className="relative z-10 text-xs font-black italic tracking-widest text-black/60">WAITING FOR 10TH</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-[110] flex size-10 items-center justify-center rounded-lg transition-colors hover:bg-white/10 md:hidden"
            aria-label={isMobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="flex h-5 w-6 flex-col justify-between">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="h-0.5 w-full rounded-full bg-white transition-all"
              />
              <motion.span animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }} className="h-0.5 w-full rounded-full bg-white transition-all" />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="h-0.5 w-full rounded-full bg-white transition-all"
              />
            </div>
          </button>
        </div>
      </motion.nav>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} pathname={pathname} navItems={NAV_ITEMS} />
    </>
  );
};

export default RedesignNavbar;
