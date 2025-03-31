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
    to: "/about",
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

const Nav = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav>
      <ul className="nav-items">
        {links.map((link) => {
          if (link.scrollTo) {
            return (
              <li key={link.id}>
                <a
                  href={link.scrollTo}
                  onClick={(e) => handleSmoothScroll(e, link.scrollTo)}
                  className="nav-item"
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
                className={`nav-item ${({ isActive }) =>
                  isActive ? "active" : ""}`}
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
