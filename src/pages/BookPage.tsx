import { useParams } from "react-router-dom";
import { BookDescr } from "../components/BookDescr";
import { PageHeaderLayout } from "../layouts/PageHeaderLayout";
import { PageLayout } from "../layouts/PageLayout";
import { useBook } from "../hooks/useBook";

export function BookPage() {
  const { bookId } = useParams();

  const { book, isLoading } = useBook(bookId);

  return (
    <div>
      <PageLayout
        header={
          <PageHeaderLayout
            title="Страница книги"
            description="Избранные книги"
          />
        }
      >
        {isLoading && <div>Load..</div>}
        <BookDescr book={book} />
      </PageLayout>
    </div>
  );
}
