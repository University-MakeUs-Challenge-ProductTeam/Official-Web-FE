import ActivityBox from './_components/ActivityBox';
import FaqAccordions from './_components/FaqAccordions';

import Container from '@/shared/components/Container';
import Typography from '@/shared/components/Typography';

function RecruitmentPage() {
  return (
    <Container className="my-10 flex flex-col gap-20">
      <ActivityBox />
      <div className="flex flex-col">
        <h1 className="text-title-smd text-[#ECECEC]">FAQ</h1>
        <FaqAccordions />
      </div>
      <div className="mt-20 flex flex-row flex-wrap items-center justify-between gap-5">
        <Typography as="h1" size="title-smd" className="mr-5 text-[#ECECEC]">
          UMC에 대해
          <br />더 궁금한 챌린저라면?
        </Typography>
        <button type="button" className="h-[50px] rounded-[100px] border-2 border-solid border-main-green bg-[#1F1F1F] px-[24px]">
          <Typography size="title-sm" color="main-green" className="font-bold">
            문의하러 가기
          </Typography>
        </button>
      </div>
    </Container>
  );
}

export default RecruitmentPage;
