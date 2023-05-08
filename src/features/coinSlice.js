import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coin: "bitcoin",
  assets: [],
  favorites: [],
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
    addFavorite: (state, action) => {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (favorite) => favorite !== action.payload
      );
    },
  },
});

export const { setCoin, setAssets, addFavorite, removeFavorite } =
  coinSlice.actions;

export default coinSlice.reducer;
