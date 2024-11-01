import Button from '@/shared/components/Button';
import Flex from '@/shared/components/Flex';
import Spacing from '@/shared/components/Spacing';
import Typography from '@/shared/components/Typography';

function SecondBanner() {
  return (
    <Flex direction="column" align="center">
      <Typography color="main-disable" className="text-center font-roboto text-[75px] font-bold md:text-[100px] lg:text-[150px]">
        Break The Rules!
      </Typography>
      <Spacing direction="vertical" size={40} />
      <Flex direction="column" justify="center" align="center">
        <Typography size="title-md" color="main-white">
          UMC는 세상의 틀을 깰
        </Typography>
        <Typography size="title-md" color="main-white">
          챌린저를 기다리고 있어요
        </Typography>
        <Spacing direction="vertical" size={40} />
        <div className="w-60">
          <Button variant="outline" className="rounded-4xl">
            <Typography size="text-md" color="main-green">
              7번째 여정에 참여하기
            </Typography>
          </Button>
        </div>
      </Flex>
    </Flex>
  );
}

export default SecondBanner;
