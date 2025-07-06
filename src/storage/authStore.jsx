import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  user: null,          // Data user
  loading: true,       // Status loading
  
  setUser: (user) => set({ user, loading: false }),
  setLoading: (loading) => set({ loading }),
}));