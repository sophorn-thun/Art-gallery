import type { SetURLSearchParams } from 'react-router-dom';
import styles from './Pagination.module.css';
import { useState } from 'react';

interface PaginationProps {
  postPerPage: number;
  totalPage: number;
  page?: number | null;
  query?: string | null;
  onSetSearchParam: SetURLSearchParams;
}

function Pagination({ postPerPage, totalPage, onSetSearchParam, page, query }: PaginationProps) {
  const [activePage, setActivePage] = useState<number | null>(page || null);

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
              const newPage = Number(page) - 1;
              onSetSearchParam({
                page: String(Number(page) - 1),
                query: query || '',
              });
              window.scrollTo(0, 0);
              setActivePage(newPage);
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
              const newPage = Number(page) + 1;
              onSetSearchParam({
                page: String(Number(page) + 1),
                query: query || '',
              });
              window.scrollTo(0, 0);
              setActivePage(newPage);
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
