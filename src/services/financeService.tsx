import { AxiosRequestConfig } from "axios";
import { request } from "../lib/api";

class financeService {
  public async getUserFinance(id) {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `/user/finances/${id}`,
    };
    const response = await request(options);
    return response;
  }

  public async getUserReciepts(id) {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: `/receipts/${id}`,
    };
    const response = await request(options);
    return response;
  }

  public async makePayment(id, data: { receipt: string; paymentType: string }) {
    const options: AxiosRequestConfig = {
      method: "PUT",
      url: `/pay/${id}`,
      data,
    };
    const response = await request(options);
    return response;
  }
}

export default new financeService();
