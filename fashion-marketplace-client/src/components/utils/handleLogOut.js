import Cookies from "js-cookie";

const handleLogOut = () => {
  setTimeout(() => {
    Cookies.remove("profile");
    Cookies.remove("uid");
    Cookies.remove("accessToken");
    Cookies.remove("name");
  }, 3000);
};

export default handleLogOut;
