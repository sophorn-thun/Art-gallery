import styles from './Tab.module.css';

type Props = {
  title: string;
  children: string;
};

function Tab({ children, title }: Props) {
  return <p className={styles['description']}>{children}</p>;
}

export default Tab;
