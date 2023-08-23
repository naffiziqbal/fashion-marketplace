import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [allProductsdata, setAllProductsData] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setAllProductsData(data));
  }, []);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5">
      {allProductsdata?.map((data, idx) => (
        <ProductCard key={idx} product={data} />
      ))}
    </div>
  );
};

export default Products;
