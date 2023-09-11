import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar';
import Artwork from './pages/Artwork';
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Shop from './pages/Shop';
import ArtCardPage from './pages/ArtCardPage/ArtCardPage';

const navBarList = ['Home', 'Artwork', 'Shop', 'LogIn'];

function App() {
  return (
    <div className="App">
      <NavBar navBarItems={navBarList} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Artwork" element={<Artwork />} />
        <Route path="/Artwork/:id" element={<ArtCardPage />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Login" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
