import styles from './Loading.module.css';

function Loading() {
  return (
    <div>
      <div className={styles['spinner']}>
        <h3>Content is loading...</h3>
        <div className={styles['lds-spinner']}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
