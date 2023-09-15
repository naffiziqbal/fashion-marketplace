import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:5000/api/v1/user/`,
    headers: {
      authorization: `Bearer ${Cookies.get("token")}`,
    },
  }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: "profile",
        validateStatus: (res, result) => {
          if (res.status === 401) {
            localStorage.removeItem("accessToken");
          }
          return result;
        },
      }),
    }),
  }),
});

export const { useGetUserQuery } = userApi;
