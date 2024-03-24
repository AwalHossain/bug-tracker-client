import { createSlice } from "@reduxjs/toolkit";

interface WorkspaceState {
  workspace: {
    workspaceName: string;
    id: string;
    createdById: string;
  };
}

const initialState: WorkspaceState = {
  workspace: {
    workspaceName: "",
    id: "",
    createdById: "",
  },
};

const workspaceSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    storeWorkspaceInfo: (state, action) => {
      state.workspace = { ...action.payload };
    },
  },
});

export const { storeWorkspaceInfo } = workspaceSlice.actions;
export default workspaceSlice.reducer;
