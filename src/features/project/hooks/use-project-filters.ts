import { useState } from 'react';

import useDebounce from '@/hooks/useDebounce';

import type { OPlatform } from '@/features/project/components/PlatformDropdown';

interface IUseProjectFiltersReturn {
  debouncedSearchTerm: string;
  resetFilters: () => void;
  searchTerm: string;
  selectedGeneration: number | 'ALL';
  selectedPlatform: keyof typeof OPlatform;
  setSearchTerm: (term: string) => void;
  setSelectedGeneration: React.Dispatch<React.SetStateAction<number | 'ALL'>>;
  setSelectedPlatform: React.Dispatch<React.SetStateAction<keyof typeof OPlatform>>;
}

export const useProjectFilters = (): IUseProjectFiltersReturn => {
  const [selectedGeneration, setSelectedGeneration] = useState<number | 'ALL'>('ALL');
  const [selectedPlatform, setSelectedPlatform] = useState<keyof typeof OPlatform>('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 400);

  const resetFilters = () => {
    setSelectedGeneration('ALL');
    setSelectedPlatform('ALL');
    setSearchTerm('');
  };

  return {
    selectedGeneration,
    selectedPlatform,
    searchTerm,
    debouncedSearchTerm,
    setSelectedGeneration,
    setSelectedPlatform,
    setSearchTerm,
    resetFilters,
  };
};
