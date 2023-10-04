import styles from './NotFound.module.css';

function NotFound() {
  return <h1 className={styles['message']}>Opp! The address you entered does not exist!</h1>;
}

export default NotFound;
