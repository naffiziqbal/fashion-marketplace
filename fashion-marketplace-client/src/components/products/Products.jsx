import ProductCard from "./ProductCard";
import { useGetAllProductsQuery } from "../../redux/features/products/apis/productApi";
import Loading from "../ui/loading/Loading";
import { Link } from "react-router-dom";

const Products = () => {
  const { data, isLoading } = useGetAllProductsQuery(undefined);
  let content;


  if (isLoading) {
    content = <Loading />;
  }

  if (data) {
    content = data?.data?.slice(0, 10).map((data, idx) => (
      <ProductCard key={idx} product={data} />
    ));
  }
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5">
        {content}
      </div>
      <div className="w-full flex justify-center items-center mt-12">
        <button className="btn">
          <Link to={'/all-products'}>See more</Link>
        </button>
      </div>
    </div>
  );
};

export default Products;
