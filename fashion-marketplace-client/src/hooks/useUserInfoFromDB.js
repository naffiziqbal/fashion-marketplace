import { useDispatch } from "react-redux";
import { useGetUserQuery } from "../redux/features/user/userApis";
import { setLoading } from "../redux/features/user/userSlice";

const useUserInfoFromDB = () => {

  const { data } = useGetUserQuery(undefined);
  const user = data?.data;
  return user;
};

export default useUserInfoFromDB;
