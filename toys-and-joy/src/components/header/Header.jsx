import styled from "styled-components";
import "./header.css";
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

  const [ isClicked , setIsClicked] = useState()

  const handleClick = () =>{
    setIsClicked(!isClicked)
    console.log('clicked');
  }
  const styleElement = {
    top : '7px',
    right: '2px'
  }
 
  const closeMenu ={
   display: 'none'
  }

  return (
    <section className="main-element">
      <nav className="nav-header">
        <div className="title-item">
          <div className="desktop-item"> SHOP </div>
          <div className="desktop-item"> SORT </div>
          <div className="desktop-item"> LOG IN </div>
          <div>
            <input type="text" className="search-input" />
            <IoSearchOutline className="search-icon" />
          </div>
          <div>
            <GiBearFace className="logo" />
          </div>
          <div id="menu-all">
            <IoMenu className="hamburger-menu" style={styleElement} onClick={handleClick}/>
            <IoClose className="close-menu" style={closeMenu} />
          </div>
        </div>
        <div className="mobile-version mobil-container" style={styleElement}>
          <ul 
          //  initial = {{opacity: 0}}
          //  animate = {{opacity:1}}
          // variants={styleElement}
          className="overlay-items" >
            <li>shop</li>
            <li>sort</li>
            <li>log in</li>
          </ul>
          <div id="overlay-header"></div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
