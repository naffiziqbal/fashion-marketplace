import { useState } from "react";
import CreateProductModal from "../components/CustomModal/CreateProductModal";
import { useAuth0 } from "@auth0/auth0-react";

const CreateProduct = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModel = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false)

    const { user } = useAuth0()
    const userName = user?.email.slice(0, 7).replace(/\./g, '')
    const handleSubmit = (data, reset) => {

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
                console.log(imgData)
                if (imgData.success) {
                    const product = {
                        name: data.PName,
                        image: imgData.data.url,
                        description: data.description,
                        price: data.price,
                        creator_name: user ? userName : data.creator_Name
                    }
                    console.log(product)

                    fetch(`http://localhost:5000/api/v1/product/create-product`, {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(product),
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data !== "Failed") {
                                alert('Product Created')
                                reset()
                            }
                        }).catch(err => err.message)
                }
            }).catch(err => console.log(err.message))


    }
    return (
        <div className="min-h-screen flex flex-col items-center">
            <div><h3>Become a Creator</h3>
                <button className="btn" onClick={openModel}>Create Product</button>
                <CreateProductModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    onSubmit={handleSubmit}
                /></div>
        </div>
    );
};

export default CreateProduct;
