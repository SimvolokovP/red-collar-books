import type { Book } from "../models/booksModels";
import { BookCard } from "./BookCard";

interface BooksListProps {
  books: Book[];
}

export function BooksList({ books }: BooksListProps) {
  //   const [books, setBooks] = useState<Book[]>([]);

  //   const fetchBooks = async () => {
  //     const res = await booksApi.searchBooks("React");
  //     console.log(res);
  //     console.log(res.data.items);
  //     setBooks(res.data.items);
  //   };

  //   useEffect(() => {
  //     fetchBooks();
  //   }, []);

  const isLoading = false;

  return (
    <div>
      {books.length && !isLoading ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[6px]">
          {books.map((book) => (
            <li key={book.id}>
              <BookCard book={book} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center text-[24px] p-[8px]">Здесь ничего нет</div>
      )}
    </div>
  );
}
