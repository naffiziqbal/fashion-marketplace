import Cookies from "js-cookie";

import { useGetUserQuery } from "../redux/features/user/userApis";

const useUserInfoFromDB = () => {
  const id = Cookies.get("uid");
  const data = useGetUserQuery(id);
  const user = data?.data?.data;

  return user;
};

export default useUserInfoFromDB;
