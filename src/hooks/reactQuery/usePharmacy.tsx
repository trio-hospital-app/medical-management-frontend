import { useQuery, useMutation, QueryClient } from "react-query";
import pharmacyService, {
  NewPharmacyData,
} from "../../services/pharmacyService";
const queryClient = new QueryClient();

export const useGetPharmacy = () => {
  return useQuery("Pharmacy", pharmacyService.getPharmacy);
};

export const useGetPharmacyById = (id: string) => {
  return useQuery(["Pharmacys", id], () => pharmacyService.getPharmacyById(id));
};

export const useAddPharmacy = () => {
  return useMutation(
    (data: NewPharmacyData) => pharmacyService.addPharmacy(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("Pharmacy");
      },
    }
  );
};

export const useUpdatePharmacy = () => {
  return useMutation(
    ({ id, data }: { id: string; data: NewPharmacyData }) =>
      pharmacyService.updatePharmacy(id, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("Pharmacy");
      },
    }
  );
};

export const useDeletePharmacy = () => {
  return useMutation((id: string) => pharmacyService.deletePharmacy(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("Pharmacy");
    },
  });
};
