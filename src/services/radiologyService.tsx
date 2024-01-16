import { AxiosRequestConfig } from "axios";
import { request } from "../lib/api";

export interface NewRadiologyData {
  centerId: string;
  panelId: string;
  patientId: string;
  specimenId: string;
  text: string;
  schemeId: string;
  LabResult: Array<any>;
}

class radiologyService {
  public async addRadiology(data: NewRadiologyData) {
    const options: AxiosRequestConfig = {
      method: "POST",
      url: "/radiology",
      data,
    };
    const response = await request(options);
    return response;
  }

  public async getRadiology(page: number) {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `/radiologys?page=${page}`,
    };
    const response = await request(options);
    return response;
  }

  public async getRadiologyCenters() {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: "/radiology-centers",
    };
    const response = await request(options);
    return response;
  }

  public async getRadiologyCenter(id) {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `/radiology-center/${id}`,
    };
    const response = await request(options);
    return response;
  }

  public async editRadiologyCenter({
    id,
    data,
  }: {
    id: string;
    data: { center: string };
  }) {
    const options: AxiosRequestConfig = {
      method: "PUT",
      url: `/radiology-center/${id}`,
      data,
    };
    const response = await request(options);
    return response;
  }

  public async deleteRadiologyCenter(id: string) {
    const options: AxiosRequestConfig = {
      method: "DELETE",
      url: `/radiology-center/${id}`,
    };
    const response = await request(options);
    return response;
  }

  public async createRadiologyCenter(body: { center: string }) {
    const options: AxiosRequestConfig = {
      method: "POST",
      url: `/radiology-center`,
      data: body,
    };
    const response = await request(options);
    return response;
  }

  public async getRadiologyObservations() {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: "/radiology-tests",
    };
    const response = await request(options);
    return response;
  }
  public async getRadiologyObservation(id) {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `/radiology-test/${id}`,
    };
    const response = await request(options);
    return response;
  }

  public async editRadiologyObservation({
    id,
    data,
  }: {
    id: string;
    data:  { test: string, cost:number, centerId:string };
  }) {
    const options: AxiosRequestConfig = {
      method: "PUT",
      url: `/radiology-test/${id}`,
      data,
    };
    const response = await request(options);
    return response;
  }

  public async deleteRadiologyObservation(id: string) {
    const options: AxiosRequestConfig = {
      method: "DELETE",
      url: `/radiology-test/${id}`,
    };
    const response = await request(options);
    return response;
  }

  public async createRadiologyObservation(body:  { test: string, cost:number, centerId:string }) {
    const options: AxiosRequestConfig = {
      method: "POST",
      url: `/radiology-test`,
      data: body,
    };
    const response = await request(options);
    return response;
  }

  public async searchRadiologyPatient(param: string | number) {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `/search/radiology?search=${param}`,
    };
    const response = await request(options);
    return response;
  }

  public async getRadiologyById(id: string) {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `/radiology/${id}`,
    };
    const response = await request(options);
    return response;
  }

  public async getPatientRadiology(id: string) {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `/radiologys/user/${id}`,
    };
    const response = await request(options);
    return response;
  }

  public async updateRadiology(id: string, data: { text: string }) {
    const options: AxiosRequestConfig = {
      method: "PUT",
      url: `/radiology/${id}`,
      data,
    };
    const response = await request(options);
    return response;
  }

  public async updateCapture(id: string, data) {
    const options: AxiosRequestConfig = {
      method: "PUT",
      url: `/radiology/capture/${id}`,
      data,
    };
    const response = await request(options);
    return response;
  }

  public async updateRadiologyResult(id: string, data) {
    const options: AxiosRequestConfig = {
      method: "PUT",
      url: `/radiology/result/${id}`,
      data,
    };
    const response = await request(options);
    return response;
  }

  public async deleteRadiology(id: string) {
    const options: AxiosRequestConfig = {
      method: "DELETE",
      url: `/radiology/${id}`,
    };
    return request(options);
  }
}

export default new radiologyService();
