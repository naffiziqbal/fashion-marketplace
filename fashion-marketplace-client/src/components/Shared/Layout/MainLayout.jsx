import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const MainLayout = () => {
  return (
    <div className="max-w-[1443px] mx-auto text-white ">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
