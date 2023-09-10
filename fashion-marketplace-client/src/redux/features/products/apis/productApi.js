import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// eslint-disable-next-line no-unused-vars
const productionUrl = "https://fashion-market-zeta.vercel.app/api/v1/product";

// eslint-disable-next-line no-unused-vars
const developmentUrl = "http://localhost:5000/api/v1/product/";

export const productApis = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: ` ${developmentUrl}` }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `all-products`,
    }),
    getAllProductsByUser: builder.query({
      query: (query) => `filter-products?creator_name=${query}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetAllProductsByUserQuery } =
  productApis;
