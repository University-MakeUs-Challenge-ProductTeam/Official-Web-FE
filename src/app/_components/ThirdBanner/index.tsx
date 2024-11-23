import Image from 'next/image';

import Flex from '@/shared/components/Flex';
import Spacing from '@/shared/components/Spacing';
import Typography from '@/shared/components/Typography';

const coreValues = [
  { id: 1, label: '도전', path: '/images/도전.png' },
  { id: 2, label: '평등', path: '/images/평등.png' },
  { id: 3, label: '자신감', path: '/images/자신감.png' },
];

function ThirdBanner() {
  return (
    <Flex direction="column" justify="center" align="center">
      <Typography size="title-sm" color="main-disable">
        핵심가치
      </Typography>
      <Spacing direction="vertical" size={22} />
      <Typography size="title-smd" color="main-white">
        UMC는 이러한
      </Typography>
      <Spacing direction="vertical" size={10} />
      <Typography size="title-smd" color="main-white">
        방향성을 추구해요
      </Typography>
      <Spacing direction="vertical" size={128} />
      <Flex className="flex flex-col gap-10 md:flex-row">
        {coreValues.map((value) => (
          <Flex key={value.id} direction="column" justify="center" align="center">
            <div className="flex size-[230px] flex-col items-center justify-center rounded-full bg-[#D9D9D9]">
              <Image src={value.path} width={230} height={230} alt={value.label} className="flex items-center justify-center rounded-full" objectFit="true" />
            </div>

            <Spacing direction="vertical" size={20} />
            <Typography size="text-lg" color="main-disable">
              {value.label}
            </Typography>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

export default ThirdBanner;
