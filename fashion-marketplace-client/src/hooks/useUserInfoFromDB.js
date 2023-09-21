import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import handleLogOut from "../components/utils/handleLogOut";
import { useGetUserQuery } from "../redux/features/user/userApis";
import { useDispatch } from "react-redux";
import { setLoading } from "../redux/features/user/userSlice";

const useUserInfoFromDB = () => {
  const id = Cookies.get("uid");
  const data = useGetUserQuery(id);
  const user = data?.data?.data;

  return user;
};

export default useUserInfoFromDB;
