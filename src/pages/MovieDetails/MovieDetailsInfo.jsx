import css from './MovieDetails.module.css';

const MovieDetailsInfo = ({ movie }) => {
  return (
    <div className={css.container}>
      <img className={css.img} src={movie.poster_path} alt={movie.name} />
      <div className={css.movieDetails}>
        <h1 className={css.title}>{movie.title}</h1>
        <ul className={css.infoList}>
          <li className={css.infoItem}>
            <p className={css.infoName}>Vote / Votes</p>
            <p className={css.infoText}>
              <span className={css.spanVotes}>{movie.vote_average}</span>
              <span className={css.spanSlash}> / </span>
              <span className={css.spanVotes}>{movie.vote_count}</span>
            </p>
          </li>
          <li className={css.infoItem}>
            <p className={css.infoName}>Popularity</p>
            <p className={css.infoText}>{movie.popularity}</p>
          </li>

          <li className={css.infoItem}>
            <p className={css.infoName}>Original Title</p>
            <p className={css.infoText}>{movie.original_title}</p>
          </li>

          <li className={css.infoItem}>
            <p className={css.infoName}>Genre</p>
            <p className={css.infoText}>{movie.genres}</p>
          </li>
        </ul>
        <p className={css.infoName}>Overview</p>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetailsInfo;
