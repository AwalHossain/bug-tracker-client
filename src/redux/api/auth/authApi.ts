import { baseApi } from "../baseApi";

const AUTH_URL = "/auth";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (data) => {
        console.log("Data sent to the server: ", data);
        return {
          url: `${AUTH_URL}/login`,
          method: "POST",
          data,
        };
      },
    }),
    userRegiser: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/create`,
        method: "POST",
        data,
      }),
    }),
  }),
});

export const { useUserLoginMutation, useUserRegiserMutation } = authApi;
