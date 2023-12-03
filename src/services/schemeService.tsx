import { AxiosRequestConfig } from "axios";
import { request } from "../lib/api";

export interface NewSchemeData {
  name: string;
  discrption: string;
  discount: number;
}

class schemeService {
  public async addScheme(data: NewSchemeData) {
    const options: AxiosRequestConfig = {
      method: "POST",
      url: "/scheme",
      data,
    };
    const response = await request(options);
    return response;
  }

  public async getScheme() {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: "/schemes",
    };
    const response = await request(options);
    return response;
  }

  public async getSchemeById(id: string) {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `/scheme/${id}`,
    };
    const response = await request(options);
    return response;
  }

  public async updateScheme(id: string, data: NewSchemeData) {
    const options: AxiosRequestConfig = {
      method: "PUT",
      url: `/scheme/${id}`,
      data,
    };
    const response = await request(options);
    return response;
  }

  public async deleteScheme(id: string) {
    const options: AxiosRequestConfig = {
      method: "DELETE",
      url: `/scheme/${id}`,
    };
    return request(options);
  }
}

export default new schemeService();
