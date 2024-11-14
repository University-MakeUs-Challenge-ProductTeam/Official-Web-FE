import SliderList from '@/app/_components/FifthBanner/_components/SliderList';
import Flex from '@/shared/components/Flex';
import Spacing from '@/shared/components/Spacing';
import Typography from '@/shared/components/Typography';

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
