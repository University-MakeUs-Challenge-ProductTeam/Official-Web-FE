import Link from 'next/link';

import Flex from '@/shared/components/Flex';
import Typography from '@/shared/components/Typography';

function Logo() {
  return (
    <Flex direction="column">
      <Link href="/">
        <Typography size="title-md" color="main-white">
          UMC
        </Typography>
        <Typography size="caption" color="neutral-200">
          Break The Rules!
        </Typography>
      </Link>
    </Flex>
  );
}

export default Logo;
