import FirstBanner from './_components/FirstBanner';
import SecondBanner from './_components/SecondBanner';

import Container from '@/shared/components/Container';

function IntroductionPage() {
  return (
    <Container className="mt-5 flex flex-col gap-60">
      <FirstBanner />
      <SecondBanner />
    </Container>
  );
}

export default IntroductionPage;
