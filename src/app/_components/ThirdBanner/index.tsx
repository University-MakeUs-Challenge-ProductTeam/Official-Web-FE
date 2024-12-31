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
      <Flex className="flex flex-col gap-24 md:flex-row">
        {coreValues.map((value) => (
          <Flex key={value.id} direction="column" justify="center" align="center" className="px-2">
            <Typography size="title-lg" color="main-disable" className="sm:title-md">
              {value.label}
            </Typography>
            <Spacing direction="vertical" size={20} />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

export default ThirdBanner;
