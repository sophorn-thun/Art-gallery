import './App.css';
import Aside from './components/Filter/Aside';
import Footer from './components/Footer/Footer';
import ArtGrid from './components/ArtGrid/ArtGrid';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <div className="welcome-page">
        <div className="welcome-text">
          <h2>React Art Gallery</h2>
          <h3>Contemplating art from anywhere</h3>
          <button className="welcome-button">Gallery Entry</button>
        </div>
      </div>
      <NavBar />
      <Aside />
      <ArtGrid />
      <Footer
        firstPara="This is front-end project using React and Typescripts."
        secondPara="Images are obtained from Chicago Art Institute's public API."
      />
    </div>
  );
}

export default App;
