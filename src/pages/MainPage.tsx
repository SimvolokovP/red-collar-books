import { BooksList } from "../components/BooksList";
import { PageHeaderLayout } from "../layouts/PageHeaderLayout";
import { PageLayout } from "../layouts/PageLayout";
import { Dropdown } from "../UI/Dropdown";
import { Input } from "../UI/Input";
import { useBooksFilters, type FilterType } from "../hooks/useBooksFilters";
import { useInfinityBookList } from "../hooks/useInfinityBookList";
import { ErrorBlock } from "../components/ErrorBlock";
import { Loader } from "../components/Loader";
import { useDebouncedValue } from "../hooks/useDebouncedValue";
import { useToast } from "../hooks/useToast";
import { useEffect } from "react";

const filterItems = [
  { label: "Paid Google eBooks", value: "paid-ebooks" },
  { label: "All Google eBooks", value: "ebooks" },
  { label: "Free Google eBooks", value: "free-ebooks" },
  { label: "Parts of text", value: "partial" },
  { label: "Full", value: "full" },
];

export function MainPage() {
  const { query, setQuery, filter, setFilter } = useBooksFilters();

  const { books, cursorRef, isLoadingNextPage, error, isLoading, hasMore } =
    useInfinityBookList({
      query: useDebouncedValue(query, 500),
      filter,
      pageSize: 16,
    });

  const { showToast } = useToast();

  useEffect(() => {
    if (error) {
      showToast("Не удалось загрузить книги. Попробуйте позже", "error");
    }
  }, [error]);

  return (
    <div>
      <PageLayout
        header={
          <PageHeaderLayout
            title="Главная"
            description="Исследуйте мир литературы - тысячи книг на любой вкус. Удобный поиск и фильтры помогут найти именно то, что вам нужно."
            actions={
              <div className="flex items-center gap-[16px] flex-col md:flex-row w-full">
                <Input
                  className="w-full md:w-[240px]"
                  placeholder="Поиск.."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <Dropdown
                  className="w-full md:w-[240px]"
                  placeholder="Выбрать фильтр"
                  options={filterItems}
                  onChange={(e) => setFilter(e as FilterType)}
                  value={filter as FilterType}
                  isClearBtn
                />
              </div>
            }
          />
        }
      >
        {error && <ErrorBlock error={error} isMainPage />}
        {isLoading && <Loader />}
        <BooksList books={books} isLoading={isLoading} />
        {hasMore && (
          <div ref={cursorRef} className="h-10">
            {isLoadingNextPage && hasMore && (
              <div className="text-center text-[24px] font-bold">
                Loading more books...
              </div>
            )}
          </div>
        )}
      </PageLayout>
    </div>
  );
}
