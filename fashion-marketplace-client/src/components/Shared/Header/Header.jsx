/* eslint-disable no-unused-vars */
import { Link, useLocation } from "react-router-dom";
import style from "./header.module.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { Avatar, Menu, MenuItem } from "@mui/material";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Search from "../search/Search";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../../lib/firebase";
import logo from "../../../assets/logo.png"
import Swal from "sweetalert2";
import useUserInfoFormCookie from "../../../hooks/useUserInfoFormCookie";
import Cookies from "js-cookie";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);


  const { userInfo, isLoading } = useSelector(state => state.user)
  const user = useUserInfoFormCookie()



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
    Cookies.remove("profile", "name", 'uid')
    Cookies.remove("name")
    Cookies.remove('uid')
    Cookies.remove('accessToken',)
  }


  return (
    <div className="bg  sticky top-0 z-50  w-full mx-auto">
      <div className="flex y-5  items-center justify-between">
        <div className="w-full lg:w-auto   flex justify-between items-center mx-6">
          <div className="flex items-center">
            <Link to={`/`}>
              <figure className=" w-52">
                <img src={logo} alt="" />
              </figure>
            </Link>
          </div>
          <div
            className="z-50 block lg:hidden"
            onClick={() => handleMenuOpen(isOpen)}
          >
            {isOpen === true ? <CloseSharpIcon /> : <MenuIcon />}
          </div>
        </div>
        <div
          className={`${isOpen === true
            ? "flex flex-col absolute w-full top-8 bg z-50  duration-300 h-screen"
            : "hidden lg:flex flex-row  w-full justify-between items-center"
            } `}
        >
          <div className=" flex flex-col md: lg:flex-row gap-4 justify-between w-full  mt-5 mx-16 lg:items-center ">
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
                  <Avatar
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    alt="Remy Sharp"
                    src={user?.photoURL}
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
                        <Link to={'/dashboard/user-profile'}>
                          Profile
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>My account</MenuItem>
                      <MenuItem onClick={handleClose}>
                        {!user?.uid ?
                          <Link to={'/login'}>Login</Link>
                          : <button onClick={handleLogOut}>
                            Log Out
                          </button>
                        }

                      </MenuItem>

                    </Menu>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Header;
