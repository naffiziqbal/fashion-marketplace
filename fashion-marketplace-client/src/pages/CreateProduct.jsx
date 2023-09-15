import { useState } from "react";
import CreateProductModal from "../components/CustomModal/createProductModal/CreateProductModal";
import img from '../assets/images/signupImg.png'

const CreateProduct = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModel = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false)

    const handleSubmit = (data, reset) => {
        console.log(data)

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
                        creator_name: user ? user?.displayName : data?.creator_Name,
                        author_email: user ? user?.email : data?.author_email
                    }

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
                                closeModal()
                            }
                        }).catch(err => alert(err.message))
                }
            }).catch(err => alert(err.message))


    }
    return (
        <div className="my-12">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <CreateProductModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    onSubmit={handleSubmit}
                />
            </div>
            <div>
                <h3 className="text-center text-4xl my-12">Become a Creator Now</h3>
                <div className="flex md:flex-row flex-col justify-between">
                    <div className=" md:w-1/2">
                        <button className="btn" onClick={openModel}>Create Product</button>
                        <h3 className="text-2xl my-6 "> Benefites Of Creating Products</h3>
                        <p className=" leading-6">
                            Creating a product is an exciting journey that comes with a multitude of rewards. Firstly, it offers the potential for financial gain, providing a sustainable income through sales, licensing, or royalties. <br /> It&apos;s a platform for creative expression, allowing you to bring your unique ideas to life and share your vision with the world. Moreover, product creation often stems from a desire to solve real-world problems, making people&apos;s lives easier or more enjoyable.<br /> <br />  Beyond financial rewards, this process fosters personal growth by challenging you to acquire new skills, overcome obstacles, and adapt to change, cultivating resilience and adaptability. It also involves elements of entrepreneurship, enabling you to build a business around your creation, make strategic decisions, and connect with a community of like-minded creators. <br /><br />Creating a product grants you full ownership and control, protecting your intellectual property rights and allowing you to leave a lasting legacy. Your product can reach a global audience, generating passive income and providing immense satisfaction and pride as you witness its impact on others. In summary, product creation offers not only financial opportunities but also a fulfilling and enriching journey that empowers you to make a difference in the world.
                        </p>
                    </div>
                    <div className="mt-12">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateProduct;
