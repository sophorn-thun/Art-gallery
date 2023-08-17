import logo from '../assets/logo.png';
import SearchInput from './SearchInput';

function NavBar() {
  return (
    <div className="navbar">
      <img src={logo}></img>
      <SearchInput />
    </div>
  );
}

export default NavBar;
