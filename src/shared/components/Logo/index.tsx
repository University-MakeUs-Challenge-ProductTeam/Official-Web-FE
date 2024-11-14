import Image from 'next/image';
import Link from 'next/link';

import Flex from '@/shared/components/Flex';

function Logo() {
  return (
    <Flex direction="column">
      <Link href="/">
        <Image src="/images/Logo.svg" alt="logo" width={80} height={80} />
      </Link>
    </Flex>
  );
}

export default Logo;
