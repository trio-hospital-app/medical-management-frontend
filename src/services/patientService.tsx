import { AxiosResponse, AxiosRequestConfig } from "axios";
import { request } from "../lib/api";

export interface Patient {
  id: string;
  name: string;
}

class PatientService {
  private baseUrl = "/patients";

  // Create a new patient
  public async createPatient(data: Patient): Promise<AxiosResponse<Patient>> {
    const options: AxiosRequestConfig = {
      method: "POST",
      url: this.baseUrl,
      data,
    };
     // @ts-expect-error: Just ignore the next line
    return request(options);
  }

  // Update an existing patient
  public async updatePatient(
    patientId: string,
    data: Patient
  ): Promise<AxiosResponse<Patient>> {
    const options: AxiosRequestConfig = {
      method: "PUT",
      url: `${this.baseUrl}/${patientId}`,
      data,
    };
     // @ts-expect-error: Just ignore the next line
    return request(options);
  }

  // Delete a patient
  public async deletePatient(patientId: string): Promise<AxiosResponse<void>> {
    const options: AxiosRequestConfig = {
      method: "DELETE",
      url: `${this.baseUrl}/${patientId}`,
    };
     // @ts-expect-error: Just ignore the next line
    return request(options);
  }

  // Get a list of all patients
  public async getPatients(): Promise<Patient[]> {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: this.baseUrl,
    };
    const response = await request(options);
     // @ts-expect-error: Just ignore the next line
    return response.data; // Extract the data from the AxiosResponse
  }
}

export default new PatientService();
