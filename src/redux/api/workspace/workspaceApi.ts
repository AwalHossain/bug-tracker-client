import { baseApi } from "../baseApi";
import { storeWorkspaceInfo } from "./workspaceSlice";

const URL = "/workspace";

export const workspaceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createWorkspace: builder.mutation({
      query: (data) => ({
        url: `${URL}/create`,
        method: "POST",
        data,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(storeWorkspaceInfo(data?.data));
        } catch (err) {
          console.log("Error from onQueryStarted", err);
        }
      },
    }),

    getAllWorkspaces: builder.query({
      query: () => ({
        url: `${URL}/get-all`,
        method: "GET",
      }),
    }),

    getOneWorkspace: builder.query({
      query: (id: string) => ({
        url: `${URL}/get-one/${id}`,
        method: "GET",
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useCreateWorkspaceMutation,
  useGetAllWorkspacesQuery,
  useGetOneWorkspaceQuery,
} = workspaceApi;
