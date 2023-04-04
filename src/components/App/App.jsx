import { Route, Routes } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import { lazy, Suspense } from 'react';
import css from './App.module.css';
import Loader from '../Loader/Loader';

const HomePage = lazy(() => import('../../pages/Home/Home'));
const MoviesHomePage = lazy(() => import('../../pages/Movies/Movies'));
const MovieDetailsPage = lazy(() =>
  import('../../pages/MovieDetails/MovieDetails')
);
const CastPage = lazy(() => import('../Cast/Cast'));
const ReviewsPage = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <div className={css.container}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<HomePage />} />
            <Route path="/movies" element={<MoviesHomePage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<CastPage />} />
              <Route path="reviews" element={<ReviewsPage />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigation to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};
