/* eslint-disable no-dupe-else-if */
import axios from "axios";
import { toast } from "react-toastify";
import { Cookies } from "react-cookie";

const client = axios.create({
  baseURL: "https://medopt-pilj.onrender.com/api/v1/",
});

// Function to handle navigation
const navigateToLogin = () => {
  // You can replace this with your actual logic for navigation
  // window.location.href = "/login";
};

export const request = async (config) => {
  try {
    const cookies = new Cookies();
    let access = "";
    if (typeof window !== "undefined") {
      access = cookies.get("accessToken");
    }

    if (access) {
      config.headers = {
        ...config.headers,
        medopt: access ? access : "",
      };
    }

    const response = await client(config);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const { status, data } = error.response || {};

      if (status === 401 || status === 403) {
        toast.error(
          `Client Error: ${status} - ${
            (data as { message?: string })?.message || "Error, try Again"
          }`
        );

        // Redirect to the login route for authentication
        navigateToLogin();
      } else if (status >= 400 && status < 500) {
        toast.error(
          `Client Error: ${status} - ${
            (data as { message?: string })?.message || "Error, try Again"
          }`
        );
      } else if (status >= 500) {
        toast.error(
          `Server Error: ${status} - ${
            (data as { message?: string })?.message || "Error, try Again"
          }`
        );
      }
    } else if (axios.isAxiosError(error) && error.request) {
      toast.error("Network Error: Unable to connect to the server");
    } else {
      toast.error("An Error Occurred: Please try again later");
    }

    throw error; // Re-throw the error after handling
  }
};
