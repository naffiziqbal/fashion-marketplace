
import { Navigate, useLocation } from 'react-router-dom';
import { useGetUserQuery } from '../../redux/features/user/userApis';
import { useSelector } from 'react-redux';
import Loading from '../../components/ui/loading/Loading'
import Cookies from 'js-cookie';


// eslint-disable-next-line react/prop-types
const ProtectedRoutes = ({ children }) => {
    const location = useLocation()


    const { userInfo, isLoading } = useSelector(state => state.user)

    console.log(userInfo, isLoading)

    if (isLoading) {
        <Loading />
    }
    const userData = Cookies.get('user')

    if (userData) {
        return children
    }
    return <Navigate to={'/login'} state={{ from: location }} replace />


};

export default ProtectedRoutes;
