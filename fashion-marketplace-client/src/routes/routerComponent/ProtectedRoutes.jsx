import Loading from '../../components/ui/loading/Loading';
import { Navigate } from 'react-router-dom';
import useUserInfo from '../../hooks/useUserInfo';
import { useSelector } from 'react-redux';


// eslint-disable-next-line react/prop-types
const ProtectedRoutes = ({ children }) => {
    const user = useUserInfo()
    const { isLoading } = useSelector(state => state.user)
    console.log(isLoading)
    console.log(user)

    if (isLoading) {
        <Loading />
    }


    if (user !== null) {
        return children
    }

    return <Navigate to={'/login'} />
};

export default ProtectedRoutes;
