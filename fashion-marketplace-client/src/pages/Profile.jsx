import useUserInfo from "../hooks/useUserInfo";
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import { updateProfile } from "firebase/auth";
import { auth } from "../lib/firebase";
import UpdateUserModal from "../components/CustomModal/updateProfileModal/updateProfileModal";

const Profile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModel = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false)

    const user = useUserInfo()
    const { uid, displayName, photoURL } = user


    // Submitting the Modal Form To Update User
    const handleSubmit = (data) => {
        const FName = data.FName;
        const LName = data.LName;
        const displayName = FName + " " + LName;

        const imgData = data.image[0];
        console.log(imgData)
        const formData = new FormData()
        formData.append('image', imgData)

        const imgBBHostKey = import.meta.env.VITE_APP_imgbb_host_key

        fetch(`https://api.imgbb.com/1/upload?key=${imgBBHostKey}`, {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData.data.url)
                if (imgData.success) {
                    updateProfile(auth.currentUser, { displayName: displayName, photoURL: imgData.data.url }).then(() => { })
                    closeModal()
                }
            }).catch(err => alert(err.message))
    }

    // Open Modal On Click
    const handleModal = () => {
        openModel()
    }
    return (
        <div className="min-h-screen">
            <div>
                <div className="flex flex-row  justify-evenly">
                    <div className=" h-auto">
                        {
                            uid &&
                            <div>
                                <figure className=""> <img className="w-40 h-40 rounded-[50%]" src={photoURL} alt="user-photo" /></figure>
                                <h3 className="my-12 text-3xl ">{displayName}</h3>
                            </div>
                        }
                    </div>
                    <button
                        onClick={handleModal}
                        className=""><EditIcon /></button>
                </div>
                {/* Update User  Modal  */}
                <div className="flex justify-center items-center">
                    <UpdateUserModal
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        onSubmit={handleSubmit} />
                </div>
            </div>

        </div>
    )
};

export default Profile;
