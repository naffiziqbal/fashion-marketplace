import { Navigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
// eslint-disable-next-line react/prop-types
const ProtectedRoutes = ({ children }) => {
    const location = useLocation()
    const uid = Cookies.get('uid')

    if (uid) {
        return children
    }
    return <Navigate to={'/login'} state={{ from: location }} replace />


};

export default ProtectedRoutes;
