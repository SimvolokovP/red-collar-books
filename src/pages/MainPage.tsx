import { BooksList } from "../components/BooksList";
import { PageHeaderLayout } from "../layouts/PageHeaderLayout";
import { PageLayout } from "../layouts/PageLayout";
import { Dropdown } from "../UI/Dropdown";
import { Input } from "../UI/Input";
import { useBooksFilters, type FilterType } from "../hooks/useBooksFilters";
import { useInfinityBookList } from "../hooks/useInfinityBookList";
import { ErrorBlock } from "../components/ErrorBlock";
import { Loader } from "../components/Loader";

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
      query,
      filter,
      pageSize: 16,
    });

  return (
    <div>
      <PageLayout
        header={
          <PageHeaderLayout
            title="Главная"
            description="Исследуйте мир литературы - тысячи книг на любой вкус. Удобный поиск и фильтры помогут найти именно то, что вам нужно."
            actions={
              <div className="flex items-center gap-[16px]">
                <Input
                  placeholder="Search.."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <Dropdown
                  className="min-w-[240px]"
                  placeholder="Filter.."
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
        <div ref={cursorRef} className="h-10">
          {isLoadingNextPage && hasMore && <div>Loading more books...</div>}
        </div>
      </PageLayout>
    </div>
  );
}
