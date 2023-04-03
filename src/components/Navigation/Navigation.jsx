import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  padding: 8px 20px;
  color: black;
  text-decoration: none;
  margin-left: 30px;

  &:hover,
  :focus {
    background-color: grey;
    color: black;
  }

  &.active {
    text-decoration: none;
    background-color: darkslategrey;
    font-weight: 700;
  }
`;

const Navigation = () => {
  return (
    <nav>
      <StyledLink to="/"> Home</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
    </nav>
  );
};

export default Navigation;
