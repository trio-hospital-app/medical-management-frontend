import { AxiosRequestConfig } from "axios";
import { request } from "../lib/api";

export interface NewClinicCentertData {
  center: string;
}

class clinicCenterService {
  public async addClinicCenter(data: NewClinicCentertData) {
    const options: AxiosRequestConfig = {
      method: "POST",
      url: "/clinic-center",
      data,
    };
    const response = await request(options);
    return response;
  }

  public async getClinicCenter() {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: "/clinic-centers",
    };
    const response = await request(options);
    return response;
  }

  public async getClinicCenterById(id: string) {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `/clinic-center/${id}`,
    };
    const response = await request(options);
    return response;
  }

  public async updateClinicCenter(id: string, data: NewClinicCentertData) {
    const options: AxiosRequestConfig = {
      method: "PUT",
      url: `/clinic-center/${id}`,
      data,
    };
    const response = await request(options);
    return response;
  }

  public async deleteClinicCenter(id: string) {
    const options: AxiosRequestConfig = {
      method: "DELETE",
      url: `/clinic-center/${id}`,
    };
    return request(options);
  }
}

export default new clinicCenterService();
