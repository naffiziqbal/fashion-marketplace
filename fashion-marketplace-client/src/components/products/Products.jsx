import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useGetAllProductsQuery } from "../../redux/features/products/apis/productApi";

const Products = () => {
  const { data, isError, isLoading } = useGetAllProductsQuery(undefined);
  console.log(data)
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5">
      {data?.data?.map((data, idx) => (
        <ProductCard key={idx} product={data} />
      ))}
    </div>
  );
};

export default Products;
