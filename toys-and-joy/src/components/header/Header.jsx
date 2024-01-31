import styled from "styled-components";
import "./header.css";
import { NavLink } from "react-router-dom";


import { BsCart4 } from "react-icons/bs";

// import { HomeIcon } from "@mui/icons-material/home";
import { HiHome } from "react-icons/hi";

const Header = () => {
  return (
    <section className="main-element">
      <nav className="nav-header">
       
        <NavLink to={"/"}>
          <HiHome className="btn-home"/>
        </NavLink>

        <NavLink to={"/product"}>
          <div className="shop" style={{textdecoration:"none"}}> Handla </div>
        </NavLink>

        <NavLink to={"/admin"}>
          <div className="login"> Logga in </div>
        </NavLink>

        <NavLink to={"/cart"}>
          <BsCart4 className="cart-shop"/>
        </NavLink>

      </nav>
    </section>
  );
};

export default Header;
