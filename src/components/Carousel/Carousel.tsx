import styles from './Carousel.module.css';
import { useState, useEffect } from 'react';

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
      src: 'https://www.artic.edu/iiif/2/c047003a-949c-a581-7c5a-2c415e8cac75/full/1686,/0/default.jpg',
      alt: 'Image 3 Carousel',
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  // const [autoSlide, setAutoSlide] = useState(true);
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + items.length) % items.length);
  };
  // useEffect(() => {
  //   let slideInterval: number;
  //   if (autoSlide) {
  //     slideInterval = setInterval(() => {
  //       setCurrentSlide((prevSlide) => (prevSlide + 1) % items.length);
  //     }, 4000);
  //   }

  //   return () => clearInterval(slideInterval);
  // }, [autoSlide]);

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
