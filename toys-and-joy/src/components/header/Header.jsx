import styled from "styled-components";
import "./header.css";
import { NavLink } from "react-router-dom";

import { IoSearchOutline } from "react-icons/io5";

// import { HomeIcon } from "@mui/icons-material/home";
import { HiHome } from "react-icons/hi";

const Header = () => {
  return (
    <section className="main-element">
      <nav className="nav-header">
        <div className="search-item">
          <input type="text" className="search-input" placeholder="Sök" />
          <IoSearchOutline className="search-icon" />
        </div>
        <NavLink to={"/"}>
          <HiHome className="btn-home"/>
        </NavLink>

        <NavLink to={"/product"}>
          <div className="shop" style={{textdecoration:"none"}}> Handla </div>
        </NavLink>

        <NavLink to={"/admin"}>
          <div className="login"> Logga in </div>
        </NavLink>
      </nav>
    </section>
  );
};

export default Header;
