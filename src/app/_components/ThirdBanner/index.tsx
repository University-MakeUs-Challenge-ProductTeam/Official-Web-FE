import Flex from '@/shared/components/Flex';
import Spacing from '@/shared/components/Spacing';
import Typography from '@/shared/components/Typography';

const coreValues = [
  { id: 1, label: '열정' },
  { id: 2, label: '성실' },
  { id: 3, label: '협동' },
];

function ThirdBanner() {
  return (
    <Flex direction="column" justify="center" align="center">
      <Typography size="title-sm" color="main-disable">
        핵심가치
      </Typography>
      <Spacing direction="vertical" size={10} />
      <Typography size="title-smd" color="main-white">
        UMC는 이러한 방향성을 추구해요
      </Typography>
      <Spacing direction="vertical" size={128} />
      <Flex className="flex flex-col gap-10 md:flex-row">
        {coreValues.map((value) => (
          <Flex key={value.id} direction="column" justify="center" align="center">
            <div className="size-[230px] rounded-full bg-main-white">123</div>
            <Spacing direction="vertical" size={20} />
            <Typography size="text-lg" color="main-white">
              {value.label}
            </Typography>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

export default ThirdBanner;
