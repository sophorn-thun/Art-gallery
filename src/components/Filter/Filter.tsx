import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

import styles from './Filter.module.css';

interface FilterProps {
  secondPanel: string;
  secondPanelOption1: string;
  secondPanelOption2: string;
  secondPanelOption3: string;
  onFilterByPainting?: (isChecked: boolean) => void;
  onFilterBySculpture?: (isChecked: boolean) => void;
  onFilterByPrint?: (isChecked: boolean) => void;
}

function Filter({
  secondPanel,
  secondPanelOption1,
  secondPanelOption2,
  secondPanelOption3,
  onFilterByPainting,
  onFilterBySculpture,
  onFilterByPrint,
}: FilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('All artworks');

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    switch (option) {
      case secondPanelOption1:
        onFilterByPainting && onFilterByPainting(true);
        break;
      case secondPanelOption2:
        onFilterBySculpture && onFilterBySculpture(true);
        break;
      case secondPanelOption3:
        onFilterByPrint && onFilterByPrint(true);
        break;
      default:
        onFilterByPainting && onFilterByPainting(false);
        onFilterBySculpture && onFilterBySculpture(false);
        onFilterByPrint && onFilterByPrint(false);
        break;
    }
  };

  return (
    <div className={styles['filter-container']}>
      <h2>{secondPanel}</h2>
      <div className={styles['accordion-select']} onClick={() => setIsOpen(!isOpen)}>
        <span>{selectedOption}</span>
        {isOpen ? (
          <span className={styles['arrow']}>
            <FontAwesomeIcon icon={faAngleUp} />
          </span>
        ) : (
          <span className={styles['arrow']}>
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        )}
      </div>
      {isOpen && (
        <div className={styles['dropdown-content']}>
          <p onClick={() => handleOptionClick('All artworks')}>All artworks</p>
          <p onClick={() => handleOptionClick(secondPanelOption1)}>{secondPanelOption1}</p>
          <p onClick={() => handleOptionClick(secondPanelOption2)}>{secondPanelOption2}</p>
          <p onClick={() => handleOptionClick(secondPanelOption3)}>{secondPanelOption3}</p>
        </div>
      )}
    </div>
  );
}

export default Filter;
