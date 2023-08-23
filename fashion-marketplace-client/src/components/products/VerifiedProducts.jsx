import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [verifiedProducts, setverifiedProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setverifiedProducts(data));
  }, []);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5">
      {verifiedProducts?.map((product, idx) =>
        product.isVerified ? (
          <ProductCard product={product} key={idx} />
        ) : undefined
      )}
    </div>
  );
};

export default Products;
