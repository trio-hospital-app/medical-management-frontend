import { AxiosRequestConfig } from "axios";
import { request } from "../lib/api";

export interface NewPharmacyData {
  name: string;
  manufacturer: string;
  description: string;
  quantity: number;
  price: number;
  unit: string;
  form: string;
}

class pharmacyService {
  public async addPharmacy(data: NewPharmacyData) {
    const options: AxiosRequestConfig = {
      method: "POST",
      url: "/medication",
      data,
    };
    const response = await request(options);
    return response;
  }

  public async getPharmacy() {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: "/medications",
    };
    const response = await request(options);
    return response;
  }

  public async getPharmacyById(id: string) {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `/medication/${id}`,
    };
    const response = await request(options);
    return response;
  }

  public async updatePharmacy(id: string, data: NewPharmacyData) {
    const options: AxiosRequestConfig = {
      method: "PUT",
      url: `/medication/${id}`,
      data,
    };
    const response = await request(options);
    return response;
  }

  public async deletePharmacy(id: string) {
    const options: AxiosRequestConfig = {
      method: "DELETE",
      url: `/medication/${id}`,
    };
    return request(options);
  }
}

export default new pharmacyService();
