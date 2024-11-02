import Banner from '@/app/_components/Banner';
import FifthBanner from '@/app/_components/FifthBanner';
import FourthBanner from '@/app/_components/FourthBanner';
import SecondBanner from '@/app/_components/SecondBanner';
import SixthBanner from '@/app/_components/SixthBanner';
import ThirdBanner from '@/app/_components/ThirdBanner';
import Spacing from '@/shared/components/Spacing';

function Home() {
  return (
    <div className="bg-main-black">
      <Banner />
      <Spacing direction="vertical" size={300} />
      <SecondBanner />
      <Spacing direction="vertical" size={300} />
      <ThirdBanner />
      <Spacing direction="vertical" size={300} />
      <FourthBanner />
      <Spacing direction="vertical" size={300} />
      <FifthBanner />
      <Spacing direction="vertical" size={300} />
      <SixthBanner />
      <Spacing direction="vertical" size={300} />
    </div>
  );
}

export default Home;
