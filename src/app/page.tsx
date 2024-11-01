import Banner from '@/app/_components/Banner';
import SecondBanner from '@/app/_components/SecondBanner';
import Spacing from '@/shared/components/Spacing';

function Home() {
  return (
    <>
      <Banner />
      <Spacing direction="vertical" size={160} />
      <SecondBanner />
      <Spacing direction="vertical" size={160} />
    </>
  );
}

export default Home;
