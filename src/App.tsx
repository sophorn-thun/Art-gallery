import Home from './pages/HomePage/Home';
import About from './pages/AboutPage/About';
import Artwork from './pages/ArtworkPage/Artwork';
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUpPage/SignUp';
import LogIn from './pages/LogInPage/LogIn';
import Quiz from './pages/GamePage/Game';
import NotFound from './pages/NotFoundPage/NotFound';
import ArtCardPage from './pages/ArtCardPage/ArtCardPage';
import MemberPage from './pages/MemberPage/MemberPage';
import NavBar from './components/Header/Header';
import useGlobalState from './context/UseGlobalState';

import './App.css';

function App() {
  const globalState = useGlobalState();
  const { state } = globalState;

  const loggedInNavBarItems = ['Home', 'About', 'Artwork', 'Quiz', 'Collection'];
  const defaultNavBarItems = ['Home', 'About', 'Artwork', 'Quiz', 'LogIn'];

  return (
    <div className="App">
      <div className="header">
        <NavBar navBarItems={state.loggedIn ? loggedInNavBarItems : defaultNavBarItems} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Artwork" element={<Artwork />} />
        <Route path="/Artwork/:id" element={<ArtCardPage />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Login" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Collection" element={<MemberPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
