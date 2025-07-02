import { Link } from "react-router-dom";
import { getShortText } from "../helpers/getShortText";
import type { Book } from "../models/booksModels";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <article className="bg-secondary p-[8px] rounded-xl h-full shadow flex flex-col items-center">
      <h3 className="w-full text-left mb-[16px]">{book.volumeInfo.title}</h3>
      <img
        className="boxShadow rounded-xl h-[180px] mb-[16px]"
        src={book.volumeInfo.imageLinks?.smallThumbnail}
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
        <Link className="font-bold" to={`/book/${book.id}`}>Подробнее</Link>
      </p>
    </article>
  );
}
