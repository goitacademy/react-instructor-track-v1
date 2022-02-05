import { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import PageHeading from '../components/PageHeading/PageHeading';
import * as bookShelfAPI from '../services/bookshelf-api';

export default function AuthorsView() {
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    bookShelfAPI.fetchAuthors().then(setAuthors);
  }, []);

  return (
    <>
      <PageHeading text="Authors" />
      {authors && (
        <ul>
          {authors.map(author => (
            <li key={author.id}>
              <NavLink to={`${author.id}`}>{author.name}</NavLink>
            </li>
          ))}
        </ul>
      )}
      <hr />
      <Outlet />
    </>
  );
}
