import css from './MovieList.module.css';
import { NavLink } from 'react-router-dom';

export const MovieList = ({ movies, location }) => {
  return (
    <ul className={css.list}>
      {movies.map(({ id, title }) => {
        return (
          <li key={id} className={css.item}>
            <NavLink
              className={css.navLink}
              to={`/movies/${id}`}
              state={{ from: location }}
            >
              {title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
