import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import ProtectedRoutes from "./routerComponent/ProtectedRoutes";
import CreateProduct from "../pages/CreateProduct";
import UserLayout from "../components/Shared/Layout/userLayout/UserLayout";
import Products from "../components/Dashboard/UserDashboard/Products";
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
        path: '/create-product',
        element: <CreateProduct />
      },
      {
        path: '/dashboard',
        element: <ProtectedRoutes>
          <UserLayout>
            <Profile />
          </UserLayout>
        </ProtectedRoutes>,
        children: [
          {
            path: '/dashboard/user-profile',
            element: <Profile />
          },
          {
            path: '/dashboard/my-products',
            element: <Products />
          }
        ]
      },
    ],

  },



  //  Out Side

  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/login",
    element: <Login />
  },

]);

export default router;
