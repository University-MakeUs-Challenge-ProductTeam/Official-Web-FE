import Banner from '@/app/_components/Banner';
import FourthBanner from '@/app/_components/FourthBanner/fourth-banner';
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
      <Spacing direction="vertical" size={160} />
      <FourthBanner />
    </div>
  );
}

export default Home;
