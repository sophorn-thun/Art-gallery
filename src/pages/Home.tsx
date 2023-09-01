import Carousel from '../components/Carousel/Carousel';

function Home() {
  return (
    <div>
      <div className="welcome-page">
        <div className="welcome-text">
          <h1>Virtual Art Gallery</h1>
          <h2>Contemplating art from anywhere</h2>
        </div>
      </div>
      <Carousel />
    </div>
  );
}

export default Home;
