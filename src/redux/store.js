import { configureStore } from "@reduxjs/toolkit";

import dataSliceReducer from "./features/dataSlice";

export const store = configureStore({
  reducer: {
    dataSlice: dataSliceReducer,
  },
});
