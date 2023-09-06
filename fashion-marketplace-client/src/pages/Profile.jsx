import { useSelector } from "react-redux";

const Profile = () => {
    // const { user, isAuthenticated, isLoading } = useAuth0();
    const { userInfo } = useSelector(state => state.user)
    console.log(userInfo)
    const { email, displayName, photoUrl } = userInfo

    // if (isLoading) {
    //     return <div>Loading ...</div>;
    // }

    return (
        <div className="min-h-screen">
            {userInfo ? (
                <div >
                    <img className="w-52" src={photoUrl} alt={displayName} />
                    <h2>{displayName}</h2>
                    <p>{email}</p>
                </div>
            ) : <> No User Found</>}

        </div>
    )
};

export default Profile;
