import { baseApi } from "../baseApi";

const URL = "/invitation";

export const invitationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createInvitation: builder.mutation({
      query: (data) => ({
        url: `${URL}/create`,
        method: "POST",
        data,
      }),
    }),

    checkInvitation: builder.query({
      query: (query: string) => ({
        url: `${URL}/check/${query}`,
        method: "GET",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(
            "Data from the onQueryStarted for check invitation",
            data
          );
        } catch (err) {
          console.log("Error from onQueryStarted", err);
        }
      },
    }),
  }),

  overrideExisting: true,
});

export const { useCreateInvitationMutation, useCheckInvitationQuery } =
  invitationApi;
