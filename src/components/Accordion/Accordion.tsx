import styles from './Accordion.module.css';

interface AccordionProps {
  defaultPanel: string;
  defaultPanelOption1: string;
  defaultPanelOption2: string;
  defaultPanelOption3: string;
  firstPanel: string;
  firstPanelOption1: string;
  firstPanelOption2: string;
  firstPanelOption3: string;
  secondPanel: string;
  secondPanelOption1: string;
  secondPanelOption2: string;
  secondPanelOption3: string;
  thirdPanel: string;
  thirdPanelOption1: string;
  thirdPanelOption2: string;
  thirdPanelOption3: string;
}

function Accordion({
  defaultPanel,
  defaultPanelOption1,
  defaultPanelOption2,
  defaultPanelOption3,
  firstPanel,
  firstPanelOption1,
  firstPanelOption2,
  firstPanelOption3,
  secondPanel,
  secondPanelOption1,
  secondPanelOption2,
  secondPanelOption3,
  thirdPanel,
  thirdPanelOption1,
  thirdPanelOption2,
  thirdPanelOption3,
}: AccordionProps) {
  return (
    <div className={styles['accordion']}>
      <div className={styles['accordion-item']}>
        <h2 className={styles['accordion-title']}>{defaultPanel}</h2>
        <div className={styles['accordion-content']}>
          <label>
            <input type="checkbox" />
            {defaultPanelOption1}
          </label>
        </div>
        <div className={styles['accordion-content']}>
          <label>
            <input type="checkbox" />
            {defaultPanelOption2}
          </label>
        </div>
        <div className={styles['accordion-content']}>
          <label>
            <input type="checkbox" />
            {defaultPanelOption3}
          </label>
        </div>
      </div>

      <div className={styles['accordion-item']}>
        <h2 className={styles['accordion-title']}>{firstPanel}</h2>
        <div className={styles['accordion-content']}>
          <label>
            <input type="checkbox" />
            {firstPanelOption1}
          </label>
        </div>
        <div className={styles['accordion-content']}>
          <label>
            <input type="checkbox" />
            {firstPanelOption2}
          </label>
        </div>
        <div className={styles['accordion-content']}>
          <label>
            <input type="checkbox" />
            {firstPanelOption3}
          </label>
        </div>
      </div>

      <div className={styles['accordion-item']}>
        <h2 className={styles['accordion-title']}>{secondPanel}</h2>
        <div className={styles['accordion-content']}>
          <label>
            <input type="checkbox" />
            {secondPanelOption1}
          </label>
        </div>
        <div className={styles['accordion-content']}>
          <label>
            <input type="checkbox" />
            {secondPanelOption2}
          </label>
        </div>
        <div className={styles['accordion-content']}>
          <label>
            <input type="checkbox" />
            {secondPanelOption3}
          </label>
        </div>
      </div>

      <div className={styles['accordion-item']}>
        <h2 className={styles['accordion-title']}>{thirdPanel}</h2>
        <div className={styles['accordion-content']}>
          <label>
            <input type="checkbox" />
            {thirdPanelOption1}
          </label>
        </div>
        <div className={styles['accordion-content']}>
          <label>
            <input type="checkbox" />
            {thirdPanelOption2}
          </label>
        </div>
        <div className={styles['accordion-content']}>
          <label>
            <input type="checkbox" />
            {thirdPanelOption3}
          </label>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
