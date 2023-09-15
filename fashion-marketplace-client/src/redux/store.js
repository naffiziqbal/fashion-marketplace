import { configureStore } from "@reduxjs/toolkit";
import { productApis } from "./features/products/apis/productApi";
import userReducer from "./features/user/userSlice";
import { userApi } from "./features/user/userApis";

const store = configureStore({
  reducer: {
    user: userReducer,
    [productApis.reducerPath]: productApis.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApis.middleware, userApi.middleware),
});

export default store;
