import { configureStore } from "@reduxjs/toolkit";
import { productApis } from "./features/products/apis/productApi";

const store = configureStore({
  reducer: {
    [productApis.reducerPath]: productApis.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApis.middleware),
});

export default store;
