import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

import styles from './Filter.module.css';

interface FilterProps {
  title: string;
  option1: string;
  option2: string;
  option3: string;
  onFilterByPainting?: (isChecked: boolean) => void;
  onFilterBySculpture?: (isChecked: boolean) => void;
  onFilterByPrint?: (isChecked: boolean) => void;
}

function Filter({
  title,
  option1,
  option2,
  option3,
  onFilterByPainting,
  onFilterBySculpture,
  onFilterByPrint,
}: FilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('All types');

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    switch (option) {
      case option1:
        onFilterByPainting && onFilterByPainting(true);
        break;
      case option2:
        onFilterBySculpture && onFilterBySculpture(true);
        break;
      case option3:
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
      <h2 className={styles['title']}>{title}</h2>
      <div className={styles['select']} onClick={() => setIsOpen(!isOpen)}>
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
          <p onClick={() => handleOptionClick('All types')}>All types</p>
          <p onClick={() => handleOptionClick(option1)}>{option1}</p>
          <p onClick={() => handleOptionClick(option2)}>{option2}</p>
          <p onClick={() => handleOptionClick(option3)}>{option3}</p>
        </div>
      )}
    </div>
  );
}

export default Filter;
