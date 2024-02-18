import ProductCard from "../../components/products/ProductCard";
import Loading from "../../components/ui/loading/Loading";
import { useGetAllProductsQuery } from "../../redux/features/products/apis/productApi";

const Allproducts = () => {
    const { data, isLoading } = useGetAllProductsQuery(undefined);
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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5 mt-12">
            {content}
        </div>
    );
};

export default Allproducts;
