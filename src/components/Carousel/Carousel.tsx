import styles from './Carousel.module.css';
import { useState } from 'react';

function Carousel() {
  const items = [
    {
      src: 'https://cdn.pixabay.com/photo/2017/12/28/16/18/bicycle-3045580_1280.jpg',
      alt: 'Image 1 Carousel',
    },
    {
      src: 'https://cdn.pixabay.com/photo/2017/08/10/02/05/tiles-shapes-2617112_1280.jpg',
      alt: 'Image 2 Carousel',
    },
    {
      src: 'https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg',
      alt: 'Image 3 Carousel',
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + items.length) % items.length);
  };

  return (
    <div className={styles['carousel']}>
      <button onClick={prevSlide} className={styles['button-left']}>
        &lt;
      </button>
      <div className={styles['inner']}>
        {items.map((item, index) => (
          <div
            className={styles['carousel-item']}
            key={index}
            style={{ display: currentSlide === index ? 'block' : 'none' }}
          >
            <img className={styles['carousel-img']} src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className={styles['button-right']}>
        &gt;
      </button>
    </div>
  );
}

export default Carousel;
