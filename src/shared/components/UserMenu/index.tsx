import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Typography from '@/shared/components/Typography';

function UserMenu() {
  const pathname = usePathname();

  return (
    <div className="flex gap-x-5 font-bold">
      <Link href="/introduction">
        <Typography
          size="title-sm"
          className={`${pathname === '/introduction' ? 'text-main-green' : 'text-main-white'} text-[12px] md:text-text-lg md:font-bold`}
        >
          소개
        </Typography>
      </Link>
      <Link href="/project">
        <Typography size="title-sm" className={`${pathname === '/project' ? 'text-main-green' : 'text-main-white'} text-[12px] md:text-text-lg md:font-bold`}>
          프로젝트
        </Typography>
      </Link>
      <Link href="/sponser">
        <Typography size="title-sm" className={`${pathname === '/sponser' ? 'text-main-green' : 'text-main-white'} text-[12px] md:text-text-lg md:font-bold`}>
          후원사
        </Typography>
      </Link>
      <Link href="/recruitment">
        <Typography
          size="title-sm"
          className={`${pathname === '/recruitment' ? 'text-main-green' : 'text-main-white'} text-[12px] md:text-text-lg md:font-bold`}
        >
          모집안내
        </Typography>
      </Link>
    </div>
  );
}

export default UserMenu;
