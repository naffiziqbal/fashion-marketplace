import ProductCard from "./ProductCard";
import { useGetAllProductsQuery } from "../../redux/features/products/apis/productApi";

const Products = () => {

  const {data} = useGetAllProductsQuery(undefined)

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5">
      {data?.data?.map((product, idx) =>
        product.isVerified ? (
          <ProductCard product={product} key={idx} />
        ) : undefined
      )}
    </div>
  );
};

export default Products;
