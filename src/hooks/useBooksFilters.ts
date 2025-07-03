import { useState } from "react";

type FilterType = "ebooks" | "free-ebooks" | "full" | "paid-ebooks" | "partial";

export function useBooksFilters() {
  const [query, setQuery] = useState<string>("React");
  const [filter, setFilter] = useState<FilterType | null>(null);

  return { query, setQuery, filter, setFilter };
}
