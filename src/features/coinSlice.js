import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coin: "bitcoin",
  assets: [],
};

export const coinSlice = createSlice({
  name: "coin",
  initialState,
  reducers: {
    setCoin: (state, action) => {
      state.coin = action.payload;
    },
    setAssets: (state, action) => {
      state.assets = action.payload;
    },
  },
});

export const { setCoin, setAssets } = coinSlice.actions;

export default coinSlice.reducer;
