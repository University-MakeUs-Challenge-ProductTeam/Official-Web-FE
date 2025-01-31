'use client';

import Container from '@/shared/components/Container';
import Logo from '@/shared/components/Logo';
import UserMenu from '@/shared/components/UserMenu';
import useScrollTop from '@/shared/hooks/use-scroll-top';
import cn from '@/shared/utils/style';

function Navbar() {
  const scrolled = useScrollTop();

  return (
    <div className={cn('fixed top-0 z-50 w-full bg-black/50', scrolled && 'border-b shadow-sm')}>
      <Container>
        <div className="flex items-center justify-between gap-3 md:gap-0">
          <Logo />
          <div className="flex items-center justify-center">
            <UserMenu />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
