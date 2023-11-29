// user.service.ts
import { AxiosRequestConfig } from "axios";
import { request } from "../lib/api";

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  role: string[];
}

export interface LoginData {
  username: string;
  password: string;
}
export interface LoginResponse {
  token: string;
}

export interface UsersResponse {
  users: User[];
}

class UserService {
  public async register(user: User) {
    const options: AxiosRequestConfig = {
      method: "POST",
      url: "/register",
      data: user,
    };
    const response = await request(options);
    return response;
  }

  public async getUsers() {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: "/users",
    };
    const response = await request(options);
    return response;
  }

  public async deleteUser(id: string) {
    const options: AxiosRequestConfig = {
      method: "DELETE",
      url: `/user/${id}`,
    };
    return request(options);
  }
  public async login(data: LoginData): Promise<LoginResponse> {
    const options: AxiosRequestConfig = {
      method: "POST",
      url: "/login",
      data,
    };
    const response = await request(options);
    return response.data;
  }
}

export default new UserService();
