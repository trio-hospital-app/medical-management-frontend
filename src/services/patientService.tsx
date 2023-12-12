import { AxiosRequestConfig } from "axios";
import { request } from "../lib/api";

export interface NewPatientData {
  firstName: string;
  lastName: string;
  middleName?: string;
  gender: string;
  phone: string;
  occupation: string;
  address: object;
  salutation: string;
}

class PatientService {
  public async addPatient(data: NewPatientData) {
    const options: AxiosRequestConfig = {
      method: "POST",
      url: "/patient",
      data,
    };
    const response = await request(options);
    return response;
  }

  public async getPatients(page) {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `/patients?page=${page}`,
    };
    const response = await request(options);
    return response;
  }

  public async getPatientById(id: string) {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `/patient/${id}`,
    };
    const response = await request(options);
    return response;
  }

  public async searchPatient(param: string | number) {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `/search/patient?search=${param}`,
    };
    const response = await request(options);
    return response;
  }

  public async updatePatient(id: string, data: NewPatientData) {
    const options: AxiosRequestConfig = {
      method: "PUT",
      url: `/patients/${id}`,
      data,
    };
    const response = await request(options);
    return response;
  }

  public async deletePatient(id: string) {
    const options: AxiosRequestConfig = {
      method: "DELETE",
      url: `/patients/${id}`,
    };
    return request(options);
  }
}

export default new PatientService();
