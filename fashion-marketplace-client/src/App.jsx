
import { useSelector } from "react-redux";
import "./App.css";
import MainLayout from "./components/Shared/Layout/MainLayout";

import { useGetUserQuery } from "./redux/features/user/userApis";

// import { useAuth0 } from '@auth0/auth0-react';


function App() {

  const user = useSelector(state => state.user)
  console.log(user)
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
