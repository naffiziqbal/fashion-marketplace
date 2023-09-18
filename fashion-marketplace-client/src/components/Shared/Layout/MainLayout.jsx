import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const MainLayout = () => {
  return (
    <div className="mx-5 text-white ">
      <Header />
      <div className="max-w-[1443px] mx-auto">
        <Outlet />
      <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
