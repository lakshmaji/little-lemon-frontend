import React from "react";
import lemonLogo from "./../../assets/Logo.svg";
import Nav from "./Nav";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src={lemonLogo} alt="Little Lemon" />
      <Nav />
    </header>
  );
};

export default Header;
