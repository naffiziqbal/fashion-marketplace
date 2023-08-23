import SellIcon from "@mui/icons-material/Sell";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import nftLogo from "../../assets/images/pngwing.com (3).png";
const CollectionsInfo = () => {
  return (
    <div>
      <div className="text-center my-12">
        <h2 className="text-[2.5rem] font-bold lead">All Collections</h2>
        <p className="text-xl text-[#ffffff75]">
          Worlds First Layer 2 Fashion Marketplace
        </p>
      </div>
      <div className="flex lg:flex-row md:flex-row flex-col gap-5 justify-around items-center">
        <div className="flex flex-col justify-center items-center">
          <SellIcon
            fontSize="large"
            sx={{ color: "#b75cff", height: "auto", width: "5rem" }}
          />
          <p className="text-xl leading-[190%] font-semibold tracking-[0.4]">
            No Gas Fees
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <figure>
            <img className="max-w-[5rem]" src={nftLogo} alt="" />
          </figure>
          <p className="text-xl leading-[190%] font-semibold tracking-[0.4]">
            Carbon Nutral NFTs
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <CompareArrowsOutlinedIcon
            fontSize="large"
            sx={{ color: "#b75cff", height: "auto", width: "5rem" }}
          />
          <p className="text-xl leading-[190%] font-semibold tracking-[0.4]">
            Fast And Easy Transactions
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollectionsInfo;
