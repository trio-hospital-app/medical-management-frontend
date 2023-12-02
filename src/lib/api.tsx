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

// Function to handle navigation
const navigateToLogin = () => {
  // You can replace this with your actual logic for navigation
  window.location.href = "/login";
};

export const request = ({ headers, ...options }: AxiosRequestConfig) => {
  if (token) {
    headers = {
      ...headers,
      medopt: token,
    };
  }

  const onSuccess = (response: AxiosResponse) => {
    return response.data
  };

  const onError = (error: AxiosError) => {
    if (error.response) {
      const { status, data } = error.response;
  
      if (status === 401 || status === 403) {
        toast.error(
          `Client Error: ${status} - ${(data as { message?: string })?.message || "Error, try Again"}`
        );
        // Redirect to the login route for authentication
        navigateToLogin();
      } else if (status >= 400 && status < 500) {
        toast.error(
          `Client Error: ${status} - ${(data as { message?: string })?.message || "Error, try Again"}`
        );
      } else if (status >= 500) {
        toast.error(
          `Server Error: ${status} - ${(data as { message?: string })?.message || "Error, try Again"}`
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