import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coin: "ethereum",
};

export const coinSlice = createSlice({
  name: "coin",
  initialState,
  reducers: {
    setCoin: (state, action) => {
      state.coin = action.payload;
    },
  },
});

export const { setCoin } = coinSlice.actions;

export default coinSlice.reducer;
