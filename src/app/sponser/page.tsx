import FirstBanner from './_components/FirstBanner';
import SecondBanner from './_components/SecondBanner';
import ThirdBanner from './_components/ThirdBanner';

import Container from '@/shared/components/Container';

function SponserPage() {
  return (
    <Container className="mb-32 flex flex-col gap-24">
      <FirstBanner />
      <SecondBanner />
      <ThirdBanner />
    </Container>
  );
}

export default SponserPage;
