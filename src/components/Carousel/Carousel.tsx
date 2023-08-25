import styles from './Carousel.module.css';
import React from 'react';

interface imagesProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  images: string[];
}
function Carousel({ images, ...rest }: imagesProps) {
  return (
    <div className={styles['carousel']}>
      <button className={styles['button-left']}>&lt;</button>
      {images.map((image, index) => (
        <img src={image} {...rest} key={index} />
      ))}
      <button className={styles['button-right']}>&gt;</button>
    </div>
  );
}

export default Carousel;
