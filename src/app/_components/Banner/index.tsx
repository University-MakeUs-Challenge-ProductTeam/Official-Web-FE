import Image from 'next/image';

import Flex from '@/shared/components/Flex';
import Typography from '@/shared/components/Typography';

function Banner() {
  return (
    <Flex justify="center" align="center" className="relative h-[600px] overflow-hidden px-10">
      <div className="pointer-events-none absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_10%_20%,white_1.5px,transparent_0),radial-gradient(circle_at_80%_25%,white_1.2px,transparent_0),radial-gradient(circle_at_50%_60%,white_1px,transparent_0),radial-gradient(circle_at_30%_80%,white_2px,transparent_0),radial-gradient(circle_at_90%_10%,white_1.8px,transparent_0),radial-gradient(circle_at_20%_50%,white_1px,transparent_0),radial-gradient(circle_at_60%_90%,white_1.3px,transparent_0),radial-gradient(circle_at_15%_70%,white_1.7px,transparent_0),radial-gradient(circle_at_70%_40%,white_1px,transparent_0),radial-gradient(circle_at_40%_30%,white_1.5px,transparent_0),radial-gradient(circle_at_90%_60%,white_2px,transparent_0),radial-gradient(circle_at_25%_90%,white_1.2px,transparent_0),radial-gradient(circle_at_10%_90%,white_1px,transparent_0),radial-gradient(circle_at_75%_15%,white_1.8px,transparent_0),radial-gradient(circle_at_85%_85%,white_1.5px,transparent_0),radial-gradient(circle_at_50%_10%,white_1.3px,transparent_0),radial-gradient(circle_at_60%_30%,white_1px,transparent_0),radial-gradient(circle_at_90%_20%,white_1.5px,transparent_0)] before:opacity-80 before:content-['']" />

      <Flex direction="column" className="hidden lg:flex lg:flex-col">
        <Typography color="main-white" size="title-xl">
          BREAK
        </Typography>
        <Typography color="main-white" size="title-xl">
          THE
        </Typography>
        <Typography color="main-white" size="title-xl">
          RULES
        </Typography>
      </Flex>

      <Image src="/images/UMC_LOGO.png" alt="UMC로고" width={500} height={500} className="transition-transform duration-300 hover:scale-125" />

      <Flex direction="column" className="hidden text-right lg:flex lg:flex-col">
        <Typography color="main-white" size="title-xl">
          BREAK
        </Typography>
        <Typography color="main-white" size="title-xl">
          THE
        </Typography>
        <Typography color="main-white" size="title-xl">
          RULES
        </Typography>
      </Flex>
    </Flex>
  );
}

export default Banner;
