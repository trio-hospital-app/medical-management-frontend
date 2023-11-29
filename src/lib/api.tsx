import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from "axios";
import { toast } from "react-toastify";
import { Cookies } from "react-cookie";
const cookies = new Cookies();
let access = "";
if (typeof window !== "undefined") {
  access = cookies.get("accessToken");
}

const client = axios.create({
  baseURL: "https://medopt-pilj.onrender.com/api/v1/",
});
const token = access;

export const request = ({ headers, ...options }: AxiosRequestConfig) => {
  if (token) {
    headers = {
      ...headers,
      medopt: token,
    };
  }

  const onSuccess = (response: AxiosResponse) => {
    return response;
  };

  const onError = (error: AxiosError) => {
    if (error.response) {
      const { status, data } = error.response;

      if (status >= 400 && status < 500) {
        toast.error(
          `Client Error: ${status} - ${data.message || "Unknown Error"}`
        );
      } else if (status >= 500) {
        toast.error(
          `Server Error: ${status} - ${data.message || "Unknown Error"}`
        );
      }
    } else if (error.request) {
      toast.error("Network Error: Unable to connect to the server");
    } else {
      toast.error("An Error Occurred: Please try again later");
    }
  };

  // Include headers in the request
  return client({ ...options, headers })
    .then(onSuccess)
    .catch(onError);
};
