import { useContext, useState } from 'react';
import styles from './Header.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { GlobalStateContext } from '../../context/GlobalState';

interface NavBarProps {
  navBarItems: string[];
}

function NavBar({ navBarItems }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCrossed, setIsCrossed] = useState(false);

  const navigate = useNavigate();
  const globalState = useContext(GlobalStateContext);

  if (!globalState) {
    throw new Error('NavBar must be used within a GlobalStateContext');
  }
  const { state, setState } = globalState;

  const handleLogOut = () => {
    setState({ ...state, loggedIn: false });
    navigate('/Home');
  };

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
          {!state.loggedIn ? (
            <li className={styles['navbar-li']}>
              <NavLink
                to={`/SignUp`}
                className={({ isActive }) =>
                  isActive
                    ? `${styles['navbar-a-signup']} ${styles.active}`
                    : styles['navbar-a-signup']
                }
              >
                Sign Up
              </NavLink>
            </li>
          ) : (
            <li className={styles['navbar-li']}>
              <button onClick={handleLogOut} className={styles['navbar-a-logout']}>
                Log Out
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
