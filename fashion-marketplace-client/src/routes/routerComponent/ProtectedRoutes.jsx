import { Navigate, useLocation } from 'react-router-dom';
import useUserInfoFromDB from '../../hooks/useUserInfoFromDB';
import Loading from '../../components/ui/loading/Loading';
// eslint-disable-next-line react/prop-types
const ProtectedRoutes = ({ children }) => {
    const location = useLocation()
    const user = useUserInfoFromDB()

    if (!user) {
        return <Loading />
    }

    if (user) {
        return children
    }
    return <Navigate to={'/login'} state={{ from: location }} replace />


};

export default ProtectedRoutes;
