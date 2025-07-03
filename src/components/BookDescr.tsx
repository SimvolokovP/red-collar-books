import type { Book } from "../models/booksModels";
import { useFavoriteBooksStore } from "../store/useFavoriteBooksStore";

interface BookDescrProps {
  book?: Book | null;
}

export function BookDescr({ book }: BookDescrProps) {
  const { isFavorite, addToFavorites, removeFromFavorites } =
    useFavoriteBooksStore();

  const bookIsFavorite = isFavorite(book?.id);

  const handleClick = () => {
    if (book) {
      if (bookIsFavorite) {
        removeFromFavorites(book?.id);
      } else {
        addToFavorites(book);
      }
    }
  };

  return (
    <>
      {book && (
        <div className="flex w-full gap-[16px]">
          <div className="bg-secondary p-[8px] shadow rounded-xl min-w-[300px] text-center flex flex-col gap-[8px] items-center">
            <div>
              <img
                className="h-[250px] boxShadow rounded-xl block"
                src={
                  book?.volumeInfo.imageLinks?.thumbnail ||
                  "/book-placeholder.jpg"
                }
                alt={book?.volumeInfo.title}
              />
            </div>
            <button
              className="bg-dark text-secondary p-[4px] text-center rounded-xl cursor-pointer w-full"
              onClick={handleClick}
            >
              {bookIsFavorite
                ? "Удалить из избранного"
                : "Добавить в избранное"}
            </button>
          </div>
          <div className="flex flex-col gap-[16px]">
            <div className="bg-secondary p-[8px] rounded-xl shadow">
              <h3 className="text-[24px]">{book?.volumeInfo.title}</h3>
              <ul className="w-full text-left mb-[8px]">
                {book &&
                  book.volumeInfo.authors?.map((author) => (
                    <li className="text-[16px]" key={author}>
                      {author}
                    </li>
                  ))}
              </ul>
              <p className="text-[16px]">{book?.volumeInfo.description}</p>
            </div>
            <div className="bg-secondary p-[8px] rounded-xl shadow">
              <ul className="w-full flex flex-wrap gap-[16px]">
                <li className="flex items-center gap-[8px]">
                  <div className="text-[14px] font-bold">Дата публикации:</div>
                  <div className="text-[14px]">
                    {book?.volumeInfo.publishedDate}
                  </div>
                </li>
                <li className="flex items-center gap-[8px]">
                  <div className="text-[14px] font-bold">
                    Количество страниц:
                  </div>
                  <div className="text-[14px]">
                    {book?.volumeInfo.pageCount}
                  </div>
                </li>
                <li className="flex items-center gap-[8px]">
                  <div className="text-[14px] font-bold">Издатель:</div>
                  <div className="text-[14px]">
                    {book?.volumeInfo.publisher}
                  </div>
                </li>
                <li className="flex items-center gap-[8px]">
                  <div className="text-[14px] font-bold">Язык:</div>
                  <div className="text-[14px]">{book?.volumeInfo.language}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
