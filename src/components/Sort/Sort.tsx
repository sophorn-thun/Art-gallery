import { useState } from 'react';
import styles from './Sort.module.css';

interface SortProps {
  title: string;
  option1: string;
  option2: string;
  option3: string;
  onSortByDate?: (isActive: boolean) => void;
  onSortByTitle?: (isActive: boolean) => void;
  onSortByArtist?: (isActive: boolean) => void;
}

function Sort({
  title,
  option1,
  option2,
  option3,
  onSortByDate,
  onSortByTitle,
  onSortByArtist,
}: SortProps) {
  const [activeSort, setActiveSort] = useState<string | null>(null);

  const handleButtonClick = (sortType: string) => {
    const isActive = activeSort === sortType ? false : true;

    setActiveSort(isActive ? sortType : null);
    switch (sortType) {
      case 'date':
        onSortByDate && onSortByDate(isActive);
        break;
      case 'title':
        onSortByTitle && onSortByTitle(isActive);
        break;
      case 'artist':
        onSortByArtist && onSortByArtist(isActive);
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles['sort-container']}>
      <h2 className={styles['title']}> {title}</h2>
      <div className={styles['button-container']}>
        <button
          className={
            activeSort === 'date' ? `${styles['sort-button-active']}` : `${styles['sort-button']}`
          }
          onClick={() => handleButtonClick('date')}
        >
          {option1}
        </button>
        <button
          className={
            activeSort === 'title' ? `${styles['sort-button-active']}` : `${styles['sort-button']}`
          }
          onClick={() => handleButtonClick('title')}
        >
          {option2}
        </button>
        <button
          className={
            activeSort === 'artist' ? `${styles['sort-button-active']}` : `${styles['sort-button']}`
          }
          onClick={() => handleButtonClick('artist')}
        >
          {option3}
        </button>
      </div>
    </div>
  );
}

export default Sort;
