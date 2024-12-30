import type { Metadata } from 'next';

import FirstBanner from './_components/FirstBanner';
import SecondBanner from './_components/SecondBanner';
import ThirdBanner from './_components/ThirdBanner';

import Container from '@/shared/components/Container';

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
