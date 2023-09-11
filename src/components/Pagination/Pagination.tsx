import type { SetURLSearchParams } from 'react-router-dom';
import styles from './Pagination.module.css';
import { useState } from 'react';

export interface Info {
  count: number;
  nextPage: string | null;
  previousPage: string | null;
}
interface PaginationProps {
  postPerPage: number;
  totalPage: number;
  info?: Info;
  page?: number | null;
  query?: string | null;
  onSetSearchParam: SetURLSearchParams;
}

function Pagination({
  postPerPage,
  totalPage,
  info,
  onSetSearchParam,
  page,
  query,
}: PaginationProps) {
  const [activePage, setActivePage] = useState<number | null>(page || 1);

  const pageNumbers = Math.ceil(totalPage / postPerPage);
  const pageNumbersArray = Array.from({ length: pageNumbers }, (_, index) => index + 1);

  return (
    <>
      <nav className={styles['pagination-head']}>
        <div className={styles['pagination-navbar']}>
          <button
            className={styles['pagination-item']}
            disabled={page === 1}
            onClick={() => {
              onSetSearchParam({
                page: String(Number(page) - 1),
                query: query || '',
              });
              window.scrollTo(0, 0);
            }}
          >
            Prev
          </button>
          {pageNumbersArray.map((pageNumber) => (
            <button
              key={pageNumber}
              className={
                pageNumber === activePage
                  ? styles['pagination-item-active']
                  : styles['pagination-item']
              }
              onClick={() => {
                onSetSearchParam({
                  page: String(Number(pageNumber)),
                  query: query || '',
                });
                window.scrollTo(0, 0);
                setActivePage(pageNumber);
              }}
            >
              {pageNumber}
            </button>
          ))}
          <button
            className={styles['pagination-item']}
            disabled={page === pageNumbers}
            onClick={() => {
              onSetSearchParam({
                page: String(Number(page) + 1),
                query: query || '',
              });
              window.scrollTo(0, 0);
            }}
          >
            Next
          </button>
        </div>
      </nav>
    </>
  );
}

export default Pagination;
