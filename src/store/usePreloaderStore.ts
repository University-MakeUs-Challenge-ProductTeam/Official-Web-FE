import { create } from 'zustand';

type TPreloaderStore = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

export const usePreloaderStore = create<TPreloaderStore>((set) => ({
  isLoading: true,
  setIsLoading: (isLoading) => set({ isLoading }),
}));
