import { IoSearch } from 'react-icons/io5';

import type { TPlatformName } from '@/types/projectDto';

import PlatformDropdown from '../../PlatformDropdown';
import ProjectGenerationDropdown from '../../ProjectGenerationDropdown';

type TProjectFiltersProps = {
  onGenerationChange: React.Dispatch<React.SetStateAction<number | 'ALL'>>;
  onPlatformChange: React.Dispatch<React.SetStateAction<TPlatformName | 'ALL'>>;
  onSearchChange: (term: string) => void;
  searchTerm: string;
  selectedGeneration: number | 'ALL';
  selectedPlatform: TPlatformName | 'ALL';
};

const ProjectFilters = ({ selectedGeneration, selectedPlatform, searchTerm, onGenerationChange, onPlatformChange, onSearchChange }: TProjectFiltersProps) => {
  return (
    <div className="sticky top-20 z-50 mb-8 bg-black/90 py-4 backdrop-blur-md md:top-24 md:mb-16">
      <div className="group relative flex flex-col items-center gap-4 overflow-visible rounded-3xl border border-white/5 bg-black/40 p-4 backdrop-blur-3xl transition-all hover:border-main-green/20 md:h-12 md:flex-row md:flex-wrap md:rounded-full md:px-6">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-main-green/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 md:rounded-full" />

        <div className="relative flex w-full flex-col gap-4 md:w-auto md:flex-row md:items-center">
          <div className="flex w-full gap-4 md:w-auto">
            <ProjectGenerationDropdown selected={selectedGeneration} setSelected={onGenerationChange} />
            <div className="hidden h-6 w-px bg-white/10 md:block" />
            <PlatformDropdown selected={selectedPlatform} setSelected={onPlatformChange} />
          </div>
          <div className="hidden h-6 w-px bg-white/10 md:block" />

          <div className="flex min-w-[200px] flex-1 items-center gap-3 px-2 md:px-4">
            <IoSearch size={18} className="text-main-green opacity-50 transition-opacity group-hover:opacity-100" />
            <input
              className="w-full bg-transparent text-xs font-black uppercase italic tracking-widest text-white outline-none placeholder:text-white/20"
              placeholder="Search Projects..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFilters;
