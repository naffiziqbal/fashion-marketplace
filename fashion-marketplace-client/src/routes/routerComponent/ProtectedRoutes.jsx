import Loading from '../../components/ui/loading/Loading';
import { Navigate, useLocation } from 'react-router-dom';
import { useState } from 'react';


// eslint-disable-next-line react/prop-types
const ProtectedRoutes = ({ children }) => {

    const location = useLocation()
    // const { isAuthenticated, isLoading } = useAuth0()
    const state = useState(state => state)
    console.log(state)

    // if (isLoading) {
    //     return <Loading />
    // }

    const user = true
    if (user) {
        return children
    }

    return <Navigate to={'/'} state={{ from: location }} replace />
};

export default ProtectedRoutes;
