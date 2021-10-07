import { createSlice } from "@reduxjs/toolkit";
import { UnsplashImage } from "../images/imagesSlice";

export interface Folder {
  name: string;
  images: Array<UnsplashImage>;
}

export interface FolderState {
  folders: Array<Folder>;
}

const initialState: FolderState = {
  folders: [],
};

export const foldersSlice = createSlice({
  name: "folders",
  initialState:
    (JSON.parse(localStorage.getItem("folders")!) as FolderState) ||
    initialState,
  reducers: {
    create: (state, { payload }) => {
      state.folders = [payload, ...state.folders];
    },
    remove: (state, { payload }) => {
      state.folders = state.folders.filter((folder) => folder.name !== payload);
      return state;
    },
    addImages: (state, { payload }) => {
      console.log(payload);
      const [selectedFolder] = state.folders.filter(
        (folder) => folder.name === payload.name
      );

      if (selectedFolder)
        selectedFolder.images = [...selectedFolder.images, ...payload.images];

      return state;
    },
  },
});

export const { create, remove, addImages } = foldersSlice.actions;

export default foldersSlice.reducer;
