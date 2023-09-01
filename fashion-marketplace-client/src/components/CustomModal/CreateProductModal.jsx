import { useAuth0 } from "@auth0/auth0-react";
import { useForm } from "react-hook-form";
import { json } from "react-router-dom";

const CreateProductModal = ({ isOpen, onClose, onSubmit }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const { user } = useAuth0()
    const userName = user?.email.slice(0, 7).replace(/\./g, '')
    console.log(name)
    const handleFormSubmit = (data) => {
        onSubmit(data, reset)
        onClose()
    }
    if (!isOpen) return null
    return (
        <div className="custom-modal  rounded-xl min-w-[30rem] bg-white text-black shadow-2xl mt-12 h-full">
            <div className="m-4 flex flex-col">
                <h2 className="py-6 font-extrabold text-2xl text-center">Enter Product Details</h2>
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


                />
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
                <div className="modal-buttons">
                    <button onClick={handleSubmit(handleFormSubmit)}>Submit</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>

        </div>
    );
};

export default CreateProductModal;
