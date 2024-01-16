import { useQuery, useMutation, QueryClient } from "react-query";
import radiologyService, {NewRadiologyData } from "../../services/radiologyService";

const queryClient = new QueryClient();

// export const useGetLab = () => {
//   return useQuery("Lab", radiologyService.getLab);
// };

export const useGetRadiologyCenters = () => {
  return useQuery("RadiologyCenters", radiologyService.getRadiologyCenters);
};

export const useGetRadiologyById = (id: string) => {
  return useQuery(["Radiology", id], () => radiologyService.getRadiologyById(id));
};

export const useGetRadiologyCenterById = (id: string) => {
  return useQuery(["RadiologyCenter", id], () => radiologyService.getRadiologyCenter(id));
};

export const useGetPatientRadiology = (id: string) => {
  return useQuery(["RadiologyPatient", id], () => radiologyService.getPatientRadiology(id));
};

export const useSearchRadiologyPatient = (
  param: string | number,
  isEnabled: boolean = false
) => {
  return useQuery(
    ["searchRadiologyPatient", param],
    () => radiologyService.searchRadiologyPatient(param),
    {
      enabled: isEnabled,
    }
  );
};

export const useAddRadiology = () => {
  return useMutation((data: NewRadiologyData) => radiologyService.addRadiology(data), {
    onSuccess: () => {
      queryClient.invalidateQueries("Lab");
    },
  });
};

export const useAddRadiologyCenter = () => {
  return useMutation(
    (data: { center: string }) => radiologyService.createRadiologyCenter(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("RadiologyCenters");
      },
    }
  );
};

export const useUpdateRadiology = () => {
  return useMutation(
    ({ id, data }: { id: string; data: { text: string } }) =>
      radiologyService.updateRadiology(id, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("Lab");
      },
    }
  );
};

export const useupdateCapture = () => {
  return useMutation(
    ({ id, data }: { id: string; data }) =>
      radiologyService.updateCapture(id, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("Lab");
      },
    }
  );
};

export const useRadiologyCenter = () => {
  return useMutation(
    ({ id, data }: { id: string; data: { center: string } }) =>
      radiologyService.editRadiologyCenter({ id, data }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("RadiologyCenters");
      },
    }
  );
};

export const useDeleteradiology = () => {
  return useMutation((id: string) => radiologyService.deleteRadiology(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("Lab");
    },
  });
};

export const useDeleteRadiologyCenter = () => {
  return useMutation((id: string) => radiologyService.deleteRadiologyCenter(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("RadiologyCenters");
    },
  });
};
