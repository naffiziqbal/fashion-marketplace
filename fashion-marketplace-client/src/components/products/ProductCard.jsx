import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import AddToCart from "../ui/cart/AddToCart";
const ProductCard = (product) => {
  const { image, name, creator_name, price } = product.product;

  const [wishlist, setWishLisht] = useState(false);

  // Add Data To Wishlist
  const handleWishLisht = (wishlist) => {
    setWishLisht(wishlist);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="p-5  transparent__bg rounded-xl  duration-500 bg-[#46464617] cursor-pointer">
        <figure className="  w-[20rem] h-[25rem]">
          <img className="w-fit " src={image} alt="" />
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
          <div className="flex justify-evenly items-center">
            {/* Wishlisht Button */}
            <div onClick={() => handleWishLisht(!wishlist)}>
              {wishlist === true ? (
                <FavoriteIcon sx={{ color: "red" }} />
              ) : (
                <FavoriteBorderIcon />
              )}
            </div>
            <AddToCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
