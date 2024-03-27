import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: "",
    name: "",
    role: "",
    accessToken: "",
    id: "",
    pic: "",
    status: "",
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
