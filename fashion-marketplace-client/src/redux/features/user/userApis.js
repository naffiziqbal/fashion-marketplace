import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_APP_PRODUCTION_USER_API}`,
    headers: {
      authorization: `Bearer ${Cookies.get("accessToken")}`,
    },
  }),
  tagTypes: ["POST"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => ({
        url: `profile/${id}`,
        headers: {
          authorization: `Bearer ${Cookies.get("accessToken")}`,
        },
      }),
      invalidatesTags: ["POST"],
    }),
    updateUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `update-user/${id}`,
        method: "POST",
        body: data,
      }),
      providesTags: ["POST"],
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = userApi;
