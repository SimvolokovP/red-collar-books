import { useParams } from "react-router-dom";
import { BookDescr } from "../components/BookDescr";
import { PageHeaderLayout } from "../layouts/PageHeaderLayout";
import { PageLayout } from "../layouts/PageLayout";
import { useBook } from "../hooks/useBook";
import { Loader } from "../components/Loader";

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
        {isLoading && <Loader />}
        <BookDescr book={book} />
      </PageLayout>
    </div>
  );
}
