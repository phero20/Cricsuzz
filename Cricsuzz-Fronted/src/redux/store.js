import { configureStore } from "@reduxjs/toolkit";
import apiFetch from "./features/apiFetch/apiFetch";
import images from "./features/apiFetch/images";

export const store = configureStore({
  reducer: {
    matches: apiFetch,
    images: images,
  },
});
