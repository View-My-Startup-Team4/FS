import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { getCompanyList } from "../api/Company";

const BoardListContext = createContext();



export function BoardListProvider({ children }) {
  const { data: companies = [], error, isLoading } = useQuery({
    queryKey: ['companies'],
    queryFn: getCompanyList,
  });

  return (
    <BoardListContext.Provider value={{ companies, error, isLoading }}>
      {children}
    </BoardListContext.Provider>
  );
}

export const useBoardList = () => useContext(BoardListContext);
