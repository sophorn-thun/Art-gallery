import './App.css';
import Accordion from './components/Accordion/Accordion';
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
      <Accordion
        defaultPanel="Sort"
        defaultPanelOption1="By Date"
        defaultPanelOption2="By Artist"
        defaultPanelOption3="By Title"
        firstPanel="Artist"
        firstPanelOption1="Ancient Roman"
        firstPanelOption2="Ancient Greek"
        firstPanelOption3="Unknown Artist"
        secondPanel="Artwork Types"
        secondPanelOption1="Cityscape"
        secondPanelOption2="Animals"
        secondPanelOption3="Essentials"
        thirdPanel="Styles"
        thirdPanelOption1="Japanese Culture"
        thirdPanelOption2="21st Century"
        thirdPanelOption3="19th Century"
      />
      <ArtGrid />
      <Footer
        firstPara="This is front-end project using React and Typescripts."
        secondPara="Images are obtained from Chicago Art Institute's public API."
      />
    </div>
  );
}

export default App;
