import { create } from "zustand";

import type { CartItem, Movie } from "@/types/movie";

interface CartState {
  items: CartItem[];
  addMovie: (movie: Movie) => void;
  removeMovie: (movieId: string) => void;
  clearCart: () => void;
  itemCount: () => number;
  total: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addMovie: (movie) =>
    set((state) => {
      const currentItem = state.items.find((item) => item.movie.id === movie.id);

      if (currentItem) {
        return {
          items: state.items.map((item) =>
            item.movie.id === movie.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }

      return {
        items: [...state.items, { movie, quantity: 1 }],
      };
    }),
  removeMovie: (movieId) =>
    set((state) => ({
      items: state.items.filter((item) => item.movie.id !== movieId),
    })),
  clearCart: () => set({ items: [] }),
  itemCount: () => get().items.reduce((sum, item) => sum + item.quantity, 0),
  total: () =>
    get().items.reduce(
      (sum, item) => sum + item.movie.price * item.quantity,
      0,
    ),
}));
