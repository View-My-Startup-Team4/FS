import React, { useState } from "react";
import styles from "./InvestmentPage.module.scss";
import InvestmentPanel from "../../components/InvestmentPanel/InvestmentPanel";
import Title from "../../components/Title/Title";
import Filter from "../../components/Filter/Filter"
import TopGroupLayout from "../../components/TopGroupLayout/TopGroupLayout";
import MiddleGroupLayout from "../../components/MiddleGroupLayout/MiddleGroupLayout";
import BoardTitleBar from "../../components/BoardTitleBar/BoardTitleBar";
import BoardList from "../../components/BoardList/BoardList";
import Error from "../../common/Error/Error";
import IsLoading from "../../common/IsLoading/IsLoading";
import { useBoardList } from "../../context/BoardListContext";

const titleList = [
  { title: '순위', flex: 'flex-[2]' },
  { title: '기업명', flex: 'flex-[6]' },
  { title: '기업 소개', flex: 'flex-[9]' },
  { title: '카테고리', flex: 'flex-[5]' },
  { title: 'View My Startup 투자 금액', flex: 'flex-[5]' },
  { title: '실제 누적 투자 금액', flex: 'flex-[5]' }
]


export default function InvestmentPage() {

    const [list, setList] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [searchKeyword, setSearchKeyword] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [currentState, setCurrentState] = useState("누적 투자금액 높은순");
    const [filteredList, setFilteredList] = useState([]);
    const itemsPerPage = 10;
  
  
    const { companies , error, isLoading } = useBoardList();
    if(isLoading) return <IsLoading />
    if(error) return <Error />
    
    const filteredCompany = companies.filter((company) =>
      company.name.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    
    const handleOrderChange = (orderBy) => {
      setCurrentState(orderBy);
    };
  
  
    const totalPages = Math.ceil(filteredCompany.length / itemsPerPage);
  
    const paginatedList = filteredCompany.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  

  return (
      <section>
      <TopGroupLayout>
        <Title text={"투자 현황"} />
        <Filter />
      </TopGroupLayout>
      <MiddleGroupLayout>
        <BoardTitleBar titleList={titleList} />
        <BoardList companies={paginatedList} fields={['name', 'description','category', 'viewInvestAmount',  'totalInvestment' ]}/>
      </MiddleGroupLayout>
    </section>
  );
}
