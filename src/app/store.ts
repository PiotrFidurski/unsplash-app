import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import imagesReducer from "../features/images/imagesSlice";
import queryReducer from "../features/query/querySlice";
import selectedImagesReducer from "../features/selectedImages/selectedImagesSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    query: queryReducer,
    images: imagesReducer,
    selectedImages: selectedImagesReducer,
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
