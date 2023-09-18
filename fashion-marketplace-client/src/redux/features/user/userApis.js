import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:5000/api/v1/user/`,
    headers: {
      authorization: `Bearer ${Cookies.get("accessToken")}`,
    },
  }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: "profile",
        validateStatus: (res, result) => {
          if (res.status === 401 || res.status === 403) {
            Cookies.remove("user");
          }
          return result;
        },
      }),
    }),
    updateUser: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `update-user/${id}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = userApi;
