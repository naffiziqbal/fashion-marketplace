import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <div className="min-h-screen">
            {isAuthenticated ? (
                <div >
                    <img className="w-52" src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            ) : <> No User Found</>}

        </div>
    )
};

export default Profile;
