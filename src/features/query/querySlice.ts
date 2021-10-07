import { createSlice } from "@reduxjs/toolkit";

export interface QueryState {
  value: string;
}

const initialState: QueryState = {
  value: "",
};

export const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    setQuery: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { setQuery } = querySlice.actions;

export default querySlice.reducer;
