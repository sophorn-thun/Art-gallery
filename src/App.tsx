import './App.css';
import Aside from './components/Aside';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Main from './components/Main';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Carousel />
      <NavBar />
      <Aside />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
