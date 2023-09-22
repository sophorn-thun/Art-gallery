import React, { useContext } from 'react';
import Home from './pages/HomePage/Home';
import Artwork from './pages/ArtworkPage/Artwork';
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUpPage/SignUp';
import LogIn from './pages/LogInPage/LogIn';
import Shop from './pages/ShopPage/Shop';
import ArtCardPage from './pages/ArtCardPage/ArtCardPage';
import MemberPage from './pages/MemberPage/MemberPage';
import NavBar from './components/Header/Header';
import useGlobalState from './context/UseGlobalState';
import './App.css';

function App() {
  const globalState = useGlobalState();
  const { state } = globalState;

  const loggedInNavBarItems = ['Home', 'Artwork', 'MemberPage'];
  const defaultNavBarItems = ['Home', 'Artwork', 'LogIn'];

  return (
    <div className="App">
      <NavBar navBarItems={state.loggedIn ? loggedInNavBarItems : defaultNavBarItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Artwork" element={<Artwork />} />
        <Route path="/Artwork/:id" element={<ArtCardPage />} />
        <Route path="/Login" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/MemberPage" element={<MemberPage />} />
      </Routes>
    </div>
  );
}

export default App;
