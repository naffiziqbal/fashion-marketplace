import { useState } from "react";
import useUserInfo from "../../../hooks/useUserInfo";
import { useGetAllProductsByUserQuery } from "../../../redux/features/products/apis/productApi";

const Products = () => {
    const [selectedItem, setSelectedItem] = useState(false)
    const [selectAll, setSelectAll] = useState(false)

    const { displayName } = useUserInfo()
    const { data } = useGetAllProductsByUserQuery(displayName)


    const handleChecked = (e) => {
        setSelectedItem(e.target.checked)


    }
    const handleSelectAll = (e) => {
        setSelectAll(e.target.checked)

    }

    return (
        <div className="h-full overflow-auto w-full">

            <table className="min-w-full overflow-clip border">
                <thead className='border '>
                    <tr className=''>
                        <th>
                            <input type="checkbox" className="w-12" onChange={handleSelectAll} />
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider border  text-white">
                            ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider border">
                            Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider border">
                            Price
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                            Preview
                        </th>
                    </tr>
                </thead>
                <tbody className='border'>

                    {
                        data?.data?.map(product => <tr key={product?._id} className='border'>
                            <td className="">
                                <input className="w-12" type="checkbox"
                                    checked={selectAll === true ? true : undefined}
                                    onChange={handleChecked}
                                />


                            </td>
                            <td className="px-6 py-4 whitespace-nowrap border">
                                {product?._id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap border">{product?.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap border">{product?.price}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <img
                                    src={product?.image}
                                    alt={product?.name}
                                    className="h-10 w-10 object-cover rounded-full"
                                />
                            </td>
                        </tr>)
                    }

                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td>Items Selected</td>
                        <td><button>Delete</button></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Products;
