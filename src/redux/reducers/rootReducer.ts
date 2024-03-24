import authSlice from "../api/auth/authSlice";
import { baseApi } from "../api/baseApi";
import workspaceSlice from "../api/workspace/workspaceSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  auth: authSlice,
  worksapce: workspaceSlice,
};
