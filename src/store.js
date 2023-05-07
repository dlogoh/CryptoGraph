import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "./features/coinSlice";
import chartIntervalReducer from "./features/chartIntervalSlice";
import SidebarReducer from "./features/SidebarSlice";

export const store = configureStore({
  reducer: {
    coin: coinReducer,
    chartInterval: chartIntervalReducer,
    sidebar: SidebarReducer,
  },
});
