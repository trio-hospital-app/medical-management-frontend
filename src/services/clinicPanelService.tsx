import { AxiosRequestConfig } from "axios";
import { request } from "../lib/api";

export interface NewClinicPaneltData {
    panel: string;
    cost: number
}

class clinicPanelService {
  public async addClinicPanel(data: NewClinicPaneltData) {
    const options: AxiosRequestConfig = {
      method: "POST",
      url: "/clinic-panel",
      data,
    };
    const response = await request(options);
    return response;
  }

  public async getClinicPanel() {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: "/clinic-panels",
    };
    const response = await request(options);
    return response;
  }

  public async getClinicPanelById(id: string) {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `/clinic-panel/${id}`,
    };
    const response = await request(options);
    return response;
  }

  public async updateClinicPanel(id: string, data: NewClinicPaneltData) {
    const options: AxiosRequestConfig = {
      method: "PUT",
      url: `/clinic-panel/${id}`,
      data,
    };
    const response = await request(options);
    return response;
  }

  public async deleteClinicPanel(id: string) {
    const options: AxiosRequestConfig = {
      method: "DELETE",
      url: `/clinic-panel/${id}`,
    };
    return request(options);
  }
}

export default new clinicPanelService();
