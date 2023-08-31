import "./App.css";
import MainLayout from "./components/Shared/Layout/MainLayout";
import { useAuth0 } from '@auth0/auth0-react';

function App() {


  const { getAccessTokenSilently, isAuthenticated, user, getAccessTokenWithPopup } = useAuth0();

  user && isAuthenticated ? getAccessTokenSilently() : getAccessTokenWithPopup()

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
