import { AxiosRequestConfig } from "axios";
import { request } from "../lib/api";

export interface NewLabData {
  centerId: string;
  panelId: string;
  patientId: string;
  specimenId: string;
  text: string;
  schemeId: string;
}

class labService {
  public async addLab(data: NewLabData) {
    const options: AxiosRequestConfig = {
      method: "POST",
      url: "/lab",
      data,
    };
    const response = await request(options);
    return response;
  }

  public async getLab() {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: "/labs",
    };
    const response = await request(options);
    return response;
  }

  public async getLabCenters() {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: "/clinic-centers",
    };
    const response = await request(options);
    return response;
  }

  public async getLabCenter(id) {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `/clinic-center/${id}`,
    };
    const response = await request(options);
    return response;
  }

  public async editLabCenter({
    id,
    data,
  }: {
    id: string;
    data: { center: string };
  }) {
    const options: AxiosRequestConfig = {
      method: "PUT",
      url: `/clinic-center/${id}`,
      data,
    };
    const response = await request(options);
    return response;
  }

  public async deleteLabCenter(id: string) {
    const options: AxiosRequestConfig = {
      method: "DELETE",
      url: `/clinic-center/${id}`,
    };
    const response = await request(options);
    return response;
  }

  public async createLabCenter(body: { center: string }) {
    const options: AxiosRequestConfig = {
      method: "POST",
      url: `/clinic-center`,
      data: body,
    };
    const response = await request(options);
    return response;
  }

  public async searchLabPatient(param: string | number) {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `/search/lab?search=${param}`,
    };
    const response = await request(options);
    return response;
  }

  public async getLabById(id: string) {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `/lab/${id}`,
    };
    const response = await request(options);
    return response;
  }

  public async getPatientLab(id: string) {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `/labs/user/${id}`,
    };
    const response = await request(options);
    return response;
  }

  public async updateLab(id: string, data: NewLabData) {
    const options: AxiosRequestConfig = {
      method: "PUT",
      url: `/lab/${id}`,
      data,
    };
    const response = await request(options);
    return response;
  }

  public async deleteLab(id: string) {
    const options: AxiosRequestConfig = {
      method: "DELETE",
      url: `/lab/${id}`,
    };
    return request(options);
  }
}

export default new labService();
