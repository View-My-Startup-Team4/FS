import React, { useState, useEffect } from "react";
import { getList } from "../../api";
import styles from "./HomePage.module.scss";
import Title from "../../components/Title/Title";
import Search from "../../components/HomePage/HomePageBoardSearch/HomePageBoardSearch";
import Filter from "../../components/HomePage/HomePageBoardFilter/HomePageBoardFilter";
import BoardTitleBar from "../../components/BoardTitleBar/BoardTitleBar";
import BoardList from "../../components/BoardList/BoardList";
import MiddleGroupLayout from "../../components/MiddleGroupLayout/MiddleGroupLayout";
import Error from "../../common/Error/Error";
import IsLoading from "../../common/IsLoading/IsLoading";
import { useBoardList } from "../../context/BoardListContext";

const titleList = [
  { title: '순위', flex: 'flex-[2]' },
  { title: '기업명', flex: 'flex-[6]' },
  { title: '기업 소개', flex: 'flex-[9]' },
  { title: '카테고리', flex: 'flex-[5]' },
  { title: '누적 투작 금액', flex: 'flex-[5]' },
  { title: '매출액', flex: 'flex-[5]' },
  { title: '고용인원', flex: 'flex-[5]' },
]

export const HomePage = () => {
  const [list, setList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentState, setCurrentState] = useState("누적 투자금액 높은순");
  const [filteredList, setFilteredList] = useState([]);
  const itemsPerPage = 10;

  const handleOrderChange = (orderBy) => {
    setCurrentState(orderBy);
  };

  const filteredCompany = (list || []).filter((company) =>
    company.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCompany.length / itemsPerPage);

  const paginatedList = filteredCompany.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    const fetchList = async () => {
      try {
        const data = await getList();
        console.log(data);
        setList(data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchList();
  }, []);

  const { companies , error, isLoading } = useBoardList();
  if(isLoading) return <IsLoading />
  if(error) return <Error />

  return (
    <section>
      <div className={styles.headerRow}>
        <Title text={"전체 스타트업 목록"} />
        <Search
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setSearchKeyword={setSearchKeyword}
          setCurrentPage={setCurrentPage}
        />
        <Filter />
      </div>

      <MiddleGroupLayout>
        <BoardTitleBar titleList={titleList} />
        <BoardList companies={companies} fields={['description','countMyPicked','totalProfit']}/>
      </MiddleGroupLayout>
    </section>
  );
};

export default HomePage;
