import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filter",
  initialState: { name: "", number: "" },
  reducers: {
    changeNameFilter: {
      reducer(state, action) {
        state.name = action.payload;
      },
    },
    changeNumberFilter: {
      reducer(state, action) {
        state.number = action.payload;
      },
    },
  },
});

export const { changeNameFilter, changeNumberFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
