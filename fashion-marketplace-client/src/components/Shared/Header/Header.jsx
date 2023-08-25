import { Link } from "react-router-dom";
import style from "./header.module.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { Avatar } from "@mui/material";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);


  const handleMenuOpen = (isOpen) => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className="flex justify-between w-full">
      <div className="w-full">
        <button className="font-bold text-3xl">
          <Link to={`/`}>Fashion House</Link>
        </button>
      </div>
      <div
        className={`${
          isOpen === true
            ? "flex flex-col absolute h-full w-full top-24 bg duration-300 mr-0"
            : "hidden md:flex flex-row  w-full justify-between"
        } `}
      >
        <div className=" flex flex-row justify-between flex-nowrap ">
          <label htmlFor="searchField">
            <input
              type="text"
              placeholder="Search Items"
              className="lg:min-w-[358px] min-h-[48px] w-full md:w-52  md:border border-b rounded-none md:rounded-3xl outline-none"
            />
          </label>
          <nav className="">
            <ul className="">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Explore</Link>
              </li>
              <li>
                <Link>Personal Collection</Link>
              </li>
              <li>
                <Link>Drops</Link>
              </li>
              <li className={style.nested__nav}>
                More
                <ul className={style.nested__nav_ul}>
                  <li>
                    <Link>Stats</Link>
                  </li>
                  <li>
                    <Link>Show</Link>
                  </li>
                  <li>
                    <Link>About Us</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link>
                  <NotificationsIcon />
                </Link>
              </li>
              <li>
                {" "}
                <Link>
                  <ChatBubbleIcon />
                </Link>
              </li>
              <li>
                {" "}
                <Link>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 32, height: 32, background: "#744b32" }}
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div
        className="z-50 block md:hidden"
        onClick={() => handleMenuOpen(isOpen)}
      >
        {isOpen === true ? <CloseSharpIcon /> : <MenuIcon />}
      </div>
    </div>
  );
};

export default Header;
