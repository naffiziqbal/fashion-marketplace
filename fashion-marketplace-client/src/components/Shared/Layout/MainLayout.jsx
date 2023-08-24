import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-[1443px] mx-auto text-white ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
