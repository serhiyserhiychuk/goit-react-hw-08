import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filter",
  initialState: { name: "" },
  reducers: {
    changeFilter: {
      reducer(state, action) {
        state.name = action.payload;
      },
    },
  },
});

export const selectNameFilter = (state) => state.filters.name;

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
