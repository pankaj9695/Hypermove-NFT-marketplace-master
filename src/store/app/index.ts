import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface App {
  chainId: number;
}

const initialAppState: App = {
  chainId: 137,
};

const appSlice = createSlice({
  name: "app",
  initialState: initialAppState,
  reducers: {
    setAppChainId(state, { payload }: PayloadAction<{ chainId: number }>) {
      state.chainId = payload.chainId;
      return state;
    },
  },
});

// reterive actions
export const { setAppChainId } = appSlice.actions;

export default appSlice.reducer;
