import { createSlice } from "@reduxjs/toolkit";

export interface SelectedImages {
  selectedImages: Array<string>;
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
      if (currentlySelectedImages.includes(payload)) {
        console.log("inc");
        state.selectedImages = state.selectedImages.filter(
          (image) => image !== payload
        );
      } else {
        state.selectedImages = [...state.selectedImages, payload];
      }
    },
  },
});

export const { addImageToSelected } = selectedImagesSlice.actions;

export default selectedImagesSlice.reducer;
