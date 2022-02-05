import { useState, useEffect } from 'react';
import PageHeading from '../components/PageHeading/PageHeading';
import BookList from '../components/BookList/BookList';
import * as bookShelfAPI from '../services/bookshelf-api';

export default function BooksView() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    bookShelfAPI.fetchBooks().then(setBooks);
  }, []);

  return (
    <>
      <PageHeading text="Books" />
      {books && <BookList books={books} />}
    </>
  );
}
