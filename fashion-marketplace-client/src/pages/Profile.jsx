import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import UpdateUserModal from "../components/CustomModal/updateProfileModal/updateProfileModal";
import { useSelector } from "react-redux";
import Loading from "../components/ui/loading/Loading";
import Cookies from 'js-cookie';
import { useUpdateUserMutation } from '../redux/features/user/userApis';
import useUserInfoFromDB from '../hooks/useUserInfoFromDB';

const Profile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModel = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false)

    const { isLoading } = useSelector(state => state.user)
    // const users = useUserInfoFormCookie()

    const id = Cookies.get('uid')
    const user = useUserInfoFromDB(id)

    const [updateUser, result] = useUpdateUserMutation(user?.uid)

    // Submitting the Modal Form To Update User
    const handleSubmit = (data) => {
        const FName = data.FName;
        const LName = data.LName;
        const displayName = FName + " " + LName;

        const imgData = data.image[0];
        (imgData)
        const formData = new FormData()
        formData.append('image', imgData)

        const imgBBHostKey = import.meta.env.VITE_APP_imgbb_host_key

        fetch(`https://api.imgbb.com/1/upload?key=${imgBBHostKey}`, {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    data = { displayName, photoURL: imgData.data.url }
                    Cookies.set('name', displayName)
                    Cookies.set('profile', imgData.data.url)
                    updateUser({ id: user?._id, data })
                    closeModal()
                }
            }).catch(err => alert(err.message))
    }

    // Open Modal On Click
    const handleModal = () => {
        openModel()
    }
    (isLoading)

    return (
        <div className="min-h-screen">
            {
                isLoading ? <Loading /> : <div>
                    {user?._id ?
                        <div>
                            <div className="flex flex-row  justify-evenly">
                                <div className=" h-auto">
                                    <div>
                                        <figure className=""> <img className="w-40 h-40 rounded-[50%]" src={user?.userImg} alt="user-photo" /></figure>
                                        <h3 className="my-12 text-3xl ">{user?.displayName}</h3>
                                    </div>
                                </div>
                                <button
                                    onClick={handleModal}
                                    className=""><EditIcon /></button>

                            </div>
                            <div className="flex justify-center items-center">
                                <UpdateUserModal
                                    isOpen={isModalOpen}
                                    onClose={closeModal}
                                    onSubmit={handleSubmit} />
                            </div>

                        </div>
                        : <div className="text-center">
                            NO DATA AVAILABLE
                        </div>
                    }
                </div>
            }

        </div>
    )
};

export default Profile;
