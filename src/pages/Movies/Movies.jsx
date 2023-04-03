import { useEffect, useState } from 'react';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import { getMovieByQuery } from '../../services/FetchAPI';
import { useLocation, useSearchParams } from 'react-router-dom';
import { MovieList } from '../../components/MovieList/MovieList';
import { Notify } from 'notiflix';
import Loader from '../../components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const searchRequest = searchParams.get('query');

  useEffect(() => {
    if (!searchRequest) return;
    setLoading(true);
    const fetchName = async () => {
      try {
        const film = await getMovieByQuery(searchRequest);
        if (!film.length) {
          return Notify.failure(
            'Sorry, there are no films matching your search query. Please try again.'
          );
        }
        setMovies(film);
      } catch (error) {
        Notify.failure('Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchName();
  }, [searchRequest]);
  return (
    <>
      <Searchbar />
      {loading ? <Loader /> : <MovieList movies={movies} location={location} />}
    </>
  );
};

export default Movies;
