import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import style from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={`${style.footer} `}>
      <div className="lg:w-1/4 md:w-1/4 flex flex-col justify-center ">
        <h2 className="text-3xl text-[#6C5DD3] my-5 font-bold">
          Fashion House
        </h2>
        <p className=" lg:w-full md:w-full w-fit">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          laboriosam necessitatibus sit magni quam! Eius autem repellendus animi
          impedit ad.
        </p>
      </div>

      <div className="lg:w-1/4 md:w-1/4">
        <h3> About </h3>
        <ul>
          <li>Product</li>
          <li>Resource</li>
          <li>Term And Condition</li>
          <li>FAQ</li>
        </ul>
      </div>

      <div className="lg:w-1/4 md:w-1/4">
        <h3>Company</h3>
        <ul>
          <li>Our Team</li>
          <li>Features </li>
          <li>Partner With Us</li>
          <li>Privacy & Policy</li>
        </ul>
      </div>
      <div className="lg:w-1/4 md:w-1/4">
        <h3>Contact</h3>
        <p>+088 1882152429</p>
        <div className="my-6">
          <span>
            <YouTubeIcon />{" "}
          </span>
          <span>
            <InstagramIcon />
          </span>
          <span>
            <FacebookIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
