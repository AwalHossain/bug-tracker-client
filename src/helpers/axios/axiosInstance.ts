import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
axiosInstance.defaults.headers["Accept"] = "application/json";
axiosInstance.defaults.timeout = 60000;

//  add a request interceptor

axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // config.withCredentials = "include";
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

  function (error) {
    console.log(error, "err from axiosInstance");
    if (error.response && error.response.data) {
      console.log(error.response.data, "from axiosInstance");

      // Reject the Promise with the error data
      return Promise.reject(error);
    } else {
      // handle other errors
      // Reject the Promise with the error data
      return Promise.reject({
        statusCode: 500,
        message: "Something went wrong",
      });
    }
  }
);

export default axiosInstance;
