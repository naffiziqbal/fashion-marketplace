import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

// eslint-disable-next-line no-unused-vars
const productionUrl = `${import.meta.env.VITE_APP_PRODUCTION_PRODUCT_API}`;


// eslint-disable-next-line no-unused-vars
const developmentUrl = `${import.meta.env.VITE_APP_LOCAL_PRODUCT_API}`;

export const productApis = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: ` ${productionUrl}`,
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `all-products`,
    }),

    // Get Products Using Email
    getAllProductsByUser: builder.query({
      query: (query) => ({
        url: `/filter-products?author_email=${query}`,
        headers: {
          authorization: `Bearer ${Cookies.get("accessToken")}`,
        },
        validateStatus: (response, result) => {
          // if (response.status === 401 || response.status === 403) {
          //   handleLogOut();
          // }
          return result;
        },
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useGetAllProductsByUserQuery } =
  productApis;
