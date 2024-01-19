import styled from "styled-components";
import "./header.css";
import { NavLink } from "react-router-dom";
// import {MenuIcon} from '@mui/icons-material';
import { IoMenu } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { GiBearFace } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { animate, motion } from "framer-motion";
import { useState } from "react";

// const toggleClick = () =>{
//     style.top='0%';
// }

const Header = () => {
  // const [isClicked, setIsClicked] = useState();

  // const handleClick = () => {
  //   setIsClicked(!isClicked);
  //   console.log("clicked");
  // };
  // const styleElement = {
  //   top: "7px",
  //   right: "2px",
  // };

  // const closeMenu = {
  //   display: "none",
  // };

  return (
    <section className="main-element">
      <nav className="nav-header">
        <div className="search-item">
          <input type="text" className="search-input" placeholder="Sök" />
          <IoSearchOutline className="search-icon" />
        </div>
        <NavLink to={"/"}>
          <p>home</p>
        </NavLink>

        <NavLink to={"/product"}>
          <div className="desktop-item"> SHOP </div>
        </NavLink>

        <NavLink to={"/admin"}>
          <div className="desktop-item"> LOG IN </div>
        </NavLink>

        {/* <div id="menu-all">
            <IoMenu
              className="hamburger-menu"

            />
            <IoClose className="close-menu"  />
          </div> */}

        {/* <div className="mobile-version mobil-container" >
          <ul

            className="overlay-items"
          >
            <li>shop</li>
            <li>sort</li>
            <li>log in</li>
          </ul>
          <div id="overlay-header"></div>
        </div> */}
      </nav>
    </section>
  );
};

export default Header;
