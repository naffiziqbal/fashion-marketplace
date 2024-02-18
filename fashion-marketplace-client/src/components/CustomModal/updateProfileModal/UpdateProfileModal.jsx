/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useAuth0 } from "@auth0/auth0-react";
import { useForm } from "react-hook-form";
import style from "./UpdateProductModal.module.css";
import { useEffect, useState } from "react";

const UpdateProfileModal = ({ isOpen, onClose, onSubmit }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [selectedImage, setSelectedImage] = useState(null);


    // Submit Form Data
    const handleFormSubmit = (data) => {
        onSubmit(data, reset)
    }
    if (!isOpen) return null

    //Show Image in Input Field
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedImage(e.target.result);
            };
            reader.readAsDataURL(file);
        } else {
            setSelectedImage(null);
        }
    };

    return (
        <div className={style}>
            <div className="rounded-xl w-full max-w-[30rem]  bg g-[#c2c2c2c5] text-white shadow-2xl  z-50">
                <div className="m-4 flex flex-col">
                    <h2 className="py-6 font-extrabold text-2xl text-center ">Update Profile</h2>

                    <input
                        type="text"
                        placeholder="First Name"
                        {...register('FName')}
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        {...register('LName')}
                    />
                    <input
                        type="file"
                        placeholder="Update Profile"
                        {...register('image')}
                        onChange={handleImageChange}
                        className="image-upload"
                    />
                    {selectedImage && (
                        <img
                            id="image-preview"
                            src={selectedImage}
                            alt="Image Preview"
                        />
                    )}

                    <div className="flex justify-between mt-5">
                        <button className="btn text-white" onClick={handleSubmit(handleFormSubmit)}>Submit</button>
                        <button className="btn__ghost border " onClick={onClose}>Cancel</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UpdateProfileModal;
