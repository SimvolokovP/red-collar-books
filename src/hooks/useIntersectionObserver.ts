import { useCallback } from "react";

interface UseIntersectionObserverParams {
  callback: () => void;
  hasMore: boolean;
  threshold?: number;
}

export function useIntersectionObserver({
  callback,
  hasMore,
  threshold = 0.1,
}: UseIntersectionObserverParams) {
  const observerRef = useCallback(
    (node: HTMLElement | null) => {
      if (!node) return;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            callback();
          }
        },
        { threshold }
      );

      observer.observe(node);

      return () => {
        observer.disconnect();
      };
    },
    [callback, hasMore, threshold]
  );

  return observerRef;
}
