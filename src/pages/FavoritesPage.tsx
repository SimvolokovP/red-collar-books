import { BooksList } from "../components/BooksList";
import { PageHeaderLayout } from "../layouts/PageHeaderLayout";
import { PageLayout } from "../layouts/PageLayout";
import { useFavoriteBooksStore } from "../store/useFavoriteBooksStore";

export function FavoritesPage() {
  const books = useFavoriteBooksStore((state) => state.favoriteBooks);

  return (
    <div>
      <PageLayout
        header={
          <PageHeaderLayout
            title="Избранное"
            description="Ваша личная коллекция. Здесь хранятся отмеченные книги, которые вы хотите прочитать или сохранить для будущего."
          />
        }
      >
        <BooksList books={books} />
      </PageLayout>
    </div>
  );
}
