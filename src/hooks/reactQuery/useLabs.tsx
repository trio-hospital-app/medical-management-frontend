import { useQuery, useMutation, QueryClient } from "react-query";
import LabService, { NewLabData } from "../../services/labService";

const queryClient = new QueryClient();

export const useGetLab = () => {
  return useQuery("Lab", LabService.getLab);
};

export const useGetLabById = (id: string) => {
  return useQuery(["Lab", id], () => LabService.getLabById(id));
};

export const useGetPatientLab = (id: string) => {
  return useQuery(["LabPatient", id], () => LabService.getPatientLab(id));
};

export const useSearchLabPatient = (
  param: string | number,
  isEnabled: boolean = false
) => {
  return useQuery(
    ["searchLabPatient", param],
    () => LabService.searchLabPatient(param),
    {
      enabled: isEnabled,
    }
  );
};

export const useAddLab = () => {
  return useMutation((data: NewLabData) => LabService.addLab(data), {
    onSuccess: () => {
      queryClient.invalidateQueries("Lab");
    },
  });
};

export const useUpdateLab = () => {
  return useMutation(
    ({ id, data }: { id: string; data: NewLabData }) =>
      LabService.updateLab(id, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("Lab");
      },
    }
  );
};

export const useDeleteLab = () => {
  return useMutation((id: string) => LabService.deleteLab(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("Lab");
    },
  });
};
