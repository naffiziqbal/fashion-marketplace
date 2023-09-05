import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoading, setUser } from "../redux/features/user/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";

const useUserInfo = () => {
  const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setLoading(true));

    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        const email = user.email;
        const displayName = user.displayName;
        dispatch(setUser({ email, displayName }));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
        navigate("/login");
      }
      return setUserData(user);
    });

  }, [dispatch, navigate]);
  return userData;
};

export default useUserInfo;
