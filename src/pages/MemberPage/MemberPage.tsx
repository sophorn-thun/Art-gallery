import styles from './MemberPage.module.css';

function MemberPage() {
  return (
    <>
      <h2 className={styles['welcome']}>Hello there! Your artwork collection is empty!</h2>
      {/* <div className={styles['saved-collection']}></div> */}
    </>
  );
}

export default MemberPage;
