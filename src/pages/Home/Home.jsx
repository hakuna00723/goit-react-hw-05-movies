import { useEffect, useState } from 'react';
import { getPopularMovies } from '../../services/FetchAPI';
import { useLocation } from 'react-router-dom';
import { MovieList } from '../../components/MovieList/MovieList';
import css from './Home.module.css';
import Loader from '../../components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const { films } = await getPopularMovies();
        setMovies(films);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <h1 className={css.title}>Trending today</h1>
      {loading ? (
        <Loader />
      ) : (
        movies.length > 0 && <MovieList movies={movies} location={location} />
      )}
    </>
  );
};

export default Home;
