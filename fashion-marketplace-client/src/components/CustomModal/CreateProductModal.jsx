/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useAuth0 } from "@auth0/auth0-react";
import { useForm } from "react-hook-form";
import style from "./CreateProductModal.module.css";
import { useEffect, useState } from "react";

const CreateProductModal = ({ isOpen, onClose, onSubmit }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [selectedImage, setSelectedImage] = useState(null);

    const { user } = useAuth0()
    const userName = user?.email.slice(0, 7).replace(/\./g, '')

    const handleFormSubmit = (data) => {
        onSubmit(data, reset)
    }
    if (!isOpen) return null

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
            <div className=" rounded-xl w-full bg g-[#c2c2c2c5] text-white shadow-2xl  z-50">
                <div className="m-4 flex flex-col">
                    <h2 className="py-6 font-extrabold text-2xl text-center ">Enter Product Details</h2>

                    <input
                        type="text"
                        placeholder="Product Name"
                        {...register('PName')}
                    />
                    <input
                        type="number"
                        placeholder="Product Price"
                        {...register('price')}
                    />
                    <input
                        type="file"
                        placeholder="Product Image "
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
                    <textarea
                        placeholder="Product Description"
                        {...register('desription')}

                    />
                    <input
                        type="text"
                        placeholder="Author Name"
                        value={userName}
                        {...register("creator_Name")}
                    />
                    <div className="flex justify-around">
                        <button className="btn text-white" onClick={handleSubmit(handleFormSubmit)}>Submit</button>
                        <button className="btn__ghost border " onClick={onClose}>Cancel</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CreateProductModal;
