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
  },
});

export const { storeUserInfo } = authSlice.actions;
export default authSlice.reducer;
