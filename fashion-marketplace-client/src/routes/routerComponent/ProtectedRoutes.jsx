import { useAuth0 } from '@auth0/auth0-react';
import Loading from '../../components/ui/loading/Loading';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {

    const location = useLocation()
    const { isAuthenticated, isLoading } = useAuth0()

    if (isLoading) {
        return <Loading />
    }

    if (isAuthenticated) {
        return children
    }

    return <Navigate to={'/'} state={{ from: location }} replace />
};

export default ProtectedRoutes;
