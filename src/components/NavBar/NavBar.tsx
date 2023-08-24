import React from 'react';
import styles from './NavBar.module.css';

interface NavBarProps {
  navBarItems: string[];
}
function NavBar({ navBarItems }: NavBarProps) {
  return (
    <div className={styles['navbar']}>
      <div className={styles['hamburger']}>
        <div className={styles['bar']}></div>
        <div className={styles['bar']}></div>
        <div className={styles['bar']}></div>
      </div>
      <ul className={styles['navbar-ul']}>
        {navBarItems.map((navBarItem, index) => (
          <li key={index} className={styles['navbar-li']}>
            {navBarItem}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
