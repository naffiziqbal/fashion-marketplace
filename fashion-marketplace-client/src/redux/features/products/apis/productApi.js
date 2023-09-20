import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

// eslint-disable-next-line no-unused-vars
const productionUrl = "https://fashion-market-zeta.vercel.app/api/v1/product";

// eslint-disable-next-line no-unused-vars
const developmentUrl = "http://localhost:5000/api/v1/product/";

export const productApis = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: ` ${developmentUrl}`,
    headers: {
      authorization: `Bearer ${Cookies.get("accessToken")}`,
    },
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `all-products`,
    }),

    // Get Products Using Email
    getAllProductsByUser: builder.query({
      query: (query) => ({
        url: `filter-products?author_email=${query}`,
        validateStatus: (response, result) => {
          // if (response.status === 401 || response.status === 403) {
          //   handleLogOut();
          // }
          console.log(response, result);
          return result;
        },
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useGetAllProductsByUserQuery } =
  productApis;
