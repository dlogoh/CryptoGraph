import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chartInterval: "d1",
};

export const chartIntervalSlice = createSlice({
  name: "chartInterval",
  initialState,
  reducers: {
    setChartInterval: (state, action) => {
      state.chartInterval = action.payload;
    },
  },
});

export const { setChartInterval } = chartIntervalSlice.actions;

export default chartIntervalSlice.reducer;
