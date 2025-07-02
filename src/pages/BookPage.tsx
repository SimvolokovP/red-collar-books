import { useParams } from "react-router-dom";
import { BookDescr } from "../components/BookDescr";
import { PageHeaderLayout } from "../layouts/PageHeaderLayout";
import { PageLayout } from "../layouts/PageLayout";
import { useBook } from "../hooks/useBook";
import { Loader } from "../components/Loader";
import { ErrorBlock } from "../components/ErrorBlock";

export function BookPage() {
  const { bookId } = useParams();

  const { book, isLoading, error } = useBook(bookId);

  return (
    <div>
      <PageLayout
        header={
          <PageHeaderLayout
            title="Страница книги"
            description="Полная информация о произведении: описание, авторы, количество страниц и тд. Узнайте все детали о книге."
          />
        }
      >
        {isLoading && <Loader />}
        {error && <ErrorBlock error={error} />}
        <BookDescr book={book} />
      </PageLayout>
    </div>
  );
}
