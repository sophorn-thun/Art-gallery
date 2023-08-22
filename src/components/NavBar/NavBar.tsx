import logo from '../../assets/logo.png';
import SearchInput from '../Search/SearchInput';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <div className={styles['navbar']}>
      <img src={logo}></img>
      <SearchInput />
    </div>
  );
}

export default NavBar;
