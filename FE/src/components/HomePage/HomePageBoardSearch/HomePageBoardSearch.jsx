import React from "react";
import styles from "./HomePageBoardSearch.module.scss";

const HomePageBoardSearch = ({
  searchInput,
  setSearchInput,
  setSearchKeyword,
  setCurrentPage
}) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("엔터 감지");
      setSearchKeyword(searchInput);
      setCurrentPage(1);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="검색어를 입력해주세요"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className={styles.searchKeyword}
      ></input>
    </div>
  );
};

export default HomePageBoardSearch;
