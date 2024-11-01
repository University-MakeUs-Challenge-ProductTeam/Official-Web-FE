import ActivityBox from './_components/ActivityBox';
import FaqAccordions from './_components/FaqAccordions';

import Container from '@/shared/components/Container';

function RecruitmentPage() {
  return (
    <Container className="my-10 flex flex-col">
      <ActivityBox />
      <FaqAccordions />
    </Container>
  );
}

export default RecruitmentPage;
