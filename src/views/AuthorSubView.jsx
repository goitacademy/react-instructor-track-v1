import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookList from '../components/BookList/BookList';
import Loader from '../components/Loader/Loader';
import * as bookShelfAPI from '../services/bookshelf-api';

export default function AuthorSubView() {
  const { authorId } = useParams();
  const [author, setAuthor] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    bookShelfAPI
      .fetchAuthorById(authorId)
      .then(setAuthor)
      .finally(() => setIsLoading(false));
  }, [authorId]);

  return (
    <>
      {isLoading && <Loader size="lg" />}
      {author && !isLoading && (
        <>
          <h2>{author.name}</h2>
          <BookList books={author.books} />
        </>
      )}
    </>
  );
}
