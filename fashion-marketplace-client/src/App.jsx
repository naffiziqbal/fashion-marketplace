
import { useDispatch } from "react-redux";
import "./App.css";
import MainLayout from "./components/Shared/Layout/MainLayout";
import UserLayout from "./components/Shared/Layout/userLayout/UserLayout";
import { useGetUserQuery } from "./redux/features/user/userApis";
import { setUser } from "./redux/features/user/userSlice";
// import { useAuth0 } from '@auth0/auth0-react';


function App() {
  return (
    <div
      style={{
        "backgroundImage": "linear-gradient(to right,#873d38,#181e41 )",
      }}
    >
      <MainLayout />
    </div>
  );
}

export default App;
