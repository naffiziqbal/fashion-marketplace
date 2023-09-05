import { configureStore } from "@reduxjs/toolkit";
import { productApis } from "./features/products/apis/productApi";
import userReducer from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    [productApis.reducerPath]: productApis.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApis.middleware),
});

export default store;
