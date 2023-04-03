import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMoviesCast } from '../../services/FetchAPI';
import css from './Cast.module.css';
import Loader from '../Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchDataCast = async () => {
      try {
        const cast = await getMoviesCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDataCast();
  }, [movieId]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ul className={css.list}>
          {cast.map(({ id, name, character, profile_path }) => {
            return (
              <li key={id}>
                <img className={css.img} src={profile_path} alt={name} />
                <h2>{name}</h2>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Cast;
