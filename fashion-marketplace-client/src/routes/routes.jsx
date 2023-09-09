import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
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
        path: '/create-product',
        element: <CreateProduct />
      },
    ],

  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: '/',
    element:
      <App />,

    children: [
      {
        path: "/user-profile",
        element: <ProtectedRoutes>
          <Profile />
        </ProtectedRoutes>
      },
    ]
  }

]);

export default router;
