import Banner from '@/app/_components/Banner';
import SecondBanner from '@/app/_components/SecondBanner';
import ThirdBanner from '@/app/_components/ThirdBanner';
import Spacing from '@/shared/components/Spacing';

function Home() {
  return (
    <div className="bg-main-black">
      <Banner />
      <Spacing direction="vertical" size={160} />
      <SecondBanner />
      <Spacing direction="vertical" size={160} />
      <ThirdBanner />
    </div>
  );
}

export default Home;
