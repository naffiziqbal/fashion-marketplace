import Loading from '../../components/ui/loading/Loading';
import { Navigate, useLocation } from 'react-router-dom';
import useUserInfo from '../../hooks/useUserInfo';
import { useSelector } from 'react-redux';


// eslint-disable-next-line react/prop-types
const ProtectedRoutes = ({ children }) => {
    const user = useUserInfo()
    const { isLoading } = useSelector(state => state.user)
    const location = useLocation()
    // console.log(isLoading)
    // console.log(user)

    if (isLoading) {
        <Loading />
    }


    if (user !== null) {
        return children
    }
    console.log(user)

    // return <Navigate to={'/login'} />
    return <Navigate to={'/login'} state={{ from: location }} replace ></Navigate>
};

export default ProtectedRoutes;
