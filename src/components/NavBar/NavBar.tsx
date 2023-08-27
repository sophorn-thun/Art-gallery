import React from 'react';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

interface NavBarProps {
  navBarItems: string[];
}
function NavBar({ navBarItems }: NavBarProps) {
  return (
    <header className={styles['header']}>
      <nav className={styles['navbar']}>
        <div className={styles['hamburger']}>
          <div className={styles['bar']}></div>
          <div className={styles['bar']}></div>
          <div className={styles['bar']}></div>
        </div>
        <ul className={styles['navbar-ul']}>
          {navBarItems.map((navBarItem, index) => (
            <li key={index} className={styles['navbar-li']}>
              <Link to={`/${navBarItem}`} className={styles['navbar-a']}>
                {navBarItem}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
