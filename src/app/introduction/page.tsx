import FifthBanner from './_components/FifthBanner';
import FirstBanner from './_components/FirstBanner';
import FourthBanner from './_components/FourthBanner';
import SecondBanner from './_components/SecondBanner';
import ThirdBanner from './_components/ThirdBanner';

import Container from '@/shared/components/Container';

function IntroductionPage() {
  return (
    <Container className="mt-5 flex flex-col gap-60">
      <FirstBanner />
      <SecondBanner />
      <ThirdBanner />
      <FourthBanner />
      <FifthBanner />
    </Container>
  );
}

export default IntroductionPage;
