import Button from '../components/Button/Button';

function Home() {
  return (
    <div>
      <div className="welcome-page">
        <div className="welcome-text">
          <h2>React Art Gallery</h2>
          <h3>Contemplating art from anywhere</h3>
          <Button children="Gallery Entry" type="button" color="primary" />
        </div>
      </div>
    </div>
  );
}

export default Home;
