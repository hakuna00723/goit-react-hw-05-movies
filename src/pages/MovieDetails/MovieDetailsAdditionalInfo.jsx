import css from './MovieDetails.module.css';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  &.active {
    color: darkslategrey;
  }
`;

const MovieDetailsAdditionalInfo = ({ backLinkHref }) => {
  return (
    <ul className={css.item}>
      <li>
        <StyledLink
          className={css.navLink}
          to="cast"
          state={{ from: backLinkHref }}
        >
          Cast
        </StyledLink>
      </li>
      <li>
        <StyledLink
          className={css.navLink}
          to="reviews"
          state={{ from: backLinkHref }}
        >
          Reviews
        </StyledLink>
      </li>
    </ul>
  );
};

export default MovieDetailsAdditionalInfo;
