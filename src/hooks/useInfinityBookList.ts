import { useState, useCallback, useRef, useEffect } from "react";
import type { FilterType } from "./useBooksFilters";
import type { Book } from "../models/booksModels";
import { booksApi } from "../api/booksApi/booksApi";

interface UseInfinityBookListParams {
  query?: string;
  filter?: FilterType | null;
  pageSize?: number;
}

export function useInfinityBookList({
  filter = null,
  query = "",
  pageSize = 16,
}: UseInfinityBookListParams) {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingNextPage, setIsLoadingNextPage] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const currentPageRef = useRef(0);

  const fetchBooks = useCallback(
    async (startIndex: number = 0) => {
      const isInitialLoad = startIndex === 0;
      try {
        if (isInitialLoad) {
          setIsLoading(true);
        } else {
          setIsLoadingNextPage(true);
        }

        const res = await booksApi.getBooks({
          q: query,
          filter,
          startIndex,
          maxResults: pageSize,
        });

        setHasMore(res.data.items.length === pageSize);

        if (isInitialLoad) {
          setBooks(res.data.items);
        } else {
          setBooks((prev) => [...prev, ...res.data.items]);
        }

        currentPageRef.current = startIndex / pageSize;
      } catch (err) {
        setError("Failed to fetch books");
        console.error("Error fetching books:", err);
      } finally {
        if (isInitialLoad) {
          setIsLoading(false);
        } else {
          setIsLoadingNextPage(false);
        }
      }
    },
    [query, filter, pageSize]
  );

  const fetchNextPage = useCallback(() => {
    if (!isLoading && !isLoadingNextPage && hasMore) {
      const nextStartIndex = (currentPageRef.current + 1) * pageSize;
      fetchBooks(nextStartIndex);
    }
  }, [fetchBooks, hasMore, isLoading, isLoadingNextPage, pageSize]);

  const resetBooks = useCallback(() => {
    setBooks([]);
    currentPageRef.current = 0;
    setHasMore(true);
    fetchBooks(0);
  }, [fetchBooks]);

  const cursorRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (!node) return;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            fetchNextPage();
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(node);

      return () => {
        observer.disconnect();
      };
    },
    [fetchNextPage, hasMore]
  );

  useEffect(() => {
    resetBooks();
  }, [query, filter, resetBooks]);

  return {
    books,
    isLoading,
    isLoadingNextPage,
    error,
    hasMore,
    cursorRef,
    resetBooks,
  };
}
