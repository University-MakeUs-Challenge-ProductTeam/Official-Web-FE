import DiagonalMarquee from '@/components/ui/DiagonalMarquee';
import KineticHero from '@/components/ui/KineticHero';
import RedesignCurriculum from '@/components/ui/RedesignCurriculum';
import UniversityMarquee from '@/components/ui/UniversityMarquee';

export default function Home() {
  return (
    <div className="bg-black">
      <KineticHero />
      <UniversityMarquee />
      <RedesignCurriculum />

      {/* Dynamic Diagonal Marquee Section */}
      <DiagonalMarquee />
    </div>
  );
}
