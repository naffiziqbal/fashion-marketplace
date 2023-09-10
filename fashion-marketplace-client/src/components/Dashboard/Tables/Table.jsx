
const Table = ({ product }) => {
    console.log(product)
    return (
        <tr>
            <td>{product?._id}</td>
            <td>{product.name}</td>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>
        </tr>
    );
};

export default Table;
