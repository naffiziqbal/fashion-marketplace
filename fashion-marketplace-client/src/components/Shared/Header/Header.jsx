/* eslint-disable no-unused-vars */
import { Link, useLocation } from "react-router-dom";
import style from "./header.module.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { Avatar, Menu, MenuItem } from "@mui/material";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Search from "../search/Search";
import { useSelector } from "react-redux";
import useUserInfo from "../../../hooks/useUserInfo";
import { signOut } from "firebase/auth";
import { auth } from "../../../lib/firebase";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const { uid } = useUserInfo()


  const handleMenuOpen = (isOpen) => {
    setIsOpen(!isOpen);
  };

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        alert("logged Out")
      })
  }


  return (
    <div className="flex w-full py-5">
      <div className="w-full lg:w-auto  flex justify-between mx-6">
        <button className="font-bold text-3xl text-primary">
          <Link to={`/`}>FashionHouse</Link>
        </button>
        <div
          className="z-50 block lg:hidden"
          onClick={() => handleMenuOpen(isOpen)}
        >
          {isOpen === true ? <CloseSharpIcon /> : <MenuIcon />}
        </div>
      </div>
      <div
        className={`${isOpen === true
          ? "flex flex-col absolute w-full top-24 bg  duration-300 h-full"
          : "hidden lg:flex flex-row  w-full justify-between items-center"
          } `}
      >
        <div className=" flex flex-col md: lg:flex-row gap-4 justify-between  mt-5 mx-16 lg:items-center">
          <Search />
          <nav className="">
            <ul className="flex flex-col lg:flex-row gap-4 py-5 md:py-0">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Explore</Link>
              </li>
              <li>
                <Link to={'/create-product'}>Create Products</Link>
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
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    alt="Remy Sharp"
                    src={user?.picture}
                    sx={{ width: 32, height: 32, background: "#744b32" }}
                  />
                  <div>

                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={handleClose}>
                        <Link to={'/user-profile'}>
                          Profile
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>My account</MenuItem>
                      <MenuItem onClick={handleClose}>
                        {!uid ?
                          <Link to={'/login'}>Login</Link>
                          : <button onClick={handleLogOut}>
                            Log Out
                          </button>
                        }

                      </MenuItem>

                    </Menu>
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div >
  );
};

export default Header;
