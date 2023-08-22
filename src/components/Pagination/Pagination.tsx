import styles from './Pagination.module.css';

interface PaginationProps {
  postPerPage: number;
  totalPage: number;
}
function Pagination({ postPerPage, totalPage }: PaginationProps) {
  const pageNumbers = Math.ceil(totalPage / postPerPage);
  const pageNumbersArray = Array.from({ length: pageNumbers }, (_, index) => index + 1);
  return (
    <>
      <nav className={styles['pagination-head']}>
        <ul className={styles['pagination-navbar']}>
          {pageNumbersArray.map((pageNumber) => (
            <li className={styles['pagination-item']}>{pageNumber}</li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Pagination;
