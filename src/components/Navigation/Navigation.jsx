import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const makeNavLinkStyles = ({ isActive }) => {
  return isActive ? styles.activeLink : styles.link;
};

const Navigation = () => (
  <nav>
    <NavLink to="/" className={makeNavLinkStyles}>
      Homepage
    </NavLink>
    <NavLink to="/authors" className={makeNavLinkStyles}>
      Authors
    </NavLink>
    <NavLink to="/books" className={makeNavLinkStyles}>
      Books
    </NavLink>
  </nav>
);

export default Navigation;
