import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';

import styles from './HomePage.module.css';

function Home() {
  return (
    <div className={styles['home-page']}>
      <div className={styles['welcome-text']}>
        <h1 className={styles['typingWelcome']}>Welcome</h1>
        <h1 className={styles['fadeInScale']}>Virtual Art Gallery</h1>
      </div>
    </div>
  );
}

export default Home;
