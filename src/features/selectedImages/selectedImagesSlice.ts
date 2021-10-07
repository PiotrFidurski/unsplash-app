import { createSlice } from "@reduxjs/toolkit";
import { UnsplashImage } from "../images/imagesSlice";

export interface SelectedImages {
  selectedImages: Array<UnsplashImage>;
}

const initialState: SelectedImages = {
  selectedImages: [],
};

export const selectedImagesSlice = createSlice({
  name: "selectedImages",
  initialState,
  reducers: {
    addImageToSelected: (state, { payload }) => {
      const currentlySelectedImages = state.selectedImages;

      const isImageSelected = currentlySelectedImages.some(
        (image) => image.id === payload.id
      );

      if (isImageSelected) {
        state.selectedImages = currentlySelectedImages.filter(
          (image) => image.id !== payload.id
        );
        return state;
      }

      state.selectedImages = [...state.selectedImages, payload];
    },
    resetSelectedImages: (state) => {
      state.selectedImages = [];
    },
  },
});

export const { addImageToSelected, resetSelectedImages } =
  selectedImagesSlice.actions;

export default selectedImagesSlice.reducer;
