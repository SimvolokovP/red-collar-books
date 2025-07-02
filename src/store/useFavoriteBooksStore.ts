import { create } from "zustand";
import type { Book } from "../models/booksModels";
import { createJSONStorage, persist } from "zustand/middleware";

interface FavoriteBooksState {
  favoriteBooks: Book[];
  addToFavorites: (book: Book) => void;
  removeFromFavorites: (bookId: string) => void;
  isFavorite: (bookId: string | undefined) => boolean;
}

export const useFavoriteBooksStore = create<FavoriteBooksState>()(
  persist(
    (set, get) => ({
      favoriteBooks: [],
      addToFavorites: (book) =>
        set((state) => ({
          favoriteBooks: [...state.favoriteBooks, book],
        })),
      removeFromFavorites: (bookId) =>
        set((state) => ({
          favoriteBooks: state.favoriteBooks.filter(
            (book) => book.id !== bookId
          ),
        })),
      isFavorite: (bookId: string | undefined) =>
        get().favoriteBooks.some((book) => book.id === bookId),
    }),
    {
      name: "favoriteBooks",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
