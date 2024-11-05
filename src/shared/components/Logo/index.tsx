import Image from 'next/image';
import Link from 'next/link';

import Flex from '@/shared/components/Flex';

function Logo() {
  return (
    <Flex direction="column">
      <Link href="/">
        <Image src="/images/nav_logo.png" alt="logo" width={100} height={100} />
      </Link>
    </Flex>
  );
}

export default Logo;
