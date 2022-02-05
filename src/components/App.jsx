import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
// import HomeView from '../views/HomeView';
// import AuthorsView from '../views/AuthorsView';
// import AuthorSubView from '../views/AuthorSubView';
// import BooksView from '../views/BooksView';
// import BookDetailsView from '../views/BookDetailsView';
// import NotFoundView from '../views/NotFoundView';

const HomeView = lazy(() => import('../views/HomeView'));
const AuthorsView = lazy(() => import('../views/AuthorsView'));
const AuthorSubView = lazy(() => import('../views/AuthorSubView'));
const BooksView = lazy(() => import('../views/BooksView'));
const BookDetailsView = lazy(() => import('../views/BookDetailsView'));
const NotFoundView = lazy(() => import('../views/NotFoundView'));

export default function App() {
  return (
    <>
      <Suspense fallback={<div>LOADING ASYNC CHUNK</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeView />} />
            <Route path="authors" element={<AuthorsView />}>
              <Route path=":authorId" element={<AuthorSubView />} />
            </Route>
            <Route path="books" element={<BooksView />} />
            <Route path="books/:bookId" element={<BookDetailsView />} />
            <Route path="*" element={<NotFoundView />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
