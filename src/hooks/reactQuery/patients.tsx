import { useQuery, useMutation } from "react-query";
import { useQueryClient } from "react-query";
import PatientService from "../../services/patientService";
import { Patient } from "../../services/patientService";

// Define a key for React Query
const PATIENTS_QUERY_KEY = "patients";

// React Query hook for fetching all patients
export const useGetPatients = () => {
  return useQuery<Patient[]>(PATIENTS_QUERY_KEY, PatientService.getPatients);
};

// React Query hook for creating a patient
export const useCreatePatient = () => {
  const queryClient = useQueryClient();
  return useMutation((newPatient: Patient) => PatientService.createPatient(newPatient), {
    onSuccess: () => {
      // Invalidate and refetch the patients query after a successful mutation
      queryClient.invalidateQueries(PATIENTS_QUERY_KEY);
    },
  });
};

// React Query hook for updating a patient
export const useUpdatePatient = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ patientId, updatedPatient }) =>
      PatientService.updatePatient(patientId, updatedPatient),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(PATIENTS_QUERY_KEY);
      },
    }
  );
};

// React Query hook for deleting a patient
export const useDeletePatient = () => {
  const queryClient = useQueryClient();
  return useMutation((patientId) => PatientService.deletePatient(patientId), {
    onSuccess: () => {
      queryClient.invalidateQueries(PATIENTS_QUERY_KEY);
    },
  });
};
