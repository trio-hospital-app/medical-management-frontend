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

  public async makePayment(id) {
    const options: AxiosRequestConfig = {
      method: "PUT",
      url: `/pay/${id}`,
    };
    const response = await request(options);
    return response;
  }
}

export default new financeService();
