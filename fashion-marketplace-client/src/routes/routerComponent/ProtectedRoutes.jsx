import { Navigate, useLocation } from 'react-router-dom';
import useUserInfoFromDB from '../../hooks/useUserInfoFromDB';
import Loading from '../../components/ui/loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import handleLogOut from '../../components/utils/handleLogOut';
import { setLoading } from '../../redux/features/user/userSlice';
// eslint-disable-next-line react/prop-types
const ProtectedRoutes = ({ children }) => {
    const location = useLocation()
    const user = useUserInfoFromDB()
    const dispatch = useDispatch()
    const { isLoading } = useSelector(state => state.user)

    if (user) {
        dispatch(setLoading(false))
        return children
    }

    if (isLoading) {
        return <Loading />
    }

    if (user === undefined) {
        handleLogOut()
    }

    return <Navigate to={'/login'} state={{ from: location }} replace />


};

export default ProtectedRoutes;
