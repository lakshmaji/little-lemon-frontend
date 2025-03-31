import React from "react";
import { NavLink } from "react-router";
import "./Nav.css";

const links = [
  {
    id: 1,
    label: "Home",
    to: "/",
  },
  {
    id: 2,
    label: "About",
    to: "#about",
    scrollTo: "about",
  },
  {
    id: 3,
    label: "Menu",
    to: "#menu",
    scrollTo: "menu",
  },
  {
    id: 4,
    label: "Reservations",
    to: "/bookings",
  },
  {
    id: 5,
    label: "Order online",
    to: "/order-online",
  },
  {
    id: 6,
    label: "Login",
    to: "/login",
  },
];

const Nav = ({ showMobileNav, closeMenu }) => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      closeMenu();
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      closeMenu();
    }
  };

  return (
    <nav className={`${showMobileNav ? "mobile-on" : "mobile-off"}`}>
      <ul className="nav__items">
        {links.map((link) => {
          if (link.scrollTo) {
            return (
              <li key={link.id}>
                <a
                  href={link.scrollTo}
                  onClick={(e) => handleSmoothScroll(e, link.scrollTo)}
                  className="nav__item"
                  onKeyDown={onKeyDown}
                >
                  {link.label}
                </a>
              </li>
            );
          }
          return (
            <li key={link.id}>
              <NavLink
                to={link.to}
                className={`nav__item ${({ isActive }) =>
                  isActive ? "active" : ""}`}
                onClick={closeMenu}
                onKeyDown={onKeyDown}
              >
                {link.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
