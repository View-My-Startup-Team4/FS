import React, { useEffect, useState } from "react";
import { useBoardList } from "../../context/BoardListContext";
import IsLoading from "../../common/IsLoading/IsLoading";
import Error from "../../common/Error/Error";
import Title from "../../components/Title/Title";
import Filter from "../../components/HomePage/HomePageBoardFilter/HomePageBoardFilter";
import BoardTitleBar from "../../components/BoardTitleBar/BoardTitleBar";
import MiddleGroupLayout from "../../components/MiddleGroupLayout/MiddleGroupLayout";
import BoardList from "../../components/BoardList/BoardList";

const titleList = [
  { title: '순위', flex: 'flex-[2]' },
  { title: '기업명', flex: 'flex-[6]' },
  { title: '기업 소개', flex: 'flex-[9]' },
  { title: '카테고리', flex: 'flex-[5]' },
  { title: '나의 기업 선택 횟수', flex: 'flex-[5]' },
  { title: '비교 기업 선택 횟수', flex: 'flex-[5]' },
]

// const options = [
//   "나의 기업 선택 횟수 높은순",
//   "나의 기업 선택 횟수 낮은순",
//   "실제 누적 투자 금액 높은순",
//   "실제 누적 투자 금액 낮은순",
// ];

export default function StatusPage() {
  // const [filter, setFilter] = useState(options[0]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 10;

  // useEffect(() => {
  //   console.log("선택된 필터:", filter);
  // }, [filter]);

  // const {
  //   data: companies = [],
  //   error,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ["companies", filter],
  //   queryFn: async () => {
  //     const res = await fetch("http://localhost:5000/api/companies");
  //     if (!res.ok) throw new Error("데이터를 불러오는 중 오류 발생");
  //     const result = await res.json();
  //     const sortedCompanies = [...result];

  //     switch (filter) {
  //       case options[0]:
  //         sortedCompanies.sort((a, b) => b.countMyPicked - a.countMyPicked);
  //         break;
  //       case options[1]:
  //         sortedCompanies.sort((a, b) => a.countMyPicked - b.countMyPicked);
  //         break;
  //       case options[2]:
  //         sortedCompanies.sort((a, b) => b.totalInvestment - a.totalInvestment);
  //         break;
  //       case options[3]:
  //         sortedCompanies.sort((a, b) => a.totalInvestment - b.totalInvestment);
  //         break;
  //       default:
  //         break;
  //     }
  //     return sortedCompanies;
  //   },
  // });

  // const handleFilter = (selectedFilter) => {
  //   setFilter(selectedFilter);
  //   setCurrentPage(1);
  // };

  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  // };

  // if (isLoading) return <IsLoading />;
  // if (error) return <Error />;

  // // 페이지 내부에 페이지를 계산한다.
  // const lastIndex = currentPage * itemsPerPage;
  // const firstIndex = lastIndex - itemsPerPage;
  // const pagedCompanies = companies.slice(firstIndex, lastIndex);
  // const totalPages = Math.ceil(companies.length / itemsPerPage);
  const { companies , error, isLoading } = useBoardList();
  if(isLoading) return <IsLoading />
  if(error) return <Error />

  return (
    <section>
      <div>
        <Title text={"비교 현황"} />
        <Filter />
      </div>

      <MiddleGroupLayout >
        <BoardTitleBar titleList={titleList}/>
        <BoardList companies={companies} fields={['id','name']} />
      </MiddleGroupLayout>
    </section>
  );
}
