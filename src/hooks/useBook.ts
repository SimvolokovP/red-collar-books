import { useEffect, useState } from "react";
import type { Book } from "../models/booksModels";
import { booksApi } from "../api/booksApi/booksApi";

export function useBook(bookId: string | undefined) {
  const [book, setBook] = useState<Book | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const fetchBook = async (id: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await booksApi.getBookById(id);
      setBook(res.data);
    } catch (err) {
      setError("Failed to fetch book details");
      console.error("Error fetching book:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (bookId) {
      fetchBook(bookId);
    }
  }, [bookId]);

  return { book: book || null, isLoading, error };
}
