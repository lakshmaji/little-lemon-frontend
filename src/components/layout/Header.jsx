import React, { useState } from "react";
import lemonLogo from "./../../assets/Logo.svg";
import Nav from "./Nav";
import "./Header.css";
import iconHamburger from "../../assets/icon-hamburger-menu.svg";
import { NavLink } from "react-router";

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const toggleNavMenu = () => setShowMobileNav(!showMobileNav);
  const closeMenu = () => setShowMobileNav(false);
  return (
    <header>
      <NavLink to="/">
        <img src={lemonLogo} alt="Little Lemon" />
      </NavLink>
      <Nav showMobileNav={showMobileNav} closeMenu={closeMenu} />
      <button className="header__hamburger" onClick={toggleNavMenu}>
        <img src={iconHamburger} width={30} height={30} alt="hamburger" />
      </button>
    </header>
  );
};

export default Header;
