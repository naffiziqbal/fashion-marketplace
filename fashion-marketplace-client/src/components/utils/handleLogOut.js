import Cookies from "js-cookie";

const handleLogOut = () => {
  Cookies.remove("profile");
  Cookies.remove("uid");
  Cookies.remove("accessToken");
  Cookies.remove("name");
};

export default handleLogOut;
