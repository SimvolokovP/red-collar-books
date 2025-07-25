import { useParams } from "react-router-dom";
import { BookDescr } from "../components/BookDescr";
import { PageHeaderLayout } from "../layouts/PageHeaderLayout";
import { PageLayout } from "../layouts/PageLayout";
import { useBook } from "../hooks/useBook";
import { Loader } from "../components/Loader";
import { ErrorBlock } from "../components/ErrorBlock";
import { useFavoriteBooksStore } from "../store/useFavoriteBooksStore";
import { useEffect } from "react";
import { useToast } from "../hooks/useToast";

export function BookPage() {
  const { bookId } = useParams();

  const { book, isLoading, error } = useBook(bookId);

  const { isFavorite, addToFavorites, removeFromFavorites } =
    useFavoriteBooksStore();

  const bookIsFavorite = isFavorite(book?.id);

  const { showToast } = useToast();

  const handleClick = () => {
    if (book) {
      if (bookIsFavorite) {
        removeFromFavorites(book?.id);
        showToast(
          `Книга "${book.volumeInfo.title}" удалена из избранного`,
          "success"
        );
      } else {
        addToFavorites(book);
        showToast(
          `Книга "${book.volumeInfo.title}" добавлена в избранное`,
          "success"
        );
      }
    }
  };

  useEffect(() => {
    if (error) {
      showToast(
        "Не удалось загрузить информацию о книге. Попробуйте позже",
        "error"
      );
    }
  }, [error]);

  return (
    <div>
      <PageLayout
        header={
          <PageHeaderLayout
            title="Страница книги"
            description="Полная информация о произведении: описание, авторы, количество страниц и тд. Узнайте все детали о книге."
            actions={
              <button
                className="bg-dark text-secondary p-[4px] text-center rounded-xl cursor-pointer w-full"
                onClick={handleClick}
              >
                {bookIsFavorite
                  ? "Удалить из избранного"
                  : "Добавить в избранное"}
              </button>
            }
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
