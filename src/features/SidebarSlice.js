import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stats: false,
  open: false,
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
  },
});

export const { setOpen, setStats } = SidebarSlice.actions;

export default SidebarSlice.reducer;
