import Image from 'next/image';

import Flex from '@/components/common/Flex';
import Spacing from '@/components/common/Spacing';
import Typography from '@/components/common/Typography';

const coreValues = [
  { id: 1, name: '컴공선배', path: '/images/컴공선배.jpg' },
  { id: 2, name: '그릿지', path: '/images/그릿지.png' },
  { id: 3, name: '소프트스퀘어드', path: '/images/소프트스퀘어드.png' },
];

function SixthBanner() {
  return (
    <Flex direction="column" justify="center" align="center">
      <Typography size="title-sm" color="main-disable">
        후원사
      </Typography>
      <Spacing direction="vertical" size={20} />
      <Typography size="title-smd" color="main-white">
        세상의 틀 깰 수 있도록
      </Typography>
      <Typography size="title-smd" color="main-white">
        함께해주시는 분들이에요
      </Typography>
      <Spacing direction="vertical" size={128} />
      <Flex className="flex flex-col gap-10 md:flex-row">
        {coreValues.map((value) => (
          <Flex key={value.id} direction="column" justify="center" align="center">
            <div className="flex size-[230px] flex-col items-center justify-center rounded-full bg-main-white">
              <Image src={value.path} width={230} height={230} alt={value.name} className="flex items-center justify-center rounded-full" objectFit="true" />
            </div>

            <Spacing direction="vertical" size={20} />
            <Typography size="text-lg" color="main-disable">
              {value.name}
            </Typography>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

export default SixthBanner;
