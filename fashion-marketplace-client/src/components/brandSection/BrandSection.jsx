import puma from "../../assets/images/brandImg/puma-logo-png-1.png";
import adidas from "../../assets/images/brandImg/Logo_Adidas.png";
import alocoste from "../../assets/images/brandImg/png-transparent-lacoste-brand-fifth-avenue-logo-lacoste-logo-fashion-business-desktop-wallpaper-thumbnail (1).png";
const BrandSection = () => {
  return (
    <div className="my-12 p-4">
      <div className="flex justify-evenly">
        <img className="w-[120px] mix-blend-darken" src={puma} alt="" />
        <img className="w-[120px] mix-blend-darken" src={adidas} alt="" />
        <img className="w-[120px] mix-blend-darken" src={alocoste} alt="" />
      </div>
    </div>
  );
};

export default BrandSection;
 