import KineticHero from '@/components/ui/KineticHero';
import RedesignCurriculum from '@/components/ui/RedesignCurriculum';
import UniversityMarquee from '@/components/ui/UniversityMarquee';

import { generateWebSiteSchema } from '@/lib/schema';

import dynamic from 'next/dynamic';

// DiagonalMarquee를 Dynamic Import로 lazy load (SSR은 유지)
const DiagonalMarquee = dynamic(() => import('@/components/ui/DiagonalMarquee'), {
  ssr: true,
  loading: () => <div className="h-screen bg-black" />,
});

const Home = () => {
  const websiteSchema = generateWebSiteSchema();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <div className="flex flex-col overflow-x-hidden bg-black">
        <KineticHero />
        <UniversityMarquee />
        <RedesignCurriculum />

        {/* Dynamic Diagonal Marquee Section */}
        <DiagonalMarquee />
      </div>
    </>
  );
};

export default Home;
