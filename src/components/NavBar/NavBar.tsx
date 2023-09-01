import { useState } from 'react';
import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

interface NavBarProps {
  navBarItems: string[];
}

function NavBar({ navBarItems }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCrossed, setIsCrossed] = useState(false);

  return (
    <header className={styles['header']}>
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
              <NavLink to={`/${navBarItem}`} className={styles['navbar-a']}>
                {navBarItem}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
