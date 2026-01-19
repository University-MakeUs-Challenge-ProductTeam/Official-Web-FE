import Flex from '@/components/common/Flex';
import Spacing from '@/components/common/Spacing';
import Typography from '@/components/common/Typography';

import SliderList from '@/features/home/components/FifthBanner/_components/SliderList';

function FifthBanner() {
  return (
    <Flex direction="column" justify="center" align="center">
      <Typography size="title-sm" color="main-disable">
        프로젝트
      </Typography>
      <Spacing direction="vertical" size={10} />
      <Typography size="title-smd" color="main-white">
        세상의 틀을 깬
      </Typography>
      <Typography size="title-smd" color="main-white">
        프로젝트를 만나보세요
      </Typography>
      <Spacing direction="vertical" size={100} />
      <div className="w-full">
        <SliderList />
      </div>
    </Flex>
  );
}

export default FifthBanner;
