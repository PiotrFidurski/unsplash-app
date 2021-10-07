import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import foldersReducer from "../features/folder/foldersSlice";
import imagesReducer from "../features/images/imagesSlice";
import modalReducer from "../features/modal/modalSlice";
import queryReducer from "../features/query/querySlice";
import selectedImagesReducer from "../features/selectedImages/selectedImagesSlice";

export const store = configureStore({
  reducer: {
    query: queryReducer,
    images: imagesReducer,
    selectedImages: selectedImagesReducer,
    modal: modalReducer,
    folders: foldersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
