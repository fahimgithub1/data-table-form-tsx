import { ServicesApi } from "./api/services";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    [ServicesApi.reducerPath]: ServicesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ServicesApi.middleware),
});

export default store;