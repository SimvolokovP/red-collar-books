import { api } from ".";
import type { BooksResponse } from "../../models/booksModels";

export const booksApi = {
  searchBooks(
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
};
