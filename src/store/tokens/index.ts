import { NftMatadata } from "@/types/nft";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NFTTokenData {
  seller: string;
  tokenId: number;
  price: number;
  quantity: number;
  uri: string;
  active: boolean;
  metadata: NftMatadata;
}
export interface Token {
  [tokenId: number]: NFTTokenData;
}

const initialAppState: { tokens: Token } = {
  tokens: {},
};

const tokensSlice = createSlice({
  name: "tokens",
  initialState: initialAppState,
  reducers: {
    setTokens(state, { payload }: PayloadAction<{ tokens: Token }>) {
      state.tokens = payload.tokens;
      return state;
    },
  },
});

// reterive actions
export const { setTokens } = tokensSlice.actions;

export default tokensSlice.reducer;
