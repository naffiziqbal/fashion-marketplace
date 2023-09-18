import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const useUserInfoFormCookie = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const displayName = Cookies.get("name");
    const photoURL = Cookies.get("profile");
    const uid = Cookies.get("uid");
    const user = { displayName, uid, photoURL };
    setUser(user);
  }, []);
  return user;
};

export default useUserInfoFormCookie;
