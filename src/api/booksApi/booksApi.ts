import type { AxiosResponse } from "axios";
import { api } from ".";
import type { Book, BooksResponse } from "../../models/booksModels";

interface GetBooksParams {
  q: string;
  filter?: string | null;
  startIndex?: number;
  maxResults?: number;
}

export const booksApi = {
  getBooks({
    q,
    filter = "full",
    maxResults = 16,
    startIndex = 0,
  }: GetBooksParams): Promise<AxiosResponse<BooksResponse>> {
    console.log(startIndex);
    return api.get("/volumes", {
      params: {
        q,
        startIndex,
        filter,
        maxResults,
      },
    });
  },
  getBookById(bookId: string): Promise<AxiosResponse<Book>> {
    return api.get(`/volumes/${bookId}`);
  },
};
