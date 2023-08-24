import ProductCard from "./ProductCard";
import { useGetAllProductsQuery } from "../../redux/features/products/apis/productApi";
import Loading from "../ui/loading/Loading";

const Products = () => {
  const { data, isLoading } = useGetAllProductsQuery(undefined);
  console.log(data);
  let content;

  if (isLoading) {
    content = <Loading />;
  }

  if (data) {
    content = data?.data?.map((data, idx) => (
      <ProductCard key={idx} product={data} />
    ));
  }
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5">
      {content}
    </div>
  );
};

export default Products;
