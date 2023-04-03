import { useEffect, useState } from 'react';
import { getMoviesById } from '../../services/FetchAPI';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';
import Loader from '../../components/Loader/Loader';
import MovieDetailsInfo from './MovieDetailsInfo';
import MovieDetailsAdditionalInfo from './MovieDetailsAdditionalInfo';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchDataId = async () => {
      try {
        const film = await getMoviesById(movieId);
        setMovie(film);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDataId();
  }, [movieId]);

  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Link className={css.button} to={backLinkHref}>
            &#8592; Go back
          </Link>
          <MovieDetailsInfo movie={movie} />
          <MovieDetailsAdditionalInfo backLinkHref={backLinkHref} />
          <Outlet />
        </div>
      )}
    </>
  );
};

export default MovieDetails;
