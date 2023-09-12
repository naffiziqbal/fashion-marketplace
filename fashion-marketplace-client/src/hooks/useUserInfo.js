import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoading, setUser } from "../redux/features/user/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";

const useUserInfo = () => {
  const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      dispatch(setLoading(true));
      if (user !== null) {
        const email = user?.email;
        const displayName = user.displayName;
        dispatch(setUser({ email, displayName }));
        dispatch(setLoading(false));
      } else {
        dispatch(dispatch(setLoading(false)));
      }
      return setUserData(user);
    });
  }, [dispatch]);
  return userData;
};

export default useUserInfo;
