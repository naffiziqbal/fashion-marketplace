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
                                closeModal()
                            }
                        }).catch(err => err.message)
                }
            }).catch(err => console.log(err.message))


    }
    return (
        <div className="min-h-screen flex flex-col items-center">
            <div>
                <h3 className="text-center text-4xl my-12">Become a Creator Now</h3>
                <button className="btn" onClick={openModel}>Create Product</button>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illum facilis esse deleniti sed modi eos natus animi placeat harum enim cum quo, a eum expedita commodi accusamus omnis dignissimos pariatur qui accusantium nulla quibusdam odit odio. Ut nesciunt rem sapiente at saepe quis, itaque ipsum? Provident quis aut aperiam sequi. Quasi asperiores maiores a voluptates tenetur quaerat autem facilis. Inventore ut, veritatis iure consequuntur distinctio culpa quo eligendi ducimus neque deleniti nulla quod accusantium facere aspernatur soluta odio numquam suscipit pariatur. Iste alias deserunt fugit ipsum labore sed expedita excepturi et aliquid consectetur minima laudantium assumenda in quidem atque eligendi veritatis ullam, ab id corporis? Veniam explicabo laboriosam soluta vero itaque non porro. Tempore doloremque facere sapiente animi esse architecto magnam rem. Pariatur, voluptatum dicta! Iste cupiditate fuga illum esse similique fugit blanditiis eos optio praesentium quibusdam quod eveniet quaerat, magnam quasi eum. Quae fugit assumenda fugiat repellendus explicabo eos quo quisquam distinctio placeat, ducimus blanditiis harum amet nulla, voluptate totam ex cumque dolorum corporis modi quasi dolores quod aliquam. Ratione vel deleniti vitae natus fuga, dolorem dolor labore eligendi ipsum beatae officia numquam delectus voluptatibus ducimus totam nemo ipsam aliquid praesentium odit, quos consectetur, eius debitis. Dicta, enim!</p>
            </div>
            <div className="absolute">
                <CreateProductModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    );
};

export default CreateProduct;
