/* eslint-disable no-unused-vars */
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import style from "./header.module.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { Avatar, Menu, MenuItem } from "@mui/material";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Search from "../search/Search";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../../lib/firebase";
import logo from "../../../assets/logo.png"
import Swal from "sweetalert2";
import useUserInfoFormCookie from "../../../hooks/useUserInfoFormCookie";
import Cookies from "js-cookie";
import handleLogOut from "../../utils/handleLogOut";
import { setLoading } from "../../../redux/features/user/userSlice";
import useUserInfoFromDB from "../../../hooks/useUserInfoFromDB";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const refresh = () => window.location.reload(true)

  const user = useUserInfoFromDB()
  console.log(user)



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

  const logout = () => {
    handleLogOut()
    dispatch(setLoading(false))
    Swal.fire({
      title: 'Logged Out Successfull',
      icon: 'success',
      iconColor: 'red',
      timer: 1500
    })
    refresh()
  }


  useEffect(() => {
    // Close the menu when the route changes
    setIsOpen(false);
  }, [location]);

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
            ? "duration-700 flex flex-col absolute w-full top-8 bg z-50  h-screen ml-0"
            : "ml-[99rem] absolute lg:relative lg:ml-0 lg:flex flex-row  w-full justify-between items-center"
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
                    src={user?.userImg}
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
                        {!user?._id ?
                          <Link to={'/login'}>Login</Link>
                          : <button onClick={logout}>
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
