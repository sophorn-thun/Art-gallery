import { useState } from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

interface NavBarProps {
  navBarItems: string[];
}

function NavBar({ navBarItems }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCrossed, setIsCrossed] = useState(false);

  return (
    <header className={styles['header']}>
      <div className={styles['logo-container']}>
        <div className={styles['logo']}></div>
      </div>
      <nav className={styles['navbar']}>
        <div
          className={styles['hamburger']}
          onClick={() => {
            setMenuOpen(!menuOpen);
            setIsCrossed(!isCrossed);
          }}
        >
          <div className={isCrossed ? styles.barFirst : styles.bar}></div>
          <div className={isCrossed ? styles.barSecond : styles.bar}></div>
          <div className={isCrossed ? styles.barThird : styles.bar}></div>
        </div>
        <ul className={menuOpen ? styles['open'] : ''}>
          {navBarItems.map((navBarItem, index) => (
            <li key={index} className={styles['navbar-li']}>
              <NavLink
                to={`/${navBarItem}`}
                className={({ isActive }) =>
                  isActive ? `${styles['navbar-a']} ${styles.active}` : styles['navbar-a']
                }
              >
                {navBarItem}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className={menuOpen ? styles['open'] : ''}>
          <li className={styles['navbar-li']}>
            <NavLink
              to={`/SignUp`}
              className={({ isActive }) =>
                isActive
                  ? `${styles['navbar-a-signup']} ${styles.active}`
                  : styles['navbar-a-signup']
              }
            >
              SignUp
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
