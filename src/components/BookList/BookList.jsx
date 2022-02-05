import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BookList = ({ books }) => {
  const location = useLocation();

  return (
    <ul>
      {books.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/books/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
