import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ books }) => {
  return (
    <ul>
      {books.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/books/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
