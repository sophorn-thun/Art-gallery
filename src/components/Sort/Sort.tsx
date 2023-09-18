import { useState } from 'react';
import styles from './Sort.module.css';

interface SortProps {
  defaultPanel: string;
  defaultPanelOption1: string;
  defaultPanelOption2: string;
  defaultPanelOption3: string;
  onSortByDate?: (isActive: boolean) => void;
  onSortByTitle?: (isActive: boolean) => void;
  onSortByArtist?: (isActive: boolean) => void;
}

function Sort({
  defaultPanel,
  defaultPanelOption1,
  defaultPanelOption2,
  defaultPanelOption3,
  onSortByDate,
  onSortByTitle,
  onSortByArtist,
}: SortProps) {
  const [activeSort, setActiveSort] = useState<string | null>(null);

  const handleButtonClick = (sortType: string) => {
    const isActive = activeSort !== sortType;
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
      <h2 className={styles['accordion-title']}>{defaultPanel}</h2>
      <div className={styles['button-container']}>
        <button
          className={
            activeSort === 'date' ? `${styles['sort-button-active']}` : `${styles['sort-button']}`
          }
          onClick={() => handleButtonClick('date')}
        >
          {defaultPanelOption1}
        </button>
        <button
          className={
            activeSort === 'title' ? `${styles['sort-button-active']}` : `${styles['sort-button']}`
          }
          onClick={() => handleButtonClick('title')}
        >
          {defaultPanelOption2}
        </button>
        <button
          className={
            activeSort === 'artist' ? `${styles['sort-button-active']}` : `${styles['sort-button']}`
          }
          onClick={() => handleButtonClick('artist')}
        >
          {defaultPanelOption3}
        </button>
      </div>
    </div>
  );
}

export default Sort;
