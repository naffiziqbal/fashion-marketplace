
import { Navigate, useLocation } from 'react-router-dom';
import { useGetUserQuery } from '../../redux/features/user/userApis';


// eslint-disable-next-line react/prop-types
const ProtectedRoutes = ({ children }) => {
    const location = useLocation()

    const { data } = useGetUserQuery(undefined)
    console.log(data?.data)
    if (data?.data) {
        return children
    }
    return <Navigate to={'/login'} state={{ from: location }} replace />


};

export default ProtectedRoutes;
