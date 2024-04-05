import { baseApi } from "../baseApi";
import { storeUserInfo } from "./authSlice";

const AUTH_URL = "/auth";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        data,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(storeUserInfo(data?.data));
          // dispatch(storeWorkspaceInfo(data?.data));
        } catch (err) {
          console.log("Error from onQueryStarted", err);
        }
      },
    }),
    userRegiser: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/create`,
        method: "POST",
        data,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(storeUserInfo(data?.data));
        } catch (err) {
          console.log("Error from onQueryStarted", err);
        }
      },
    }),

    loadUser: builder.query({
      query: () => ({
        url: `${AUTH_URL}/me`,
        method: "GET",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data, "from load user");

          dispatch(storeUserInfo(data?.data));
        } catch (err) {
          console.log("Error from onQueryStarted", err);
        }
      },
    }),
  }),

  overrideExisting: true,
});

export const {
  useUserLoginMutation,
  useUserRegiserMutation,
  useLoadUserQuery,
} = authApi;
