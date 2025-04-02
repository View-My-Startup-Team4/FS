import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";

const BoardListContext = createContext();

export function BoardListProvider({ children }) {
  const { data: companies = [], error, isLoading } = useQuery({
    queryKey: ['companies'],
    queryFn: async () => {
      try {
        const res = await fetch('/mockData.json');
        const data = await res.json();
        console.log(data);
        return data;
      } catch (error) {
        console.log('Context Error:', error);
        throw error;
      }
    }
  });

  return (
    <BoardListContext.Provider value={{ companies, error, isLoading }}>
      {children}
    </BoardListContext.Provider>
  );
}

export const useBoardList = () => useContext(BoardListContext);
