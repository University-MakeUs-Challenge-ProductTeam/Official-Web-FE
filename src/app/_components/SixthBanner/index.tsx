import Flex from '@/shared/components/Flex';
import Spacing from '@/shared/components/Spacing';
import Typography from '@/shared/components/Typography';

const coreValues = [
  { id: 1, name: '컴공선배' },
  { id: 2, name: '그릿지' },
  { id: 3, name: '너디너리' },
];

function SixthBanner() {
  return (
    <Flex direction="column" justify="center" align="center">
      <Typography size="title-sm" color="main-disable">
        후원사
      </Typography>
      <Spacing direction="vertical" size={10} />
      <Typography size="title-smd" color="main-white">
        UMC가 세상의 틀 깰 수 있도록
      </Typography>
      <Typography size="title-smd" color="main-white">
        함께해주시는 분들이에요
      </Typography>
      <Spacing direction="vertical" size={128} />
      <Flex className="flex flex-col gap-10 md:flex-row">
        {coreValues.map((value) => (
          <Flex key={value.id} direction="column" justify="center" align="center">
            <div className="size-[230px] rounded-full bg-main-white" />
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
