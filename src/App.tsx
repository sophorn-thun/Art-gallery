import './App.css';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Main from './components/Main';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Aside />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
