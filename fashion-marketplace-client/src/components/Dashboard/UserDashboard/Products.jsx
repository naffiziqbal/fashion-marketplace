import useUserInfo from "../../../hooks/useUserInfo";
import { useGetAllProductsByUserQuery } from "../../../redux/features/products/apis/productApi";
import Table from "../Tables/Table";

const Products = () => {
    let content
    let tableHeading
    let tbody = []

    const { displayName } = useUserInfo()
    const { data } = useGetAllProductsByUserQuery(displayName)

    if (data?.data?.length) {
        data?.data?.map(product => content = product)
        tableHeading = Object?.keys(content)

    }

    // console.log(content, tableHeading)

    for (const key in content) {
        tbody.push(`${content[key]}`);
    }

    console.log(tbody)
    return (
        <div className="min-h-screen">
            <table className="border">
                <tr className="border">
                    {
                        tableHeading?.map((data, idx) => <th key={idx}>{data}</th>)
                    }
                </tr>
                <tr className="">
                    {
                        tbody?.map((data, idx) => <td className="border w-full" key={idx}>{data}</td>)
                    }
                </tr>
            </table>
        </div>
    );
};

export default Products;
