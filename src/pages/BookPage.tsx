import { useParams } from "react-router-dom";
import { BookDescr } from "../components/BookDescr";
import { PageHeaderLayout } from "../layouts/PageHeaderLayout";
import { PageLayout } from "../layouts/PageLayout";

export function BookPage() {
  const { bookId } = useParams();

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
        <BookDescr bookId={bookId} />
      </PageLayout>
    </div>
  );
}
