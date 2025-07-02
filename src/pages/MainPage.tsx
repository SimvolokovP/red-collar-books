import { useEffect, useState } from "react";
import { booksApi } from "../api/booksApi/booksApi";
import type { Book } from "../models/booksModels";

export function MainPage() {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async () => {
    const res = await booksApi.searchBooks("React");
    console.log(res);
    console.log(res.data.items);
    setBooks(res.data.items);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <div>
        {books.map((book) => (
          <div key={book.id}>{book.volumeInfo.title}</div>
        ))}
      </div>
    </div>
  );
}
