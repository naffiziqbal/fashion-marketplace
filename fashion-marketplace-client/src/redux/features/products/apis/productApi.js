import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// eslint-disable-next-line no-unused-vars
const productionUrl = "https://fashion-market-zeta.vercel.app/api/v1/product";

// eslint-disable-next-line no-unused-vars
const developmentUrl = "http://localhost:5000/";

export const productApis = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: ` ${productionUrl}` }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `all-products`,
    }),
  }),
});

export const { useGetAllProductsQuery } = productApis;
