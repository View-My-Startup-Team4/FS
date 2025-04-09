import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import styles from "./Pagination.module.scss";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];
  for (let page = 1; page <= totalPages; page++) {
    pageNumbers.push(page);
  }

  return (
    <div className={styles.pagination}>
      <button
        className={styles.pageButton}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        <GrFormPrevious />
      </button>

      {pageNumbers.map((page) => {
        const isCurrent = page === currentPage; // TODO: 불필요한 코드 블럭.
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`${styles.pageButton} ${isCurrent ? styles.active : ""}`}
          >
            {page}
          </button>
        );
      })}

      <button
        className={styles.pageButton}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        <GrFormNext />
      </button>
    </div>
  );
}
