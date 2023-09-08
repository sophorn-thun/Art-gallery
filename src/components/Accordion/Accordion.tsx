import styles from './Accordion.module.css';

interface AccordionProps {
  defaultPanel: string;
  defaultPanelOption1: string;
  defaultPanelOption2: string;
  defaultPanelOption3: string;
  secondPanel: string;
  secondPanelOption1: string;
  secondPanelOption2: string;
  secondPanelOption3: string;
  onSortByDate?: (isChecked: boolean) => void;
  onSortByTitle?: (isChecked: boolean) => void;
  onSortByArtist?: (isChecked: boolean) => void;
  onFilterByPainting?: (isChecked: boolean) => void;
  onFilterBySculpture?: (isChecked: boolean) => void;
  onFilterByBook?: (isChecked: boolean) => void;
}

function Accordion({
  defaultPanel,
  defaultPanelOption1,
  defaultPanelOption2,
  defaultPanelOption3,
  secondPanel,
  secondPanelOption1,
  secondPanelOption2,
  secondPanelOption3,
  onSortByDate,
  onSortByTitle,
  onSortByArtist,
  onFilterByPainting,
  onFilterBySculpture,
  onFilterByBook,
}: AccordionProps) {
  return (
    <div className={styles['accordion']}>
      <div className={styles['accordion-item-sort']}>
        <h2 className={styles['accordion-title']}>{defaultPanel}</h2>
        <div className={styles['accordion-content']}>
          <label>
            <input
              type="checkbox"
              onChange={(e) => onSortByDate && onSortByDate(e.target.checked)}
            />
            {defaultPanelOption1}
          </label>
        </div>
        <div className={styles['accordion-content']}>
          <label>
            <input
              type="checkbox"
              onChange={(e) => onSortByTitle && onSortByTitle(e.target.checked)}
            />
            {defaultPanelOption2}
          </label>
        </div>
        <div className={styles['accordion-content']}>
          <label>
            <input
              type="checkbox"
              onChange={(e) => onSortByArtist && onSortByArtist(e.target.checked)}
            />
            {defaultPanelOption3}
          </label>
        </div>
      </div>

      <div className={styles['accordion-item-artwork']}>
        <h2 className={styles['accordion-title']}>{secondPanel}</h2>
        <div className={styles['accordion-content']}>
          <label>
            <input
              type="checkbox"
              onChange={(e) => onFilterByPainting && onFilterByPainting(e.target.checked)}
            />
            {secondPanelOption1}
          </label>
        </div>
        <div className={styles['accordion-content']}>
          <label>
            <input
              type="checkbox"
              onChange={(e) => onFilterBySculpture && onFilterBySculpture(e.target.checked)}
            />
            {secondPanelOption2}
          </label>
        </div>
        <div className={styles['accordion-content']}>
          <label>
            <input
              type="checkbox"
              onChange={(e) => onFilterByBook && onFilterByBook(e.target.checked)}
            />
            {secondPanelOption3}
          </label>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
