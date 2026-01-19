import type { Metadata } from 'next';

import Container from '@/components/common/Container';

import FirstBanner from '@/features/sponser/components/FirstBanner';
import SecondBanner from '@/features/sponser/components/SecondBanner';
import ThirdBanner from '@/features/sponser/components/ThirdBanner';

export const metadata: Metadata = {
  title: 'UMC - 후원사 목록',
  description: 'UMC 후원사 목록 페이지',
};

function SponserPage() {
  return (
    <Container className="mb-32 flex flex-col gap-36">
      <FirstBanner />
      <SecondBanner />
      <ThirdBanner />
    </Container>
  );
}

export default SponserPage;
