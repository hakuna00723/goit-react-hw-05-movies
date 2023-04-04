import Navigation from '../Navigation/Navigation';
import css from './Header.module.css';
import { Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className={css.header}>
        <Navigation />
      </header>
      <Outlet />
    </>
  );
};

export default Header;
