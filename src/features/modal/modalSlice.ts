import { createSlice } from "@reduxjs/toolkit";

export interface ImagesState {
  open: Boolean;
}

const initialState: ImagesState = {
  open: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open: (state) => {
      state.open = true;
    },
    close: (state) => {
      state.open = false;
    },
  },
});

export const { open, close } = modalSlice.actions;

export default modalSlice.reducer;
