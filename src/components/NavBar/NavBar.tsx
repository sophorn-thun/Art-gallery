import { useState } from 'react';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

interface NavBarProps {
  navBarItems: string[];
  onClick: () => void;
}

function NavBar({ navBarItems, onClick }: NavBarProps) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const handleHamburgerClick = () => {
    setHamburgerOpen(!hamburgerOpen);
    if (onClick) {
      onClick();
    }
  };

  return (
    <header className={styles['header']}>
      <nav className={styles['navbar']}>
        <div className={styles['hamburger']} onClick={handleHamburgerClick}>
          <div className={styles['bar']}></div>
          <div className={styles['bar']}></div>
          <div className={styles['bar']}></div>
        </div>
        <ul className={`${styles['navbar-ul']} ${hamburgerOpen ? styles['open'] : ''}`}>
          {navBarItems.map((navBarItem, index) => (
            <li
              key={index}
              className={`${styles['navbar-li']} ${hamburgerOpen ? styles['open'] : ''}`}
            >
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
