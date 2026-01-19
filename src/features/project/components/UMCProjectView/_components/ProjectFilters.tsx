import { IoIosSearch } from 'react-icons/io';

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
    <div className="sticky top-24 z-50 mb-16 bg-black/80 pb-4 backdrop-blur-sm">
      <div className="group relative flex h-12 flex-wrap items-center gap-4 overflow-visible rounded-full border border-white/5 bg-black/40 px-6 py-4 backdrop-blur-3xl transition-all hover:border-main-green/20">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-main-green/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

        <div className="relative flex w-full flex-wrap items-center gap-4">
          <ProjectGenerationDropdown selected={selectedGeneration} setSelected={onGenerationChange} />
          <div className="hidden h-6 w-px bg-white/10 md:block" />
          <PlatformDropdown selected={selectedPlatform} setSelected={onPlatformChange} />
          <div className="hidden h-6 w-px bg-white/10 md:block" />

          <div className="flex min-w-[200px] flex-1 items-center gap-3 px-4">
            <IoIosSearch size={18} className="text-main-green opacity-50 transition-opacity group-hover:opacity-100" />
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
