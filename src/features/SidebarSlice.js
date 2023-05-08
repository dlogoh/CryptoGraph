import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stats: false,
  open: false,
  favoritesOpen: false,
};

export const SidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setStats: (state, action) => {
      state.stats = action.payload;
    },
    openFavorites: (state) => {
      state.favoritesOpen = true;
    },
    closeFavorites: (state) => {
      state.favoritesOpen = false;
    },
  },
});

export const { setOpen, setStats, openFavorites, closeFavorites } =
  SidebarSlice.actions;

export default SidebarSlice.reducer;
