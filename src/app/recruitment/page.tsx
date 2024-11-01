import ActivityBox from './_components/ActivityBox';
import FaqAccordions from './_components/FaqAccordions';

import Container from '@/shared/components/Container';

function RecruitmentPage() {
  return (
    <Container className="my-10 flex flex-col gap-20">
      <ActivityBox />
      <div className="flex flex-col">
        <h1 className="text-title-smd text-[#ECECEC]">FAQ</h1>
        <FaqAccordions />
      </div>
    </Container>
  );
}

export default RecruitmentPage;
