import React, { useState, useEffect } from "react";
import styles from "./InvestmentPage.module.scss";
import InvestmentPanel from "../../components/InvestmentPanel/InvestmentPanel";
import Title from "../../components/Title/Title";
import TopGroupLayout from "../../components/TopGroupLayout/TopGroupLayout";
import MiddleGroupLayout from "../../components/MiddleGroupLayout/MiddleGroupLayout";
import BottomGroupLayout from "../../components/BottomGroupLayout/BottomGroupLayout";
import Filter from "../../components/Filter/Filter";
import Pagination from "../../components/Pagination/Pagination";
import { useCompanies } from "../../api/useCompanies";
import Error from "../../common/Error/Error";
import IsLoading from "../../common/IsLoading/IsLoading";
import BoardTitleBar from "../../components/BoardTitleBar/BoardTitleBar";
import BoardList from "../../components/BoardList/BoardList";

// 테이블 타이틀 (flex 비율 포함)
const titleList = [
  { title: "순위", flex: "flex-[2]" },
  { title: "기업명", flex: "flex-[6]" },
  { title: "기업 소개", flex: "flex-[9]" },
  { title: "카테고리", flex: "flex-[5]" },
  { title: "View My STartup 투자 금액", flex: "flex-[5]" },
  { title: "실제 누적 투자 금액", flex: "flex-[5]" },
];

// 정렬 필터 옵션들
const filters = [
  {
    label: "누적 투자 금액 높은 순",
    sortFn: (a, b) => b.totalInvestment - a.totalInvestment,
  },
  {
    label: "누적 투자 금액 낮은 순",
    sortFn: (a, b) => a.totalInvestment - b.totalInvestment,
  },
];

export default function InvestmentPage() {

  const { data: companies = [], error, isLoading } = useCompanies();
  
    const [selectedFilter, setSelectedFilter] = useState(filters[0]);
    const [showFilterOptions, setShowFilterOptions] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchInput, setSearchInput] = useState("");
    const [searchKeyword, setSearchKeyword] = useState("");
  
    // 필터 변경 시 페이지 1로 초기화
    useEffect(() => {
      setCurrentPage(1);
    }, [selectedFilter]);
  
    if (isLoading) return <IsLoading />;
    if (error) return <Error />;
  
    // 필터 + 검색 적용
    const filteredCompanies = [...companies]
      .sort(selectedFilter.sortFn)
      .filter((company) =>
        company.name.toLowerCase().includes(searchKeyword.toLowerCase())
      );
  
    const itemsPerPage = 10;
    const currentOffset = (currentPage - 1) * itemsPerPage;
  
    // 페이지에 해당하는 기업만 자르고 순위 부여했어용!
    const pagedCompanies = filteredCompanies
      .slice(currentOffset, currentOffset + itemsPerPage)
      .map((company, index) => ({
        ...company,
        rank: currentOffset + index + 1,
      }));
  
    const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);

  return (
      <section>
      <TopGroupLayout>
        <Title text={"투자 현황"} />
        <div>
          <Filter
            filterOptions={filters}
            showFilterOptions={showFilterOptions}
            setShowFilterOptions={setShowFilterOptions}
            selectedFilter={selectedFilter}
            onSelectFilter={setSelectedFilter}
          />
        </div>
      </TopGroupLayout>

      <MiddleGroupLayout>
        <BoardTitleBar titleList={titleList} />
        <BoardList
          flex={titleList.map((list) => list.flex)}
          companies={pagedCompanies}
          fields={[
            "name",
            "description",
            "category",
            "totalInvestment",
            "totalInvestment",
          ]}
          itemsPerPage={itemsPerPage}
        />
      </MiddleGroupLayout>

      <BottomGroupLayout>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </BottomGroupLayout>
    </section>
  );
}
