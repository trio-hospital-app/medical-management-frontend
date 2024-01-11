import { useQuery, useMutation, QueryClient } from "react-query";
import FinanceService from "../../services/financeService";

const queryClient = new QueryClient();

export const useUserFinance = (id: string) => {
  return useQuery(["Finance", id], () => FinanceService.getUserFinance(id));
};

export const useMakePayment = () => {
  return useMutation((id) => FinanceService.makePayment(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("Finance");
    },
  });
};
