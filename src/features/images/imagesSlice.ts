import { createSlice } from "@reduxjs/toolkit";

interface UnsplashUrls {
  full: string;
  small: string;
  thumb: string;
}

export interface UnsplashImage {
  id: string;
  alt_description: string;
  description: string;
  urls: UnsplashUrls;
}

export interface ImagesState {
  images: Array<UnsplashImage>;
}

const initialState: ImagesState = {
  images: [],
};

export const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setImages: (state, { payload }) => {
      state.images = payload;
    },
  },
});

export const { setImages } = imagesSlice.actions;

export default imagesSlice.reducer;
