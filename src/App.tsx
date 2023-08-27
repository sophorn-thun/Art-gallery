import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar';
import Artwork from './pages/Artwork';
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import About from './pages/About';

const navBarList = ['Home', 'Artwork', 'Shop Souvenir', 'SignUp', 'LogIn'];

function App() {
  return (
    <div className="App">
      <NavBar navBarItems={navBarList} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Artwork" element={<Artwork />} />
        <Route path="/About" element={<About />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
