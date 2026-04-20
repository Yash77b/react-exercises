import { create } from 'zustand';
import type { Magnet } from '../types/magnet';

interface MagnetStore {
  magnets: Magnet[];
  updateMagnet: (id: string, changes: Partial<Magnet>) => void;
  loadExpansionPack: () => void;
}

export const useMagnetStore = create<MagnetStore>((set) => ({
  magnets: [
    { id: '1', word: 'love', status: 'bank', x: 0, y: 0 },
    { id: '2', word: 'rain', status: 'bank', x: 0, y: 0 },
    // ...add more words
  ],
  updateMagnet: (id, changes) =>
    set((state) => ({
      magnets: state.magnets.map((m) => (m.id === id ? { ...m, ...changes } : m)),
    })),
  loadExpansionPack: () =>
    set((state) => ({
      magnets: [
        ...state.magnets,
        { id: 'e1', word: 'dream', status: 'bank', x: 0, y: 0 },
        // ...add more
      ],
    })),
}));