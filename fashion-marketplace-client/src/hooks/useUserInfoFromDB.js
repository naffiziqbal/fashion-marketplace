import { useGetUserQuery } from "../redux/features/user/userApis";

const useUserInfoFromDB = () => {

  const { data } = useGetUserQuery(undefined);
  const user = data?.data;
  return user;
};

export default useUserInfoFromDB;
