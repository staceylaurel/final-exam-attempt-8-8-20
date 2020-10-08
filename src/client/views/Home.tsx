import * as React from "react";
import BooksCard from "../components/BooksCard";
import { IBook } from "../types";

const Home: React.FC<HomeProps> = (props) => {
  const [books, setBooks] = React.useState<IBook[]>([]);

  React.useEffect(() => {
    (async () => {
      const res = await fetch("/api/books");
      const books = await res.json();
      setBooks(books);
    }) ();
  }, []);

  return (
    <div>
      <h1 className="d-flex justify-content-center text-warning">
        It's a bookstore!
      </h1>
      <main className="container background-color">
        <section className="row justify-content-center mt-3">
          {books.map((book) => {
            return <BooksCard key={`book-preview-${book.id}`} book={book} />;
          })}
        </section>
      </main>
    </div>
  );
};

interface HomeProps {}

export default Home;
