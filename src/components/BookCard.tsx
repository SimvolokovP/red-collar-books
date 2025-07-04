import { Link } from "react-router-dom";
import { getShortText } from "../helpers/getShortText";
import type { Book } from "../models/booksModels";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { useFavoriteBooksStore } from "../store/useFavoriteBooksStore";
import { useToast } from "../hooks/useToast";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  const { isFavorite, addToFavorites, removeFromFavorites } =
    useFavoriteBooksStore();
  const bookIsFavorite = isFavorite(book.id);

  const { showToast } = useToast();

  const handleClick = () => {
    if (bookIsFavorite) {
      removeFromFavorites(book.id);
      showToast(`Книга "${book.volumeInfo.title}" удалена из избранного`, "success");
    } else {
      addToFavorites(book);
      showToast(`Книга "${book.volumeInfo.title}" добавлена в избранное`, "success");
    }
  };

  return (
    <article className="relative bg-secondary p-[8px] rounded-xl h-full shadow flex flex-col items-center">
      <button
        onClick={handleClick}
        className="absolute top-[8px] right-[8px] cursor-pointer border-1 rounded-full p-1 bg-secondary"
      >
        {bookIsFavorite ? (
          <IoMdHeart size={18} />
        ) : (
          <IoMdHeartEmpty size={18} />
        )}
      </button>
      <h3 className="w-full text-left mb-[16px]">{book.volumeInfo.title}</h3>
      <img
        className="boxShadow rounded-xl h-[180px] mb-[16px]"
        src={
          book.volumeInfo.imageLinks?.smallThumbnail || "/book-placeholder.jpg"
        }
        alt={book.volumeInfo.title}
      />
      <ul className="w-full text-left mb-[8px]">
        {book.volumeInfo.authors?.map((author) => (
          <li key={author}>{author}</li>
        ))}
      </ul>
      <p className="w-full text-left">
        {book.volumeInfo.description &&
          getShortText(book.volumeInfo.description, 72)}
        <Link className="font-bold" to={`/book/${book.id}`}>
          Подробнее
        </Link>
      </p>
    </article>
  );
}
