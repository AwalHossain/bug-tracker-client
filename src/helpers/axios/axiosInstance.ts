import { authKey } from "@/constants/keyStorage";
import { getFromLocalStorage } from "@/utils/local-storage";
import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
axiosInstance.defaults.headers["Accept"] = "application/json";
axiosInstance.defaults.timeout = 60000;

//  add a request interceptor

axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // Do something before request is sent
    const accessToken = getFromLocalStorage(authKey);

    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },

  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    // Do something with response data
    if (response.data) {
      return {
        data: response.data,
      };
    } else {
      // if there is no data in the response, return the response

      return {
        statusCode: response.status,
        message: "Invalid response format",
      };
    }
  },

  async function (error) {
    const originalRequest = error.config;

    // Check if the error is due to an expired access token
    // if (
    //   error.response?.status === 401 &&
    //   error.response?.data?.message === "jwt expired" &&
    //   !originalRequest._retry
    // ) {
    //   originalRequest._retry = true;

    //   try {
    //     const { data } = await getNewAccesstoken();
    //     console.log("response from axiosins", data);

    //     if (data?.statusCode === 201) {
    //       const newAccessToken = data.data.accessToken;
    //       originalRequest.headers.Authorization = newAccessToken;
    //       setToLocalStorage("accessToken", newAccessToken);
    //       console.log("originalRequest", originalRequest);

    //       // Retry the request
    //       return axiosInstance(originalRequest);
    //     }
    //   } catch (err) {
    //     console.error("Failed to refresh access token: ", err);

    //     // If the refresh token is expired, redirect to login
    //     window.location.href = "/login";
    //     return Promise.reject(err);
    //   }
    // }

    // If the error response has data, reject the Promise with the error data
    if (error.response && error.response.data) {
      console.error("Error from server: ", error);
      return Promise.reject(error);
    }

    // For other errors, reject the Promise with a generic error message
    console.error("Something went wrong: ", error);
    return Promise.reject({
      statusCode: 500,
      message: "Something went wrong",
    });
  }
);

export default axiosInstance;
