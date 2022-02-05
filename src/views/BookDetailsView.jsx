import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageHeading from '../components/PageHeading/PageHeading';
import Loader from '../components/Loader/Loader';
import * as bookShelfAPI from '../services/bookshelf-api';

export default function BookDetailsView() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    bookShelfAPI
      .fetchBookById(bookId)
      .then(setBook)
      .finally(() => setIsLoading(false));
  }, [bookId]);

  return (
    <>
      <PageHeading text={`Book wit id ${bookId}`} />
      {isLoading && <Loader size="xl" />}
      {book && (
        <>
          <img src={book.imgUrl} alt={book.title} />
          <h2>{book.title}</h2>
          <p>Автор: {book.author.name}</p>
          <p>{book.descr}</p>
        </>
      )}
    </>
  );
}
