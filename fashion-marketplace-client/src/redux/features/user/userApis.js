import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import handleLogOut from "../../../components/utils/handleLogOut";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_APP_LOCALHOST_USER_API}`,
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
            handleLogOut();
          }
          return result;
        },
      }),
    }),
    updateUser: builder.mutation({
      query: ({ id,data }) => ({
        url: `/update-user/${id}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = userApi;
