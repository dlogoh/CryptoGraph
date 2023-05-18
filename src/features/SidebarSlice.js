import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stats: false,
  open: false,
  sidebarClass: "close-sidebar",
  favoritesOpen: false,
};

export const SidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
      if (action.payload) {
        state.sidebarClass = "open-sidebar";
      } else {
        state.sidebarClass = "close-sidebar";
      }
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
