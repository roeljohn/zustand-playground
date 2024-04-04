import { create } from 'zustand';

interface BearState {
    bears: number
    increasePopulation: (by: number) => void
    increase: (by: number) => void
}
  
const useGlobalState = create<BearState>()((set) => ({
    bears: 0,
    increasePopulation: (by = 1) => set((state) => ({ bears: state.bears + 1 })),
    increase: (by) => set((state) => ({ bears: state.bears + by })),
}))

export default useGlobalState;