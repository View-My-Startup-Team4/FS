import { useQuery } from "@tanstack/react-query";
import { getCompanyList } from "./Company";

export const useCompanies = () => {
  return useQuery({
    queryKey: ['companies'],
    queryFn: getCompanyList,
  });
};
