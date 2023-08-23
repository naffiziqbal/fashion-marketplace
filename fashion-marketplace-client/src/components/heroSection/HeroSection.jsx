import img from "../../assets/images/Rectangle 15.png";
import img2 from "../../assets/images/Rectangle 16.png";
import img3 from "../../assets/images/Rectangle 17.png";
import img4 from "../../assets/images/Rectangle 19.png";
import img5 from "../../assets/images/Rectangle 21.png";
import img6 from "../../assets/images/image 3.png";
import img7 from "../../assets/images/image 2.png";
import style from "./HeroSection.module.css";
import ExploreNow from "../ui/buttons/ExploreNow";
import CreateButton from "../ui/buttons/CreateButton";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row  my-12 gap-12">
      <div className=" ">
        <h2 className="font-bold lg:text-[60px] md:text-[40px] text-5xl mb-[15px] leading-[64px]">
          Clothes are the <br /> Spirit of Fashion
        </h2>
        <p className="lg:text-xl text-[#ffffff8c] w-1/2 mb-[35px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit.
        </p>
        {/* Button Groups */}
        <div className="flex lg:w-1/2 justify-evenly lg:justify-start gap-5">
          <ExploreNow />
          <CreateButton />
        </div>
        {/* --------------------------------- */}
        {/* --------------------------------- */}

        {/*  Statics */}
        <div className="flex justify-between mt-[50px] w-3/4 lg:mx-0 mx-auto">
          <div>
            <h4 className=" font-bold  lg:text-4xl md:text-2xl text-xl">
              100+
            </h4>
            <p className="text-[#ffffff8a] lg:text-xl">Bands</p>
          </div>
          <div>
            <h4 className="  font-bold lg:text-4xl md:text-2xl">200+</h4>
            <p className="text-[#ffffff8a] lg:text-xl">Fsahion Design</p>
          </div>
          <div>
            <h4 className="  font-bold lg:text-4xl md:text-2xl ">20+</h4>
            <p className="text-[#ffffff8a] lg:text-xl">Shows</p>
          </div>
        </div>
        {/* --------------------------------- */}
        {/* --------------------------------- */}
      </div>
      {/* Image Gallery */}
      <div className={style.gallery}>
        <div className={"grid grid-cols-3 gap-5 relative"}>
          <div className="flex flex-col gap-3">
            <img className="" src={img} alt="" />
            <img className="" src={img3} alt="" />
            <img
              className="bg-green-500 rounded-xl max-h-[160px]"
              src={img6}
              alt=""
            />
          </div>
          <div className="flex flex-col  gap-3">
            <img className="" src={img2} alt="" />
            <img className="" src={img4} alt="" />
            <img className="bg-blue-600 rounded-xl   " src={img7} alt="" />
          </div>
          <div className="relative">
            <img
              className="absolute top-1/2 -translate-y-1/2 "
              src={img5}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* --------------------------------- */}
      {/* --------------------------------- */}
    </div>
  );
};

export default HeroSection;
