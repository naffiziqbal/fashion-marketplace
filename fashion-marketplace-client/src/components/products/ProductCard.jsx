import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
const ProductCard = (product) => {
  const { image, name, creator_name, price, isVerified } = product.product;
  console.log(isVerified);

  const [wishlist, setWishLisht] = useState(false);
  const handleWishLisht = (wishlist) => {
    setWishLisht(wishlist);
    console.log(wishlist);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="border p-3 transparent__bg rounded-xl  hover:border-primary hover:duration-500 bg-[#46464617]">
        <figure className=" w-fit ">
          <img className="lg:min-w-[300px]" src={image} alt="" />
        </figure>
        <div className="">
          <div className="flex flex-row justify-between my-4">
            <p className="text-[#ffffff75]">@{creator_name}</p>
            <div>
              <p className="text-xs text-[#ffffff75]">Current Bid</p>
              <p className="font-bold">{price}</p>
            </div>
          </div>
          <p className="my-3">{name}</p>
          <div className="flex justify-between items-center">
            {/* Wishlisht Button */}
            <div onClick={() => handleWishLisht(!wishlist)}>
              {wishlist === true ? (
                <FavoriteIcon sx={{ color: "red" }} />
              ) : (
                <FavoriteBorderIcon />
              )}
            </div>
            <button className="rounded-lg product__btn ">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
