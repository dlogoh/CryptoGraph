import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchedAsset: "",
};

export const searchSlice = createSlice({
  name: "searchAsset",
  initialState,
  reducers: {
    setSearchAsset: (state, action) => {
      state.searchedAsset = action.payload;
    },
  },
});

export const { setSearchAsset } = searchSlice.actions;

export default searchSlice.reducer;
