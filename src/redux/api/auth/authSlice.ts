import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: "",
    name: "",
    role: "",
    accessToken: "",
    id: "",
    photoUrl: "",
    status: "",
    createdWorkspaces: [],
    workspaceMembers: [
      {
        id: "",
        workspaceId: "",
        userId: "",
        role: "",
        workspace: {
          id: "",
          name: "",
          createdById: "",
        },
      },
    ],
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    storeUserInfo: (state, action) => {
      state.user = action.payload;
    },
    emptyUserInfo: (state) => {
      state.user = initialState.user;
    },
  },
});

export const { storeUserInfo, emptyUserInfo } = authSlice.actions;
export default authSlice.reducer;
