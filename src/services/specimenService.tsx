import { AxiosRequestConfig } from "axios";
import { request } from "../lib/api";

export interface NewSpecimenData {
  specimen: string;
  color: string;
  description: string;
  type: string;
}

class specimenService {
  public async addSpecimen(data: NewSpecimenData) {
    const options: AxiosRequestConfig = {
      method: "POST",
      url: "/specimen",
      data,
    };
    const response = await request(options);
    return response;
  }

  public async getSpecimen() {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: "/specimens",
    };
    const response = await request(options);
    return response;
  }

  public async getSpecimenById(id: string) {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `/specimen/${id}`,
    };
    const response = await request(options);
    return response;
  }

  public async updateSpecimen(id: string, data: NewSpecimenData) {
    const options: AxiosRequestConfig = {
      method: "PUT",
      url: `/specimen/${id}`,
      data,
    };
    const response = await request(options);
    return response;
  }

  public async deleteSpecimen(id: string) {
    const options: AxiosRequestConfig = {
      method: "DELETE",
      url: `/specimen/${id}`,
    };
    return request(options);
  }
}

export default new specimenService();
