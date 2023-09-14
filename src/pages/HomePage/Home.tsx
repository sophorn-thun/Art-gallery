import Carousel from '../../components/Carousel/Carousel';
import styles from './HomePage.module.css';

function Home() {
  return (
    <>
      <div className={styles['welcome-page']}>
        <div className={styles['welcome-text']}>
          <h1>Virtual Art Gallery</h1>
          <h2>Contemplating art from anywhere</h2>
        </div>
        <Carousel />
      </div>
    </>
  );
}

export default Home;
