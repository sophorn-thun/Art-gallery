import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar';
import Artwork from './pages/Artwork';
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Shop from './pages/Shop';

const navBarList = ['Home', 'Artwork', 'Shop', 'SignUp', 'LogIn'];

function App() {
  return (
    <div className="App">
      <NavBar navBarItems={navBarList} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Artwork" element={<Artwork />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
