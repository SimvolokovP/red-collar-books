import { api } from ".";
import type { Book, BooksResponse } from "../../models/booksModels";

export const booksApi = {
  getBooks(
    query: string,
    startIndex: number = 0,
    maxResults: number = 20
  ): Promise<{ data: BooksResponse }> {
    return api.get("/volumes", {
      params: {
        q: query,
        startIndex,
        maxResults,
      },
    });
  },
  getBookById(bookId: string): Promise<{ data: Book }> {
    return api.get(`/volumes/${bookId}`);
  },
};
