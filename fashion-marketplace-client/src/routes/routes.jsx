import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import ProtectedRoutes from "./routerComponent/ProtectedRoutes";
import CreateProduct from "../pages/CreateProduct";
// import ProtectedRoutes from "./protectedRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user-profile",
        element: <ProtectedRoutes>
          <Profile />
        </ProtectedRoutes>
      },{
        path : '/create-product',
        element : <CreateProduct/>
      }
    ],

  },
  {
    path: "/signup",
    element: <Signup />
  },


]);

export default router;
