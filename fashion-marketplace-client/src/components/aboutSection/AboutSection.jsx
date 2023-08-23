import aboutImg from "../../assets/images/Rectangle 31.png";
import ShowMoreBtn from "../ui/buttons/ShowMoreBtn";

const AboutSection = () => {
  return (
    <div className="mx-6">
      {/* ---------------------------------------------------------- */}
      {/* Heading */}
      {/* ---------------------------------------------------------- */}
      <div className="flex justify-center  items-center my-6">
        <div className="text-center">
          <h2 className="text-[40px] font-bold">About Us</h2>
          <p className=" text-center text-xl text-[#ffffff75]">
            Lorem, ipsum dolor sit amet <br /> consectetur adipisicing elit.
            Voluptatibus
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row md:flex-row flex-col gap-5 justify-start my-16">
        {/* Img ----------- */}
        <div className="lg:w-1/2 ">
          <figure>
            <img className="" src={aboutImg} alt="" />
          </figure>
        </div>

        {/* About Section Texts  */}
        <div className="lg:w-1/2 md:w-1/2">
          <h2 className="text-4xl font-bold my-5">Fashion That Speaks</h2>
          <p className="text-[#95929F] text-xl font-[400]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            perferendis voluptatibus similique sit fugiat harum doloribus odio
            sunt nemo, necessitatibus facilis quos eveniet iure non quaerat
            quae, qui iusto maxime aperiam minus? Ullam non eum ducimus. Iure
            omnis nesciunt recusandae enim nobis unde dolore laboriosam dolorum
            labore, eos vero ad.{" "}
          </p>
          <div className="my-16">
            <ShowMoreBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
