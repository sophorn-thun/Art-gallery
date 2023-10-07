import { ReactElement, useState } from 'react';
import styles from './Tab.module.css';

type Props = {
  children: ReactElement[];
};

function Tabs({ children }: Props) {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <div className={styles['tabs-container']}>
      <ul className={styles['tabs-list']}>
        {children.map((item, index) => (
          <li
            key={index}
            className={`${styles['tab-item']} ${index === selectedTab ? styles['selected'] : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {item.props.title}
          </li>
        ))}
      </ul>
      {children[selectedTab] && (
        <div className={`${styles['tab-content']} ${styles['selected']}`}>
          {children[selectedTab]}
        </div>
      )}
    </div>
  );
}

export default Tabs;
